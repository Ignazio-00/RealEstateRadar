import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import cloudinary from "@/config/cloudinary";
import { pages } from "next/dist/build/templates/app-page";

// GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const page = request.nextUrl.searchParams.get("page" || 1);
    const pageSize = request.nextUrl.searchParams.get("pageSize" || 3);

    const skip = (page - 1) * pageSize;

    const total = await Property.countDocuments({});
    const properties = await Property.find({}).skip(skip).limit(pageSize);

    const result = {
      total,
      properties,
    };

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred", { status: 500 });
  }
};

// POST /api/properties
export const POST = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID required", { status: 401 });
    }

    const { userId } = sessionUser;

    const formData = await request.formData();

    const amenities = formData.getAll("amenities");
    const images = formData
      .getAll("images")
      .filter((image) => image.name !== "");

    // Create propertyData object for database
    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
        nightly: formData.get("rates.nightly"),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
    };

    // Access the uploaded files from the form data
    const imageUploadPromises = [];

    for (const image of images) {
      // Assuming image is a File object, extract the file data
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // Convert the image data to base64
      const imageBase64 = imageData.toString("base64");

      // Upload the image data as a base64 string to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: "realestateradar",
        }
      );

      imageUploadPromises.push(result.secure_url);
    }

    // Wait for all image uploads to complete
    const uploadedImages = await Promise.all(imageUploadPromises);

    // Add the uploaded images to the propertyData object
    propertyData.images = uploadedImages;

    const newProperty = new Property(propertyData);
    await newProperty.save();

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    );

    // return new Response(JSON.stringify({ message: "Success " }), {
    //   status: 200,
    // });
  } catch (error) {
    return new Response("Failed to add Property", { status: 500 });
  }
};

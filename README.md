# RealEstateRadar Project Technologies

RealEstateRadar is a modern property listing platform built with Next.js 14, allowing users to browse, list, and manage real estate properties with features like property search, user authentication, messaging, and interactive maps.

## Architecture
![RealEstateRadar architecture](https://github.com/user-attachments/assets/35745c9e-bdb7-4c03-96c0-c4d340c26e21)

## Tech Stack

### Core Technologies

- **Frontend**: Next.js 14, React 18
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js with Google OAuth
- **State Management**: React Hooks and Context

### External Services

- **Image Storage**: Cloudinary
- **Mapping**: Mapbox GL
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **UI Components**:
  - PhotoSwipe for image galleries
  - React Spinners for loading states
  - React Toastify for notifications

## Features

- 🏠 Property Listings with detailed information
- 🔍 Advanced property search with filters
- 📍 Interactive maps for property locations
- 📸 Multiple image uploads with gallery view
- 💬 Real-time messaging between users
- 🔐 User authentication and profile management
- ⭐ Property bookmarking system
- 📱 Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB account and database
- Cloudinary account
- Mapbox account
- Google OAuth credentials

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

#### Database Configuration

MONGODB_URI=your_mongodb_connection_string

#### Authentication Settings

Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

#### External Services

Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Mapbox Configuration
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token

### Installation

1. Clone the repository
2. Install dependencies
3. Run the development server
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Routes

- `GET /api/properties` - Get all properties with pagination
- `POST /api/properties` - Create a new property
- `GET /api/properties/:id` - Get property details
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property
- `GET /api/messages` - Get user messages
- `POST /api/messages` - Send a message

## Deployment

The application can be easily deployed on Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting solutions
- MongoDB for database services
- Cloudinary for image management
- Mapbox for mapping services

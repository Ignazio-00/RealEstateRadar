import porperties from "@/properties.json"
import PropertyCard from "@/components/PropertyCard"


const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {porperties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {porperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
            </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage
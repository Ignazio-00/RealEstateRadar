import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBoxes";
import FeaturedPropertyCard from "@/components/FeaturedPropertyCard";
import FeaturedProperties from "@/components/FeaturedProperties";

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <FeaturedPropertyCard />
    </>
  );
};

export default HomePage;

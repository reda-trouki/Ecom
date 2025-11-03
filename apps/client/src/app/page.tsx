import ProductList from "@/components/ProductList";
import HeroSection from "@/components/HeroSection";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <div className="">
      <HeroSection />

      {/* Products Section */}
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;

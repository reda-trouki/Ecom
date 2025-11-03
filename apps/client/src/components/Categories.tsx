"use client";
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
  Sparkles,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-500" />
          <h2 className="text-xl font-semibold text-gray-800">Shop by Category</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {categories.map((category) => {
          const isSelected = category.slug === selectedCategory;

          return (
            <button
              key={category.name}
              onClick={() => handleChange(category.slug)}
              className={`group relative overflow-hidden rounded-lg transition-all duration-200 ${isSelected
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md border border-gray-200'
                }`}
            >
              {/* Content */}
              <div className="p-3 flex flex-col items-center gap-2 min-h-[70px] justify-center">
                {/* Icon Container */}
                <div className={`transition-all duration-200 ${isSelected
                    ? 'text-white'
                    : 'text-gray-600 group-hover:text-indigo-600 group-hover:scale-110'
                  }`}>
                  {category.icon}
                </div>

                {/* Category Name */}
                <span className="text-xs font-medium transition-colors duration-200">
                  {category.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom decoration */}
      <div className="mt-6 flex justify-center">
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Categories;

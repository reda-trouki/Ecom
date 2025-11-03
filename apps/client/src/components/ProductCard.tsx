"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@repo/types";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0]!,
    color: product.colors[0]!,
  });
  const [isHovered, setIsHovered] = useState(false);

  const { addToCart } = useCartStore();

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productTypes.size!,
      selectedColor: productTypes.color!,
    });
    toast.success("Product added to cart!");
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Link href={`/products/${product.id}`}>
          <Image
            src={(product.images as Record<string, string>)[productTypes.color] || ""}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* OVERLAY ACTIONS */}
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200 group/btn"
              aria-label="Add to wishlist"
              title="Add to wishlist"
            >
              <Heart className="w-4 h-4 text-gray-600 group-hover/btn:text-red-500" />
            </button>
            <Link
              href={`/products/${product.id}`}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-200 group/btn"
              aria-label="View product details"
              title="View product details"
            >
              <Eye className="w-4 h-4 text-gray-600 group-hover/btn:text-indigo-500" />
            </Link>
          </div>
        </div>

        {/* QUICK ADD TO CART */}
        <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="p-5">
        {/* PRODUCT NAME & DESCRIPTION */}
        <div className="mb-4">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* PRICE */}
        <div className="mb-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* PRODUCT OPTIONS */}
        <div className="space-y-4">
          {/* COLORS */}
          <div>
            <span className="text-xs font-medium text-gray-700 mb-2 block">
              Color
            </span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleProductType({ type: "color", value: color })}
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${productTypes.color === color
                      ? "border-indigo-500 scale-110 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                    } ${color === 'white' ? 'bg-white' :
                      color === 'black' ? 'bg-black' :
                        color === 'gray' ? 'bg-gray-500' :
                          color === 'blue' ? 'bg-blue-500' :
                            color === 'red' ? 'bg-red-500' :
                              color === 'green' ? 'bg-green-500' :
                                color === 'yellow' ? 'bg-yellow-500' :
                                  color === 'purple' ? 'bg-purple-500' :
                                    color === 'pink' ? 'bg-pink-500' :
                                      color === 'orange' ? 'bg-orange-500' :
                                        'bg-gray-400'}`}
                  title={color}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </div>

          {/* SIZES */}
          <div>
            <span className="text-xs font-medium text-gray-700 mb-2 block">
              Size
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleProductType({ type: "size", value: size })}
                  className={`px-3 py-1 text-xs font-medium rounded-md border transition-all duration-200 ${productTypes.size === size
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ADD TO CART BUTTON (Desktop Fallback) */}
        <div className="mt-5 lg:block hidden">
          <button
            onClick={handleAddToCart}
            className="w-full bg-gray-900 hover:bg-indigo-600 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import { ArrowRight, ShoppingBag, Star, Truck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ShppingAnimation from './ShppingAnimation'

const HeroSection = () => {
  return (
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mb-16">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Premium Quality Products
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Discover Your
                  <span className="text-indigo-600 block">Perfect Style</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Shop our curated collection of premium fashion and lifestyle products.
                  Quality guaranteed, style perfected.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/?category=all"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/categories"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-50 border-2 border-indigo-600 transition-colors duration-200"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Browse Categories
                </Link>
              </div>

              {/* Features */}
              <div className="flex items-center gap-8 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  Free Shipping
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  5-Star Rated
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  Easy Returns
                </div>
              </div>
            </div>

            {/* Right Content - Featured Animation */}
            <div className="relative flex items-center justify-center">
              {/* Main Animation Container */}
              <div className="relative w-full max-w-lg">
                {/* Background Decorative Elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl"></div>

                {/* Rotating Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-3xl transform rotate-6 scale-105"></div>

                {/* Animation Container */}
                <div className="relative z-10">
                  <ShppingAnimation />
                </div>

                {/* Floating Stats - Redesigned */}
                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-100/50 transform hover:scale-105 transition-transform duration-300 z-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-2xl font-bold text-indigo-600">50K+</span>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Happy Customers</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-100/50 transform hover:scale-105 transition-transform duration-300 z-20">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <div className="flex text-yellow-400 mr-1">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      <span className="text-2xl font-bold text-green-600">4.9</span>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Customer Rating</div>
                  </div>
                </div>

                {/* Additional Floating Elements */}
                <div className="absolute top-1/2 -left-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-gray-100/50 transform -translate-y-1/2 hover:scale-105 transition-transform duration-300 z-20">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-500" />
                    <div className="text-sm">
                      <div className="font-semibold text-gray-700">Free</div>
                      <div className="text-xs text-gray-500">Shipping</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/4 -right-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-3 border border-gray-100/50 transform hover:scale-105 transition-transform duration-300 z-20">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-purple-500" />
                    <div className="text-sm">
                      <div className="font-semibold text-gray-700">Easy</div>
                      <div className="text-xs text-gray-500">Returns</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-indigo-400 rounded-full animate-pulse z-20"></div>
                <div className="absolute bottom-12 right-12 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150 z-20"></div>
                <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-300 z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
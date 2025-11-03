import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart, Menu } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LEFT - Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Ecom"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                Ecom
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Premium Store</p>
            </div>
          </Link>

          {/* CENTER - Search Bar (Hidden on mobile) */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <SearchBar />
          </div>

          {/* RIGHT - Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Mobile Search Toggle */}
            <div className="lg:hidden">
              <SearchBar />
            </div>

            {/* Notifications */}
            <button
              className="relative p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200 group"
              aria-label="Notifications"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              </span>
              <div className="absolute inset-0 bg-indigo-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>

            {/* Shopping Cart */}
            <div className="relative">
              <ShoppingCartIcon />
            </div>

            {/* Authentication */}
            <div className="flex items-center gap-2">
              <SignedOut>
                <div className="flex items-center gap-2">
                  <SignInButton>
                    <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm hover:shadow-md">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="relative">
                  <ProfileButton />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (when expanded) */}
      <div className="lg:hidden border-t border-gray-200/50 px-4 py-3 bg-gray-50/50">
        {/* This could be toggled with state for mobile search */}
      </div>
    </nav>
  );
};

export default Navbar;

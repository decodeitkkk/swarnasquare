
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ isFixed = true }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`${
          isFixed ? "fixed" : ""
        } backdrop-blur-sm bg-[#291510] w-full z-10 text-white p-5 md:text-lg`}
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center justify-center h-14 w-14 ml-[115px] bg-[#291510] rounded-full"
            >
              <img src="./SSlogo.png" alt="Logo" className="h-12 w-12" />
            </a>
          </div>

          <div className="font-comfortaa hidden md:flex space-x-6 ml-[40px]">
            <a
              href="/products"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              Products
            </a>
            <a
              href="/services"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              Services
            </a>
            <a
              href="/about-us"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              About Us
            </a>
            <a
              href="/meet-us"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              Meet Us
            </a>
            <a
              href="/admin/wallet"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              Admin
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/loginphone"
              className="text-white text-lg hover:text-yellow-300 hover:underline"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-[#291510] bg-white rounded-sm p-1 hover:text-yellow-300 hover:underline"
            >
              Signup
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <a onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="text-white hover:text-yellow-400" />
              ) : (
                <Menu className="text-white hover:text-yellow-400" />
              )}
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-sm bg-primary">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/products"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Products
              </a>
              <a
                href="/services"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Services
              </a>
              <a
                href="/about-us"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                About Us
              </a>
              <a
                href="/meet-us"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Meet Us
              </a>
              <a
                href="/admin/wallet"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Admin
              </a>
              <a
                href="/loginphone"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Login
              </a>
              <a
                href="/signup"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Signup
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

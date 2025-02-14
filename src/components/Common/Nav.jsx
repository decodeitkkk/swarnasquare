import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Link
              to="/"
              className="flex items-center justify-center h-14 w-14 ml-[115px] bg-[#291510] rounded-full"
            >
              <img src="./SSlogo.png" alt="Logo" className="h-12 w-12" />
            </Link>
          </div>

          <div className="font-comfortaa hidden md:flex space-x-6 ml-[40px]">
            <Link
              to="/products"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              Services
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/meet-us"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              Meet Us
            </Link>
            <Link
              to="/client/dashboard"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              Dashboard
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/loginphone"
              className="text-white text-lg hover:text-yellow-300 hover:underline"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-[#291510] bg-white rounded-sm p-1 hover:text-yellow-300 hover:underline"
            >
              Signup
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="text-white hover:text-yellow-400" />
              ) : (
                <Menu className="text-white hover:text-yellow-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-sm bg-primary">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/products"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Products
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Services
              </Link>
              <Link
                to="/about-us"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                About Us
              </Link>
              <Link
                to="/meet-us"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Meet Us
              </Link>
              <Link
                to="/client/dashboard"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Dashboard
              </Link>
              <Link
                to="/loginphone"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2"
              >
                Signup
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

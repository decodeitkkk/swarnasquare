import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from "../../assets/common/logo.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="backdrop-blur-sm lg:bg-gradient-to-b lg:from-black/85 fixed w-full z-20 text-white p-5 md:text-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <a href="/">
          <img src={logo} alt="Logo" className="h-14 w-14 mr-2" />
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/products" className="text-white hover:text-yellow-300 hover:underline">Products</a>
          <a href="/services" className="text-white hover:text-yellow-300 hover:underline">Services</a>
          <a href="/about-us" className="text-white hover:text-yellow-300 hover:underline">About us</a>
          <a href="/meet-us" className="text-white hover:text-yellow-300 hover:underline">Meet Us</a>
        
        </div>
        <a className=" text-white hover:text-yellow-300 hover:underline hidden md:block">
            Sign In/ Sign Up
          </a>
        <div className="md:hidden">
          <a onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-black hove:text-yellow-400 hover:underline" /> : <Menu className="text-black hove:text-yellow-400 hover:underline" />}
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden backdrop-blur-sm bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/products" className="text-white hove:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="/products" className="text-white hove:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="/products" className="text-white hove:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium">About us</a>
            <a href="/products" className="text-white hove:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium">Meet Us</a>
            <a className="w-full text-left text-white  px-3 py-2 rounded-md text-base font-medium hove:text-yellow-400 hover:underline ">
              Sign In/ Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
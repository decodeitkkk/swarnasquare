import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from "../../assets/common/logo.png"
import chains from "../../assets/common/Navbar/chain.png"
import beads from "../../assets/common/Navbar/beads.png"
import consumables from "../../assets/common/Navbar/consumables.png"
import bullion from "../../assets/common/Navbar/bullion.png"
import gems from "../../assets/common/Navbar/gems.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="backdrop-blur-sm bg-primary fixed w-full z-20 text-white p-5 md:text-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-14 w-14 mr-2" />
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* Products with Hover Dropdown */}
          <div className="relative group">
  <a
    href="/products"
    className="text-white hover:text-yellow-300 hover:underline"
  >
    Products
  </a>
  <div className="absolute hidden group-hover:block mt-2 w-[800px] bg-primary rounded-md shadow-lg">
    <div className="grid grid-cols-5 gap-4 p-4">
      <a href="/products/chains" className="text-center">
        <img src={chains} alt="Chains" className="w-24 h-24 object-cover mx-auto" />
        <span className="block mt-2 text-white">Chains</span>
      </a>
      <a href="/products/beads" className="text-center">
        <img src={beads} alt="Beads" className="w-24 h-24 object-cover mx-auto" />
        <span className="block mt-2 text-white">Beads</span>
      </a>
      <a href="/products/consumables" className="text-center">
        <img src={consumables} alt="Consumables" className="w-24 h-24 object-cover mx-auto" />
        <span className="block mt-2 text-white">Consumables</span>
      </a>
      <a href="/products/bullion" className="text-center">
        <img src={bullion} alt="Bullion" className="w-24 h-24 object-cover mx-auto" />
        <span className="block mt-2 text-white">Bullion</span>
      </a>
      <a href="/products/gems" className="text-center">
        <img src={gems} alt="Gems" className="w-24 h-24 object-cover mx-auto" />
        <span className="block mt-2 text-white">Gems</span>
      </a>
    </div>
  </div>
</div>

          <a href="/services" className="text-white hover:text-yellow-300 hover:underline">Services</a>

        
          <div className="relative group ">
            <a
              href="/about-us"
              className="text-white hover:text-yellow-300 hover:underline"
            >
              About Us
            </a>
            <div className="absolute hidden group-hover:block mt-2 w-48 bg-primary rounded-md shadow-lg">
              <a href="/about/why-us" className="block px-4 py-2 text-sm text-white hover:bg-yellow-100">Why us?</a>
              <a href="/about-us/who-we-are" className="block px-4 py-2 text-sm text-white hover:bg-yellow-100">Who we are?</a>
              <a href="/about-us/what-we-do" className="block px-4 py-2 text-sm text-white hover:bg-yellow-100">What we do?</a>
              <a href="/about-us/how-we-do" className="block px-4 py-2 text-sm text-white hover:bg-yellow-100">How we do?</a>
              <a href="/about-us/faq" className="block px-4 py-2 text-sm text-white hover:bg-yellow-100">FAQ</a>
            </div>
          </div>

          <a href="/meet-us" className="text-white hover:text-yellow-300 hover:underline">Meet Us</a>
          <a href="/admin/dashboard" className="text-white hover:text-yellow-300 hover:underline">Admin</a>
        </div>
        <a className=" text-white hover:text-yellow-300 hover:underline hidden md:block">
          Sign In/ Sign Up
        </a>
        <div className="md:hidden">
          <a onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white hover:text-yellow-400 hover:underline" /> : <Menu className="text-white hover:text-yellow-400 hover:underline" />}
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden backdrop-blur-sm bg-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/products" className="text-white hover:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="/services" className="text-white hover:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium">Services</a>

            {/* About Us Dropdown for mobile */}
            <div>
              <a
                href="#"
                className="text-white hover:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </a>
              <div className="space-y-1 px-3">
                <a href="/our-team" className="text-white block hover:text-yellow-400">Our Team</a>
                <a href="/careers" className="text-white block hover:text-yellow-400">Careers</a>
                <a href="/mission" className="text-white block hover:text-yellow-400">Mission</a>
              </div>
            </div>

            <a href="/meet-us" className="text-white hover:text-yellow-400 hover:underline block px-3 py-2 rounded-md text-base font-medium">Meet Us</a>
            <a className="w-full text-left text-white px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 hover:underline">
              Sign In/ Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
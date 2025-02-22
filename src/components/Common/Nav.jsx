import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";

let menu = [
    {
        to: "/products",
        name: "Products",
    },
    {
        to: "/services",
        name: "Services",
    },
    {
        to: "/about",
        name: "About",
    },
    {
        to: "/dashboard",
        name: "Dashboard",
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black text-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}

                    <div className="w-3/5 md:w-2/5 lg:w-1/5 ">
                        <img src="/swarnasquare_logo.png" alt="" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menu.map((m) => (
                                <Link
                                    to={m.to}
                                    className="text-sm hover:text-amber-200 px-3 py-2 uppercase"
                                >
                                    {m.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Profile & Sign up */}
                    <div className="hidden md:flex items-center">
                        <button className="text-white p-2 rounded-full hover:bg-gray-800">
                            <User size={20} />
                        </button>
                        <button className="ml-4 bg-white text-black text-sm font-medium px-4 py-1 rounded hover:bg-amber-200">
                            Sign up
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X size={20} aria-hidden="true" />
                            ) : (
                                <Menu size={20} aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menu.map((m) => (
                            <Link
                                to={m.to}
                                className="text-sm block hover:text-amber-200 px-3 py-2 uppercase"
                            >
                                {m.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                            <div className="ml-auto flex items-center">
                                <button className="text-white p-2 rounded-full hover:bg-gray-800">
                                    <User size={20} />
                                </button>
                                <button className="ml-4 bg-white text-black text-sm font-medium px-4 py-1 rounded hover:bg-amber-200">
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

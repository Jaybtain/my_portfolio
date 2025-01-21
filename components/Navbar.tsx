"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Stack", path: "#stack" },
    { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className="z-50 fixed w-full text-white font-bold">
            {/* Desktop Navbar */}
            <div
                className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex 
                           items-center justify-center p-2 max-w-[400px] mx-auto"
            >
                <ul className="flex space-x-6"> {/* Use `flex` and `space-x-6` for row alignment */}
                    {NavLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Toggle Button */}
            <div
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-14 border rounded z-50 
                           text-black/70 border-black/70 p-2"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Navbar */}
            <div
                className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300
                            ${nav ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                    {NavLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.path}
                                onClick={closeNav}
                                className="transform hover:text-black/50 transition-all duration-300 ease-in-out"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

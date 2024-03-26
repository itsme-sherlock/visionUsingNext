'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDesktopMenuClick = (e) => {
    // Stop event propagation to prevent opening the hamburger menu
    e.stopPropagation();
    closeMenu();
  };

  // Define menu items
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/project" },
    { title: "Bom Page", path: "/bom" },
    // Add additional menu items as needed
  ];

  return (
    <section>
      <div className="w-full h-20 bg-visionBlue">
        {/* logo and links */}
        <div className="flex h-full items-center justify-center sm:justify-between px-5">
          {/* logo */}
          <Image className="sm:w-[12%] w-[30%]" src={logo} alt="logo" />

          {/* links */}
          <div>
            {/* Desktop menu */}
            <ul className="text-white sm:flex hidden items-center justify-center h-full gap-5 ">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    <button onClick={(e) => handleDesktopMenuClick(e)}>{item.title}</button>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger menu button */}
            <div className="">
              <button className="sm:hidden text-white p-2 ml-auto" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed top-0 left-0 w-screen h-screen bg-visionBlue z-10"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ul className="text-white flex flex-col items-center justify-center h-full gap-5">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.path}>
                        <button onClick={closeMenu}>{item.title}</button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

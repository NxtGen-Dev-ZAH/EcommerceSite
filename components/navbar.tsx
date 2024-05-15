import React from "react";
import NavigationMenuDemo from "@/components/ui/navigationnu";
import CartButton from "@/components/ui/Cart";
import Image from "next/image";
import Search from "@/components/search";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white flex items-center justify-between shadow-md h-14 px-10">
      {/* Logo on the left */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={100}
            height={12}
            className="h-12 rounded-3xl"
          />
        </Link>
      </div>

      {/* Title in the middle */}
      <Link href="/" className="cursor-pointer">
        <h1 className="text-black text-2xl font-bold">
          <span className="font-mono">Terra </span>
          <br />
          <span className=" ml-8 font-mono">Salina</span>
        </h1>
      </Link>

      {/* Buttons on the right */}
      <div className="flex items-center space-x-4">
        <Search />
        <button className="flex items-center  text-grey-300 my-2 transition-transform transform active:scale-105  hover:font-bold border border-black rounded-lg w-auto  font-medium py-1 shadow-md px-1">
          <Image
            src="/login..png" // Replace with the path to your cart image
            alt="Cart"
            className="w-6 h-6 mr-2"
            width={6}
            height={8}
          />
          Login
        </button>

        <CartButton />
      </div>
    </nav>
  );
};

export default Navbar;

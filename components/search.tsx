"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Search() {
  // const router=useRouter()
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <>
      <div className="flex items-center  text-grey-300 my-2  border border-black rounded-lg w-auto  font-medium py-1 shadow-md px-1">
        <Image
          src="/search.png" // Replace with the path to your cart image
          alt="search"
          className="w-6 h-6 mr-2 opacity-80"
          width={6}
          height={8}
        />
        <input
          type="text"
          placeholder="Search for products..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
}

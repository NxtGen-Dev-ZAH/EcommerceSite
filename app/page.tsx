// components/MyPage.js
"use client";
import React, { useState, useEffect } from "react";
import NavigationMenuDemo from "@/components/ui/navigationnu";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import MyPager from "../components/ui/GRIDSEC";

function MyPage() {
  const [isMenuFixed, setIsMenuFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsMenuFixed(scrollPosition > 65);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main >
      <Navbar />
      <hr />
      <div className="bg-gradient-to-tl from-pink-300 via-zinc-100 to-pink-300 w-screen h-svh">
      <div
        className={`${
          isMenuFixed ? "fixed top-0" : "relative"
        } bg-white flex row shadow-md justify-center items-center w-full transition-all ease-in-out duration-300 `}
        style={{ zIndex: isMenuFixed ? 10 : 1, boxShadow: isMenuFixed ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none" }}
      >
        <div >
          <NavigationMenuDemo />
        </div>
      </div>
      <div>
    <Hero/>
      </div>
    <div>
      <MyPager/>
     </div>
      </div>
      <div>
        
      </div>

     
    </main>
  );
}

export default MyPage;














  {
    /* Content Sections */
  }
  {
    /* <div className="w-full h-1/2 bg-black">
        <div className="bg-green-300">Content Section 1</div>
      </div>
      <div className="w-full h-1/2 bg-white">
        <div className="bg-green-300">Content Section 2</div>
      </div>
      <div className="w-full h-1/2 bg-black">
        <div className="bg-green-300">Content Section 3</div>
      </div> */
  }
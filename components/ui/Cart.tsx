/* import Link from "next/link";
import { useState } from "react";

const CartButton = () => {
  const [cartCount, setCartCount] = useState(0); // Replace with actual cart state logic

  return (
    <Link href="/cart">
    <button
      type="button"
      
      className="flex items-center justify-center rounded-md px-3 py-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    >
      <svg
        className="h-5 w-5 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 6H5l1-1v19h10l1 1v-19h5l-1-1zM18 2H6v22h12V2z"
          fill="currentColor"
        />
      </svg>
      Cart{" "}
      {cartCount > 0 && (
          <span className="ml-1 text-sm text-gray-400">{cartCount}</span>
      )}
    </button>
    </Link>
  );
};

export default CartButton;
 */

import Image from "next/image";
import { useState } from "react";
// components/CartButton.js
const CartButton = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleViewCart = () => {
    setCartCount(cartCount + 1);

    return console.log("viewing the cart ");
  };

  return (
    <button
      onClick={handleViewCart}
       className="flex items-center  text-grey-300 my-2  transition-transform transform active:scale-105  hover:font-bold border border-black rounded-lg w-auto  font-medium py-1 px-1 shadow-md"
    >
      <Image
        src="/cart.png" // Replace with the path to your cart image
        alt="Cart"
        className="w-6 h-6 mr-2"
        width={6}
        height={8}
      />
           <span className="material-icons-outlined">CART</span>

      {cartCount > 0 && (
        <span className="ml-1 text-sm text-gray-400">{cartCount}</span>
      )}
    </button>
  );
};

export default CartButton;

/*  
 className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-indigo-500"
    >
      <Image
        src="/cart.png" // Replace with the path to your cart image
        alt="cart."
        className="w-6 h-6 mr-2 "
        width={6}
        height={8}
      />
*/
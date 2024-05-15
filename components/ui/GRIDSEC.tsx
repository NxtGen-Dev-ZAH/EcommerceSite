"use client";
import Image from "next/image";
function MyPager() {
  return (
    <div className="absolute bottom-0 grid grid-cols-3 w-screen   pt-6">
      <div className="flex shadow-md shadow-gray-600 justify-center">
        <div>
          {" "}
          <Image src="/truck.png" alt="Logo" width={80} height={10} />
        </div>
        <div className=" flex flex-col justify-center items-center p-4  ">
          <h2 className="text-lg font-bold">FREE SHIPPING</h2>
          <p className=" text-gray-600">Free shipping on all orders above 400$</p>
        </div>
      </div>

      <div className="flex shadow-md shadow-gray-600 justify-center ">
        <div>
          {" "}
          <Image src="/return.png" alt="Logo" width={80} height={10} />{" "}
        </div>
        <div className=" flex flex-col justify-center items-center p-4 ">
          <h2 className="text-lg font-bold">30 Days Return</h2>
          <p className=" text-gray-600">Simply return it within first 30 days for an exchange</p>
        </div>
      </div>

      <div className="flex shadow-md shadow-gray-600 justify-center ">
        <div>
          {" "}
          <Image src="/money.png" alt="Logo" width={80} height={10} />
        </div>
        <div className=" flex flex-col justify-center items-center p-4 ">
          <h2 className="text-lg font-bold">100% Payment Secure</h2>
          <p className=" text-gray-600">Cash on Delivery or Pay using Card</p>
        </div>
      </div>
    </div>
  );
}

export default MyPager;

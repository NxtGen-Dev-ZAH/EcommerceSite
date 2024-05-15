
const Hero = () => {
    return (
        <>
        <div className="absolute  top-24 bottom-0 right-0 left-0 h-full overflow-hidden">
        <div
          className=" relative bg-cover bg-center h-4/6 w-screen "
          style={{ backgroundImage: `url('/salt.jpg')` }}
        >
          <div className="absolute mt-8 top-1/3 right-2/3 transform translate-x-28 -translate-y-1/2">
            <h2 className=" text-white text-6xl font-extrabold  ">SALT COLLECTION</h2>
<p className=" font-semibold text-cyan-50 text-2xl">Buy the best salt from our shop <br />Enjoy the taste and quality</p>
<button              className="rounded-[20px] mt-10 ml-4 bg-pink-400 hover:bg-purple-200 border-2 border-red-500 px-5 py-2  text-white  font-bold text-2xl max-w-[200px]"
> SHOP NOW</button>
          </div>
        </div>
      </div>
      
      </>
    )
}

export default Hero;
export default function Hero() {
  return (
    <>
      <div className="relative flex justify-center flex-col items-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center py-9 px-28 slide-in flex-nowrap sm:flex-wrap">Where Every Bite Feels Like Home</h1>
        <div className="heading-box"></div>
        <div className="opacity-0 relative slide-in-delay z-20 text-light-grey text-center tracking-wide font-semibold"> Discover flavors that inspire and meals that warm the soul, where every bite feels like home.</div>
        <div className="sub-box"></div>
        <div className="text-orange text-md z-[21] relative mt-4 hover:underline cursor-pointer inline-block font-sans font-semibold slide-delay-2 translate-y-7">View Menu</div>
      </div>
    </>
  )

}

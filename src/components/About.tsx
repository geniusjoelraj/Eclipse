export default function About() {
  return (
    <>
      <div className="about-container grid grid-cols-7 grid-rows-3 z-30 gap-3 h-80 relative mt-20">
        <div className="grid-item row-span-3 col-span-2  flex justify-center">
          <img className="w-[70%] self-start" src="https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sushi/Blog-page-156-sushi?$poi$&w=1112&h=782&sm=c&fmt=auto" alt="sushi-img" />
        </div>
        <div className="grid-item row-span-3 col-span-3 bg-orange"></div>
        <div className="grid-item row-span-1 col-span-2 bg-orange"></div>
        <div className="grid-item row-span-1 col-span-2 bg-orange"></div>
        <div className="grid-item row-span-1 col-span-2 bg-orange"></div>
      </div>
    </>
  )
}

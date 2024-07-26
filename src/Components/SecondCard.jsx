export function SecondCard() {
  return (
    <>
      <div className=" m-5 p- bg-slate-50 max-w-sm rounded-lg mx-auto   ">
        <div className="grid place-items-center  ">
          <div className="pt-4">
            <img
              className="h-20 w-20  block"
              src="./src/assets/Vitejs-logo.svg.png"
            />
          </div>
          <div className=" ">
            <p className=" pb-4 text 2xl font-medium text-black">By Vite</p>
          </div>
        </div>
        <div className="grid place-items-center" >
            <button className="p-3 bg-blue-600 font-semibold text-white rounded-lg mb-3 text-base hover:bg-green-500 hover:text-black">Buy Now</button>
        </div>
        <div className=" border-2 bg-white">
            <p className="text-center font-base font-semibold sm:text-green-500 md:text-blue-500 lg:text-red-500">RESPONSIVENESS</p>
        </div>
      </div>
    </>
  );
}

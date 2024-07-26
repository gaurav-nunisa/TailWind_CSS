export function ImageSection() {
  return (
    <>
      <div>
        <div className="w-full h-auto ">
          <img className="w-full  hidden md:block"
            src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-full ">
          <img className="w-full h-auto md:hidden"
            src="https://images.pexels.com/photos/5496461/pexels-photo-5496461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

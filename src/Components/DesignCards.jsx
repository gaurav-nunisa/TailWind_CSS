import { GiBookshelf } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa";

export function DesignCards() {
  return (
    <>
      <div className="h-auto w-full flex flex-col items-center text-center p-10">
        <div className="h-auto w-full flex flex-col items-center mb-12">
          <div className="text-white font-mono font-semibold text-3xl text-center">
            " IN OUR CODE WE TRUST "
          </div>
          <div className="w-36 h-1 border-b-4 border-yellow-300 mt-2 rounded-2xl md:mt-4"></div>
        </div>
        
        <div className="w-full flex flex-wrap justify-evenly gap-8">
          {cardItem(GiBookshelf, "40,400+", "Resources")}
          {cardItem(CgProfile, "10,000+", "Users")}
          {cardItem(FaCode, "40,400+", "Resources")}
        </div>
      </div>
    </>
  );
}

function cardItem(Icon, text1, text2) {
  return (
    <div className="flex flex-col items-center mb-8">
      <Icon
        size={90}
        className="border border-yellow-500 rounded-full p-0.5 bg-yellow-500"
      />
      <p className="font-bold text-white pt-2">{text1}</p>
      <p className="font-bold text-gray-500">{text2}</p>
    </div>
  );
}
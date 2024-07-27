import { SiActix } from "react-icons/si";

export function MiniCard() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4 items-center lg:p-2">
      {card(SiActix, "Feature 1", "Description 1")}
      {card(SiActix, "Feature 2", "Description 2")}
      {card(SiActix, "Feature 3", "Description 3")}
      <div className="md:col-span-3 md:grid md:grid-cols-2 md:gap-4">
        {card(SiActix, "Feature 4", "Description 4")}
        {card(SiActix, "Feature 5", "Description 5")}
      </div>
    </div>
  );
}

function card(Icon, text1, text2) {
  return (
    <div className="flex flex-col items-center p-4 border border-white rounded-lg text-center ">
      <Icon size={60} className="text-white mb-3" />
      <p className="text-white font-semibold text-sm sm:text-base mb-2">{text1}</p>
      <p className="text-gray-500 font-semibold text-xs sm:text-sm break-words">{text2}</p>
    </div>
  );
}
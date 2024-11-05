import { Travel } from "@/types/travel.type";
import { TravelButtons } from "./travel-button";

export const TravelComponent = ({ travel }: { travel: Travel }) => {
  return (
    <div className="grid grid-cols-2 justify-between border border-[#D8D8D8] rounded-2xl gap-10 mx-32 mb-10">
      <img src={travel.photo_url} alt={travel.title} className="h-full object-cover rounded-l-2xl" />
      <div className="px-10 py-10">
        <h2 className="text-[24px] leading-[30px]">{travel.title}</h2>
        <p className="text-[16px] leading-[24px] mt-4">{travel.description}</p>
        <TravelButtons />
      </div>
    </div>
  );
};

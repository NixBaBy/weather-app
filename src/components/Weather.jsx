import { Location } from "../components/Loaction";
import { WeatherNumber } from "./WeatherNumber";
import { Buttons } from "./Buttons";
export const Weather = () => {
  return (
    <div className="w-[414px] h-[828px] rounded-[48px] bg-[#111827bf] backdrop-blur-md ">
      <Location />
      <div className="bg-[url()]"></div>
      <WeatherNumber />
      <Buttons />
    </div>
  );
};

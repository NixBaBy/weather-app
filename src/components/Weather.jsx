import { Location } from "../components/Loaction";
import { WeatherNumberRight } from "./WeatherNumberRight";
import { Buttons } from "./Buttons";

export const Weather = ({ selectedCity, night, conditionNight }) => {
  const weatherImg = (conditionNight) => {
    const condition = conditionNight.toLowerCase();
    switch (true) {
      case condition.includes("sunny"):
        return "/clearRight.svg";
      case condition.includes("rain"):
        return "/rainRight.svg";
      case condition.includes("cloudy"):
        return "/cloudyRight.svg";
      case condition.includes("clear"):
        return "/clearRight.svg";

      case condition.includes("snow"):
        return "/snowRight.svg";
      case condition.includes("mist"):
        return "/cloudyRight.svg";
      case condition.includes("overcast"):
        return "/cloudyRight.svg";
    }
  };
  return (
    <div className="relative w-[414px] h-[832px]">
      <div className=" size-full rounded-[48px] bg-[rgba(255, 255, 255, 0.75)] backdrop-blur-md relative z-10 shadow-md">
        <div className="w-[398px] h-[504px] rounded-[42px] bg-[linear-gradient(180deg, #111827 0%, #101624 100%)] ml-[8px] ">
          <Location selectedCity={selectedCity} />
          <div className=" flex justify-center">
            {
              <img
                src={weatherImg(conditionNight)}
                alt=""
                className="w-[264px] h-[264px]"
              />
            }
          </div>
        </div>
        <div className="mt-[-10px]">
          <WeatherNumberRight night={night} conditionNight={conditionNight} />

          <Buttons />
        </div>
      </div>
      <div className="z-0">
        <img
          src="/moon.svg"
          alt=""
          className="absolute right-[-40px] bottom-[-25px] "
        />
      </div>
    </div>
  );
};

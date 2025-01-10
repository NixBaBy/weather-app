import { LocationLeft } from "./LocationLeft";
import { WeatherNumber } from "./WeatherNumber";
import { Buttons } from "./Buttons";
import { Skeleton } from "../components/Skeleton";
export const WeatherLeft = ({ selectedCity, loading, weather }) => {
  const weatherImg = (conditionSunny) => {
    const condition = conditionSunny.toLowerCase();

    switch (true) {
      case condition.includes("sunny"):
        return "/SunLeft.png";
      case condition.includes("rain"):
        return "/RainLeft.png";
      case condition.includes("cloudy"):
        return "/CloudLeft.png";
      case condition.includes("clear"):
        return "/SunLeft.png";

      case condition.includes("snow"):
        return "/SnowLeft.png";
      case condition.includes("mist"):
        return "/CloudLeft.png";
      case condition.includes("overcast"):
        return "/CloudLeft.png";
      default:
        return "/SunLeft.png";
    }
  };

  return (
    <div className="relative w-[414px] h-[832px]">
      <div className=" size-full rounded-[48px] bg-[rgba(255, 255, 255, 0.75)] backdrop-blur-md relative z-10 shadow-md">
        <div className="w-[398px] h-[504px]  rounded-[42px] bg-[var(--Cool-Gray-Gradient-light, linear-gradient(180deg, #F9FAFB 0%, rgba(249, 250, 251, 0.00) 100%))] ml-[8px]">
          <LocationLeft selectedCity={selectedCity} />
          {loading ? (
            <Skeleton />
          ) : (
            <div className=" flex justify-center">
              <img
                src={weatherImg(weather.conditionSunny)}
                alt=""
                className="w-[264px] h-[264px]"
              />
            </div>
          )}
        </div>
        <div className="mt-[-10px]">
          <WeatherNumber weather={weather} />

          <Buttons />
        </div>
      </div>
      <div className="absolute right-[-40px] bottom-[-25px]">
        <img src="/sun.svg" alt="" />
      </div>
    </div>
  );
};

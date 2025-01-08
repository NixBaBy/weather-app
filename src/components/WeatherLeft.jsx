import { LocationLeft } from "./LocationLeft";
import { WeatherNumber } from "./WeatherNumber";
import { Buttons } from "./Buttons";
export const WeatherLeft = ({ selectedCity, weather, conditionSunny }) => {
  return (
    <div className="relative w-[414px] h-[832px]">
      <div className=" size-full rounded-[48px] bg-[rgba(255, 255, 255, 0.75)] backdrop-blur-md relative z-10 shadow-md">
        <div className="w-[398px] h-[504px]  rounded-[42px] bg-[var(--Cool-Gray-Gradient-light, linear-gradient(180deg, #F9FAFB 0%, rgba(249, 250, 251, 0.00) 100%))] ml-[8px]">
          <LocationLeft selectedCity={selectedCity} />
          <img
            className="w-[264.891px] h-[264.891px] m-[auto] mt-[24px]"
            src="https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pra0N4Cxxv-ewi0qhKIEJwVG-qSQezH7Q6S1fZm9xI5CbB4rFJvfCDeC0E8xxsaek9gkYMBfhocmMCEiHaXpnXaoMAmib~KnIUzRk97v1ljdZrQDtNb-10iL18XqBFdH-S0nPWiBZ4MRUVItu4ZDz7HLXsHPdNFM4YniGfm5wMKFIzIUxNEluKrLxvjqzRPaU1G2K1lgL~yYnISdOqpxgPTqMa31xhRyyuQlEJLrl1CYAcr4z0PjoeujFyuAM5LF3YsBVVMwoTNQmzqmttZsjNH3pNXDsRbuwxG9ThwApw1TvsuCs8oDJ2n0DwihR6EOmMBw6jpJgXxmKfM1lxmWsw__"
            alt=""
          />
        </div>
        <div className="mt-[-10px]">
          <WeatherNumber weather={weather} conditionSunny={conditionSunny} />

          <Buttons />
        </div>
      </div>
      <div className="absolute right-[-40px] bottom-[-25px]">
        <img src="/moon.svg" alt="" />
      </div>
      {/* <div className="absolute top-[-40px] left-[-35px]">
        <img src="/sun.svg" alt="" />
      </div> */}
    </div>
  );
};

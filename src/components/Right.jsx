import { Weather } from "../components/Weather";
export const Right = ({
  selectedCity,
  night,
  conditionNight,
  handlerSelect,
  weatherImg,
  setWeatherImg,
}) => {
  return (
    <div className="w-[50%] h-[100%] bg-[#0F141E] flex justify-center items-center">
      <Weather
        selectedCity={selectedCity}
        night={night}
        conditionNight={conditionNight}
        handlerSelect={handlerSelect}
        weatherImg={weatherImg}
        setWeatherImg={setWeatherImg}
      />
    </div>
  );
};

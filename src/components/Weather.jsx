import { Location } from "../components/Loaction";
import { WeatherNumberRight } from "./WeatherNumberRight";
import { Buttons } from "./Buttons";
export const Weather = ({
  selectedCity,
  night,
  conditionNight,
  handlerSelect,
  weatherImg,
  setWeatherImg,
}) => {
  const weatherSwitch = (weatherImg) => {
    switch (weatherImg) {
      case "sunny":
        return (
          <img
            src="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilshppMFSARTdI1JWeQOlhakbR1JVeDnbcra4a6UILH9hOqrOoCAtl1W4QCfJBX8QN8jBc0aBR2laFKsYYbX3DIVpT7gp0OQ5OJ0YcM~wtgba2vJbMijNX75QG5qEkqEwBMCKUbJ1Sh2zXf10p47EdFvLuCjNqjlQQbOPGqZfayGYgkORpy06dIoegj-ZsLR26hq8uC4Z4BFUGfViQs7gsJDOuTYydKGOnIJ9lV7oUp8MkUm4GoDtziY4Zr~CxiAzjBqlTLi~MEdcm0FW4pxSOaZVi4xmsibabFOHqIO5-PSKt5ZOJ1aBVv066oao3IBoMM6X~V-Iqvhb-O8aHIi9A__"
            alt=""
          />
        );

      case "overcast":
        return (
          <img
            src="https://s3-alpha-sig.figma.com/img/f626/1028/e3f613e97dd5d5d8ffa2f8d17e859abd?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HidVF8Iob5N6L15GPj13aQmiCFcbA8aDJipDOHzp8X5AgxCROascDIAaTKQcVbcW-mtRi4Tsuv9JjrC34wgCYkLpb0lmIq-PMRG4gq4i4Vgimc-KHpm4aVCzlAGEdMlPvbTUkPZ596ivZHeUpxgJki65h0R-6YO6ySnwxSFz8ZDog2QhLXPL5n-WBq~Md5LWBt91auCdVGpA7743duafCVoOqw5j6d7hdT-ceGbstt7zXm6bVexSncs0FfDD9qbrJMXCXzB7gXKgXXdsMMw4AwN9FqjUfr21-4IODehfa7mh5SJJkyC5DNKbBvspFu6dDyQfJbHyl9W-54IPh06Stw__"
            alt=""
          />
        );
      default:
        return null;
    }
  };
  console.log(weatherSwitch());
  return (
    <div className="relative w-[414px] h-[832px]">
      <div className=" size-full rounded-[48px] bg-[rgba(255, 255, 255, 0.75)] backdrop-blur-md relative z-10 shadow-md">
        <div className="w-[398px] h-[504px] rounded-[42px] bg-[linear-gradient(180deg, #111827 0%, #101624 100%)] ml-[8px]">
          <Location selectedCity={selectedCity} />
          <button onClick={() => handlerSelect(city)}>{weatherSwitch()}</button>
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

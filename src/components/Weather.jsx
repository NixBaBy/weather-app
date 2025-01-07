import { Location } from "../components/Loaction";
import { WeatherNumber } from "./WeatherNumber";
import { Buttons } from "./Buttons";
export const Weather = ({ selectedCity }) => {
  return (
    <div className="w-[414px] h-[828px] rounded-[48px] bg-[#111827bf] backdrop-blur-md relative ">
      <Location selectedCity={selectedCity} />
      <img
        className="w-[264.891px] h-[264.891px] m-[auto] mt-[24px]"
        src="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilshppMFSARTdI1JWeQOlhakbR1JVeDnbcra4a6UILH9hOqrOoCAtl1W4QCfJBX8QN8jBc0aBR2laFKsYYbX3DIVpT7gp0OQ5OJ0YcM~wtgba2vJbMijNX75QG5qEkqEwBMCKUbJ1Sh2zXf10p47EdFvLuCjNqjlQQbOPGqZfayGYgkORpy06dIoegj-ZsLR26hq8uC4Z4BFUGfViQs7gsJDOuTYydKGOnIJ9lV7oUp8MkUm4GoDtziY4Zr~CxiAzjBqlTLi~MEdcm0FW4pxSOaZVi4xmsibabFOHqIO5-PSKt5ZOJ1aBVv066oao3IBoMM6X~V-Iqvhb-O8aHIi9A__"
        alt=""
      />
      <WeatherNumber />
      <Buttons />
      <div>
        <img
          src="/moon.svg"
          alt=""
          className="absolute right-[-40px] bottom-[-25px] "
        />
      </div>
    </div>
  );
};

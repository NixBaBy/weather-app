import { Weather } from "../components/Weather";
export const Left = ({ selectedCity }) => {
  return (
    <div className="w-[50%] h-[100%] bg-[#F3F4F6] flex justify-center items-center">
      <Weather selectedCity={selectedCity} />
    </div>
  );
};

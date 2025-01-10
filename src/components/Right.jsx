import { Weather } from "../components/Weather";
export const Right = ({ selectedCity, weather, loading }) => {
  return (
    <div className="w-[50%] h-[100%] bg-[#0F141E] flex justify-center items-center">
      <Weather
        selectedCity={selectedCity}
        weather={weather}
        loading={loading}
      />
    </div>
  );
};

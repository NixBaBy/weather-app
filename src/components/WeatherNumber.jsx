export const WeatherNumber = ({ weather, night, conditionSunny }) => {
  return (
    <div className="ml-[48px]  flex flex-col">
      <p className="text-[144px]  font-bold bg-gradient-to-t from-white to-black text-transparent bg-clip-text  mt-[-50px]">
        {weather}
      </p>
      <p className="text-[#FF8E27] text-[24px] font-bold">{conditionSunny}</p>
    </div>
  );
};

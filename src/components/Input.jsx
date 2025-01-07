export const Input = ({ search, searched, handlerSelect, searchValue }) => {
  return (
    <div className="absolute top-[40px] left-[40px]  z-20">
      <input
        type="text"
        value={searchValue}
        placeholder="Search"
        onChange={search}
        className="w-[512px] min-w-[320px] py-[16px] px-[24px] rounded-[48px] placeholder:text-black placeholder:text-[32px] flex items-center"
      />

      {searched.length > 0 && (
        <div className="rounded-[24px] bg-{rgba(255, 255, 255, 0.80)} backdrop-blur-[32px] w-[512px] py-[16px] absolute z-10 ">
          {searched.slice(0, 10).map((city, index) => (
            <button
              onClick={() => handlerSelect(city)}
              className="h-[56px] py-0 px-[24px] text-[26px] font-bold flex gap-[16px] items-center "
              key={index}
            >
              <img src="/location.svg" alt="" />
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const Input = ({ search, searched, handlerSelect, searchValue }) => {
  return (
    <div className="absolute top-[40px] left-[40px]  ">
      <input
        type="text"
        value={searchValue}
        placeholder="Search"
        onChange={search}
        className="w-[567px] min-w-[320px] py-[16px] px-[24px] rounded-[48px] placeholder:text-black placeholder:text-[32px] flex items-center"
      />

      {searched.length > 0 && (
        <div className="rounded-[24px] bg-white w-[512px] py-[16px] absolute z-10">
          {searched.slice(0, 10).map((city, index) => (
            <button
              onClick={() => handlerSelect(city)}
              className="text-[26px] font-bold flex items-center "
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

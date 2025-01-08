export const Input = ({ search, searched, handlerSelect, searchValue }) => {
  return (
    <div className="absolute top-[40px] left-[40px] z-50  ">
      <svg
        className="absolute ml-[10px] mx-[5px]"
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
      >
        <g opacity="0.2">
          <path
            d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
            fill="black"
          />
        </g>
      </svg>
      <input
        type="text"
        value={searchValue}
        placeholder="Search"
        onChange={search}
        className="w-[567px] min-w-[320px]  text-[32px] rounded-[48px] placeholder:text-gray placeholder:text-[32px] placeholder:font-bold pl-[60px] flex items-center"
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

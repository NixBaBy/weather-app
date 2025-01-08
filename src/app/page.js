"use client";
import { Left } from "../components/Left";
import { Right } from "../components/Right";
import { Input } from "../components/Input";
import { Pinecone } from "@/components/Pinecone";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setselectedCity] = useState("Ulan Bator");
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState("");
  const [night, setNight] = useState("");
  const [conditionSunny, setConditionSunny] = useState("");
  const [conditionNight, setConditionNight] = useState("");
  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let inComeCities = data.data.map((country) => {
      return country.cities;
    });
    inComeCities = inComeCities.flat();
    setCities(inComeCities);
  }

  useEffect(() => {
    getData();
  }, []);
  const searchHandler = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search.toLowerCase());
    const filtered = cities.filter((city) => {
      if (!search) {
        return false;
      }
      return city.toLowerCase().includes(search);
    });
    setSearched(filtered);
  };

  const handlerSelect = (city) => {
    setselectedCity(city);
    setSearched([]);
    setSearchValue("");
    getWeather(city);
  };

  async function getWeather(selectedCity) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=3d04b821f3fa4c2a93e21107250801&q=${selectedCity}`
    );
    const weatherData = await result.json();
    let sunny = weatherData.forecast.forecastday[0].day.maxtemp_c;
    let night = weatherData.forecast.forecastday[0].day.mintemp_c;
    let c1 = weatherData.forecast.forecastday[0].day.condition.text;
    let c2 = weatherData.forecast.forecastday[0].hour[23].condition.text;
    console.log(weatherData);
    setConditionSunny(c1);
    setConditionNight(c2);
    setWeather(sunny);
    setNight(night);
  }
  useEffect(() => {
    getWeather(selectedCity);
  }, []);
  return (
    <div className="flex relative w-[100vw] h-[100vh] justify-center items-center">
      <Pinecone />
      <Input
        handlerSelect={handlerSelect}
        search={searchHandler}
        searched={searched}
        searchValue={searchValue}
      />
      <Left
        selectedCity={selectedCity}
        weather={weather}
        conditionSunny={conditionSunny}
      />
      <Right
        selectedCity={selectedCity}
        night={night}
        conditionNight={conditionNight}
      />
    </div>
  );
}

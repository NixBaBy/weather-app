"use client";
import { Left } from "../components/Left";
import { Right } from "../components/Right";
import { Input } from "../components/Input";
import { Pinecone } from "@/components/Pinecone";
import { useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setselectedCity] = useState("Ulaanbaatar");
  const [searchValue, setSearchValue] = useState("");
  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let inComeCities = data.data.map((country) => {
      return country.cities;
    });
    inComeCities = inComeCities.flat();
    setCities(inComeCities);
  }
  getData();
  const searchHandler = (e) => {
    const search = e.target.value;
    setSearchValue(search);
    const filtered = cities.filter((city) => {
      if (!search) {
        return false;
      }
      return city.includes(search);
    });
    setSearched(filtered);
  };
  const handlerSelect = (city) => {
    setselectedCity(city);
    setSearched([]);
    setSearchValue("");
  };
  return (
    <div className="flex relative w-[100vw] h-[100vh]">
      <Pinecone />
      <Input
        handlerSelect={handlerSelect}
        search={searchHandler}
        searched={searched}
        searchValue={searchValue}
      />
      <Left selectedCity={selectedCity} />
      <Right selectedCity={selectedCity} />
    </div>
  );
}

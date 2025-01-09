import { useEffect, useState } from "react";

export function useGetData() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let inComeCities = data.data.map((country) => {
      let CountyCity = country.cities.map((arr) => {
        return { country: country.country, city: arr };
      });
      return CountyCity;
    });

    inComeCities = inComeCities.flat();
    setCities(inComeCities);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return { cities, loading };
}

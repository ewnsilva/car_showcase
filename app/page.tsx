"use client";

import { useSearchParams } from "next/navigation";
import {
  Hero,
  SearchBar,
  CustomFilter,
  CarCard,
  ShowMore,
} from "../components";
import { fetchCars } from "../utils";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [cars, setCars] = useState([]);

  const manufacturer = searchParams.get("manufacturer") || "";
  const year = Number(searchParams.get("year")) || 2022;
  const fuel = searchParams.get("fuel") || "";
  const limit = Number(searchParams.get("limit")) || 10;

  useEffect(() => {
    async function fetchData() {
      const allCars = await fetchCars({ manufacturer, year, fuel, limit });
      setCars(allCars);
    }
    fetchData();
  }, [manufacturer, year, fuel, limit]);

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>

            <ShowMore pageNumber={limit / 10} isNext={limit > cars.length} />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

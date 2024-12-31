export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "KJwZZIJSfimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVlzA",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

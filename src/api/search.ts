import { Place } from "./Place";

interface SearchResponse {
  display_name: string;
  lat: number;
  lon: number;
  place_id: number;
}

export const search = async (term: string) => {
  const res = await fetch(
    `https://us1.locationiq.com/v1/search?key=${
      import.meta.env.VITE_LOCATIONIQ_API_KEY
    }&q=${term}&format=json&limit=5`
  );

  const data: SearchResponse[] = await res.json();

  const places: Place[] = data.map((d) => {
    return {
      id: d.place_id,
      name: d.display_name,
      longitude: d.lon,
      latitude: d.lat,
    };
  });
  return places;
};

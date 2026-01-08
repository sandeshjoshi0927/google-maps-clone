import type { Place } from "../api/Place";
import { Fragment, useState } from "react";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

const LocationSearch = ({ onPlaceClick }: LocationSearchProps) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const places = await search(term);
    setPlaces(places);
  };

  const renderedContent = places.map((place) => (
    <Fragment key={place.id}>
      <p>{place.name}</p>
      <button
        className="bg-blue-500 text-white text-xs font-bold py-1 px-1 rounded"
        onClick={() => onPlaceClick(place)}
      >
        GO
      </button>
      <div className="border-b w-full col-span-2" />
    </Fragment>
  ));

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="term" className="font-bold">
          Search
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>

      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {renderedContent}
      </div>
    </div>
  );
};

export default LocationSearch;

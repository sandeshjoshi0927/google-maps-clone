import type { Place } from "../api/Place";

interface MapProps {
  place: Place | null;
}

const Map = ({ place }: MapProps) => {
  return <div>Map</div>;
};

export default Map;

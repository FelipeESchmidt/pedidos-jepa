import { normalizePlaces, PlaceProps } from "../Controllers/placesController";

export const parsePlaces = (places: any): Array<PlaceProps> => {
  if (!places) {
    return [];
  }
  const placesAsArray = Object.values(places);
  if (Array.isArray(placesAsArray)) {
    return normalizePlaces(placesAsArray);
  }
  return normalizePlaces([placesAsArray]);
};

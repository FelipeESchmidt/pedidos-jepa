import { generateId } from "../Utils/idGenerator";

export interface PlaceProps {
  id: string;
  name: string;
  image: string;
  contact: string;
  menuLink: string;
}

const undefinedPlace: PlaceProps = {
  id: generateId(16),
  name: "Não encontrado",
  image: "https://www.freeiconspng.com/thumbs/x-png/x-png-33.png",
  contact: "(XX) X XXXX-XXXX",
  menuLink: "",
};

export const createPlace = (
  name: string,
  imageSrc: string,
  contact: string,
  menuLink: string
): PlaceProps => {
  const place: PlaceProps = {
    id: generateId(16),
    name,
    contact,
    menuLink,
    image: imageSrc,
  };
  return place;
};

const normalizePlace = (order: any): PlaceProps => ({
  id: order.id,
  name: order.name,
  image: order.image,
  contact: order.contact,
  menuLink: order.menuLink,
});

export const normalizePlaces = (places: Array<any>): Array<PlaceProps> =>
  places.map(normalizePlace);

export const getPlaceById = (places: Array<PlaceProps>, placeId: string) =>
  places.find((p) => p.id === placeId) || undefinedPlace;

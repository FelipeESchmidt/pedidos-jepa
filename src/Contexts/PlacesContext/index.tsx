import React from "react";
import { PlaceProps } from "../../Controllers/placesController";

export const PlacesContext = React.createContext<Array<PlaceProps>>([]);

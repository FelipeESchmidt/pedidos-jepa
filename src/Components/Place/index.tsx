import React from "react";
import { PlaceProps } from "../../Controllers/placesController";

import * as S from "./index.styles";

interface PlaceComponentProps {
  place: PlaceProps;
  showInfo?: boolean;
}

const Place = ({ place, showInfo = true }: PlaceComponentProps) => {
  return (
    <S.StyledWrapper>
      <S.StyledLogo src={place.image} />
      {showInfo && (
        <S.StyledInfo>
          <S.StyledPlaceTitle>{place.name}</S.StyledPlaceTitle>
          <S.StyledContact>{place.contact}</S.StyledContact>
        </S.StyledInfo>
      )}
    </S.StyledWrapper>
  );
};

export default Place;

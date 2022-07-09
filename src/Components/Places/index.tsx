import React, { useContext } from "react";
import { PlacesContext } from "../../Contexts/PlacesContext";
import Place from "../Place";
import * as S from "./index.styles";

interface PlacesProps {
  handleSelect: Function;
}

const Places = ({ handleSelect }: PlacesProps) => {
  const places = useContext(PlacesContext);

  return (
    <S.StyledWrapper>
      {places.map((place) => (
        <S.StyledPlaceWrapper key={place.id}>
          <Place place={place} showInfo={false} />
          <S.StyledSelectButton onClick={() => handleSelect(place.id)}>
            + Criar
          </S.StyledSelectButton>
        </S.StyledPlaceWrapper>
      ))}
    </S.StyledWrapper>
  );
};

export default Places;

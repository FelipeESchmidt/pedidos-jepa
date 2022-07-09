import React, { useContext } from "react";
import { PlacesContext } from "../../Contexts/PlacesContext";
import { CloseButton } from "../../Styles/GlobalStyles";
import Place from "../Place";
import * as S from "./index.styles";

interface PlacesProps {
  handleSelect: Function;
  handleClose: Function;
}

const Places = ({ handleSelect, handleClose }: PlacesProps) => {
  const places = useContext(PlacesContext);

  return (
    <S.StyledWrapper>
      <S.StyledWrapperTop>
        <S.StyledTitle>Selecione um Local:</S.StyledTitle>
        <CloseButton onClick={() => handleClose()} />
      </S.StyledWrapperTop>
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

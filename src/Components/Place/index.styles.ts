import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-position: center;
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
`;

export const StyledPlaceTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.basic};
`;

export const StyledContact = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.basic};
`;

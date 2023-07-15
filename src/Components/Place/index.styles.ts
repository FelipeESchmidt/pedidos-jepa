import styled, { css, keyframes } from "styled-components";

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

export const StyledText = css`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.basic};
`;

export const StyledPlaceTitle = styled.h2`
  ${StyledText};
`;

export const StyledContact = styled.p`
  ${StyledText};
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
    text-shadow: none;
    text-shadow: 0 0 0 #4285f4;
  }
  50% {
    transform: scale(1.03);
    opacity: 0.8;
    text-shadow: 0 0 1px #3366CC;
  }
  100% {
    transform: scale(1);
    opacity: 1;
    text-shadow: 0 0 0 #4285f4;
  }
`;

const grow = keyframes`
  0% {
    left: 0;
    width: 0;
  }
  50%{
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
`;

export const StyledLink = styled.a`
  ${StyledText};
  position: relative;
  color: #4285f4;
  text-decoration: none;
  animation: ${pulse} 1.5s infinite;
  :hover {
    text-decoration: underline;
    animation-play-state: paused;
    ::after {
      animation-play-state: paused;
    }
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3366cc;
    animation: ${grow} 1.5s infinite;
  }
`;

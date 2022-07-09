import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px;
  box-sizing: border-box;
`;

export const StyledLoading = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid white;
  border-left: 3px solid ${({ theme }) => theme.black};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.black};
  transform: rotate(0deg);
  animation: ${loadingAnimation} 1.5s linear infinite both;
`;

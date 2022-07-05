import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.basic};
  border-radius: 10px;
  box-sizing: border-box;
`;

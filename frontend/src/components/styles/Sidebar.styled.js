import styled from "styled-components";

export const StyledSidebar = styled.aside`
  display: ${({ isOpen }) => (isOpen ? "" : "none")};
  position: fixed;
  height: 100%;
  width: 300px;
  background: #011627;

  h1 {
    margin: 0;
  }
`;

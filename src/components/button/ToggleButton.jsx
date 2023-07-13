import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

export const ThemeModeWrapper = styled.button`
  position: fixed;
  z-index: 1;
  width: 4rem;
  height: 2rem;
  right: 4rem;

  width: 50px;
  margin: 10px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.bgColor};
      box-shadow: 1px 1px 3px ${(props) => props.theme.shadow};
    `;
  }}
`;

function ToggleButton({ toggleTheme, theme }) {
  return (
    <ThemeModeWrapper onClick={toggleTheme}>
      {theme === "light" ? "🌝" : "🌚"}
    </ThemeModeWrapper>
  );
}

export default ToggleButton;

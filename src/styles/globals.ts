import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-y: overlay;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: ${props => props.theme.colors.black5};
  color: ${props => props.theme.colors.black5};
}

body, input, textarea, select, button {
  font: 400 1rem 'Barlow', sans-serif;
}

button, a {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  font: 300 1.125rem 'Barlow', sans-serif;
}

p {
  line-height: 140%;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

button {
  cursor: pointer;
  border: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
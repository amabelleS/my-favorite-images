import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
    margin: 0;
    scroll-behavior: smooth;
    height: 100vh;
    line-height: 1.5;
  }
  ul {
  list-style-type: none;
  }
  a {
    text-decoration: none;
  }

`;

export const lightTheme = {
  body: '#bbe4e9',
  text: '#000000',
  primary: '#84ffff',
  secondary: '#018786',
  darkLight: '#84ffff',
  navActive: '#8f71ff',
};

export const darkTheme = {
  body: '#000000',
  text: '#84ffff',
  primary: '#84ffff',
  secondary: '#606470',
  darkLight: '#393e46',
  navActive: '#8f71ff',
};

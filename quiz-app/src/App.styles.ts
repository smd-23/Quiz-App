import { createGlobalStyle } from "styled-components";
import BGImage from "./images/car.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url(${BGImage});
    background-size: cover;
  }

  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -350px; /* Move the content slightly upward */
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

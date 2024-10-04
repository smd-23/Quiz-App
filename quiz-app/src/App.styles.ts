import styled, { createGlobalStyle, keyframes } from "styled-components";
import BGImage from "./images/black.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center; /* Center elements vertically */
    height: 100%;
    background-image: url(${BGImage});
    background-size: cover;
    background-position: center;
  }
    

  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .question {
    margin-bottom: 10px;
    font-size: 1.2rem;
    text-align: center;
    color: black; /* Set question text to black */
    font-weight: bold; /* Make it bold */
  }

  .score,
  .header {
    color: black; /* Ensure all other header elements are black */
    font-weight: bold; /* Make them bold */
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Wrapper = styled.div`
  text-align: center;
  transition: all 0.3s ease-in-out; /* Smooth transition for layout changes */
  animation: ${fadeIn} 0.5s ease; /* Fade-in animation on mount */

  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
    font-weight: bold;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    margin-top: -100px;
    font-family: "Fascinate Inline", Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 80px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 500px;
  }
`;

import React from "react";
import styled from "styled-components";

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
  children: React.ReactNode;
};

export const StyledButtonWrapper = styled.div<ButtonWrapperProps>`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;

  p {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: auto;
    min-width: 150px;
    max-width: 100%;
    height: auto;
    margin: 5px 0;
    padding: 10px 20px;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ff6b, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 3px solid #fff;
    color: #fff; /* Make answer text black */
    font-weight: bold; /* Keep answers normal weight (not bold) */
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    transition: background-color 0.3s ease;
  }
`;

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  correct,
  userClicked,
  children,
}) => {
  return (
    <StyledButtonWrapper correct={correct} userClicked={userClicked}>
      {children}
    </StyledButtonWrapper>
  );
};

export default ButtonWrapper;

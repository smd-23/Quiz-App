import React from "react";
import styled from "styled-components";

type ButtonWrapperProps = {
  children: React.ReactNode;
};

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .button {
    margin: 0 10px;
  }
`;

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children }) => {
  return <StyledButtonWrapper>{children}</StyledButtonWrapper>;
};

export default ButtonWrapper;

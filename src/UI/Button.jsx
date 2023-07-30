import React from "react";
import { css, styled } from "styled-components";

const Button = ({ children, variant = "outlined", disabled, ...rest }) => {
  return (
    <ButtonStyle variant={variant} {...rest} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 26px;
  cursor: pointer;
  ${(props) =>
    props.variant === "outlined" &&
    css`
      color: #1f6ed4;
      border: 2px solid #1f6ed4;
      background-color: transparent;

      &:hover {
        border: 3px solid #4c94f0;
        color: #4c94f0;
      }
      &:active {
        border: 3px solid #0052bc;
        color: #ffff;
        background-color: #0052bc;
      }
      &:disabled {
        color: #c9c9c9;
        border: 1px solid #c9c9c9;
      }
    `}
  ${(props) =>
    props.variant === "contained" &&
    css`
      color: #fff;
      background-color: #1f6ed4;
      border: none;
      &:hover {
        background-color: #4c94f0;
      }
      &:active {
        background-color: #0052bc;
      }
      &:disabled {
        background: #c9c9c9;
      }
    `}
    ${(props) =>
    props.variant === "warning" &&
    css`
      color: #fff;
      background-color: #F37705;
      border: none;
      &:hover {
        background-color: #FF912B;
      }
      &:active {
        background-color: #CF6300;
      }
      &:disabled {
        background: #C9C9C9;
      }
    `}
    ${(props) =>
    props.variant === "danger" &&
    css`
      color: #fff;
      background-color: #DF2D2D;
      border: none;
      &:hover {
        background-color: #E54343;
      }
      &:active {
        background-color: #C20B0B;
      }
      &:disabled {
        background: #C9C9C9;
      }
    `}
`;


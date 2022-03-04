import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
const Toast = ({ message }) => {
  return <ToastPop>{message}</ToastPop>;
};

const fadein = keyframes`
  0% { top: 60px; opacity: 0; }
  100% { top: 30px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { top: 30px; opacity: 1; }
  100% { top: 60px; opacity: 0; }
`;

const ToastPop = styled.div`
  min-width: 100px;
  width: auto;
  min-height: 15px;
  position: fixed;
  display: flex;
  align-items: flex-end;
  right: calc((100vw - 480px) / 2 - 1rem);
  z-index: 999;
  color: white;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 15px;
  font-weight: 600;
  background-color: #3fc176;
  -webkit-animation: ${css`
    ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
  `};
  animation: ${css`
    ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
  `};
  animation-fill-mode: forwards;
  @media (max-width: 540px) {
    right: 1rem;
  }
`;

export default Toast;

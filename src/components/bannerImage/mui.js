import { styled, keyframes } from "@mui/material/styles";
import { Box } from "@mui/material";

const glitch1 = keyframes`
  10% {
    clip-path: polygon(0 0%, 100% 0%, 100% 33%, 0 33%);
    transform: translate(-50%, -50%);
  }
  15% {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100%, 0);
    transform: translate(-50%, -50%);
  }
  23% {
    transform: translate(-45%, -45%);
  }
  24% {
    transform: translate(-50%, -50%);
  }
  25% {
    transform: translate(-55%, -45%);
  }
  26% {
    transform: translate(-50%, -50%);
  }
`;

const glitch2 = keyframes`
  0% {
    opacity: 0;
  }
  9% {
    opacity: 1;
    clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0% 60%);
    transform: translate(-50%, -50%);
  }
  10% {
    transform: translate(-46%, -46%);
  }
  11% {
    transform: translate(-54%, -54%);
  }
  15% {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100%, 0);
    transform: translate(-50%, -50%);
  }
  12% {
    transform: translate(-45%, -55%);
  }
  13% {
    transform: translate(-50%, -50%);
  }
  14% {
    transform: translate(-40%, -45%);
  }
  15% {
    transform: translate(-50%, -50%);
  }
  24% {
    transform: translate(-45%, -55%);
  }
  25% {
    transform: translate(-50%, -60%);
  }
  26% {
    transform: translate(-45%, -50%);
  }
  27% {
    transform: translate(-50%, -50%);
  }
  35% {
    transform: translate(-40%, -60%);
  }
  36% {
    transform: translate(-50%, -50%);
  }
`;

const glitch3 = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0% 100%);
    transform: translate(-50%, -50%);
  }
  15% {
    transform: translate(-40%, -40%);
  }
  16%{
    transform: translate(-50%, -50%); 
  }
  17% {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100%, 0);
    transform: translate(-50%, -50%);
  }
  22% {
    transform: translate(-60%, -60%);
  }
  23%{
    transform: translate(-50%, -50%); 
  }
  24% {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100%, 0);
    transform: translate(-50%, -50%);
  }
  34% {
    transform: translate(-40%, -40%);
  }
  35% {
    transform: translate(-50%, -50%); 
  }
`;

const glitch4 = keyframes`
  0% {
    opacity: 0;
  }
  11% {
    opacity: 1;
    clip-path: polygon(0 32%, 100% 32%, 100% 41%, 0% 41%);
    transform: translate(-48%, -50%);
  }
  12% {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100%, 0);
    transform: translate(-50%, -50%);
  }
`;

const glitch5 = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    clip-path: polygon(0 59%, 100% 59%, 100% 71%, 0% 71%);
    transform: translate(-52%, -50%);
  }
  12% {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100%, 0);
    transform: translate(-50%, -50%);
  }
`;

export const BoxSC = styled(Box)`
  position: relative;
  user-select: none;
  pointer-events: none;
  display: flex;
  justify-content: center;
  & img {
    width: 70vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    &:nth-child(1) {
      animation: ${glitch1} 4s infinite steps(1, end);
    }
    &:nth-child(2) {
      animation: ${glitch2} 4s infinite steps(2, end);
    }
    &:nth-child(3) {
      animation: ${glitch3} 4s infinite steps(1, end);
    }
    &:nth-child(4) {
      animation: ${glitch4} 4s infinite steps(1, end);
    }
    &:nth-child(5) {
      animation: ${glitch5} 4s infinite steps(1, end);
    }
  }
`;

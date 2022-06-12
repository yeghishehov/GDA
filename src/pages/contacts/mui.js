import { styled, keyframes } from "@mui/material/styles";

const move = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
`;

export const Image = styled("img")`
  width: 100%;
  animation: ${move} 1.5s ease-in-out ${({ reverse }) => (reverse === "true" ? "alternate-reverse" : "alternate")} infinite;
`;

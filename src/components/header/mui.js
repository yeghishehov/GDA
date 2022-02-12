import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const BoxSC = styled(Box)`
  height: calc((50vh + 50vw) / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  user-select: none;
`;

export const TextBoxSC = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const HeaderSC = styled(Typography)`
  /* color: #c1c6fd; */
  font-size: 7.8vw;
  font-weight: 500;
  color: #EDEDEF;
  text-shadow: 3px 3px 20px #4259b7, -2px 1px 30px #a54343;
  position: relative;
  &:nth-of-type(1) {
    left: 10vw;
  }
  &:nth-of-type(2) {
    top: 7vw;
  }
  &:nth-of-type(3) {
    top: 14vw;
    right: 18.4vw;
  }
`;

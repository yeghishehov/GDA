import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import BG from "../../assets/bg.jpg";

export const BoxSC = styled(Box)`
  margin-top: 15px;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBoxSC = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TypographySC = styled(Typography)`
  /* color: #c1c6fd; */
  font-size: 7.8vw;
  font-weight: 500;
  color: #fff;
  position: relative;
  &:nth-child(1) {
    left: 10vw;
  }
  &:nth-child(2) {
    top: 7vw;
  }
  &:nth-child(3) {
    top: 14vw;
    right: 18.4vw;
  }
`;

export const BackgroundSC = styled("div")`
  background: url(${BG}) center center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
`;

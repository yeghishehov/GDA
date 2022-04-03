import { styled } from "@mui/material/styles";
import { Box /* , Typography */ } from "@mui/material";

export const BoxSC = styled(Box)`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  user-select: none;
`;

export const HeaderSC = styled("div")`
  /* font-family: "AzonixRegular";
  font-size: 7.8vw;
  line-height: 100%;
  font-weight: 500;
  color: #ededef; */
  /* text-shadow: 3px 3px 20px #4259b7, -2px 1px 30px #a54343; */
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 90%;
  }
`;

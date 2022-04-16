import { styled } from "@mui/material/styles";
import { Box /* , Typography */ } from "@mui/material";

export const BoxSC = styled(Box)`
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  transform: translateY(-50%);
  // height: 40%;
  width: 94%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  user-select: none;
  pointer-events: none;
  & img {
    width: 90%;
    max-height: 100%;
  }
  @media (max-width: 900px) {
    height: 30%;
  }
  @media (max-width: 600px) {
    height: 20%;
  }
  @media (max-width: 450px) {
    height: 16%;
  }
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
`;

import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import BGImage from "../../assets/images/AccessGrantedBG.png";
import accessGranted from "../../assets/images/Access-Granted.gif";

export const ImageBG = styled("div")`
  position: relative;
  height: 100vh;
  background: url(${BGImage}) no-repeat;
  background-size: 100vw 100vh;
`;

export const ImageAccessGranted = styled("div")`
  position: relative;
  width: 50vw;
  height: 50vh;
  background: url(${accessGranted}) no-repeat;
  background-size: 50vw 50vh;
`;

export const PasswordField = styled(TextField)`
  fieldset {
    border-color: ${({ error }) => (!error ? "#259cc7 !important" : "")};
  }
`;

export const Wrapper = styled("div")`
  position: absolute;
  top: 25%;
  left: 25%;
  min-width: 50vw;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

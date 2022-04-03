import { styled } from "@mui/material/styles";
import {
  Card, CardContent, CardMedia, Typography, Box,
} from "@mui/material";
import decorIcon from "../../assets/images/decor.svg";

export const CardSC = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  width: calc(100% / 3);
  box-sizing: border-box;
  height: 280px;
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
  opacity: 0.85;
  background: linear-gradient(${({ gradient }) => gradient});
  transition: .7s;
  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    background: #f9f5fa;
    height: 85px;
  }
  &::after {
    content: "";
    position: absolute;
    background: url(${decorIcon}) top center/cover no-repeat;
    width: 100%;
    margin: 0 auto;
    left: 0;
    right: 0;
    height: 50px;
    top: 145px;
  }
  &:hover {
    box-shadow: 0 0 35px #22222230;
    transform: translateY(10px);
  }
`;

export const BoxSC = styled(Box)`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
`;

export const CardHeaderSC = styled(Typography)`
  font-size: 1.5rem;
  text-transform: capitalize;
  text-align: center;
  z-index: 1;
  color: #727072;
  font-family: "Montserrat", "Brutal-Regular";
`;

export const CardContentSC = styled(CardContent)`
  flex: 1 0 auto;
  font-family: "Brutal-Regular";
  z-index: 1;
`;

export const CardMediaSC = styled(CardMedia)`
    position: relative;
    top: 10px;
    object-fit: contain;
    height: 45%;
    width: 90%;
`;

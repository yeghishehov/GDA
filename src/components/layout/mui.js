import { styled } from "@mui/material/styles";
import {
  Container, Box, Button,
} from "@mui/material";

export const ContainerSC = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s linear;
  ${({ bgcolor }) => (bgcolor ? `background-color: ${bgcolor};` : "")}
`;

export const NavigationSC = styled(Box)`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ButtonSC = styled(Button)`
  width: 200px;
  height: 50px;
  margin: 10px;
`;

export const ContentSC = styled(Box)`
  padding-top: 40px;
  height: 100vh;
  /* position: relative; */
  /* top: 5vh; */
  /*background: #212330e0;
  padding: 20px;
  border-radius: 20px;
  color: #ededef;
  box-shadow: inset #373b3e 0 0 40px 10px, #303538 0 0 24px 12px; */
`;

export const CoursesSC = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  & > * {
    margin: 5px;
  }
`;

export const Image = styled(Box)`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 85%;
  height: 450px;
  margin: 60px auto;
`;

export const BGImage = styled("img")`
  position: absolute;
  top: 200vh;
  right: 0;
  height: 100vh;
  z-index: -1;
`;

export const Gradient = styled("div")`
    background: linear-gradient(0deg, rgb(0 0 0) 0%, rgb(85 92 137 / 50%) 50%);
    position: absolute;
    top: 200vh;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: -1;
`;

export const Gradient2 = styled("div")`
    background: rgba(13, 16, 34, 0.6);
    position: absolute;
    top: 200vh;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: -1;
`;

export const CourseModal = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 60%;
    border-radius: 20px;
    background: #f5f1f7;
`;

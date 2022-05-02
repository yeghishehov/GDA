import { styled } from "@mui/material/styles";
import {
  Container,
  Box,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

export const ContainerSC = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s linear;
  ${({ bgcolor }) => (bgcolor ? `background-color: ${bgcolor};` : "")}
`;

export const ContainerHeaderSC = styled(ContainerSC)`
  justify-content: space-between;
  height: 90vh;
`;

export const ContainerHeaderFixSC = styled(Container)`
  display: flex;
  justify-content: space-around;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const NavigationSC = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const NavigationFixSC = styled(NavigationSC)`
  position: fixed;
  top: 0;
  background: ${({ background }) => (background ? "#0f1129" : "transparent")};
  z-index: 99999;
  box-sizing: border-box;
  padding: 0 20px;
`;

export const ButtonSC = styled(Button)`
  width: fit-content;
  height: 40px;
  margin: 0;
  ${({ reg }) => reg === "true" && "color: #ffee33;"}
`;

export const ContentSC = styled("div")`
  position: relative;
  height: fit-content;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0;
  padding-top: 12px;
  box-sizing: border-box;
`;

export const CoursesSC = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  & > * {
    margin: 10px;
  }
`;

export const Image = styled(Box)`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  margin: 10px auto;
  width: 90%;
`;

export const BGImage = styled("div")`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: left;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Gradient = styled("div")`
    background: linear-gradient(0deg, rgb(0 0 0) 0%, rgb(85 92 137 / 50%) 50%);
    position: absolute;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
    z-index: -1;
`;

export const Gradient2 = styled("div")`
    background: rgba(13, 16, 34, 0.6);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
`;

export const Gradient3 = styled("div")`
    background: #1A1A32;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: -1px;
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

export const DividerContainerSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

export const DividerSC = styled(Divider)`
  border-color: #fff;
  border-bottom-width: unset;
  flex: 1;
  margin-right: 24%;
`;

export const Price = styled("div")`
  width: 320px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  background: #9862ca;
  background: linear-gradient(to right, #9862ca, #517cd1);
  padding: 20px;
  border-radius: 20px 20px 0 20px;
  transition: .2s;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 0 15px 5px #7171ce79;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PriceContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ConditionsSC = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Gradient4 = styled("div")`
    background: #0F1129;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
`;

export const AccordionSC = styled(Accordion)`
  background: linear-gradient(to right, #9862ca60, #517cd160);
  width: 80%;
`;
export const AccordionSummarySC = styled(AccordionSummary)``;
export const AccordionDetailsSC = styled(AccordionDetails)``;
export const IframeSC = styled("iframe")`
  width: 100%;
  height: 1218px;
  @media (max-width: 663px) {
    height: 1250px;
  }
  @media (max-width: 622px) {
    height: 1266px;
  }
  @media (max-width: 598px) {
    height: 1266px;
  }
`;

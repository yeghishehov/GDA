import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const DescriptionSC = styled(Typography)`
  position: absolute;
  bottom: 20px;
  left: 5%;
  right: 5%;
  color: #EDEDEF;
  text-shadow: 2px 2px 2px #323639, -2px -2px 2px #323639;
  // height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  @media (max-width: 900px) {
    font-size: 1.1rem;
    // height: 28%;
  }
  @media (max-width: 600px) {
    // font-size: 0.8rem;
  }
`;

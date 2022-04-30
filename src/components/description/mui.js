import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const DescriptionSC = styled(Typography)`
  color: #EDEDEF;
  text-shadow: 2px 2px 2px #323639, -2px -2px 2px #323639;
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

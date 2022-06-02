import { styled } from "@mui/material/styles";

export const ParticlesSC = styled("div")`
  & > * > * {
    position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

import { Typography } from "@mui/material";
import {
  BGImage, Gradient, Gradient2, ContainerSC, ContentSC,
} from "./mui";
import img1 from "../assets/images/1.jfif";

const about2Title = "Our mission";
const about2 = `The company's missionl is to establish the first qualified educational institution in Armenia, where Armenian youth
will be able to study creating high quality video games for Mobile/Desktop and Console platforms.
We are eager to lead students, spread the famous Armenian creator's
reputation all over the world also in game development, and open the new opportunities for our homeland.`;

export function Mission() {
  return (
    <ContentSC id="our mission" overflow="hidden">
      <ContainerSC>
        <Typography
          variant="h2"
          align="center"
          mb={2}
          fontFamily="Brutal-Regular"
          color="#FEFEFE"
          zIndex="1"
          sx={{
            fontSize: {
              md: "3.45rem",
              sm: "2.75rem",
              xs: "1.5rem",
            },
          }}
        >
          {about2Title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          fontFamily="Brutal-Regular"
          color="#FEFEFE"
          zIndex="1"
          sx={{
            fontSize: {
              md: "1.3rem;",
              sm: "1.2rem",
              xs: "1rem",
            },
          }}
        >
          {about2}
        </Typography>
      </ContainerSC>
      <BGImage src={img1} />
      <Gradient />
      <Gradient2 />
    </ContentSC>
  );
}

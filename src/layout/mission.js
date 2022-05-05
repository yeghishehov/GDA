/* eslint-disable max-len */
import { Typography } from "@mui/material";
import {
  BGImage, Gradient, Gradient2, ContainerSC, ContentSC,
} from "./mui";
import img1 from "../assets/images/1.jfif";
import img11 from "../assets/images/1.png";

// const about2Title = "Our mission";
const about2Title = "Մեր նպատակը";
// const about2 = `The company's missionl is to establish the first qualified educational institution in Armenia, where Armenian youth
// will be able to study creating high quality video games for Mobile/Desktop and Console platforms.
// We are eager to lead students, spread the famous Armenian creator's
// reputation all over the world also in game development, and open the new opportunities for our homeland.`;
const about2 = `Մեր նպատակն է Հայաստանում հիմնել որակյալ կրթական հաստատություն, որտեղ հայ երիտասարդը կարող է սովորել ստեղծել բարձրորակ վիդեո խաղեր Mobile, Desktop և Console-ների համար։
Մենք պատրաստ ենք առաջնորդել ուսանողներին, օգնել տարածել հայ ստեղծագործողների Համբավը նաև խաղերի ստեղծման ուոլրտում և նոր հնարավորություններ բացել երիտասարդների համար։`;

export function Mission() {
  return (
    <ContentSC id="our mission" overflow="hidden">
      <ContainerSC>
        <Typography
          variant="h2"
          align="center"
          mt={5}
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
      <img src={img11} alt="" />
      <Gradient />
      <Gradient2 />
    </ContentSC>
  );
}

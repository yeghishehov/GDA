/* eslint-disable max-len */
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  EvolutionImage, BGImage, Gradient, Gradient2, ContainerSC, ContentSC,
} from "./mui";
import img1 from "../assets/images/1.jfif";
import bannerImg from "../assets/images/webbanner2.png";
// import bannerImg from "../assets/images/webbanner.png";
import bannerImg1 from "../assets/images/mobilebanner.png";

// const about2Title = "Our mission";
const about2Title = "Մեր առաքելությունը";
// const about2 = `The company's missionl is to establish the first qualified educational institution in Armenia, where Armenian youth
// will be able to study creating high quality video games for Mobile/Desktop and Console platforms.
// We are eager to lead students, spread the famous Armenian creator's
// reputation all over the world also in game development, and open the new opportunities for our homeland.`;
const about2 = `Մեր առաքելությունն է Հայաստանում հիմնել որակյալ կրթական հաստատություն, որտեղ հայ երիտասարդները
կկարողանան սովորել ստեղծել բարձրորակ վիդեո խաղեր Mobile\` IOS, Android, Desktop և Console\` Playstation, Xbox և այլ հարթակների համար:
Մենք պատրաստ ենք առաջնորդել ուսանողներին զարգացնել ստեղծագործ միտքը խաղերի ստեղծման ոլորտում և նոր հնարավորություններ բացել երիտասարդների համար:`;

export function Mission() {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <ContentSC
      id="our mission"
      overflow="hidden"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ContainerSC>
        <Typography
          variant="h2"
          align="center"
          mt={5}
          mb={2}
          fontFamily="Brutal-Regular,sans-serif"
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
          fontFamily="Brutal-Regular,sans-serif"
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
      <EvolutionImage src={isMobile ? bannerImg1 : bannerImg} alt="" sx={{ mt: 3, width: isMobile ? "100%" : "75%" }} />
      <Gradient />
      <Gradient2 />
    </ContentSC>
  );
}

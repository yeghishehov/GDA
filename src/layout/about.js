import { Typography } from "@mui/material";
import { ContentSC, Image } from "./mui";
import winImg from "../assets/images/win.jpg";

const aboutTitle = "What is Game Development";
const about = `Game developers design, create and produce video games. They work in game development teams with artists, programmers, producers and marketing staff.
Game developers usually specialize in a particular game platform (PlayStation, Xbox, Mobile (IOS or Android), PC for example) and a particular aspect of game development, such as programming artificial intelligence or game play. Specialization is common in the industry, although games developers sometimes perform a combination of roles.`;

export function About() {
  return (
    <ContentSC
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        mb={2}
        fontFamily="Brutal-Regular"
        sx={{
          fontSize: {
            md: "3.45rem",
            sm: "2.75rem",
            xs: "1.5rem",
          },
        }}
      >
        {aboutTitle}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        fontFamily="Brutal-Regular"
        sx={{
          fontSize: {
            md: "1.3rem;",
            sm: "1.2rem",
            xs: "1rem",
          },
        }}
      >
        {about}
      </Typography>
      <Image src={winImg} />
    </ContentSC>
  );
}

/* eslint-disable max-len */
import { Typography, Box } from "@mui/material";
import {
  ContainerSC, ContentSC, // Gradient, // Image
} from "./mui";
// import winImg from "../assets/images/win.jpg";

// const aboutTitle = "What is Game Development";
const aboutTitle = "Ի՞նչ է Game Development-ը։";
// const about = `Game developers design, create and produce video games. They work in game development teams with artists, programmers, producers and marketing staff.
// Game developers usually specialize in a particular game platform (PlayStation, Xbox, Mobile (IOS or Android), PC for example) and a particular aspect of game development, such as programming artificial intelligence or game play. Specialization is common in the industry, although games developers sometimes perform a combination of roles.`;
const about = `Game developer-ները նախագծում և ստեղծում են վիդեո խաղեր։
Նրանք աշխատում են թիմերով, որոնք իրենց մեջ ներառում են\` դերասաններ, ծրագրավորողներ,պրոդյուսերներ և մարկետինգի
մասնագետներ։
Game Developer-ները հիմնականում մասնագիտանում են կոնկրետ խաղային հարթակներում (օրինակ\` PC, PlayStation, Xbox, Mobile\` IOS կամ Android), և հատուկ ուղղություններում, ինչպիսիք են՝ ծրագրավորում, արհեստական բանականություն, խաղային ընթացք և այլն։
Որոշ դեպքերում խաղերի ստեղծման ժամանակ Game Developer-ները համատեղում են միաժամանակ մի քանի աշխատանք։`;
const aboutTitle2 = "Ինչու՞ ընտրել խաղերի ստեղծման ոլորտը";
const about2 = `Միգուցե այն պատճառով, որ դա կարիերա է, որն իր մեջ ներառում է գերժամանակակից տեխնոլոգիաներ և կրեատիվության համադրություն։
Դա կարող է լինել նաև այն պատճառով, որ դուք սիրում եք խաղալ վիդեո խաղեր և ցանկանում եք կյանքի վերածել Ձեր կրեատիվ մտքերը։
Միգուցե դուք ցանկանու՞մ եք այնպիսի կարիերա, որը հնարավորություն կտա աշխատել ճանապարհորդության ընթացքում կամ տանից։ Միգուցե դուք սիրու՞մ եք նկարչությունը և իրերի կերտումը Ձեր իսկ ձեռքով վիրտուալ հարթակի միջոցով։`;
const about3 = "Կան բազմաթիվ պատճառներ, ըստ որի դուք կցանկանաք աշխատել խաղերի ստեղծման ոլորտում, և կան տասնյակ կարիերային ճանապարհներ, որոնք կբացվեն Ձեր առջև բազում ոլորտներում։";
export function About() {
  return (
    <ContentSC
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ContainerSC>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Typography
            variant="h2"
            align="center"
            mb={2}
            mt={5}
            fontFamily="Brutal-Regular,sans-serif"
            sx={{
              // color: "#fff",
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
            fontFamily="Brutal-Regular,sans-serif"
            sx={{
              // color: "#fff",
              fontSize: {
                md: "1.3rem;",
                sm: "1.2rem",
                xs: "1rem",
              },
            }}
          >
            {about}
          </Typography>

          <Typography
            variant="h2"
            align="center"
            mb={2}
            mt={8}
            fontFamily="Brutal-Regular,sans-serif"
            sx={{
              // color: "#fff",
              fontSize: {
                md: "3.45rem",
                sm: "2.75rem",
                xs: "1.5rem",
              },
            }}
          >
            {aboutTitle2}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            fontFamily="Brutal-Regular,sans-serif"
            sx={{
              // color: "#fff",
              fontSize: {
                md: "1.3rem;",
                sm: "1.2rem",
                xs: "1rem",
              },
            }}
          >
            {about2}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            fontFamily="Brutal-Regular,sans-serif"
            mb={4}
            sx={{
              // color: "#fff",
              fontSize: {
                md: "1.3rem;",
                sm: "1.2rem",
                xs: "1rem",
              },
            }}
          >
            {about3}
          </Typography>
        </Box>
      </ContainerSC>
      {/* <Image src={winImg} /> */}
      {/* <Gradient sx={{ minHeight: "100vh", height: "unset", background: "linear-gradient(0deg, rgb(0 0 0) 0%, rgb(0 0 0 / 20%) 50%)" }} /> */}
    </ContentSC>
  );
}

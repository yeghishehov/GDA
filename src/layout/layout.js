/* eslint-disable max-len */
import { useState } from "react";
import {
  Typography,
  Modal,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { Header } from "../components/header";
import { ParticlesBackground } from "../components/particles";
import { Description } from "../components/description";
import { Card } from "../components/card";
import UELogo from "../assets/images/UE_Logo1.png";
import unityLogo from "../assets/images/unity.png";
import winImg from "../assets/images/win.jpg";
import img1 from "../assets/images/1.jfif";
import times from "../assets/images/times.png";

import {
  ContainerSC,
  ContentSC,
  CoursesSC,
  ButtonSC,
  NavigationSC,
  Image,
  BGImage,
  Gradient,
  Gradient2,
  Gradient3,
  CourseModal,
  DividerSC,
  DividerContainerSC,
  Price,
} from "./mui";

const coursesTitle = "Lesson classes";
const courses = "Choosing the game engine is one of the first steps of starting development.";

const coursesDetailsTitle = "Courses overview";

const pricesTitle = "Conditions of education";
const pricesSubTitle = "Beginner course duration is 3 months";
// const price = "69.000 AMD, 59.000 AMD, 49.000 AMD, 29.000 AMD";

const aboutTitle = "What is Game Development";
const about = `Game developers design, create and produce video games. They work in game development teams with artists, programmers, producers and marketing staff.
Game developers usually specialize in a particular game platform (PlayStation, Xbox, Mobile (IOS or Android), PC for example) and a particular aspect of game development, such as programming artificial intelligence or game play. Specialization is common in the industry, although games developers sometimes perform a combination of roles.`;
const about2Title = "Our mission";
const about2 = `The company's missionl is to establish the first qualified educational institution in Armenia, where Armenian youth
will be able to study creating high quality video games for Mobile/Desktop and Console platforms.
We are eager to lead students, spread the famous Armenian creator's
reputation all over the world also in game development, and open the new opportunities for our homeland.`;

const buttons = [
  "about",
  "our mission",
  "courses",
  "conditions",
  "registration",
  "faq",
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const smoothScroll = (e) => {
    const element = document.getElementById(e.target.name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ContainerSC>
      <ParticlesBackground />
      <Header />
      <Description />
      <NavigationSC>
        {buttons.map((button) => (
          <ButtonSC
            key={button}
            variant="outlined"
            size="large"
            name={button}
            onClick={smoothScroll}
          >
            {button}
          </ButtonSC>
        ))}
      </NavigationSC>
      <ContentSC id="about">
        <Typography
          variant="h2"
          align="center"
          mb={5}
          fontFamily="Brutal-Regular"
        >
          {aboutTitle}
        </Typography>
        <Typography variant="h5" align="center" fontFamily="Brutal-Regular">
          {about}
        </Typography>
        <Image src={winImg} />
      </ContentSC>
      <ContentSC id="our mission" overflow="hidden">
        <Typography
          variant="h2"
          align="center"
          mb={5}
          fontFamily="Brutal-Regular"
          color="#FEFEFE"
          zIndex="1"
        >
          {about2Title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          fontFamily="Brutal-Regular"
          color="#FEFEFE"
          zIndex="1"
        >
          {about2}
        </Typography>
        <BGImage src={img1} />
        <Gradient />
        <Gradient2 />
      </ContentSC>
      <ContentSC id="courses">
        <Typography
          variant="h2"
          align="center"
          mb={5}
          fontFamily="Brutal-Regular"
        >
          {coursesTitle}
        </Typography>
        <Typography variant="h5" align="center" fontFamily="Brutal-Regular">
          {courses}
        </Typography>
        <CoursesSC>
          <Card
            logo={UELogo}
            title="Unreal Engine"
            gradient="to right, #7b91db, #7a4eda"
            onClick={handleOpen}
          />
          <Card
            logo={unityLogo}
            title="Unity 3D"
            content="coming soon"
            gradient="to right, #814fd3, #ac50ce"
          />
        </CoursesSC>
      </ContentSC>
      <ContentSC id="conditions" width="100%">
        <DividerContainerSC>
          <DividerSC />
          <Typography
            variant="h2"
            fontFamily="Brutal-Regular"
            color="#fff"
          >
            {pricesTitle}
          </Typography>
        </DividerContainerSC>
        <Typography
          variant="h5"
          align="left"
          fontFamily="Brutal-Regular"
          color="#fff"
        >
          {pricesSubTitle}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Price>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular"
                color="#ffee33"
              >
                69.000 AMD
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular"
                color="#fff"
              >
                Monthly base price
              </Typography>
            </Price>
            <Price>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular"
                color="#ffee33"
              >
                59.000 AMD
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular"
                color="#fff"
              >
                Monthly discounted price for all kind of artists (3D modellers, painters, musicians etc…)
                and programmers. A link to the portfolio is required to be sent to our e-mail address.
              </Typography>
            </Price>
            <Price>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular"
                color="#ffee33"
              >
                49.000 AMD
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular"
                color="#fff"
              >
                Discounted monthly price for all students. Student card is required to be sent to our e-mail address.
              </Typography>
            </Price>
            <Price>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular"
                color="#ffee33"
              >
                29.000 AMD
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular"
                color="#fff"
              >
                Monthly discounted price for our war heros,their children and soldiers just finished serving in army.
                Army ticket scan is required to be sent to our e-mail address.
              </Typography>
            </Price>
          </div>
          <Image src={times} />
        </div>
        <Gradient3 />
      </ContentSC>
      <ContentSC id="registration">
        <Typography
          variant="h2"
          align="center"
          mb={5}
          fontFamily="Brutal-Regular"
        >
          registration
        </Typography>
      </ContentSC>
      <ContentSC id="faq">
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </ContentSC>
      <Modal open={open} onClose={handleClose}>
        <CourseModal>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {coursesDetailsTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </CourseModal>
      </Modal>
    </ContainerSC>
  );
}

/* eslint-disable max-len */
import { useState } from "react";
import {
  Typography,
  Modal,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Header } from "../components/header";
import { ParticlesBackground } from "../components/particles";
import { Description } from "../components/description";
import { Card } from "../components/card";
import UELogo from "../assets/images/UE_Logo1.png";
import unityLogo from "../assets/images/unity.png";
import winImg from "../assets/images/win.jpg";
import img1 from "../assets/images/1.jfif";

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
  PriceContainerSC,
  ConditionsSC,
  Gradient4,
  AccordionSC,
  AccordionSummarySC,
  AccordionDetailsSC,
} from "./mui";

const coursesTitle = "Lesson classes";
const courses = "Choosing the game engine is one of the first steps of starting development.";

const coursesDetailsTitle = "Courses overview";

const pricesTitle = "Conditions of education";
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

const faq = [
  {
    id: 1,
    question: "Do I need to have programming skills for game development?",
    answer: ["Knowing the programming is an advantage, however, in the beginner's course we will also teach you the basics of programming."],
  },
  {
    id: 2,
    question: "Will the couses be online or in place?",
    answer: ["For the beginners courses only in place. One of the key points of our academy is to establish connections, building teams of different peoples. It can be better achieved through in place studies."],
  },
  {
    id: 3,
    question: "How can i register for the course?",
    answer: ["You will need to submit your request through the link in the submission form below."],
  },
  {
    id: 4,
    question: "How long is the beginners course?",
    answer: ["The beginners course will take 3 months, 36 lessons, 3 lessons per week. A lesson will last 2 hours."],
  },
  {
    id: 5,
    question: "What are the schedules for the courses?",
    answer: ["A lesson is 2 hours long. Monday-Saturday", "10:00-12:00, 13:00-15:00, 16:00-18:00, 19:00-21:00."],
  },
  {
    id: 6,
    question: "How many participants are there during one lesson?",
    answer: ["There will be 4 participants for each lesson at a time."],
  },
  {
    id: 7,
    question: "What am I required to have for the classes?",
    answer: ["Home PC or a laptop for homeworks with these minimum specifications", "8 GB Ram, I3 or equivalent AMD CPU, at least 30 GB of free disk space, 1GB GPU.", "Unreal Engine or Unity installed and logged in.", "USB flash drive with minimum 2 GB free space."],
  },
  {
    id: 8,
    question: "Will the PCs be provided during classes?",
    answer: ["Yes. We provide all the necessaries for the classes."],
  },
  {
    id: 9,
    question: "What are the benefits of attending in place classes?",
    answer: ["Game development is, first of all, a teamwork of many people.  It's a hard work especially when learning alone. Here are some benefits of learning at our academy in place.", "1-Meeting people and having friends with the same mindset.", "2-Having tasks to complete within required timeframes that will keep your learning progress on going.", "3-Experianced mentorship that will answer your questions.", "4-A working protoype of a game by the end of the course.", "5-Knowledge of pipelines in the industry.", "6-Homeworks that will also keep you onboard.", "7-Membership in a community after courses that will help your learning progress after completing the basic course", "and much more."],
  },
  {
    id: 10,
    question: "Can I attend individual classes?",
    answer: ["For the current period we don't have the individual classes."],
  },
];

export function Layout() {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const smoothScroll = (e) => {
    const element = document.getElementById(e.target.name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
      <ContentSC id="conditions" width="80vw">
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
        <ConditionsSC>
          <PriceContainerSC>
            <Typography
              variant="h4"
              align="left"
              fontFamily="Brutal-Regular"
              color="#fff"
            >
              Beginner course
            </Typography>
            <div>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular"
                color="#ffee33"
              >
                Duration
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular"
                color="#fff"
              >
                3 months
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular"
                color="#ffee33"
              >
                Course Format
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular"
                color="#fff"
              >
                All classes are held offline
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular"
                color="#ffee33"
              >
                Commitment
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular"
                color="#fff"
              >
                6 hours/week
              </Typography>
            </div>
          </PriceContainerSC>
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
        </ConditionsSC>
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
        <Typography
          variant="h2"
          align="center"
          fontFamily="Brutal-Regular"
          color="#fff"
          mb={2}
        >
          FAQ
        </Typography>
        <Typography
          variant="h6"
          align="center"
          fontFamily="Brutal-Regular"
          color="#fff"
          mb={4}
        >
          Helpful Information
        </Typography>
        <PriceContainerSC>
          {faq.map((f) => (
            <AccordionSC key={f.id} expanded={expanded === f.id} onChange={handleChange(f.id)}>
              <AccordionSummarySC
                expandIcon={<ExpandMoreIcon />}
                id={f.id}
              >
                <Typography fontFamily="Brutal-Regular" color="#ffee33" fontSize={16}>
                  {f.question}
                </Typography>
              </AccordionSummarySC>
              <AccordionDetailsSC>
                {f.answer.map((answer) => (
                  <Typography fontFamily="Brutal-Regular" color="#fff" fontSize={14}>{answer}</Typography>
                ))}
              </AccordionDetailsSC>
            </AccordionSC>
          ))}
        </PriceContainerSC>
        <Gradient4 />
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

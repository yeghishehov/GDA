import { useState } from "react";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  ContentSC,
  PriceContainerSC,
  Gradient4,
  AccordionSC,
  AccordionSummarySC,
  AccordionDetailsSC,
  ContainerSC,
} from "./mui";

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

export function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ContentSC id="faq">
      <ContainerSC>
        <Typography
          variant="h2"
          align="center"
          fontFamily="Brutal-Regular"
          color="#fff"
          mb={2}
          sx={{
            fontSize: {
              md: "3.45rem",
              sm: "2.75rem",
              xs: "1.5rem",
            },
          }}
        >
          FAQ
        </Typography>
        <Typography
          variant="h6"
          align="center"
          fontFamily="Brutal-Regular"
          color="#fff"
          mb={4}
          sx={{
            fontSize: {
              md: "1.25rem;",
              sm: "1rem",
              xs: "1rem",
            },
          }}
        >
          Helpful Information
        </Typography>
        <PriceContainerSC sx={{ mb: 20 }}>
          {faq.map((f) => (
            <AccordionSC key={f.id} expanded={expanded === f.id} onChange={handleChange(f.id)}>
              <AccordionSummarySC
                expandIcon={<ExpandMoreIcon />}
                id={f.id}
              >
                <Typography
                  fontFamily="Brutal-Regular"
                  color="#ffee33"
                  sx={{
                    fontSize: {
                      md: "1.25rem;",
                      sm: "1rem",
                      xs: "1rem",
                    },
                  }}
                >
                  {f.question}
                </Typography>
              </AccordionSummarySC>
              <AccordionDetailsSC>
                {f.answer.map((answer, index) => (
                  <Typography
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    fontFamily="Brutal-Regular"
                    color="#fff"
                    sx={{
                      fontSize: {
                        md: "1rem;",
                        sm: "0.8rem",
                        xs: "0.8rem",
                      },
                    }}
                  >
                    {answer}

                  </Typography>
                ))}
              </AccordionDetailsSC>
            </AccordionSC>
          ))}
        </PriceContainerSC>
      </ContainerSC>
      <Gradient4 />
    </ContentSC>
  );
}

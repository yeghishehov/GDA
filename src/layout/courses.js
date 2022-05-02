import { useState } from "react";
import { Typography, Modal } from "@mui/material";
import question from "../assets/images/question.png";
import { Card } from "../components/card";
import UELogo from "../assets/images/UE_Logo1.png";
import unityLogo from "../assets/images/unity.png";

import {
  ContentSC, CoursesSC, CourseModal, ContainerSC,
} from "./mui";

const coursesTitle = "Lesson classes";
const courses = "Choosing the game engine is one of the first steps of starting development.";
const coursesDetailsTitle = "Courses overview";

export function Courses() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ContentSC id="courses" sx={{ display: "flex", flexDirection: "column" }}>
      <ContainerSC>
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
          {coursesTitle}
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
          <Card
            logo={question}
            title="coming soon"
            // content="coming soon"
            gradient="to right, #858585, #858585"
          />
          <Card
            logo={question}
            title="coming soon"
            // content="coming soon"
            gradient="to right, #858585, #858585"
          />
          <Card
            logo={question}
            title="coming soon"
            // content="coming soon"
            gradient="to right, #858585, #858585"
          />
          <Card
            logo={question}
            title="coming soon"
            // content="coming soon"
            gradient="to right, #858585, #858585"
          />
        </CoursesSC>
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
    </ContentSC>
  );
}

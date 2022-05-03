/* eslint-disable max-len */
import { useState } from "react";
import { Typography, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import question from "../assets/images/question.png";
import { Card } from "../components/card";
import UELogo from "../assets/images/UE_Logo1.png";
import unityLogo from "../assets/images/unity.png";

import {
  ContentSC, CoursesSC, CourseModal, ContainerSC,
} from "./mui";

const coursesTitle = "Lesson classes";
const courses = "Choosing the game engine is one of the first steps of starting development.";
const overviews = {
  "Unreal Engine": [
    "Introduction to engine",
    "Coordinates, Transforms, Units, and Organization",
    "Applying Lighting and Rendering",
    "Creating and Using Materials",
    "Using Audio Systems",
    "Creating Landscapes and Foliage",
    "Using Static and Skeletal Meshes",
    "Cinematic",
    "Animations",
    "AI",
    "Optimization",
    "Practice, teamworks and homeworks",
  ],
};

export function Courses() {
  const [open, setOpen] = useState(false);
  const [overview, setOverview] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const handleOpen = (e) => {
    setSelectedCourse(e.currentTarget.id);
    setOverview(overviews[e.currentTarget.id]);
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedCourse("");
    setOverview([]);
    setOpen(false);
  };
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
            id="Unreal Engine"
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
            <Typography variant="h4" component="h2" fontFamily="Brutal-Regular">
              {selectedCourse}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <List>
                {overview.slice(0, Math.round(overview.length / 2)).map((item) => (
                  <ListItem key={item}>
                    <AddIcon sx={{ mr: 1 }} />
                    <ListItemText primary={item} secondary="" />
                  </ListItem>
                ))}
              </List>
              <List>
                {overview.slice(Math.round(overview.length / 2), overview.length).map((item) => (
                  <ListItem key={item}>
                    <AddIcon sx={{ mr: 1 }} />
                    <ListItemText primary={item} secondary="" />
                  </ListItem>
                ))}
              </List>
            </Box>
          </CourseModal>
        </Modal>
      </ContainerSC>
    </ContentSC>
  );
}

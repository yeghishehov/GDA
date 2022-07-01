/* eslint-disable max-len */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import question from "../assets/images/question.png";
import UELogo from "../assets/images/UE_Logo1.png";
// import UELogoBlack from "../assets/images/UE_Logo.png";
import dotImg from "../assets/images/dot.png";
// import arrowImg from "../assets/images/arrow.png";
import unityLogo from "../assets/images/unity.png";
import unityBlackLogo from "../assets/images/unity-black.png";
import { Card } from "../components/card";

import {
  ContentSC, CoursesSC, CourseModal, ContainerSC, CourseIcon,
} from "./mui";

// const coursesTitle = "Lesson classes";
const coursesTitle = "Բոլոր դասընթացները";
// const courses = "Choosing the game engine is one of the first steps of starting development.";
// const over`views = {
//   "Unreal Engine": [
//     "Introduction to engine",
//     "Coordinates, Transforms, Units, and Organization",
//     "Applying Lighting and Rendering",
//     "Creating and Using Materials",
//     "Using Audio Systems",
//     "Creating Landscapes and Foliage",
//     "Using Static and Skeletal Meshes",
//     "Cinematic",
//     "Animations",
//     "AI",
//     "Optimization",
//     "Practice, teamworks and homeworks",
//     "And much more",
//   ],
//   "Unity 3D": [
//     "Introduction to engine",
//     "Coordinates, Transforms, Units, and Organization",
//     "Applying Lighting and Rendering",
//     "Creating and Using shaders",
//     "Using Audio Systems",
//     "Creating Terrain",
//     "Using Static and Skeletal Meshes",
//     "Cinematic",
//     "Animations",
//     "AI",
//     "Optimization",
//     "Practice, teamworks and homeworks",
//     "And much more",
//   ],
// };`
const icons = {
  "Unreal Engine": dotImg, // arrowImg, // UELogoBlack,
  "Unity 3D": unityBlackLogo,
};

export function Courses() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [overview, setOverview] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const handleOpen = (e) => {
    // setSelectedCourse(e.currentTarget.id);
    // setOverview(overviews[e.currentTarget.id]);
    // setOpen(true);
    navigate(`/course/${e.currentTarget.id}`);
  };
  const handleClose = () => {
    setSelectedCourse("");
    setOverview([]);
    setOpen(false);
  };
  return (
    <ContentSC id="courses" sx={{ display: "flex", flexDirection: "column" }}>
      <ContainerSC sx={{ mb: 5 }}>
        <Typography
          variant="h2"
          align="center"
          mt={5}
          mb={2}
          fontFamily="Brutal-Regular,sans-serif"
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
        {/* <Typography
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
        </Typography> */}
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
            id="Unity 3D"
            title="Unity 3D"
            // content="coming soon"
            // content="Շուտով"
            gradient="to right, #814fd3, #ac50ce"
            onClick={handleOpen}
          />
          <Card
            logo={question}
            title="Շուտով"
            // title="coming soon"
            // content="coming soon"
            gradient="to right, #858585, #858585"
            disabled
          />
          <Card
            logo={question}
            title="Շուտով"
            // title="coming soon"
            // content="coming soon"
            gradient="to right, #858585, #858585"
            disabled
          />
          <Card
            logo={question}
            title="Շուտով"
            // title="coming soon"
            // content="coming soon"
            gradient="to right, #858585, #858585"
            disabled
          />
          <Card
            logo={question}
            title="Շուտով"
            // title="coming soon"
            // content="coming soon"
            gradient="to right, #858585, #858585"
            disabled
          />
        </CoursesSC>
        <Modal open={open} onClose={handleClose}>
          <CourseModal>
            <Typography
              variant="h4"
              component="h2"
              fontFamily="Brutal-Regular,sans-serif"
              sx={{
                fontSize: {
                  md: "2rem",
                  sm: "1.7rem",
                  xs: "1.4rem",
                },
              }}
            >
              {selectedCourse}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {overview.slice(0, Math.round(overview.length / 2)).map((item) => (
                  <ListItem key={item}>
                    {/* <AddIcon sx={{ mr: 1 }} /> */}
                    <CourseIcon src={icons[selectedCourse]} alt="course icon" />
                    <ListItemText
                      primary={item}
                      secondary=""
                      primaryTypographyProps={{
                        sx: {
                          fontSize: {
                            md: "1rem",
                            sm: "0.9rem",
                            xs: "0.6rem",
                          },
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              <List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {overview.slice(Math.round(overview.length / 2), overview.length).map((item) => (
                  <ListItem key={item}>
                    <CourseIcon src={icons[selectedCourse]} alt="course icon" />
                    {/* <AddIcon sx={{ mr: 1 }} /> */}
                    <ListItemText
                      primary={item}
                      secondary=""
                      primaryTypographyProps={{
                        sx: {
                          fontSize: {
                            md: "1rem;",
                            sm: "0.9rem",
                            xs: "0.6rem",
                          },
                        },
                      }}
                    />
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

/* eslint-disable max-len */
import { useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Card } from "../components/card";
import { courses } from "../data/Course.data";

import { CourseModal } from "../components/modal";

import {
  ContentSC,
  CoursesSC,
  // CourseModal,
  ContainerSC,
  // CourseIcon,
} from "./mui";

const coursesTitle = "Բոլոր դասընթացները";

export function Courses() {
  const modalRef = useRef({ onOpen: () => {} });

  const handleOpen = (courseInfo) => {
    modalRef.current.onOpen(courseInfo);
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
        <CoursesSC>
          {courses.map((item) => (
            <Card
              key={item.title}
              logo={item.icon}
              id={item.title}
              title={item.title}
              gradient="to right, #7b91db, #7a4eda"
              onClick={() =>
                !item.commingSoon &&
                !item.disabled &&
                handleOpen(item)
              }
              disabled={item.disabled}
              content={item.commingSoon ? "Շուտով" : ""}
            />
          ))}
        </CoursesSC>

        <CourseModal ref={modalRef} />
      </ContainerSC>
    </ContentSC>
  );
}

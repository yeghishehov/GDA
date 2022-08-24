import React, { forwardRef, useState, useImperativeHandle } from "react";
// import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import dotImg from "../../../assets/images/dot.png";

import { /* CourseModal, */ CourseIcon } from "../../../layout/mui";

export default forwardRef(({ onClose }, ref) => {
  const [open, setOpen] = useState(false);
  const [courseItem, setCourseItem] = useState({});

  useImperativeHandle(ref, () => ({
    onOpen: (data) => {
      setOpen(true);
      setCourseItem(data);
    },
  }));

  if (!open) {
    return null;
  }

  const { title, description, courseData } = courseItem;
  const { course, conditions, retgistrationURL } = courseData;

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      sx={{
        zIndex: 99999,
        "& .MuiDialog-paper": {
          background: "#f5f1f7"
        }
      }}
    >
      {/* <CourseModal> */}
      <DialogTitle sx={{
        fontSize: {
          md: "2rem",
          sm: "1.7rem",
          xs: "1.4rem",
        },
        textAlign: "center"
      }}
      >
        {title}
        {!!description && (
          <Typography component="p" fontFamily="Calibri" align="center">
            {description}
          </Typography>
        )}
      </DialogTitle>

      <DialogContent dividers>
        {!!Object.keys(conditions || {}).length && (
          <>
            <Typography
              variant="h4"
              component="h4"
              fontFamily="Brutal-Regular,sans-serif"
              align="center"
            >
              Պայմաններ
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                {Object.keys(conditions || {}).map((key) => (
                  <ListItem key={key}>
                    {/* <AddIcon sx={{ mr: 1 }} /> */}
                    <CourseIcon src={dotImg} alt="course icon" />
                    <ListItemText
                      primary={`${key}: ${conditions[key]}`}
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
            </Box>
          </>
        )}
        {!!course?.length && (
          <>
            <Typography
              variant="h4"
              component="h4"
              fontFamily="Brutal-Regular,sans-serif"
              align="center"
            >
              Lesson Components
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {course.slice(0, Math.round(course.length / 2)).map((item) => (
                  <ListItem key={item}>
                    {/* <AddIcon sx={{ mr: 1 }} /> */}
                    <CourseIcon src={dotImg} alt="course icon" />
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
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {course
                  .slice(Math.round(course.length / 2), course.length)
                  .map((item) => (
                    <ListItem key={item}>
                      <CourseIcon src={dotImg} alt="course icon" />
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
          </>
        )}
      </DialogContent>
      {retgistrationURL && (
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            component="a"
            href={retgistrationURL}
            target="_blank"
            rel="noreferrer"
            sx={{ p: 1, pl: 3, pr: 3, fontSize: "0.9375rem", }}
          >
            Դիմել հիմա
          </Button>
        </DialogActions>
      )}

      {/* </CourseModal> */}
    </Dialog>
  );
});

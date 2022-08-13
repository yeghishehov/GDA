/* eslint-disable max-len */
import Typography from "@mui/material/Typography";
import { Card } from "../components/card";
import { ecosystems } from "../data/Ecosystem.data";

import { ContentSC, CoursesSC, ContainerSC } from "./mui";

const coursesTitle = "Բոլոր դասընթացները";

export function Ecosystems() {
  return (
    <ContentSC id="ecosystem" sx={{ display: "flex", flexDirection: "column" }}>
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
          {ecosystems.map((item) => (
            <Card
              logo={item.icon}
              id={item.title}
              title={item.title}
              gradient="to right, #7b91db, #7a4eda"
            />
          ))}
        </CoursesSC>
      </ContainerSC>
    </ContentSC>
  );
}

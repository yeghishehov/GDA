/* eslint-disable max-len */
import { Typography } from "@mui/material";

import {
  ContentSC,
  Gradient3,
  // DividerSC,
  DividerContainerSC,
  Price,
  ConditionsSC,
  PriceContainerSC,
  ContainerSC,
} from "./mui";

const pricesTitle = "Conditions of education";
// const price = "69.000 AMD, 59.000 AMD, 49.000 AMD, 29.000 AMD";

export function Conditions() {
  return (
    <ContentSC id="conditions">
      <ContainerSC>
        <DividerContainerSC>
          {/* <DividerSC /> */}
          <Typography
            variant="h2"
            fontFamily="Brutal-Regular"
            color="#fff"
            align="center"
            sx={{
              fontSize: {
                md: "3.45rem",
                sm: "2.75rem",
                xs: "1.5rem",
              },
            }}
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
              sx={{
                fontSize: {
                  md: "3rem;",
                  sm: "2.2rem",
                  xs: "1.4rem",
                },
              }}
            >
              Beginner course
            </Typography>
            <div>
              <Typography
                variant="h6"
                align="center"
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
                Duration
              </Typography>
              <Typography
                variant="body1"
                align="center"
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
                3 months
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                align="center"
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
                Course Format
              </Typography>
              <Typography
                variant="body1"
                align="center"
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
                All classes are held offline
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                align="center"
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
                Commitment
              </Typography>
              <Typography
                variant="body1"
                align="center"
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
                6 hours/week
              </Typography>
            </div>
          </PriceContainerSC>
          <div style={{ margin: "auto" }}>
            <Price>
              <Typography
                variant="h6"
                align="center"
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
                69.000 AMD
              </Typography>
              <Typography
                variant="body1"
                align="center"
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
                Monthly base price
              </Typography>
            </Price>
            <Price>
              <Typography
                variant="h6"
                align="center"
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
                59.000 AMD
              </Typography>
              <Typography
                variant="body1"
                align="center"
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
                sx={{
                  fontSize: {
                    md: "1.25rem;",
                    sm: "1rem",
                    xs: "1rem",
                  },
                }}
              >
                49.000 AMD
              </Typography>
              <Typography
                variant="body1"
                align="center"
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
                Discounted monthly price for all students. Student card is required to be sent to our e-mail address.
              </Typography>
            </Price>
            <Price>
              <Typography
                variant="h6"
                align="center"
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
                29.000 AMD
              </Typography>
              <Typography
                variant="body1"
                align="center"
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
                Monthly discounted price for our war heros,their children and soldiers just finished serving in army.
                Army ticket scan is required to be sent to our e-mail address.
              </Typography>
            </Price>
          </div>
        </ConditionsSC>
      </ContainerSC>
      <Gradient3 />
    </ContentSC>
  );
}

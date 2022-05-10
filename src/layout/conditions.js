/* eslint-disable max-len */
import { Box, Typography } from "@mui/material";

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

// const pricesTitle = "Conditions of education";
const pricesTitle = "Կրթության պայմանները";

export function Conditions() {
  return (
    <ContentSC id="conditions">
      <ContainerSC>
        <DividerContainerSC>
          {/* <DividerSC /> */}
          <Typography
            variant="h2"
            fontFamily="Brutal-Regular,sans-serif"
            color="#fff"
            align="center"
            mt={5}
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
        <ConditionsSC sx={{ mb: 4 }}>
          <PriceContainerSC>
            <Typography
              variant="h4"
              align="left"
              fontFamily="Brutal-Regular,sans-serif"
              color="#fff"
              sx={{
                fontSize: {
                  md: "2.5rem;",
                  sm: "1.8rem",
                  xs: "1.2rem",
                },
              }}
            >
              Հիմունքներ
              {/* Beginner course */}
            </Typography>
            <div>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#ffee33"
                sx={{
                  fontSize: {
                    md: "1.25rem;",
                    sm: "1rem",
                    xs: "1rem",
                  },
                }}
              >
                Տևողությունը
                {/* Duration */}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#fff"
                sx={{
                  fontSize: {
                    md: "1rem;",
                    sm: "0.8rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {/* 3 months */}
                3 ամիս
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#ffee33"
                sx={{
                  fontSize: {
                    md: "1.25rem;",
                    sm: "1rem",
                    xs: "1rem",
                  },
                }}
              >
                Դասընթացի ձևաչափ
                {/* Course Format */}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#fff"
                sx={{
                  fontSize: {
                    md: "1rem;",
                    sm: "0.8rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {/* All classes are held offline */}
                Բոլոր դասերն անցկացվում են օֆլայն (լսարանային)
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#ffee33"
                sx={{
                  fontSize: {
                    md: "1.25rem;",
                    sm: "1rem",
                    xs: "1rem",
                  },
                }}
              >
                {/* Commitment */}
                Դասաժամեր
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#fff"
                sx={{
                  fontSize: {
                    md: "1rem;",
                    sm: "0.8rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {/* 6 hours/week */}
                6 ժամ/շաբաթ
              </Typography>
            </div>
          </PriceContainerSC>
          <div>
            <Price>
              <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%",
              }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  fontFamily="Brutal-Regular,sans-serif"
                  color="#ffee33"
                  sx={{
                    fontSize: {
                      md: "1.25rem;",
                      sm: "1rem",
                      xs: "1rem",
                    },
                    display: "inline-block",
                    mr: 1,
                  }}
                >
                  {/* 39.000 AMD */}
                  39.000 ֏
                </Typography>
                <Typography
                  align="center"
                  fontFamily="Brutal-Regular,sans-serif"
                  color="#c1b425"
                  sx={{
                    fontSize: {
                      md: "1rem;",
                      sm: "0.85rem",
                      xs: "0.85rem",
                    },
                    textDecoration: "line-through",
                    display: "inline-block",
                  }}
                >
                  {/* 69.000 AMD */}
                  69.000 ֏
                </Typography>
              </Box>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#fff"
                sx={{
                  fontSize: {
                    md: "1rem;",
                    sm: "0.8rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {/* Monthly base price */}
                Դասընթացների հիմնական ամսեկան արժեքը
              </Typography>
            </Price>
            <Price>
              <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%",
              }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  fontFamily="Brutal-Regular,sans-serif"
                  color="#ffee33"
                  sx={{
                    fontSize: {
                      md: "1.25rem;",
                      sm: "1rem",
                      xs: "1rem",
                    },
                    display: "inline-block",
                    mr: 1,
                  }}
                >
                  39.000 ֏
                </Typography>
                <Typography
                  align="center"
                  fontFamily="Brutal-Regular,sans-serif"
                  color="#c1b425"
                  sx={{
                    fontSize: {
                      md: "1rem;",
                      sm: "0.85rem",
                      xs: "0.85rem",
                    },
                    textDecoration: "line-through",
                    display: "inline-block",
                  }}
                >
                  59.000 ֏
                </Typography>
              </Box>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#fff"
                sx={{
                  fontSize: {
                    md: "1rem;",
                    sm: "0.8rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {/* Monthly discounted price for all kind of artists (3D modellers, painters, musicians etc…)
                and programmers. A link to the portfolio is required to be sent to our e-mail address. */}
                Դասընթացների ամսեկան գինը արվեստագետների և ծրագրավորողների համար։
              </Typography>
            </Price>
            <Price>
              <Box sx={{
                display: "flex", justifyContent: "center", alignItems: "flex-end", width: "100%",
              }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  fontFamily="Brutal-Regular,sans-serif"
                  color="#ffee33"
                  sx={{
                    fontSize: {
                      md: "1.25rem;",
                      sm: "1rem",
                      xs: "1rem",
                    },
                    display: "inline-block",
                    mr: 1,
                  }}
                >
                  39.000 ֏
                </Typography>
                <Typography
                  align="center"
                  fontFamily="Brutal-Regular,sans-serif"
                  color="#c1b425"
                  sx={{
                    fontSize: {
                      md: "1rem;",
                      sm: "0.85rem",
                      xs: "0.85rem",
                    },
                    textDecoration: "line-through",
                    display: "inline-block",
                  }}
                >
                  49.000 ֏
                </Typography>
              </Box>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#fff"
                sx={{
                  fontSize: {
                    md: "1rem;",
                    sm: "0.8rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {/* Discounted monthly price for all students. Student card is required to be sent to our e-mail address. */}
                Դասընթացների ամսեկան գինը ուսանողների համար։ Ուսանողական քարտը պետք է ուղարկել info@gda.am էլ․ հասցեյին նշելով անունը և ազգանունը։
              </Typography>
            </Price>
            <Price>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#ffee33"
                sx={{
                  fontSize: {
                    md: "1.25rem;",
                    sm: "1rem",
                    xs: "1rem",
                  },
                }}
              >
                39.000 ֏
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#fff"
                sx={{
                  fontSize: {
                    md: "1rem;",
                    sm: "0.8rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {/* Discounted monthly price for those who have finished serving in army no more thanone year ago. */}
                Դասընթացների ամսեկան գին բանակից 1 տարվա ընթացքում զորացրվածների համար։
              </Typography>
            </Price>
            <Price>
              <Typography
                variant="h6"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#ffee33"
                sx={{
                  fontSize: {
                    md: "1.25rem;",
                    sm: "1rem",
                    xs: "1rem",
                  },
                }}
              >
                29.000 ֏
              </Typography>
              <Typography
                variant="body1"
                align="center"
                fontFamily="Brutal-Regular,sans-serif"
                color="#fff"
                sx={{
                  fontSize: {
                    md: "1rem;",
                    sm: "0.8rem",
                    xs: "0.8rem",
                  },
                }}
              >
                {/* Monthly discounted price for our war heros,their children and soldiers just finished serving in army.
                Army ticket scan is required to be sent to our e-mail address. */}
                Դասընթացների ամսեկան գինը 2020 թ-ի պատերազմի մասնակիցների և իրենց երեխաների համար։
              </Typography>
            </Price>
          </div>
        </ConditionsSC>
      </ContainerSC>
      <Gradient3 />
    </ContentSC>
  );
}

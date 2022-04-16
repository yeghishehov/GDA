/* eslint-disable max-len */
import { Typography } from "@mui/material";

import {
  ContentSC,
  Gradient3,
  DividerSC,
  DividerContainerSC,
  Price,
  ConditionsSC,
  PriceContainerSC,
} from "./mui";

const pricesTitle = "Conditions of education";
// const price = "69.000 AMD, 59.000 AMD, 49.000 AMD, 29.000 AMD";

export function Conditions() {
  return (
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
  );
}

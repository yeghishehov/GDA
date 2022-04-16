import { Typography } from "@mui/material";
import { ContentSC } from "./mui";

export function Registration() {
  return (
    <ContentSC id="registration">
      <Typography
        variant="h2"
        align="center"
        mb={5}
        fontFamily="Brutal-Regular"
      >
        registration
      </Typography>
      <iframe
        title="reg"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfZhizwXzhHWnRf5w_ULtV-cWdp_QRnvYuXs9gLO7B8YNujkA/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        width="75vw"
        height="100%"
      >
        Loading…
      </iframe>
    </ContentSC>
  );
}

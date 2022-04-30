import { Typography } from "@mui/material";
import { ContainerSC, ContentSC, IframeSC } from "./mui";

export function Registration() {
  return (
    <ContentSC id="registration">
      <ContainerSC>
        <Typography
          variant="h2"
          align="center"
          mb={5}
          fontFamily="Brutal-Regular"
          sx={{
            fontSize: {
              md: "3.45rem",
              sm: "2.75rem",
              xs: "1.5rem",
            },
          }}
        >
          registration
        </Typography>
      </ContainerSC>
      <IframeSC
        title="reg"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfZhizwXzhHWnRf5w_ULtV-cWdp_QRnvYuXs9gLO7B8YNujkA/viewform?embedded=true"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
      >
        Loading…
      </IframeSC>
    </ContentSC>
  );
}

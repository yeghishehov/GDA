import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Box, Typography } from "@mui/material";
import { ContainerSC, ContentSC } from "./mui";
import mapMob from "../assets/images/map-m.png";
import mapDesk from "../assets/images/map-d.png";

export function Contacts() {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <ContentSC id="contacts">
      <ContainerSC>
        <Typography
          variant="h2"
          align="center"
          fontFamily="Brutal-Regular,sans-serif"
          mt={5}
          mb={6}
          sx={{
            fontSize: {
              md: "3.45rem",
              sm: "2.75rem",
              xs: "1.5rem",
            },
          }}
        >
          Կոնտակտներ
        </Typography>
        <Grid container>
          <Grid item xs={12} m={1}>
            <a
              href="tel:+37495100159"
              style={{
                textDecoration: "none",
                color: "#0f172e",
                fontSize: 24,
              }}
            >
              (+374)&nbsp;9510&nbsp;0159
            </a>
          </Grid>
          <Grid item xs={12} m={1}>
            <Box sx={{ display: "inline-block", color: "#0f172e", fontSize: 24 }}>Ք.&nbsp;Երևան, Ալեք&nbsp;Մանուկյան&nbsp;2</Box>
          </Grid>
          <Grid item xs={12} m={1}>
            <a
              href="tel:+37495100159"
              style={{
                textDecoration: "none",
                color: "#0f172e",
                fontSize: 24,
              }}
            >
              info@gda.am
            </a>
          </Grid>
        </Grid>
        <Box sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "flex-end",
          zIndex: -1,
        }}
        >
          <img src={isMobile ? mapMob : mapDesk} alt="" width={isMobile ? "98%" : "80%"} />
        </Box>
        <Box sx={{
          padding: "20px 0px",
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        >
          <Link
            style={{ textDecoration: "none" }}
            to="/PrivacyPolicy"
          >
            Անձնական տվյալների մշակման պայմաններ
          </Link>
          ©
          {" "}
          {new Date().getFullYear() > 2022 ? "2022 - " : ""}
          {new Date().getFullYear()}
          {" "}
          Game Development Academy: Բոլոր իրավունքները պաշտպանված են։
        </Box>
      </ContainerSC>
    </ContentSC>
  );
}

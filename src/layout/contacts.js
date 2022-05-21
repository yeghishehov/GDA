import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Box, Typography } from "@mui/material";
import { ContainerSC, ContentSC } from "./mui";
import mapMob from "../assets/images/map-m.png";
import mapDesk from "../assets/images/map-d.png";
import fbImg from "../assets/images/social-baners/fbIcon.png";
import instaImg from "../assets/images/social-baners/instaIcon.png";
import tiktokImg from "../assets/images/social-baners/tiktokIcon.png";

const links = [
  { key: 1, href: "https://www.facebook.com/gamedevelopmentacademyarmenia", img: fbImg },
  { key: 2, href: "https://www.instagram.com/gamedevelopmentacademy", img: instaImg },
  { key: 3, href: "https://www.tiktok.com/@gamedevelopmentacademy", img: tiktokImg },
];

export function Contacts() {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <ContentSC id="contacts" sx={{ overflow: "hidden" }}>
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
          <Grid container mt={3} sx={{ width: "60%" }}>
            {links.map(({ key, href, img }) => (
              <Grid key={key} item xs={2} sm={2} md={1} lg={1}>
                <a href={href}>
                  <img src={img} alt="" width="80%" />
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Box sx={{
          position: "absolute",
          top: isMobile ? "70%" : "55%",
          right: 10,
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "flex-end",
          zIndex: -1,
          height: "100%",
        }}
        >
          <img src={isMobile ? mapMob : mapDesk} alt="" width={isMobile ? "98%" : "90%"} />
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

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ParticlesBackground } from "../../components/particles";
import emailImg from "../../assets/images/social-baners/email.png";
import fbImg from "../../assets/images/social-baners/fb.png";
import gdaImg from "../../assets/images/social-baners/gda.png";
import instaImg from "../../assets/images/social-baners/insta.png";
import phoneImg from "../../assets/images/social-baners/phone.png";
import tiktokImg from "../../assets/images/social-baners/tiktok.png";
import { Image } from "./mui";

export function Contacts() {
  return (
    <Container>
      <ParticlesBackground />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <a href="mailto:info@gda.am">
            <Image src={emailImg} />
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://www.facebook.com/gamedevelopmentacademyarmenia">
            <Image src={fbImg} />
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://www.gda.am">
            <Image src={gdaImg} reverse />
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://www.instagram.com/gamedevelopmentacademy">
            <Image src={instaImg} reverse />
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <a href="tel:+37495100159">
            <Image src={phoneImg} />
          </a>
        </Grid>
        <Grid item xs={6} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://www.tiktok.com/@gamedevelopmentacademy">
            <Image src={tiktokImg} />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}

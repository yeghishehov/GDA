import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ParticlesBackground } from "../../components/particles";
// import emailImg from "../../assets/images/social-baners/email.png";
import fbImg from "../../assets/images/social-baners/fb.png";
import gdaImg from "../../assets/images/social-baners/gda.png";
import instaImg from "../../assets/images/social-baners/insta.png";
import phoneImg from "../../assets/images/social-baners/phone.png";
import tiktokImg from "../../assets/images/social-baners/tiktok.png";
import { Image } from "./mui";

const contacts = [
  { id: 2, href: "https://www.facebook.com/gamedevelopmentacademyarmenia", img: fbImg },
  { id: 4, href: "https://www.instagram.com/gamedevelopmentacademy", img: instaImg },
  {
    id: 6, href: "https://www.tiktok.com/@gamedevelopmentacademy", img: tiktokImg, reverse: true,
  },
  {
    id: 5, href: "tel:+37495100159", img: phoneImg, reverse: true,
  },
  {
    id: 3, href: "https://www.gda.am", img: gdaImg,
  },
  // { id: 1, href: "mailto:info@gda.am", img: emailImg },
];

export function Contacts() {
  return (
    <Container sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    }}
    >
      <ParticlesBackground fixed />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {contacts.map(({
          id, href, img, reverse = false,
        }) => (
          <Grid key={id} item xs={6} sm={6} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <a href={href}>
              <Image src={img} reverse={reverse.toString()} />
            </a>
          </Grid>
        ))}
      </Grid>
      <Box sx={{
        padding: "20px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
      >
        ©
        {" "}
        {new Date().getFullYear() > 2022 ? "2022 - " : ""}
        {new Date().getFullYear()}
        {" "}
        Game Development Academy: Բոլոր իրավունքները պաշտպանված են։
      </Box>
    </Container>
  );
}

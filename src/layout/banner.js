import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import logo from "../assets/images/logo.svg";
import { BannerImage } from "../components/bannerImage";
import { ParticlesBackground } from "../components/particles";
// import { Description } from "../components/description";
import {
  ContainerHeaderSC,
  ContainerHeaderFixSC,
  ContentSC,
  ButtonSC,
  NavigationSC,
  NavigationFixSC,
} from "./mui";

const buttons = [
  { id: "about", text: "Ինչ է Game Dev-ը" },
  { id: "our mission", text: "Մեր առաքելությունը" },
  { id: "contacts", text: "Կոնտակտներ" },
  { id: "courses", text: "Դասընթացներ" },
  { id: "conditions", text: "Պայմաններ" },
  { id: "faq", text: "ՀՏՀ" },
];

export function Banner() {
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => () => timeoutId ?? clearTimeout(timeoutId), []);

  const smoothScroll = (e) => {
    const element = document.getElementById(e.target.name);
    if (element) {
      const id = setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeoutId(null);
      }, 0);
      setTimeoutId(id);
    }
  };

  return (
    <ContentSC id="home">
      <ParticlesBackground />

      <MobileDrawerWrapper smoothScroll={smoothScroll}>
        <img
          src={logo}
          alt=""
          width={44}
          name="home"
          onClick={smoothScroll}
          role="presentation"
          style={{ cursor: "pointer" }}
        />
        {buttons.map((button) => (
          <ButtonSC
            key={button.id}
            variant="text"
            size="large"
            name={button.id}
            onClick={smoothScroll}
            sx={{
              textTransform: "capitalize",
            }}
          >
            {button.text}
          </ButtonSC>
        ))}
        <ButtonSC
          variant="text"
          size="large"
          onClick={() => window.open("https://forms.gle/GYcdPGm95djBGnDJA")}
          reg="true"
        >
          {/* Enroll Now */}
          Դիմել հիմա
        </ButtonSC>
      </MobileDrawerWrapper>

      <ContainerHeaderSC>
        <NavigationSC />
        <BannerImage />
        {/* <Description /> */}
      </ContainerHeaderSC>
    </ContentSC>
  );
}

function MobileDrawerWrapper({ smoothScroll, children }) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isFixNav, setIsFixNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const changeNaxFix = () => {
      setIsFixNav(window.scrollY > 0);
    };
    window.addEventListener("scroll", changeNaxFix);
    return () => window.removeEventListener("scroll", changeNaxFix);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event
      && event.type === "keydown"
      && (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenuOpen(open);
  };

  return isMobile ? (
    <>
      <NavigationFixSC background={isFixNav}>
        <img
          src={logo}
          alt=""
          width={44}
          name="home"
          onClick={smoothScroll}
          role="presentation"
          style={{ cursor: "pointer" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ButtonSC
            variant="text"
            size="large"
            onClick={() => window.open("https://forms.gle/GYcdPGm95djBGnDJA")}
            reg="true"
          >
            {/* Enroll Now */}
            Դիմել հիմա
          </ButtonSC>
          <MenuIcon
            color="primary"
            onClick={toggleDrawer(true)}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </NavigationFixSC>
      <SwipeableDrawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        style={{ zIndex: 99999 }}
        PaperProps={{
          sx: {
            backgroundColor: "#1a1a32",
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </SwipeableDrawer>
    </>
  ) : (
    <NavigationFixSC background={isFixNav}>
      <ContainerHeaderFixSC>{children}</ContainerHeaderFixSC>
    </NavigationFixSC>
  );
}
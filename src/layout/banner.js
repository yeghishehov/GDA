import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import logo from "../assets/images/logo.svg";
import { Header } from "../components/header";
import { ParticlesBackground } from "../components/particles";
import { Description } from "../components/description";
import {
  ContainerHeaderSC, ContainerHeaderFixSC, ContentSC, ButtonSC, NavigationSC, NavigationFixSC,
} from "./mui";

const buttons = [
  "about",
  "our mission",
  "courses",
  "conditions",
  // "registration",
  "faq",
];

export function Banner() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [timeoutId, setTimeoutId] = useState(null);
  const [isFixNav, setIsFixNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const changeNaxFix = () => {
      setIsFixNav(window.scrollY > 0);
    };
    window.addEventListener("scroll", changeNaxFix);
    return () => {
      window.removeEventListener("scroll", changeNaxFix);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
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

  return (
    <ContentSC id="home">
      <ParticlesBackground />

      <NavigationFixSC background={isFixNav}>
        {!isMobile && (
          <ContainerHeaderFixSC>
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
                key={button}
                variant="text"
                size="large"
                name={button}
                onClick={smoothScroll}
              >
                {button}
              </ButtonSC>
            ))}
            <ButtonSC
              variant="text"
              size="large"
              onClick={() => window.open("https://forms.gle/GYcdPGm95djBGnDJA")}
              reg="true"
            >
              registration
            </ButtonSC>
          </ContainerHeaderFixSC>
        )}
        {isMobile && (
          <>
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
                Enroll Now
              </ButtonSC>
              <MenuIcon color="primary" onClick={toggleDrawer(true)} style={{ cursor: "pointer" }} />
            </Box>
          </>
        )}
      </NavigationFixSC>

      <ContainerHeaderSC>
        <NavigationSC />
        <Header />
        <Description />
      </ContainerHeaderSC>

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
              key={button}
              variant="text"
              size="large"
              name={button}
              onClick={smoothScroll}
            >
              {button}
            </ButtonSC>
          ))}
          <ButtonSC
            variant="text"
            size="large"
            onClick={() => window.open("https://forms.gle/GYcdPGm95djBGnDJA")}
            reg="true"
          >
            Enroll Now
          </ButtonSC>
        </Box>
      </SwipeableDrawer>
    </ContentSC>
  );
}

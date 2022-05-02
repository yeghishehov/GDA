import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
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
  const [isFixNav, setIsFixNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const smoothScroll = (e) => {
    const element = document.getElementById(e.target.name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const changeNaxFix = () => {
      setIsFixNav(window.scrollY > 0);
    };
    window.addEventListener("scroll", changeNaxFix);
    return () => {
      window.removeEventListener("scroll", changeNaxFix);
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
    <ContentSC id="banner">
      <ParticlesBackground />

      <NavigationFixSC background={isFixNav}>
        <ContainerHeaderFixSC>
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
        {isMobile && <MenuIcon color="primary" onClick={toggleDrawer(true)} />}
      </NavigationFixSC>

      <ContainerHeaderSC>
        <NavigationSC />
        <Header />
        <Description />
      </ContainerHeaderSC>

      <SwipeableDrawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <ContainerHeaderFixSC>
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
      </SwipeableDrawer>
    </ContentSC>
  );
}

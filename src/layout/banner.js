import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Header } from "../components/header";
import { ParticlesBackground } from "../components/particles";
import { Description } from "../components/description";
import {
  ContainerHeaderSC, ContentSC, ButtonSC, NavigationSC, NavigationFixSC,
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
  const isMobile1 = useMediaQuery("(max-width:658px)");
  const isMobile2 = useMediaQuery("(max-width:559px)");
  const isMobile3 = useMediaQuery("(max-width:357px)");
  const [isFixNav, setIsFixNav] = useState(false);
  const smoothScroll = (e) => {
    const element = document.getElementById(e.target.name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const changeNaxFix = () => {
      if (isMobile3) {
        setIsFixNav(window.scrollY > 80);
      } else if (isMobile2) {
        setIsFixNav(window.scrollY > 74);
      } else if (isMobile1) {
        setIsFixNav(window.scrollY > 59);
      } else {
        setIsFixNav(window.scrollY > 2);
      }
    };
    window.addEventListener("scroll", changeNaxFix);
    return () => {
      window.removeEventListener("scroll", changeNaxFix);
    };
  }, [isMobile1, isMobile2]);

  return (
    <ContentSC id="banner">
      <ParticlesBackground />
      {isFixNav && (
        <NavigationFixSC>
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
        </NavigationFixSC>
      )}
      <ContainerHeaderSC>
        <NavigationSC>
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
        </NavigationSC>
        <Header />
        <Description />
      </ContainerHeaderSC>
    </ContentSC>
  );
}

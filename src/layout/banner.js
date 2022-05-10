/* eslint-disable no-unused-expressions */
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import logo from "../assets/images/logo.svg";
import { BannerImage } from "../components/bannerImage";
import { ParticlesBackground } from "../components/particles";
import { getFireworks } from "../utils/fireworks";
// import { Description } from "../components/description";
import {
  ContainerHeaderSC,
  ContainerHeaderFixSC,
  ContentSC,
  ButtonSC,
  NavigationSC,
  NavigationFixSC,
  FireworksContainer,
} from "./mui";

const buttons = [
  { id: "courses", text: "Դասընթացներ" },
  { id: "conditions", text: "Պայմաններ" },
  { id: "about", text: "Ինչ է Game Dev-ը" },
  { id: "our mission", text: "Մեր առաքելությունը" },
  { id: "faq", text: "ՀՏՀ" },
  { id: "contacts", text: "Կոնտակտներ" },
];

const audio = new Audio(`${process.env.PUBLIC_URL}/shooting.mp3`);
audio.volume = 0.5;

const messages = [
  "Շնորհավոր😊Դու գտար ինձ😉Դե  քլիկ էլ մի արա, ավելիլավ է կայքը ուսումնասիրի😍",
  "Վայ մի արա😄խդիկ ես տալիս🤪",
  "Հերիք է, դու գտար ինձ, էլ ի՞նչ ես ուզում🧐",
  "Դէ´ վերջացրու, թէ չէ կնեղանամ😬",
  "Կյանքիտ թանկագին ժամանակը ինչի վրա ես մատնում?😱",
  "Իսկ դու գիտեդ, որ օպոսումները գիշերներն են արդուն🧐",
  "Շգիտեմ թէ ինչքանով օպոսումների մասին ինֆորնացիան կյանքում քեզ պետք կգա, բայց այդ ինֆորմացիան համարժեք է քո քլիկերի հետ😂",
  "Այստեղ կարող է լինել Ձեր գովազդը😂😂😂",
  "Դէ վերջացրու😕Հասնես 100-ի հաշիվտ կզոյանա մեկա🧐",
  "Բայց ինչ համառն ես հա դու😍😍😍",
  "Շնորհավոր🎉🥳👏Դու հենց նոր անիմաստ վատնեցիր կյանքիտ թանկարժեք րոպեները, որոնք չես կարող վերալիցքավորել😂👏👏👏Ես հիմա հաշվիչը կզրոյացնեմ և ամենինչ կսկսվի նորից😊Հույս ունեմ, որ այս անգամ անգին ժամանակտ ճիշտ կօգտագործես❤️‍🔥❤️‍🔥❤️‍🔥❤️❤️❤️ Ու ամենայն պարտադիր չէ մեր դասընթացներին մասնակցելու համար😍Կարևորը դու երջանիկ լինես😍 Բարով մնա իմ լավ ընկեր, դեռ կտեսնվենք😘😘😘",
];

export function Banner() {
  const [timeoutId, setTimeoutId] = useState(null);
  const [fireTimeoutId, setFireTimeoutId] = useState(null);
  const [mesTimeoutId, setMesTimeoutId] = useState(null);
  const [finTimeoutId, setFinTimeoutId] = useState(null);
  const [score, setScore] = useState(98);
  const [scoreFinished, setScoreFinished] = useState(false);
  const [message, setMessage] = useState("");
  const fireworks = useRef(null);

  useEffect(() => () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (fireTimeoutId) clearTimeout(timeoutId);
    if (mesTimeoutId) clearTimeout(mesTimeoutId);
    if (finTimeoutId) clearTimeout(finTimeoutId);
  }, []);

  useEffect(() => {
    fireworks.current = getFireworks();
  }, []);

  useEffect(() => {
    if (fireworks.current === null) {
      return;
    }
    if (score !== 0 && score % 10 === 0) {
      fireworks.current.start();
      const id = setTimeout(() => {
        fireworks.current.stop();
        setFireTimeoutId(null);
      }, 2000);
      setFireTimeoutId(id);
    }
  }, [score]);

  useEffect(() => {
    if (score === 0) {
      setMessage(messages[0]);
    } else if (score === 10) {
      setMessage(messages[1]);
    } else if (score === 20) {
      setMessage(messages[2]);
    } else if (score === 30) {
      setMessage(messages[3]);
    } else if (score === 40) {
      setMessage(messages[4]);
    } else if (score === 50) {
      setMessage(messages[5]);
    } else if (score === 60) {
      setMessage(messages[6]);
    } else if (score === 70) {
      setMessage(messages[7]);
    } else if (score === 80) {
      setMessage(messages[8]);
    } else if (score === 90) {
      setMessage(messages[9]);
    } else if (score === 100) {
      setMessage(messages[10]);
    }
  }, [score]);

  useEffect(() => {
    if (message !== "") {
      clearTimeout(mesTimeoutId);
      const id = setTimeout(() => {
        setMessage("");
        setMesTimeoutId(null);
      }, 10000);
      setMesTimeoutId(id);
    }
  }, [message]);

  useEffect(() => {
    if (scoreFinished) {
      const id = setTimeout(() => {
        setScore(-1);
        setScoreFinished(false);
        setFinTimeoutId(null);
      }, 10000);
      setFinTimeoutId(id);
    }
  }, [scoreFinished]);

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

  const clickHandler = () => {
    if (scoreFinished) {
      return;
    }

    setScore((state) => {
      if (state === 99) {
        setScoreFinished(true);
      }
      return state + 1;
    });

    if (score >= 3) audio.play();
  };

  return (
    <ContentSC id="home" onClick={clickHandler} sx={{ cursor: score >= 0 ? "crosshair" : "default" }}>
      <FireworksContainer id="fireworks" />
      <ParticlesBackground />
      {score >= 0 && (
        <>
          <Box
            sx={{
              position: "absolute",
              top: 60,
              right: 40,
              color: "yellow",
              fontSize: 30,
              fontFamily: "'VT323', monospace",
              userSelect: "none",
            }}
          >
            {`score: ${score}`}
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 90,
              left: 40,
              color: "orange",
              fontSize: 30,
              fontFamily: "'VT323', monospace",
              zIndex: 999999,
              background: "#00000070",
              maxWidth: "calc(100% - 80px)",
              userSelect: "none",
            }}
          >
            {message}
          </Box>
        </>

      )}

      <MobileDrawerWrapper smoothScroll={smoothScroll}>
        <img
          src={logo}
          alt=""
          width={44}
          name="home"
          onClick={smoothScroll}
          role="presentation"
          style={{ cursor: "pointer", userSelect: "none" }}
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
              userSelect: "none",
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
          sx={{ userSelect: "none" }}
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
          style={{ cursor: "pointer", userSelect: "none" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            userSelect: "none",
          }}
        >
          <ButtonSC
            variant="text"
            size="large"
            onClick={() => window.open("https://forms.gle/GYcdPGm95djBGnDJA")}
            reg="true"
            sx={{ userSelect: "none" }}
          >
            {/* Enroll Now */}
            Դիմել հիմա
          </ButtonSC>
          <MenuIcon
            color="primary"
            onClick={toggleDrawer(true)}
            style={{ cursor: "pointer", userSelect: "none" }}
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

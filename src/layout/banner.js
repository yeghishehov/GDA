import { Header } from "../components/header";
import { ParticlesBackground } from "../components/particles";
import { Description } from "../components/description";
import { ContentSC, ButtonSC, NavigationSC } from "./mui";

const buttons = [
  "about",
  "our mission",
  "courses",
  "conditions",
  "registration",
  "faq",
];

export function Banner() {
  const smoothScroll = (e) => {
    const element = document.getElementById(e.target.name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ContentSC id="banner">
      <ParticlesBackground />
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
      </NavigationSC>
      <Header />
      <Description />
    </ContentSC>
  );
}

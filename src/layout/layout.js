import { Banner } from "./banner";
import { About } from "./about";
import { Mission } from "./mission";
import { Courses } from "./courses";
import { Conditions } from "./conditions";
import { Registration } from "./registration";
import { Faq } from "./faq";
import { ContainerSC } from "./mui";

export function Layout() {
  return (
    <ContainerSC>
      <Banner />
      <About />
      <Mission />
      <Courses />
      <Conditions />
      <Registration />
      <Faq />
    </ContainerSC>
  );
}

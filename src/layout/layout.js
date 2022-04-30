import { Banner } from "./banner";
import { About } from "./about";
import { Mission } from "./mission";
import { Courses } from "./courses";
import { Conditions } from "./conditions";
// import { Registration } from "./registration";
import { Faq } from "./faq";

export function Layout() {
  return (
    <>
      <Banner />
      <About />
      <Mission />
      <Courses />
      <Conditions />
      {/* <Registration /> */}
      <Faq />
    </>
  );
}

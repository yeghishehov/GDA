import { Banner } from "./banner";
import { About } from "./about";
import { Mission } from "./mission";
import { Courses } from "./courses";
import { Conditions } from "./conditions";
// import { Registration } from "./registration";
import { Faq } from "./faq";
import { Contacts } from "./contacts";

export function Layout() {
  return (
    <>
      <Banner />
      <Courses />
      <Conditions />
      <About />
      <Mission />
      {/* <Registration /> */}
      <Faq />
      <Contacts />
    </>
  );
}

import { Banner } from "./banner";
import { About } from "./about";
import { Mission } from "./mission";
import { Courses } from "./courses";
import { Faq } from "./faq";
import { Contacts } from "./contacts";
import { Ecosystems } from "./ecosystems";

export function Layout() {
  return (
    <>
      <Banner />
      <Courses />
      <About />
      <Mission />
      <Ecosystems />
      <Faq />
      <Contacts />
    </>
  );
}

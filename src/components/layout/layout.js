import { Header } from "../header";
import { ParticlesBackground } from "../particles";
import { Description } from "../description";
import { ContainerSC, ContentSC } from "./mui";

export function Layout() {
  return (
    <ContainerSC>
      <ParticlesBackground />
      <Header />
      <Description />
      <ContentSC>
        {/* opacity background for content */}
      </ContentSC>
    </ContainerSC>
  );
}

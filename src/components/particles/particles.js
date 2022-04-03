import Particles from "react-tsparticles";
import { ParticlesSC } from "./mui";

export function ParticlesBackground() {
  return (
    <ParticlesSC>
      <Particles url={`${process.env.PUBLIC_URL}/particles.json`} />
    </ParticlesSC>
  );
}

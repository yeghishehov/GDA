import Particles from "react-tsparticles";
import { ParticlesSC } from "./mui";

export function ParticlesBackground({ fixed = false }) {
  return (
    <ParticlesSC fixed={fixed}>
      <Particles url={`${process.env.PUBLIC_URL}/particles.json`} />
    </ParticlesSC>
  );
}

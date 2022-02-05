import GlitchClip from "react-glitch-effect/core/GlitchClip";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import {
  BackgroundSC, BoxSC, TextBoxSC, TypographySC,
} from "./mui";

export function Header() {
  return (
    <BoxSC>
      <BackgroundSC />
      <GlitchClip duration={11000}>
        <GlitchClip duration={7000}>
          <GlitchSquiggly baseFrequency={0.003} scaleNoise={4} duration={20000}>
            <TextBoxSC>
              <TypographySC>Game</TypographySC>
              <TypographySC>Development</TypographySC>
              <TypographySC>Academy</TypographySC>
            </TextBoxSC>
          </GlitchSquiggly>
        </GlitchClip>
      </GlitchClip>
    </BoxSC>
  );
}

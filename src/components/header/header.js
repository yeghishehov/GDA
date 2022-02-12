import GlitchClip from "react-glitch-effect/core/GlitchClip";
import { BoxSC, TextBoxSC, HeaderSC } from "./mui";

export function Header() {
  return (
    <BoxSC>
      <GlitchClip duration={11000}>
        <GlitchClip duration={7000}>
          <TextBoxSC>
            <HeaderSC>Game</HeaderSC>
            <HeaderSC>Development</HeaderSC>
            <HeaderSC>Academy</HeaderSC>
          </TextBoxSC>
        </GlitchClip>
      </GlitchClip>
    </BoxSC>
  );
}

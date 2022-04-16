import { VFXImg } from "react-vfx";
import { rgbShift } from "../../utils/VFXShader";
import { BoxSC } from "./mui";
import titleImage from "../../assets/images/title.png";

export function Header() {
  return (
    <BoxSC>
      <VFXImg shader={rgbShift} src={titleImage} />
    </BoxSC>
  );
}

/*
<HeaderSC>
  <VFXSpan shader="glitch">Development</VFXSpan>
  </HeaderSC>
  <HeaderSC>
    <VFXSpan shader="glitch">Academy</VFXSpan>
  </HeaderSC>
*/

import { VFXImg } from "react-vfx";
import { rgbShift } from "../../utils/VFXShader";
import { BoxSC } from "./mui";
// import titleImage from "../../assets/images/title.png";
import GDImage from "../../assets/images/GD.png";

export function BannerImage() {
  return (
    <BoxSC>
      <VFXImg shader={rgbShift} src={GDImage} />
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

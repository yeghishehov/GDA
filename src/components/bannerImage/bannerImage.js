import { VFXImg } from "react-vfx";
import { rgbShift } from "../../utils/VFXShader";
import { BoxSC } from "./mui";
import GDImage from "../../assets/images/GD.png";

export function BannerImage() {
  return (
    <BoxSC>
      <VFXImg shader={rgbShift} src={GDImage} />
    </BoxSC>
  );
}

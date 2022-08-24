import { VFXImg, VFXProvider } from "react-vfx";
import { rgbShift } from "../../utils/VFXShader";
import { BoxSC } from "./mui";
import GDImage from "../../assets/images/GD.png";

export function BannerImage() {
  return (
    <BoxSC>
      <VFXProvider>
        <VFXImg shader={rgbShift} src={GDImage} />
      </VFXProvider>
      {/* <img src={GDImage} alt="banner" />
      <img src={GDImage} alt="banner" />
      <img src={GDImage} alt="banner" />
      <img src={GDImage} alt="banner" />
      <img src={GDImage} alt="banner" /> */}
    </BoxSC>
  );
}

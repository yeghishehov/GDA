import { BoxSC } from "./mui";
import GDImage from "../../assets/images/GD.png";

export function BannerImage() {
  return (
    <BoxSC>
      <img src={GDImage} alt="banner" />
      <img src={GDImage} alt="banner" />
      <img src={GDImage} alt="banner" />
      <img src={GDImage} alt="banner" />
      <img src={GDImage} alt="banner" />
    </BoxSC>
  );
}

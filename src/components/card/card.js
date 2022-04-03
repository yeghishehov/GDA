import {
  CardSC, CardContentSC, CardMediaSC, CardHeaderSC, BoxSC,
} from "./mui";

export function Card({
  title, content, logo, gradient, onClick,
}) {
  return (
    <CardSC gradient={gradient} onClick={onClick}>
      <CardMediaSC component="img" image={logo} />
      <BoxSC>
        <CardHeaderSC>{title}</CardHeaderSC>
        <CardContentSC>{content}</CardContentSC>
      </BoxSC>
    </CardSC>
  );
}

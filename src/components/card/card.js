import {
  CardSC, CardContentSC, CardMediaSC, CardHeaderSC, BoxSC,
} from "./mui";

export function Card({
  id, title, content, logo, gradient, onClick, disabled = false,
}) {
  return (
    <CardSC gradient={gradient} id={id} onClick={onClick} disabled={disabled}>
      <CardMediaSC component="img" image={logo} />
      <BoxSC>
        <CardHeaderSC>{title}</CardHeaderSC>
        <CardContentSC>{content}</CardContentSC>
      </BoxSC>
    </CardSC>
  );
}

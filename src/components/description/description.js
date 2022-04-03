import { DescriptionSC } from "./mui";

const text = "The Academy is designed to prepare you for a career in the game development industry. Learning how to use the world's most powerfull and advanced game engines such Unreal Engine or Unity, will open your path to the wonderful and creative world of game development.";

export function Description() {
  return (
    <DescriptionSC variant="h5" align="center">
      {text}
    </DescriptionSC>
  );
}

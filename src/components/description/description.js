import { DescriptionSC } from "./mui";

// eslint-disable-next-line max-len
// const text = "The Academy is designed to prepare you for a career in the game development industry. Learning how to use the world's most powerfull and advanced game engines such Unreal Engine or Unity, will open your path to the wonderful and creative world of game development.";
const text = "Ակադեմիայի նպատակն է նպաստել հայ երիտասարդների կարիերայի աճին` խաղերի ստեղծման ոլորտում: Սովորեցնել, թե ինչպես օգտագործել աշխարհի ամենահզոր և առաջադեմ խաղային ծրագրերը (Game Engine), ինչպիսիք են Unreal Engine-ը կամ Unity-ն, որոնք կբացահայտեն Ձեր ճանապարհը դեպի խաղերի ստեղծման հիանալի և ստեղծագործ աշխարհ:";

export function Description() {
  return (
    <DescriptionSC variant="h5" align="center">
      {text}
    </DescriptionSC>
  );
}

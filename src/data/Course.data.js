import UELogo from "../assets/images/UE_Logo1.png";
import unityLogo from "../assets/images/unity.png";
import question from "../assets/images/question.png";

export const courses = [
  {
    title: "Unreal Engine",
    icon: UELogo,
    description:
      "Դու կկարողանաս կարճ ժամանակահատվածում անել առաջին քայլերդ դեպի աշխարհի ամենաեկամտաբեր և կրեատիվ մասնագիտությունները` համակարգչային, կոնսոլային և հեռախոսային խաղերի ստեղծման հիանալի և ստեղծագործ ոլորտում։",
    courseData: {
      course: [
        "Introduction to engine",
        "Coordinates, Transforms, Units, and Organization",
        "Applying Lighting and Rendering",
        "Creating and Using Materials",
        "Using Audio Systems",
        "Creating Landscapes and Foliage",
        "Animations",
        "AI",
        "Optimization",
        "Practice, teamworks and homeworks",
        "And much more",
      ],
      retgistrationURL:
        "https://docs.google.com/forms/d/e/1FAIpQLSfZhizwXzhHWnRf5w_ULtV-cWdp_QRnvYuXs9gLO7B8YNujkA/closedform",
    },
  },
  {
    title: "Concept Art",
    description:
      "Հենց այս մասնագետն է հանդես գալիս ապագա խաղի ընդհանուր վիզուալ հայեցակարգով, մանրամասն մշակում հերոսների կերպարներն ու խաղային միջավայրը։",
    icon: question,
    courseData: {
      course: [
        "Introduction to concept art",
        "Adobe Illustrator",
        "Color Theory",
        "Color psychology",
        "Perspective",
        "Game UI",
        "Adobe Photoshop",
        "Character Design",
        "Concepts & Theories",
        "Environment",
        "Composition",
        "And much more",
      ],
      retgistrationURL: "",
    },
  },
  {
    title: "Asset Creation",
    description:
      "Սկսե՛ք ձեր 3D-արտիստի կարիերայի ուղին: Այս դասընթացը թույլ կտա ձեզ խորասուզվել ժամանակակից թվային արտադրության հսկայական աշխարհում:",
    icon: question,
    courseData: {
      course: [
        "Autodesk 3Ds Max",
        "Modeling Objects & Character",
        "Exterior & Interior",
        "Texturing",
        "Rigging",
        "UV",
        "Animation",
        "Lightning",
        "Rendering",
        "And much more",
      ],
      retgistrationURL: "",
    },
  },
  {
    title: "Unity 3D",
    commingSoon: true,
    icon: unityLogo,
    courseData: {
      course: ["Շուտով"],
      retgistrationURL: "",
    },
  },
  {
    title: "Շուտով",
    icon: question,
    courseData: {
      course: [],
      retgistrationURL: "",
    },
  },
];

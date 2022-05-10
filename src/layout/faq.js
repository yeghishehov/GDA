/* eslint-disable max-len */
import { useState } from "react";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  ContentSC,
  PriceContainerSC,
  Gradient4,
  AccordionSC,
  AccordionSummarySC,
  AccordionDetailsSC,
  ContainerSC,
} from "./mui";

const faq = [
  {
    id: 1,
    question: "Անհրաժեշտ է արդյո՞ք ունենալ ծրագրավորման հմտություններ խաղեր ստեղծելու համար", // Do I need to have programming skills for game development?",
    answer: ["Ծրագրավորման իմացությունը ողջունելի է, այնուամենայնիվ, սկսնակների կուրսում մենք տալու ենք նաև ծրագրավորման անհրաժեշտ գիտելիքներ"], // ["Knowing the programming is an advantage, however, in the beginner's course we will also teach you the basics of programming."],
  },
  {
    id: 2,
    question: "Դասընթացները կլինեն առցանց՝ օնլայն, թե՞ ստացիոնար՝ օֆֆլայն տարբերակով", // "Will the couses be online or in place?",
    answer: ["Սկսնակների համար դասընթացները անց են կացվելու միայն ստացիոնար՝ օֆֆլայն տարբերակով:  Ակադեմիայի առանցքային կետերից է տարբեր ստեղծարարների միջև կապեր հաստատելը և թիմեր ձևավորելը։ Դրան հնարավոր է առավել էֆեկտիվ հասնել միայն ստացիոնար դասընթացների միջոցով"], // ["For the beginners courses only in place. One of the key points of our academy is to establish connections, building teams of different peoples. It can be better achieved through in place studies."],
  },
  {
    id: 3,
    question: "Ինչպե՞ս կարող եմ գրանցվել դասընթացներին", // "How can i register for the course?",
    answer: ["Նախագրանցման հայտը կարող եք ուղարկել հետևյալ հղումով"], // ["You will need to submit your request through the link in the submission form below."],
  },
  {
    id: 4,
    question: "Որքա՞ն է տևում սկսնակների դասընթացը", // "How long is the beginners course?",
    answer: ["Սկսնակների դասընթացը տևում է 3 ամիս` 36 դաս, շաբաթական 3 օր, 2 ժամ տևողությամբ"], // ["The beginners course will take 3 months, 36 lessons, 3 lessons per week. A lesson will last 2 hours."],
  },
  {
    id: 5,
    question: "Որո՞նք են դասընթացների ժամանակացույցերը", // "What are the schedules for the courses?",
    answer: [/* "A lesson is 2 hours long. Monday-Saturday" */"Դասընթացի տևողությունը 2 ժամ, երկուշաբթիից ուրբաթ`", "10:00-12:00, 13:00-15:00, 16:00-18:00, 19:00-21:00."],
  },
  {
    id: 6,
    question: "Քանի՞ մասնակից է լինելու դասաժամի ընթացքում:", // "How many participants are there during one lesson?",
    answer: ["Յուրաքանչյուր դասը նախատեսված է 4 մասնակցի համար։"], // ["There will be 4 participants for each lesson at a time."],
  },
  {
    id: 7,
    question: "Ի՞նչ է պահանջվում ինձանից դասերին մասնակցելու համար", // "What am I required to have for the classes?",
    // answer: ["Home PC or a laptop for homeworks with these minimum specifications", "8 GB Ram, I3 or equivalent AMD CPU, at least 30 GB of free disk space, 1GB GPU.", "Unreal Engine or Unity installed and logged in.", "USB flash drive with minimum 2 GB free space."],
    answer: ["Համակարգիչ կամ նոութբուք, այս նվազագույն բնութագրերով տնային աշխատանքների համար`", "8 ԳԲ Ram, I3 կամ համարժեք AMD CPU, առնվազն 30 ԳԲ ազատ սկավառակի տարածություն, 1 ԳԲ GPU", "Unreal Engine-ը կամ Unity-ն տեղադրված և մուտք  գործած վիճակում", "USB ֆլեշ կրիչ՝ նվազագույնը 2 ԳԲ ազատ տարողությամբ"],
  },
  {
    id: 8,
    question: "Արդյո՞ք համակարգիչները կտրամադրվեն դասերի ժամանակ", // "Will the PCs be provided during classes?",
    answer: ["Այո՛, մենք ապահովում ենք պարապմունքների համար անհրաժեշտ բոլոր պարագաները"], // ["Yes. We provide all the necessaries for the classes."],
  },
  {
    id: 9,
    question: "Որո՞նք են ստացիոնար՝ օֆֆլայն դասերին մասնակցելու առավելությունները", // "What are the benefits of attending in place classes?",
    // answer: ["Game development is, first of all, a teamwork of many people.  It's a hard work especially when learning alone. Here are some benefits of learning at our academy in place.", "1-Meeting people and having friends with the same mindset.", "2-Having tasks to complete within required timeframes that will keep your learning progress on going.", "3-Experianced mentorship that will answer your questions.", "4-A working protoype of a game by the end of the course.", "5-Knowledge of pipelines in the industry.", "6-Homeworks that will also keep you onboard.", "7-Membership in a community after courses that will help your learning progress after completing the basic course", "and much more."],
    answer: ["Ահա՛, մեր ակադեմիայում սովորելու որոշ առավելություններ`", "1. Նոր մարդկանց հետ ծանոթանալ և նույն մտածելակերպով ընկերներ ձեռք բերել:", "2. Պահանջվող ժամկետներում կատարել առաջադրանքներ, որոնք կնպաստեն Ձեր ուսումնական առաջընթացին:", "3. Փորձառու դասավանդողներ, ովքեր կպատասխանեն Ձեր հարցերին:", "4. Ավարտական վկայական:", "5. Խաղերի ստեղծման ողջ ընթացքի հերթականության տիրապետում։", "6. Տնային առաջադրանքներ, որոնք կօգնեն ամրապնդել ստացված գիտելիքը։", "7. Հիմնական պարապմունքների ավարտից հետո կմիանաք համախողների մի թիմի, որը կօգնի Ձեր առաջընթացին  դասընթացները ավարտելուց հետո և ավելին"],
  },
  {
    id: 10,
    question: "Կարո՞ղ եմ մասնակցել անհատական պարապմունքների", // "Can I attend individual classes?",
    answer: ["Այս փուլում մենք չունենք անհատական պարապմունքներ"], // ["For the current period we don't have the individual classes."],
  },
];

export function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ContentSC id="faq">
      <ContainerSC>
        <Typography
          variant="h2"
          align="center"
          fontFamily="Brutal-Regular,sans-serif"
          color="#fff"
          mt={5}
          mb={6}
          sx={{
            fontSize: {
              md: "3.45rem",
              sm: "2.75rem",
              xs: "1.5rem",
            },
          }}
        >
          {/* FAQ */}
          Հաճախ տրվող հարցեր
        </Typography>
        {/* <Typography
          variant="h6"
          align="center"
          fontFamily="Brutal-Regular,sans-serif"
          color="#fff"
          mb={4}
          sx={{
            fontSize: {
              md: "1.25rem;",
              sm: "1rem",
              xs: "1rem",
            },
          }}
        >
          Helpful Information
        </Typography> */}
        <PriceContainerSC sx={{ mb: 5 }}>
          {faq.map((f) => (
            <AccordionSC key={f.id} expanded={expanded === f.id} onChange={handleChange(f.id)}>
              <AccordionSummarySC
                expandIcon={<ExpandMoreIcon />}
                id={f.id}
              >
                <Typography
                  fontFamily="Brutal-Regular,sans-serif"
                  color="#ffee33"
                  sx={{
                    fontSize: {
                      md: "1.25rem;",
                      sm: "1rem",
                      xs: "1rem",
                    },
                  }}
                >
                  {f.question}
                </Typography>
              </AccordionSummarySC>
              <AccordionDetailsSC>
                {f.answer.map((answer, index) => (
                  <Typography
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    fontFamily="Brutal-Regular,sans-serif"
                    color="#fff"
                    mb={4}
                    sx={{
                      fontSize: {
                        md: "1rem;",
                        sm: "0.8rem",
                        xs: "0.8rem",
                      },
                    }}
                  >
                    {answer}

                  </Typography>
                ))}
              </AccordionDetailsSC>
            </AccordionSC>
          ))}
        </PriceContainerSC>
      </ContainerSC>
      <Gradient4 />
    </ContentSC>
  );
}

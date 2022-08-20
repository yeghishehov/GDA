/* eslint-disable max-len */
import Typography from "@mui/material/Typography";
import { Card } from "../components/card";
import { ecosystems } from "../data/Ecosystem.data";

import { ContentSC, CoursesSC, ContainerSC } from "./mui";

const title = "Էկոհամակարգ";

const description =
  "Էկոհամակարգ նոր խոսք գործընկերության մեջ Հայաստանում, ինչը թույլ է տալիս համախմբել մի քանի ոլորտներ, և ձևավորել մեկ կոմպլեքս համագործակցություն, որը ձեռնատու է առաջին հերթին հաճախորդին-ուսանողին:\nՄեծ հպարտությամբ ներկայացնում ենք մեր համախոհներին և գործընկերներին, ովքեր պատրաստ են մեր ուսանողներնորպես համակարգչային խաղերի ստեղծողներ տրամադրել արտոնյալ պայմաններ իրենց ծառայություններից օգտվելու դեպքում, որպեսզի խաղային ոլորտի զարգացումը ավելի դյուրին, հաճելի և արագ լինի: \nԱրտոնությունների և հատուկ զեղչերի համար հարկավոր է կապվել մեր գործընկերների հետ:";

export function Ecosystems() {
  return (
    <ContentSC id="ecosystem" sx={{ display: "flex", flexDirection: "column" }}>
      <ContainerSC sx={{ mb: 5 }}>
        <Typography
          variant="h2"
          align="center"
          mt={5}
          mb={2}
          fontFamily="Brutal-Regular,sans-serif"
          sx={{
            fontSize: {
              md: "3.45rem",
              sm: "2.75rem",
              xs: "1.5rem",
            },
          }}
        >
          {title}
        </Typography>
        <Typography component="p" fontFamily="Calibri">
          {description}
        </Typography>
        <CoursesSC>
          {ecosystems.map((item) => (
            <a
              style={
                !item.webSite
                  ? {
                      pointerEvents: "none",
                      cursor: "default",
                    }
                  : {}
              }
              href={item.webSite}
              target={!!item.webSite && "_blank"}
              rel="noreferrer"
            >
              <Card
                logo={item.icon}
                id={item.title}
                title={item.title}
                gradient="to right, #7b91db, #7a4eda"
              />
            </a>
          ))}
        </CoursesSC>
      </ContainerSC>
    </ContentSC>
  );
}

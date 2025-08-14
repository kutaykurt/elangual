// src/pages/Grammar/registry/en-a2.js
import PastSimple from "../sections/en/a2/PastSimple";
import WasWere from "../sections/en/a2/WasWere";
import ComparativesSuperlatives from "../sections/en/a2/ComparativesSuperlatives";
import Quantifiers from "../sections/en/a2/Quantifiers";
import FutureGoingToWill from "../sections/en/a2/FutureGoingToWill";
import ModalsAdviceObligation from "../sections/en/a2/ModalsAdviceObligation";
import PresentPerfectBasics from "../sections/en/a2/PresentPerfectBasics";
import PrepositionsTime from "../sections/en/a2/PrepositionsTime";

const en_a2 = {
  id: "en-a2",
  title: "English A2",
  sections: [
    { slug: "past-simple", tr: "Geçmiş Zaman (2. hali)", title: "Past Simple", Component: PastSimple },
    { slug: "was-were", tr: "Geçmişte 'be': was/were", title: "Past of 'be': was / were", Component: WasWere },
    { slug: "comparatives-superlatives", tr: "Karşılaştırmalar", title: "Comparatives & Superlatives", Component: ComparativesSuperlatives },
    { slug: "quantifiers", tr: "Miktar Belirteçleri", title: "Quantifiers (some/any, much/many…)", Component: Quantifiers },
    { slug: "future-going-to-will", tr: "Gelecek", title: "Future: be going to vs will", Component: FutureGoingToWill },
    { slug: "modals-advice-obligation", tr: "Yardımcı Fiiller", title: "Modals: should / have to / must", Component: ModalsAdviceObligation },
    { slug: "present-perfect-basics", tr: "Yeni Tamamlanmışlık", title: "Present Perfect (basics)", Component: PresentPerfectBasics },
    { slug: "prepositions-time", tr: "Zaman Edatları", title: "Prepositions of Time (in/on/at)", Component: PrepositionsTime },
  ],
};

export default en_a2;

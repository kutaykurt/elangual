// src/pages/Grammar/registry/en-b2.js
import ModalDeduction from "../sections/en/b2/ModalDeduction";
import MixedConditionals from "../sections/en/b2/MixedConditionals";
import InversionEmphasis from "../sections/en/b2/InversionEmphasis";
import CleftSentences from "../sections/en/b2/CleftSentences";
import ParticipleClauses from "../sections/en/b2/ParticipleClauses";
import PassiveAdvanced from "../sections/en/b2/PassiveAdvanced";
import LinkersContrast from "../sections/en/b2/LinkersContrast";
import RelativeClausesAdvanced from "../sections/en/b2/RelativeClausesAdvanced";

const en_b2 = {
  id: "en-b2",
  title: "English B2",
  sections: [
    {
      slug: "modal-deduction",
      tr: "Çıkarım Modalları",
      title: "Modal Verbs of Deduction (present & past)",
      Component: ModalDeduction,
    },
    {
      slug: "mixed-conditionals",
      tr: "Karışık Koşullar",
      title: "Mixed Conditionals (past→present / present→past)",
      Component: MixedConditionals,
    },
    {
      slug: "inversion-emphasis",
      tr: "Vurgu için Ters Çevirme",
      title: "Inversion for Emphasis (negative adverbials, only, so/such)",
      Component: InversionEmphasis,
    },
    {
      slug: "cleft-sentences",
      tr: "Vurgu Cümleleri",
      title: "Cleft Sentences (it-cleft, what-cleft)",
      Component: CleftSentences,
    },
    {
      slug: "participle-clauses",
      tr: "-ing / -ed Yan Cümleler",
      title: "Participle Clauses (present/past/perfect; reduction)",
      Component: ParticipleClauses,
    },
    {
      slug: "passive-advanced",
      tr: "Gelişmiş Pasif & Causative",
      title: "Passive (reporting) & Causative (have/get sth done)",
      Component: PassiveAdvanced,
    },
    {
      slug: "contrast-linkers",
      tr: "Karşıtlık Bağlaçları",
      title: "Contrast Linkers (although / despite / however)",
      Component: LinkersContrast,
    },
    {
      slug: "relative-clauses-advanced",
      tr: "İleri Relative Clauses",
      title:
        "Relative Clauses – Advanced (non-defining, prepositions, which-clause, reduction)",
      Component: RelativeClausesAdvanced,
    },
  ],
};

export default en_b2;

// src/pages/Grammar/registry/en-b1.js
import PastContinuous from "../sections/en/b1/PastContinuous";
import PresentPerfectContinuous from "../sections/en/b1/PresentPerfectContinuous";
import RelativeClauses from "../sections/en/b1/RelativeClauses";
import Conditionals from "../sections/en/b1/Conditionals";
import PassiveVoice from "../sections/en/b1/PassiveVoice";
import ReportedSpeech from "../sections/en/b1/ReportedSpeech";
import GerundsInfinitives from "../sections/en/b1/GerundsInfinitives";
import AdverbsDegree from "../sections/en/b1/AdverbsDegree";

const en_b1 = {
  id: "en-b1",
  title: "English B1",
  sections: [
    {
      slug: "past-continuous",
      tr: "Geçmişte Süreç",
      title: "Past Continuous (+ PS karşılaştırma)",
      Component: PastContinuous,
    },
    {
      slug: "present-perfect-continuous",
      tr: "Şimdiye Kadar Süreç",
      title: "Present Perfect Continuous",
      Component: PresentPerfectContinuous,
    },
    {
      slug: "relative-clauses",
      tr: "Bağlaçlı Sıfat Cümlecikleri",
      title: "Relative Clauses (who/which/that…)",
      Component: RelativeClauses,
    },
    {
      slug: "conditionals",
      tr: "Koşul Cümleleri",
      title: "Conditionals (Zero / First / Second)",
      Component: Conditionals,
    },
    {
      slug: "passive-voice",
      tr: "Edilgen Çatı",
      title: "Passive Voice (Present/Past Simple)",
      Component: PassiveVoice,
    },
    {
      slug: "reported-speech",
      tr: "Dolaylı Anlatım",
      title: "Reported Speech (temel)",
      Component: ReportedSpeech,
    },
    {
      slug: "gerunds-infinitives",
      tr: "–ing / to V Kullanımı",
      title: "Gerunds & Infinitives",
      Component: GerundsInfinitives,
    },
    {
      slug: "adverbs-degree",
      tr: "Zarf & Şiddet",
      title: "Adverbs & Degree (really/quite/too/enough…)",
      Component: AdverbsDegree,
    },
  ],
};

export default en_b1;

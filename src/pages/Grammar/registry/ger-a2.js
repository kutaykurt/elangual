// src/pages/Grammar/registry/de-a2.js
import BasicCommunicationIntro from "../sections/ger/a2/BasicCommunicationIntro";
import TensePerfekt from "../sections/ger/a2/TensePerfekt";
import TenseFuturIntro from "../sections/ger/a2/TenseFuturIntro";
/* import WordOrderSubclauses from "../sections/ger/a2/WordOrderSubClauses";
 */import SeparableInseparable from "../sections/ger/a2/SeparableInseparable";
import ReflexiveVerbs from "../sections/ger/a2/ReflexiveVerbs";
import CasesDAIntro from "../sections/ger/a2/CasesDAIntro";
import Wechselpreps from "../sections/ger/a2/Wechselpreps";
import PronounsDA from "../sections/ger/a2/PronounsDA";
import AdjectivesCompSup from "../sections/ger/a2/AdjectivesCompSup";
import AdjectiveEndings from "../sections/ger/a2/AdjectiveEndings";
import PassiveIntro from "../sections/ger/a2/PassiveIntro";
import TMPWordOrder from "../sections/ger/a2/TMPWordOrder";
import ParticlesDochMal from "../sections/ger/a2/ParticlesDochMal";
import VocabularyPacks from "../sections/ger/a2/VocabularyPacks";
/* import PronunciationTR from "../sections/ger/a2/PronunciationTR";
 *//* import ExercisesToolkit from "../sections/ger/a2/ExercisesToolkit";
import ModalPreterite from "../sections/ger/a2/ModalPreterite";
 */
import RelativeClausesIntro from "../sections/ger/a2/RelativeClausesIntro";
/* import InfinitivMitZu from "../sections/ger/a2/InfinitivMitZu";
import ConnectorsReasonContrast from "../sections/ger/a2/ConnectorsReasonContrast";
import PoliteRequests from "../sections/ger/a2/PoliteRequests"; */

const ger_a2 = {
  id: "ger-a2",
  title: "Deutsch A2",
  sections: [
    {
      slug: "basic-communication",
      tr: "İletişim Hedefleri",
      title: "İletişim Hedefleri (Kommunikative Ziele)",
      Component: BasicCommunicationIntro,
    },
    {
      slug: "perfekt",
      tr: "Perfekt",
      title:
        "Perfekt – düzenli/düzensiz + ayrılabilen (Perfekt: regelmäßig/unregelmäßig + trennbar)",
      Component: TensePerfekt,
    },
    {
      slug: "future-plans",
      tr: "Gelecek & Planlar",
      title: "Gelecek: Futur I ve planlı Präsens (Futur I & geplantes Präsens)",
      Component: TenseFuturIntro,
    },
    /* {
      slug: "sub-clauses",
      tr: "Yan Tümceler",
      title: "Yan Tümceler: weil/dass/wenn/ob (Nebensätze: weil/dass/wenn/ob)",
      Component: WordOrderSubclauses,
    }, */
    {
      slug: "relative-clauses",
      tr: "İlgi Tümceleri",
      title:
        "İlgi Tümceleri: Nom./Akk. (Relativsätze: Nominativ/Akkusativ – Einführung)",
      Component: RelativeClausesIntro,
    },
    /* {
      slug: "infinitiv-mit-zu",
      tr: "zu’lu Mastar",
      title: "zu’lu Mastar: um/ohne/statt zu (Infinitiv mit zu – einfach)",
      Component: InfinitivMitZu,
    }, */
    /* {
      slug: "connectors-reason-contrast",
      tr: "Bağlaçlar: Sebep/Karşıtlık",
      title:
        "Bağlaçlar: deshalb/denn/trotzdem (Konnektoren: Grund & Gegensatz)",
      Component: ConnectorsReasonContrast,
    },
    {
      slug: "polite-requests",
      tr: "Nazik İstekler & Formlar",
      title:
        "Nazik İstekler & Formlar (Höfliche Bitten & Formulare: würden/könnten/dürfte ich …?)",
      Component: PoliteRequests,
    }, */
    {
      slug: "separable-inseparable",
      tr: "Ayrılabilen/Ayrılmayan Fiiller",
      title: "Ayrılabilen/Ayrılmayan Fiiller (Trennbare/Untrennbare Verben)",
      Component: SeparableInseparable,
    },
    {
      slug: "reflexive-verbs",
      tr: "Dönüşlü Fiiller",
      title: "Dönüşlü Fiiller (Reflexive Verben)",
      Component: ReflexiveVerbs,
    },
    {
      slug: "cases-da",
      tr: "Akkusativ & Dativ",
      title:
        "Akkusativ & Dativ – tekrar/derinleşme (Akkusativ & Dativ – Wiederholung/Vertiefung)",
      Component: CasesDAIntro,
    },
    {
      slug: "wechselpreps",
      tr: "Wechsel Edatları",
      title:
        "Wechsel Präpositionları: wohin/wo (Wechselpräpositionen: wohin/wo)",
      Component: Wechselpreps,
    },
    {
      slug: "pronouns-da",
      tr: "Zamirler: Dat/Akk",
      title: "Dativ & Akkusativ Zamirleri (Dativ- & Akkusativpronomen)",
      Component: PronounsDA,
    },
    {
      slug: "adjectives-comp-sup",
      tr: "Karşılaştırma",
      title: "Karşılaştırma/Superlativ (Komparativ/Superlativ)",
      Component: AdjectivesCompSup,
    },
    {
      slug: "adjective-endings",
      tr: "Sıfat Ekleri",
      title:
        "Sıfat Ekleri: Nom/Akk/Dat + Artikel kalıpları (Adjektivendungen: Nom/Akk/Dat)",
      Component: AdjectiveEndings,
    },
    {
      slug: "passive-intro",
      tr: "Edilgen Giriş",
      title: "Edilgen Çatı Girişi (Passiv Präsens – Einführung)",
      Component: PassiveIntro,
    },
    {
      slug: "tmp-word-order",
      tr: "ZAMAN-ŞEKİL-YER",
      title: "ZAMAN-ŞEKİL-YER Dizilişi (Wortstellung: Temporal–Modal–Lokal)",
      Component: TMPWordOrder,
    },
    {
      slug: "particles-doch-mal",
      tr: "Partikeller",
      title: "Partikeller: doch, mal (Modalpartikeln: doch, mal)",
      Component: ParticlesDochMal,
    },
    {
      slug: "vocabulary-packs",
      tr: "Konu Sözlükleri",
      title: "Konu Sözlükleri – 30–60 kelime (Wortschatzfelder)",
      Component: VocabularyPacks,
    },
    /* {
      slug: "pronunciation-tr",
      tr: "Telaffuz",
      title: "Telaffuz İpuçları (Aussprache – TR odaklı)",
      Component: PronunciationTR,
    },
    {
      slug: "exercises-toolkit",
      tr: "Alıştırma Setleri",
      title: "Alıştırma Setleri (Übungstypen)",
      Component: ExercisesToolkit,
    },
    {
      slug: "modal-preterite",
      tr: "Modal Geçmiş",
      title: "Modal Fiillerin Geçmişi (Präteritum der Modalverben)",
      Component: ModalPreterite,
    }, */
  ],
};

export default ger_a2;

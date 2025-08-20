// src/pages/Grammar/registry/de-a1.js
import ArticlesNouns from "../sections/ger/a1/ArticlesNouns";
import PronounsSeinHaben from "../sections/ger/a1/PronounsSeinHaben";
import PresentTense from "../sections/ger/a1/PresentTense";
import WordOrderQuestions from "../sections/ger/a1/WordOrderQuestions";
import NegationNichtKein from "../sections/ger/a1/NegationNichtKein";
import PossessiveArticles from "../sections/ger/a1/PossessiveArticles";
import ModalVerbsA1 from "../sections/ger/a1/ModalVerbsA1";
import TimeDateA1 from "../sections/ger/a1/TimeDateA1";
import PrepositionsBasic from "../sections/ger/a1/PrepositionsBasic";
import PerfektA1 from "../sections/ger/a1/PerfektA1";

const ger_a1 = {
  id: "ger-a1",
  title: "Deutsch A1",
  sections: [
    {
      slug: "articles-nouns",
      tr: "Artikel & İsimler",
      title: "Artikel (der/die/das) + Akkusativ + Plural",
      Component: ArticlesNouns,
    },
    {
      slug: "pronouns-sein-haben",
      tr: "Zamirler + sein/haben",
      title: "Personalpronomen · sein/haben (Präsens)",
      Component: PronounsSeinHaben,
    },
    {
      slug: "present-tense",
      tr: "Şimdiki/Zaman (Präsens)",
      title: "Präsens: regelmäßige/irreg. & trennbare Verben",
      Component: PresentTense,
    },
    {
      slug: "word-order-questions",
      tr: "Kelime Dizilişi & Sorular",
      title: "Wortstellung (Verb-zweit) · Fragen (W/Ja–Nein)",
      Component: WordOrderQuestions,
    },
    {
      slug: "negation-nicht-kein",
      tr: "Olumsuzluk",
      title: "Negation: nicht vs. kein (A1)",
      Component: NegationNichtKein,
    },
    {
      slug: "possessive-articles",
      tr: "İyelik Artikelleri",
      title: "Possessivartikel (mein/dein/…) + Akkusativ mask.",
      Component: PossessiveArticles,
    },
    {
      slug: "modal-verbs-a1",
      tr: "Modal Fiiller",
      title: "Modalverben A1 (können · möchten · müssen)",
      Component: ModalVerbsA1,
    },
    {
      slug: "time-date-a1",
      tr: "Zaman & Tarih",
      title: "Uhrzeit · Tage/Monate · am/um/im",
      Component: TimeDateA1,
    },
    {
      slug: "prepositions-basic",
      tr: "Edatlar (temel)",
      title: "Temel Präpositionen (in/bei/mit/nach/zu/von/aus)",
      Component: PrepositionsBasic,
    },
    {
      slug: "perfekt-a1",
      tr: "Geçmiş (temel)",
      title: "Perfekt (haben/sein + Partizip II) – giriş",
      Component: PerfektA1,
    },
  ],
};

export default ger_a1;

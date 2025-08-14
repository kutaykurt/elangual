// src/pages/Grammar/registry/en-a1.js
import Pronunciation from "../sections/en/a1/Pronunciation.jsx";
import SubjectPronouns from "../sections/en/a1/SubjectPronouns.jsx";
import ToBe from "../sections/en/a1/ToBe.jsx";
import Articles from "../sections/en/a1/Articles.jsx";
import SimplePresent from "../sections/en/a1/SimplePresent.jsx";
import WhQuestions from "../sections/en/a1/WhQuestions.jsx";

const en_a1 = {
  id: "en-a1",
  title: "English A1",
  sections: [
    {
      slug: "pronunciation-basics",
      tr: "Telaffuz Temelleri",
      title: "Pronunciation",
      Component: Pronunciation,
    },
    {
      slug: "subject-pronouns",
      tr: "Özne Zamirleri",
      title: "Subject Pronouns",
      Component: SubjectPronouns,
    },
    { slug: "to-be", tr: "To be", title: 'Verb "to be"', Component: ToBe },
    {
      slug: "articles",
      tr: "Artikeller",
      title: "Articles a/an/the",
      Component: Articles,
    },
    {
      slug: "simple-present",
      tr: "Geniş Zaman",
      title: "Simple Present",
      Component: SimplePresent,
    },
    {
      slug: "wh-questions",
      tr: "W-Soruları",
      title: "Wh-Questions",
      Component: WhQuestions,
    },
  ],
};

export default en_a1;

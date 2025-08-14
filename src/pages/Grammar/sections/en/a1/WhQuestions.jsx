import React from "react";
import {
  Key,
  Term,
  Formula,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
  MiniTable,
  Sub,
} from "../../../blocks";

export default function WhQuestions() {
  return (
    <>
      <div className="rule-box">
        <Term>Wh-words:</Term> <Key>What / Where / When / Who / Why / How</Key>{" "}
        (+ <Key>How old/many/much/long/often</Key>). Genel kalıp:{" "}
        <Key>Wh + yardımcı (do/does/is/are) + Özne + Fiil…</Key>
      </div>

      <Sub title="Yapı (Structure)" />
      <MiniTable
        head={["Tür", "Şablon", "Örnek"]}
        rows={[
          ["be", "Wh + am/is/are + Özne … ?", "Where are you?"],
          [
            "genel fiil",
            "Wh + do/does + Özne + V1 … ?",
            "What do you do? / Where does he live?",
          ],
          ["özne sorusu", "Who + V1 … (do/does yok)", "Who lives here?"],
          [
            "miktar",
            "How many/much + isim + ...?",
            "How many books do you have?",
          ],
          ["yaş", "How old + be + Özne?", "How old are you?"],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog (Examples & Mini-Dialogue)" />
      <Examples
        items={[
          {
            en: "Where are you from?",
            tr: "Nerelisin?",
            pron: "ver ar yu from",
          },
          {
            en: "What do you do?",
            tr: "Ne iş yapıyorsun?",
            pron: "vat du yu du",
          },
          {
            en: "Who lives here?",
            tr: "Burada kim yaşıyor?",
            pron: "hu livz hiır",
          },
          {
            en: "How old is she?",
            tr: "O kaç yaşında?",
            pron: "hav old iz şii",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog (Mini-Dialogue)">
        <p>
          <strong>A:</strong> Where do you work?
          <br />
          <strong>B:</strong> I work in Ankara. What do you do?
        </p>
      </Callout>

      <Callout
        type="tip"
        title="Özne vs Nesne Soruları (Subject vs Object Questions)"
      >
        Özne arandığında <Key>do/does</Key> yok: <em>Who lives here?</em>
        Nesne arandığında <Key>do/does</Key> var:{" "}
        <em>Who does he live with?</em>
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Doğru Wh-word ile doldur (Fill with the correct Wh-word)"
        items={[
          {
            id: "wh1",
            before: "_____ are you? (nasılsın?)",
            after: "",
            answers: ["How", "how"],
          },
          {
            id: "wh2",
            before: "_____ does he live?",
            after: "",
            answers: ["Where", "where"],
          },
          {
            id: "wh3",
            before: "_____ is your birthday?",
            after: "",
            answers: ["When", "when"],
          },
          {
            id: "wh4",
            before: "_____ are they here? (neden)",
            after: "",
            answers: ["Why", "why"],
          },
          {
            id: "wh5",
            before: "_____ lives in this house?",
            after: "",
            answers: ["Who", "who"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi soruda *do/does* GEREKMEZ?",
            choices: [
              "Where do you live?",
              "Who lives here?",
              "Why does she work?",
            ],
            correctIndex: 1,
            explain: "Özne sorusu: Who lives… (do/does yok).",
          },
          {
            q: "Doğru kalıp hangisi?",
            choices: [
              "How many money do you have?",
              "How much books do you have?",
              "How many books do you have?",
            ],
            correctIndex: 2,
            explain: "countable→many, uncountable→much.",
          },
        ]}
      />
    </>
  );
}

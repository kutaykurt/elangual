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

export default function ToBe() {
  return (
    <>
      <div className="rule-box">
        <Term>to be</Term> = <Key>am / is / are</Key>. <Key>I→am</Key>,{" "}
        <Key>you/we/they→are</Key>, <Key>he/she/it→is</Key>.
      </div>

      <Sub title="Olumlu / Olumsuz / Soru (Affirmative / Negative / Question)" />
      <Formula
        rows={[
          ["Olumlu", "Özne + am/is/are + ...", "I am / You are / He is ..."],
          ["Olumsuz", "am not / isn’t / aren’t", "She isn’t busy."],
          ["Soru", "Am/Is/Are + Özne + ... ?", "Are they teachers?"],
        ]}
      />

      <Sub title="Kısaltmalar & Kısa Cevaplar (Contractions & Short Answers)" />
      <MiniTable
        head={["Kısaltma", "Tam", "Kısa cevap ör."]}
        rows={[
          ["I’m", "I am", "—"],
          [
            "you’re / we’re / they’re",
            "are",
            "Yes, we are. / No, they aren’t.",
          ],
          ["he’s / she’s / it’s", "is", "Yes, he is. / No, she isn’t."],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog (Examples & Mini-Dialogue)" />
      <Examples
        items={[
          { en: "I am tired.", tr: "Yorgunum.", pron: "ay em tayırd" },
          { en: "He is at home.", tr: "O evde.", pron: "hii ız et houm" },
          { en: "We aren’t late.", tr: "Geç değiliz.", pron: "vii aarnt leyt" },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog (Mini-Dialogue)">
        <p>
          <strong>A:</strong> Are you ready?
          <br />
          <strong>B:</strong> Yes, I am.
        </p>
      </Callout>

      <Callout type="tip" title="Yaş ifadesi (Age Expression)">
        İngilizce yaşta <Term>be</Term> kullanılır: <em>I am 20.</em> (TR: 20
        yaşındayım) — <em>I have 20</em> ❌
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Boşluk Doldurma (Gap-fill): am / is / are"
        items={[
          { id: "be1", before: "I ___ a student.", after: "", answers: ["am"] },
          { id: "be2", before: "She ___ at work.", after: "", answers: ["is"] },
          {
            id: "be3",
            before: "We ___ not hungry.",
            after: "",
            answers: ["are", "aren't", "are not"],
          },
          {
            id: "be4",
            before: "___ you from Turkey?",
            after: "",
            answers: ["Are"],
          },
          {
            id: "be5",
            before: "He ___ 22 years old.",
            after: "",
            answers: ["is"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Doğru dizi hangisi?",
            choices: [
              "I is / You are / He are",
              "I am / You are / He is",
              "I am / You is / He are",
            ],
            correctIndex: 1,
            explain: "I am – you/we/they are – he/she/it is.",
          },
          {
            q: "Kısa cevap: “Are they here?”",
            choices: ["Yes, they is.", "Yes, they are.", "Yes, they do."],
            correctIndex: 1,
            explain: "Be ile kısa cevap: Yes, they are.",
          },
        ]}
      />
    </>
  );
}

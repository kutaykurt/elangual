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

export default function PresentPerfectContinuous() {
  return (
    <>
      <div className="rule-box">
        <strong>Present Perfect Continuous</strong> ={" "}
        <Key>have/has been + fiil-ing</Key>. <Term>Süre + şimdi etkisi</Term>:{" "}
        <em>for/since, lately/recently</em>.
      </div>

      <Sub title="Kuruluş (Formation)" />
      <Formula
        rows={[
          [
            "Olumlu",
            "Özne + have/has been + fiil-ing",
            "I have been studying since 5.",
          ],
          [
            "Olumsuz",
            "Özne + have not/has not been + fiil-ing",
            "She has not been sleeping well.",
          ],
          [
            "Soru",
            "Have/Has + Özne + been + fiil-ing?",
            "Have you been working out?",
          ],
        ]}
      />

      <Sub title="Present Perfect mi, Present Perfect Continuous mı? (Which to use?)" />
      <MiniTable
        head={["Yapı", "Odak", "Örnek"]}
        rows={[
          ["Present Perfect", "sonuç", "I have finished my homework."],
          [
            "Present Perfect Continuous",
            "süre/aktivite",
            "I have been doing my homework for 2 hours.",
          ],
        ]}
      />

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "He has been learning English for a year.",
            tr: "Bir yıldır İngilizce öğreniyor.",
            pron: "hi hez bin lörn'ing ingliş for ı yiır",
          },
          {
            en: "We haven’t been sleeping well lately.",
            tr: "Son zamanlarda iyi uyuyamıyoruz.",
            pron: "vii hevınt bin sliiping vel leytli",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="have/has been + fiil-ing"
        items={[
          {
            id: "ppc1",
            before: "She _____ (learn) German since last year.",
            after: "",
            answers: ["has been learning"],
          },
          {
            id: "ppc2",
            before: "I _____ (not / feel) well lately.",
            after: "",
            answers: ["have not been feeling", "haven’t been feeling"],
          },
          {
            id: "ppc3",
            before: "_____ you _____ (work) here long?",
            after: "",
            answers: ["have you been working"],
          },
          {
            id: "ppc4",
            before: "They _____ (study) for two hours.",
            after: "",
            answers: ["have been studying"],
          },
          {
            id: "ppc5",
            before: "He _____ (not / sleep) enough.",
            after: "",
            answers: ["has not been sleeping", "hasn’t been sleeping"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi cümlede Present Perfect Continuous daha uygun?",
            choices: [
              "I have written the report.",
              "I have been writing the report for 2 hours.",
              "I wrote the report yesterday.",
            ],
            correctIndex: 1,
            explain: "Süre vurgusu → have/has been + fiil-ing.",
          },
        ]}
      />
    </>
  );
}

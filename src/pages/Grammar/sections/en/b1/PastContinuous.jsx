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

export default function PastContinuous() {
  return (
    <>
      <div className="rule-box">
        <strong>Past Continuous</strong> = geçmişte <Key>devam eden</Key> eylem.
        Sıklıkla <Term>Past Simple</Term> ile birlikte: <em>when</em> (kısa
        olay) / <em>while</em> (devam).
      </div>

      <Sub title="Kuruluş (Formation)" />
      <Formula
        rows={[
          ["Olumlu", "Özne + was/were + fiil-ing", "I was watching TV."],
          [
            "Olumsuz",
            "Özne + was not / were not + fiil-ing",
            "They were not working.",
          ],
          ["Soru", "Was/Were + Özne + fiil-ing?", "Were you sleeping?"],
        ]}
      />

      <Sub title="Past Continuous + Past Simple (birlikte kullanım — combined use)" />
      <MiniTable
        head={["Bağlaç", "Şablon", "Örnek"]}
        rows={[
          [
            "when",
            "Past Continuous + when + Past Simple",
            "I was cooking when he arrived.",
          ],
          [
            "while",
            "Past Simple + while + Past Continuous",
            "He called while I was driving.",
          ],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog (Examples & Mini-Dialogue)" />
      <Examples
        items={[
          {
            en: "I was studying when the phone rang.",
            tr: "Telefon çaldığında çalışıyordum.",
            pron: "ay vaz stadiyıng wen dı foun reng",
          },
          {
            en: "They weren’t listening while I was talking.",
            tr: "Ben konuşurken dinlemiyorlardı.",
            pron: "dey vörnt lisınıng vayl ay vaz tolking",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog (Mini-Dialogue)">
        <p>
          <b>A:</b> What were you doing at 9?
          <br />
          <b>B:</b> I was driving to work.
        </p>
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Past Continuous ve Past Simple"
        items={[
          {
            id: "pc1",
            before: "I _____ (watch) TV when my mom _____ (come).",
            after: "",
            answers: [
              "was watching when my mom came",
              "was watching when my mother came",
            ],
          },
          {
            id: "pc2",
            before: "While we _____ (have) dinner, it _____ (start) to rain.",
            after: "",
            answers: ["were having dinner, it started"],
          },
          {
            id: "pc3",
            before: "She _____ (not / sleep) at 11.",
            after: "",
            answers: ["was not sleeping", "wasn't sleeping"],
          },
          {
            id: "pc4",
            before: "_____ you _____ (drive) when I called?",
            after: "",
            answers: ["were you driving"],
          },
          {
            id: "pc5",
            before: "They _____ (play) football when it _____ (begin).",
            after: "",
            answers: ["were playing football when it began"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "‘while’ ile tipik olan?",
            choices: [
              "Past Simple + while + Past Simple",
              "Past Continuous + while + (herhangi biri)",
              "Past Simple + while + Past Continuous",
            ],
            correctIndex: 2,
            explain:
              "while genelde devamı anlatır: Past Simple + while + Past Continuous.",
          },
        ]}
      />
    </>
  );
}

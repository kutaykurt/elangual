import React from "react";
import {
  Key,
  Term,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
  MiniTable,
  Sub,
} from "../../../blocks";

export default function Conditionals() {
  return (
    <>
      <div className="rule-box">
        <strong>Koşul Cümleleri (Conditionals)</strong>: <Key>Zero</Key> (genel
        gerçek), <Key>First</Key> (gerçek gelecek), <Key>Second</Key> (hayali
        şimdi/gelecek).
      </div>

      <Sub title="Yapılar (Structures)" />
      <MiniTable
        head={["Tür", "If cümlesi", "Ana cümle", "Örnek"]}
        rows={[
          [
            "Zero",
            "if + Simple Present",
            "Simple Present",
            "If water boils, it evaporates.",
          ],
          [
            "First",
            "if + Simple Present",
            "will + fiilin temel hali",
            "If it rains, we will stay home.",
          ],
          [
            "Second",
            "if + Past Simple",
            "would + fiilin temel hali",
            "If I had time, I would travel.",
          ],
        ]}
      />

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "If you heat ice, it melts.",
            tr: "Buzu ısıtırsan erir.",
            pron: "if yu hiit ays, it melts",
          },
          {
            en: "If I finish early, I’ll call you.",
            tr: "Erken bitirirsem seni ararım.",
            pron: "if ay finiș örli, ayl kol yu",
          },
          {
            en: "If I were rich, I would buy a house.",
            tr: "Zengin olsaydım bir ev alırdım.",
            pron: "if ay vör riç, ay vud bay ı haus",
          },
        ]}
      />
      <Callout type="tip" title="‘If I were…’ notu (Note)">
        Resmi/standart dilde <Term>I were</Term> yaygındır; konuşmada{" "}
        <em>I was</em> da duyulur.
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Zero / First / Second"
        items={[
          {
            id: "cd1",
            before: "If you _____ (study), you _____ (pass). (First)",
            after: "",
            answers: ["study, will pass"],
          },
          {
            id: "cd2",
            before: "If I _____ (be) you, I _____ (not / do) that. (Second)",
            after: "",
            answers: ["were, would not do", "were, wouldn’t do"],
          },
          {
            id: "cd3",
            before: "If water _____ (reach) 100°C, it _____ (boil). (Zero)",
            after: "",
            answers: ["reaches, boils"],
          },
          {
            id: "cd4",
            before: "If it _____ (rain), we _____ (stay) at home. (First)",
            after: "",
            answers: ["rains, will stay"],
          },
          {
            id: "cd5",
            before:
              "If he _____ (have) more time, he _____ (travel) more. (Second)",
            after: "",
            answers: ["had, would travel"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangisi gerçek gelecek (First)?",
            choices: [
              "If I had time, I would call.",
              "If it rains, I’ll stay home.",
              "If you heat ice, it melts.",
            ],
            correctIndex: 1,
            explain: "First = if + Simple Present, will + fiilin temel hali.",
          },
        ]}
      />
    </>
  );
}

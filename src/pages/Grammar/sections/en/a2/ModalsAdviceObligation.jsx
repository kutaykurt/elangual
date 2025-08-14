import React from "react";
import {
  Key,
  Term,
  Formula,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
  Sub,
} from "../../../blocks";

export default function ModalsAdviceObligation() {
  return (
    <>
      <div className="rule-box">
        <strong>Modals</strong>: <Key>should (tavsiye)</Key>,{" "}
        <Key>must / must not (zorunluluk / yasak)</Key>,{" "}
        <Key>have to / do not have to (gerek / gerek yok)</Key>.
      </div>

      <Sub title="should (tavsiye — advice)" />
      <Formula
        rows={[
          [
            "Olumlu",
            "Özne + should + fiilin temel hali",
            "You should sleep more.",
          ],
          [
            "Olumsuz",
            "Özne + should not + fiilin temel hali",
            "You should not smoke.",
          ],
          ["Soru", "Should + Özne + fiilin temel hali?", "Should I call her?"],
        ]}
      />

      <Sub title="must / must not (zorunluluk / yasak — obligation / prohibition)" />
      <Callout type="tip" title="must vs must not">
        <ul className="compact-list">
          <li>
            <Term>must</Term> = güçlü zorunluluk: You must wear a seatbelt.
          </li>
          <li>
            <Term>must not</Term> = <strong>yasak</strong>: You must not use
            your phone here.
          </li>
        </ul>
      </Callout>

      <Sub title="have to / do not have to (gerek / gerek yok — necessity / no need)" />
      <Callout type="tip" title="gerek / gerek yok (necessity / no need)">
        <ul className="compact-list">
          <li>
            <Term>have to</Term> = dış zorunluluk: I have to work on Saturday.
          </li>
          <li>
            <Term>do not have to</Term> = <strong>gerek yok</strong>: You do not
            have to come early.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "You should see a doctor.",
            tr: "Bir doktora görünmelisin.",
            pron: "yu şud sii ı doktır",
          },
          {
            en: "You must not park here.",
            tr: "Buraya park etmek yasak.",
            pron: "yu mas not park hiır",
          },
          {
            en: "We do not have to wear uniforms.",
            tr: "Üniforma giymemiz gerekmiyor.",
            pron: "vii du not hev tü veır yuniformz",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="should / must / (do not) have to"
        items={[
          {
            id: "m1",
            before: "You _____ (tavsiye) study every day.",
            after: "",
            answers: ["should"],
          },
          {
            id: "m2",
            before: "You _____ (yasak) smoke here.",
            after: "",
            answers: ["must not", "mustn’t"],
          },
          {
            id: "m3",
            before: "I _____ (gerek) work late tonight.",
            after: "",
            answers: ["have to"],
          },
          {
            id: "m4",
            before: "You _____ (gerek yok) pay now.",
            after: "",
            answers: ["do not have to", "don't have to"],
          },
          {
            id: "m5",
            before: "_____ I call him now? (tavsiye sorusu)",
            after: "",
            answers: ["Should"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi cümle ‘gerek yok’ anlamındadır?",
            choices: [
              "You must not come.",
              "You do not have to come.",
              "You have to come.",
            ],
            correctIndex: 1,
            explain: "do not have to = gerek yok; must not = yasak.",
          },
        ]}
      />
    </>
  );
}

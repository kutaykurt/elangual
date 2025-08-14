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

export default function PassiveVoice() {
  return (
    <>
      <div className="rule-box">
        <strong>Pasif (Passive)</strong> = nesne önemli. Şablon:{" "}
        <Key>be + fiilin 3. hali</Key>. B1 odak: <Term>Present Simple</Term> ve{" "}
        <Term>Past Simple</Term>.
      </div>

      <Sub title="Yapılar (Structures)" />
      <MiniTable
        head={["Zaman", "Aktif", "Pasif", "Örnek"]}
        rows={[
          [
            "Present Simple",
            "They make cars.",
            "Cars are made.",
            "Cars are made in this factory.",
          ],
          [
            "Past Simple",
            "They made cars.",
            "Cars were made.",
            "Cars were made here in 1990.",
          ],
        ]}
      />

      <Sub title="by-agent (opsiyonel — by + yapan)" />
      <Callout type="tip" title="by + yapan kişi/kurum">
        Önemliyse eklenir: <em>The bridge was built by engineers.</em>
      </Callout>

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "English is spoken in many countries.",
            tr: "İngilizce birçok ülkede konuşulur.",
            pron: "ingliş iz spoukın in meni kantriz",
          },
          {
            en: "The letter was sent yesterday.",
            tr: "Mektup dün gönderildi.",
            pron: "dı letır vaz sent yestırdey",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Aktif → Pasif"
        items={[
          {
            id: "pv1",
            before: "They grow tea here. → Tea _____ here.",
            after: "",
            answers: ["is grown"],
          },
          {
            id: "pv2",
            before: "They built the house in 2000. → The house _____ in 2000.",
            after: "",
            answers: ["was built"],
          },
          {
            id: "pv3",
            before: "People speak Turkish here. → Turkish _____ here.",
            after: "",
            answers: ["is spoken"],
          },
          {
            id: "pv4",
            before: "They didn’t sell the car. → The car _____ sold.",
            after: "",
            answers: ["was not", "wasn’t", "was not sold", "wasn’t sold"],
          },
          {
            id: "pv5",
            before: "They make cheese. → Cheese _____ .",
            after: "",
            answers: ["is made"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi pasif Present Simple?",
            choices: ["was built", "is made", "were written"],
            correctIndex: 1,
            explain: "is/are + fiilin 3. hali → Present Simple passive.",
          },
        ]}
      />
    </>
  );
}

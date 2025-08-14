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

export default function ReportedSpeech() {
  return (
    <>
      <div className="rule-box">
        <strong>Aktarma Cümlesi (Reported Speech)</strong>: Başkasının sözünü
        aktarma. Temel zaman kaymaları:
        <MiniTable
          head={["Doğrudan (Direct)", "Aktarma (Reported)", "Örnek"]}
          rows={[
            ["am/is/are", "was/were", "“I am tired.” → He said he was tired."],
            ["do/does", "did", "“She likes tea.” → He said she liked tea."],
            ["will", "would", "“I will call.” → She said she would call."],
            ["can", "could", "“I can swim.” → He said he could swim."],
          ]}
        />
      </div>

      <Sub title="Zamir / Zaman / Yer değişimleri (Pronoun / Tense / Place shifts)" />
      <Callout type="tip" title="Küçük dönüşümler (Common shifts)">
        <ul className="compact-list">
          <li>
            I → he/she · this → that · now → then · today → that day · here →{" "}
            there
          </li>
          <li>
            Emir: “<em>Don’t be late.</em>” → He told me{" "}
            <Term>not to be late</Term>.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "“I am busy.” → She said she was busy.",
            tr: "“Meşgulüm.” → Meşgul olduğunu söyledi.",
            pron: "şi sed şi voz bizi",
          },
          {
            en: "“We will go.” → They said they would go.",
            tr: "“Gideceğiz.” → Gideceklerini söylediler.",
            pron: "dey sed dey vud gou",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Direct → Reported"
        items={[
          {
            id: "rs1",
            before: "“I am tired.” → He said he ____ tired.",
            after: "",
            answers: ["was"],
          },
          {
            id: "rs2",
            before: "“She will come.” → He said she ____ come.",
            after: "",
            answers: ["would"],
          },
          {
            id: "rs3",
            before: "“They are here.” → He said they ____ there.",
            after: "",
            answers: ["were"],
          },
          {
            id: "rs4",
            before: "“Don’t be late.” → He told me ____ be late.",
            after: "",
            answers: ["not to"],
          },
          {
            id: "rs5",
            before: "“I can help.” → She said she ____ help.",
            after: "",
            answers: ["could"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Doğru dönüşüm hangisi?",
            choices: [
              "“I will come.” → She said she will come.",
              "“I will come.” → She said she would come.",
              "“I will come.” → She said she comes.",
            ],
            correctIndex: 1,
            explain: "will → would (zaman kayması).",
          },
        ]}
      />
    </>
  );
}

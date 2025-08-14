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

export default function PastSimple() {
  return (
    <>
      <div className="rule-box">
        <strong>Past Simple</strong> = <Key>geçmişte tamamlanan eylemler</Key>.
        Zaman işaretleri:{" "}
        <Term>yesterday, last (week/month/year), ago, in 2019</Term>.
      </div>

      <Sub title="Kuruluş (Formation)" />
      <Formula
        rows={[
          [
            "Olumlu",
            "Özne + fiilin geçmiş hali (2. hali)",
            "I watched a film. / He went home.",
          ],
          [
            "Olumsuz",
            "Özne + did not + fiilin temel hali",
            "She did not like it.",
          ],
          ["Soru", "Did + Özne + fiilin temel hali?", "Did you see Ali?"],
          ["Kısa cevap", "Yes, I did. / No, I did not.", ""],
        ]}
      />

      <Sub title="Düzenli / Düzensiz Fiiller (Regular / Irregular)" />
      <MiniTable
        head={["Tür", "Kural / Örnek", "Not"]}
        rows={[
          ["Düzenli", "work → worked · play → played", "-ed"],
          ["-e sonu", "live → lived", "yalnız -d"],
          ["sessiz + y", "study → studied", "y → ied"],
          ["Düzensiz", "go→went, have→had, see→saw, make→made", "ezber"],
        ]}
      />

      <Sub title="Sık Düzensizler — Mini Liste (Common irregulars — mini list)" />
      <MiniTable
        head={["Fiil (temel hali)", "Geçmiş hali", "Türkçe"]}
        rows={[
          ["go", "went", "gitmek"],
          ["see", "saw", "görmek"],
          ["have", "had", "sahip olmak / yemek"],
          ["do", "did", "yapmak"],
          ["come", "came", "gelmek"],
          ["make", "made", "yapmak, üretmek"],
          ["take", "took", "almak"],
          ["get", "got", "almak, edinmek"],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog (Examples & Mini-Dialogue)" />
      <Examples
        items={[
          {
            en: "I visited my parents last weekend.",
            tr: "Geçen hafta sonu ailemi ziyaret ettim.",
            pron: "ay vizitıd may perınts last viikend",
          },
          {
            en: "She didn’t watch TV yesterday.",
            tr: "Dün TV izlemedi.",
            pron: "şii didınt voç tii-vii yestırdey",
          },
          {
            en: "Did you go to the party?",
            tr: "Partiye gittin mi?",
            pron: "did yu gou tü dı parti",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog (Mini-Dialogue)">
        <p>
          <strong>A:</strong> What did you do yesterday?
          <br />
          <strong>B:</strong> I studied English and cooked dinner.
        </p>
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Geçmiş hali / ‘did’ + fiilin temel hali (Past form / base after ‘did’)"
        items={[
          {
            id: "ps1",
            before: "She _____ (go) to school yesterday.",
            after: "",
            answers: ["went"],
          },
          {
            id: "ps2",
            before: "I _____ (not / see) him.",
            after: "",
            answers: ["didn't see", "did not see"],
          },
          {
            id: "ps3",
            before: "_____ you _____ (watch) the film?",
            after: "",
            answers: ["did you watch"],
          },
          {
            id: "ps4",
            before: "We _____ (have) dinner at 8.",
            after: "",
            answers: ["had"],
          },
          {
            id: "ps5",
            before: "He _____ (study) English last night.",
            after: "",
            answers: ["studied"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi zaman ifadesi genelde Past Simple?",
            choices: ["usually", "now", "yesterday"],
            correctIndex: 2,
            explain: "yesterday / last… / ago → Past Simple.",
          },
          {
            q: "Olumsuz form doğru olan?",
            choices: [
              "She didn’t watched.",
              "She didn’t watch.",
              "She not watch.",
            ],
            correctIndex: 1,
            explain: "‘did not’ + fiilin temel hali.",
          },
        ]}
      />
    </>
  );
}

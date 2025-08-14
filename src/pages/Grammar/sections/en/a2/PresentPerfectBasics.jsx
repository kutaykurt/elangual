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

export default function PresentPerfectBasics() {
  return (
    <>
      <div className="rule-box">
        <strong>Present Perfect</strong>:{" "}
        <Key>have/has + fiilin 3. hali (past participle)</Key>. Deneyim /{" "}
        <em>şimdiyle bağlantılı</em> sonuç. Tipik zarflar:
        <Term> ever, never, just, already, yet, for, since</Term>. Zamanı
        <strong> genelde söylemeyiz</strong>.
      </div>

      <Sub title="Kuruluş (Formation)" />
      <Formula
        rows={[
          [
            "Olumlu",
            "Özne + have/has + fiilin 3. hali",
            "I have seen it. / She has finished.",
          ],
          [
            "Olumsuz",
            "Özne + have not / has not + fiilin 3. hali",
            "He has not called yet.",
          ],
          [
            "Soru",
            "Have/Has + Özne + fiilin 3. hali?",
            "Have you ever been to London?",
          ],
        ]}
      />

      <Sub title="Zaman Zarfları (Time adverbs)" />
      <MiniTable
        head={["Zarf", "Kullanım", "Örnek"]}
        rows={[
          [
            "ever / never",
            "deneyim",
            "Have you ever tried sushi? / I have never been there.",
          ],
          [
            "just / already / yet",
            "hemen şimdi / çoktan / henüz (olumsuz & soru)",
            "I have just finished. / I have already done it. / He has not called yet.",
          ],
          [
            "for / since",
            "süre / başlangıç",
            "I have lived here for 5 years. / since 2019.",
          ],
        ]}
      />

      <Sub title="Past Simple vs Present Perfect (Karşılaştırma — contrast)" />
      <Callout type="tip" title="Fark (Difference)">
        <ul className="compact-list">
          <li>
            <Term>Past Simple</Term>: <Key>zaman belli</Key> (yesterday, in
            2019). Örn: I visited Paris in 2019.
          </li>
          <li>
            <Term>Present Perfect</Term>: <Key>zaman söylenmez</Key>,
            deneyim/sonuç. Örn: I have visited Paris.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "I have already finished my homework.",
            tr: "Ödevimi çoktan bitirdim.",
            pron: "ay hev olredi finişt may homvörk",
          },
          {
            en: "She has not arrived yet.",
            tr: "Henüz varmadı.",
            pron: "şii hez not ırrayvd yet",
          },
          {
            en: "We have lived here since 2020.",
            tr: "2020’den beri burada yaşıyoruz.",
            pron: "vii hev livd hiır sins tüenti tüenti",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="have/has + fiilin 3. hali (past participle)"
        items={[
          {
            id: "pp1",
            before: "Have you _____ (ever / be) to London?",
            after: "",
            answers: ["ever been"],
          },
          {
            id: "pp2",
            before: "She _____ (not / finish) yet.",
            after: "",
            answers: ["has not finished", "hasn't finished"],
          },
          {
            id: "pp3",
            before: "I _____ (just / see) Ali.",
            after: "",
            answers: ["have just seen"],
          },
          {
            id: "pp4",
            before: "They _____ (live) here _____ 2018.",
            after: "",
            answers: ["have lived since"],
          },
          {
            id: "pp5",
            before: "He _____ (already / do) his homework.",
            after: "",
            answers: ["has already done"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi cümle Present Perfect ile UYUŞMAZ?",
            choices: [
              "I have seen that film yesterday.",
              "I have just seen that film.",
              "Have you ever seen that film?",
            ],
            correctIndex: 0,
            explain: "‘yesterday’ → Past Simple ister.",
          },
        ]}
      />
    </>
  );
}

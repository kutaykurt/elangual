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
import Explain from "../../../../../components/Explain";

export default function ModalVerbsA1() {
  return (
    <>
      <div className="rule-box">
        <strong>Modalverben A1</strong>: <Key>können</Key> (yapabilmek),{" "}
        <Key>möchten</Key> (istemek – kibar), <Key>müssen</Key> (zorunda).
        İkinci fiil daima <Key>cümle sonunda</Key> infinitiv.
      </div>

      <Explain
        title="Neden modal fiiller?"
        lead="Kısa açıklama: Yetenek, kibar istek ve zorunluluk ifadeleri."
      >
        <ul className="compact-list">
          <li>
            <Term>können</Term> = yetenek/olasılık: <em>Ich kann schwimmen.</em>
          </li>
          <li>
            <Term>möchten</Term> = kibar istek: <em>Ich möchte Tee.</em>
          </li>
          <li>
            <Term>müssen</Term> = zorunluluk: <em>Wir müssen gehen.</em>
          </li>
          <li>
            Yapı: <strong>Özne + Modal + … + fiil(son)</strong>.
          </li>
        </ul>
      </Explain>

      <Sub title="Çekim Tablosu" />
      <MiniTable
        head={["Modal", "ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"]}
        rows={[
          ["können", "kann", "kannst", "kann", "können", "könnt", "können"],
          [
            "möchten*",
            "möchte",
            "möchtest",
            "möchte",
            "möchten",
            "möchtet",
            "möchten",
          ],
          ["müssen", "muss", "musst", "muss", "müssen", "müsst", "müssen"],
        ]}
      />

      <Sub title="Tipik A1 kalıplar" />
      <MiniTable
        head={["İhtiyaç", "Kalıp", "Örnek"]}
        rows={[
          ["Kibar istek", "Ich möchte …", "Ich möchte einen Tee trinken."],
          ["Yetenek", "können + V", "Kannst du schwimmen?"],
          ["Zorunluluk", "müssen + V", "Wir müssen şimdi gehen."],
        ]}
      />

      <Explain
        title="‘möchte’ mi, ‘will’ mi?"
        lead="Kısa açıklama: A1’de kibar form olarak ‘möchte’ yeterlidir."
      >
        <p>
          A1’de <strong>kibar</strong> olmak için <Key>möchte</Key> kullan:{" "}
          <em>Ich möchte…</em>. <Key>will</Key> daha direkt/sert bir istek
          olabilir; günlük hayatta da var ama kibar talepler için{" "}
          <Key>möchte</Key> yeterlidir.
        </p>
      </Explain>

      <Sub title="Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "Ich möchte einen Kaffee trinken.",
            tr: "Bir kahve içmek istiyorum (kibar).",
            pron: "ih möhte aynın kafe trin-ken",
          },
          {
            en: "Kannst du morgen kommen?",
            tr: "Yarın gelebilir misin?",
            pron: "kanst du morgın kommen",
          },
          {
            en: "Wir müssen Hausaufgaben machen.",
            tr: "Ödev yapmak zorundayız.",
            pron: "vir müssn hausaufgaben mahın",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog">
        <p>
          <strong>A:</strong> Möchtest du etwas trinken?
          <br />
          <strong>B:</strong> Ja, ich möchte einen Tee.
        </p>
      </Callout>

      <Sub title="Mikro Alıştırmalar" />
      <ExerciseFill
        title="Modal + infinitiv"
        items={[
          {
            id: "mvM1",
            before: "Ich ___ (können) Auto ___ (fahren).",
            after: "",
            answers: ["kann, fahren"],
          },
          {
            id: "mvM2",
            before: "Wir ___ (möchten) Pizza ___ (essen).",
            after: "",
            answers: ["möchten, essen"],
          },
          {
            id: "mvM3",
            before: "___ du morgen ___ (kommen)?",
            after: "",
            answers: ["Kannst, kommen"],
          },
          {
            id: "mvM4",
            before: "Er ___ (müssen) früh ___ (auf/stehen).",
            after: "",
            answers: ["muss, aufstehen"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Doğru kelime sırası?",
            choices: [
              "Ich kann sprechen Deutsch.",
              "Ich kann Deutsch sprechen.",
              "Deutsch sprechen ich kann.",
            ],
            correctIndex: 1,
            explain: "Modal + infinitiv sonda.",
          },
          {
            q: "Kibar istek hangisi?",
            choices: ["Ich will …", "Ich möchte …", "Ich mache …"],
            correctIndex: 1,
            explain: "A1’de ‘möchte’ kibar form.",
          },
        ]}
      />
    </>
  );
}

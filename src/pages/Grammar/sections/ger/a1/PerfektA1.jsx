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
  Formula,
} from "../../../blocks";
import Explain from "../../../../../components/Explain";

export default function PerfektA1() {
  return (
    <>
      <div className="rule-box">
        <strong>Perfekt</strong> (yakın geçmiş): <Key>haben/sein</Key> +{" "}
        <Key>Partizip II</Key>. Konuşmada en yaygın geçmiş.
      </div>

      <Explain
        title="Söz dizimi ve seçim: haben mi, sein mi?"
        lead="Kısa açıklama: Fiil 2. pozisyon; V3 cümle sonunda."
      >
        <ul className="compact-list">
          <li>
            <strong>Fiil</strong> 2. pozisyon, <strong>Partizip II</strong>{" "}
            cümle sonunda: <em>Gestern habe ich lange gearbeitet.</em>
          </li>
          <li>
            <Key>sein</Key> genelde <strong>hareket/değişim</strong>: gehen,
            kommen, fahren, bleiben, werden…
          </li>
          <li>
            Diğer fiiller çoğunlukla <Key>haben</Key>.
          </li>
        </ul>
      </Explain>

      <Sub title="Yapı & söz dizimi" />
      <Formula
        rows={[
          [
            "haben + ge-…-t (düzenli)",
            "Ich habe viel gemacht.",
            "çoğu fiil ‘haben’ ile",
          ],
          [
            "sein + V3 (hareket/değişim)",
            "Er ist nach Berlin gefahren.",
            "gehen/kommen/fahren/bleiben/werden…",
          ],
        ]}
      />

      <Sub title="Düzenli Partizip II" />
      <MiniTable
        head={["Fiil", "Partizip II", "Örnek"]}
        rows={[
          ["machen", "gemacht", "Ich habe viel gemacht."],
          ["spielen", "gespielt", "Wir haben gespielt."],
          ["arbeiten", "gearbeitet", "Sie hat gearbeitet."],
          ["lernen", "gelernt", "Ich habe Deutsch gelernt."],
        ]}
      />

      <Sub title="Düzensiz — mini liste" />
      <MiniTable
        head={["Fiil", "Partizip II", "Yardımcı"]}
        rows={[
          ["gehen", "gegangen", "sein"],
          ["kommen", "gekommen", "sein"],
          ["fahren", "gefahren", "sein"],
          ["sehen", "gesehen", "haben"],
          ["essen", "gegessen", "haben"],
          ["lesen", "gelesen", "haben"],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "Ich habe Kaffee gekocht.",
            tr: "Kahve yaptım.",
            pron: "ih habe kafe gekoHt",
          },
          {
            en: "Wir sind spät gekommen.",
            tr: "Geç geldik.",
            pron: "vir zint şpet gekommen",
          },
          {
            en: "Er hat einen Film gesehen.",
            tr: "Bir film izledi.",
            pron: "er hat aynın film geze:yn",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog">
        <p>
          <strong>A:</strong> Was hast du gestern gemacht?
          <br />
          <strong>B:</strong> Ich habe gelernt und gekocht. Und du?
          <br />
          <strong>A:</strong> Ich bin nach Hause gefahren.
        </p>
      </Callout>

      <Sub title="Mikro Alıştırmalar" />
      <ExerciseFill
        title="haben/sein + Partizip II"
        items={[
          {
            id: "pfM1",
            before: "Ich ___ (haben) viel ___ (arbeiten).",
            after: "",
            answers: ["habe, gearbeitet"],
          },
          {
            id: "pfM2",
            before: "Wir ___ (sein) nach Hause ___ (gehen).",
            after: "",
            answers: ["sind, gegangen"],
          },
          {
            id: "pfM3",
            before: "Er ___ (haben) Pizza ___ (essen).",
            after: "",
            answers: ["hat, gegessen"],
          },
          {
            id: "pfM4",
            before: "Sie ___ (sein) früh ___ (kommen).",
            after: "",
            answers: ["ist, gekommen"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Hangi fiil genelde ‘sein’ ister?",
            choices: ["machen", "lesen", "kommen"],
            correctIndex: 2,
            explain: "Hareket/değişim → sein.",
          },
          {
            q: "Partizip II konumu?",
            choices: [
              "… habe ich gearbeitet.",
              "… habe ich gearbeitet.",
              "Gestern habe ich gearbeitet.",
            ],
            correctIndex: 2,
            explain: "Perfekt → V3 sonda; doğru örnek üçüncü.",
          },
        ]}
      />
    </>
  );
}

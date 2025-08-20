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

export default function NegationNichtKein() {
  return (
    <>
      <div className="rule-box">
        <strong>Negation</strong>: <Key>kein/keine</Key> → isim(artikel)
        yokluğu; <Key>nicht</Key> → fiil/sıfat/zarf/cümle olumsuzu.
      </div>

      <Explain
        title="kein mi, nicht mi? Hızlı seçim"
        lead="Kısa açıklama: İsim için ‘kein’, diğerleri için ‘nicht’."
      >
        <ol className="compact-list">
          <li>
            <strong>İsim var ve artikelli mi?</strong> → <Key>kein/keine</Key>:{" "}
            <em>Ich habe kein Auto.</em>
          </li>
          <li>
            <strong>Sıfat/fiil/zarf/cümle mi?</strong> → <Key>nicht</Key>:{" "}
            <em>Das ist nicht gut.</em>
          </li>
          <li>
            <strong>Maskulin Akkusativ</strong> → <Key>keinen</Key>:{" "}
            <em>Ich trinke keinen Kaffee.</em>
          </li>
        </ol>
      </Explain>

      <Sub title="kein/keine — A1 kapsam" />
      <MiniTable
        head={["Durum", "Biçim", "Örnek"]}
        rows={[
          ["Belirtisiz isim (Nom)", "kein(e) + Nomen", "Ich habe kein Auto."],
          ["Plural", "keine + Pl.", "Wir haben keine Kinder."],
          ["Akk. mask.", "keinen + Nomen", "Ich trinke keinen Kaffee."],
        ]}
      />
      <Callout type="tip" title="Possessiv + kein">
        Sahiplik yokluğu <em>(benim arabam yok)</em> →{" "}
        <Term>Ich habe kein Auto</Term>.
      </Callout>

      <Sub title="nicht — konum (basit rehber)" />
      <MiniTable
        head={["Olumsuzlanan", "Konum", "Örnek"]}
        rows={[
          ["Fiil", "genelde sonda", "Ich arbeite nicht."],
          ["Sıfat", "sıfattan önce", "Das ist nicht teuer."],
          ["Zarf/Zaman", "öğeden önce", "Er kommt heute nicht."],
          ["Tüm cümle", "cümle sonuna yakın", "Ich gehe nicht."],
        ]}
      />

      <Sub title="Örnekler" />
      <Examples
        items={[
          {
            en: "Ich habe keinen Hunger.",
            tr: "Aç değilim.",
            pron: "ih habe kaynın hungır",
          },
          {
            en: "Das ist nicht gut.",
            tr: "Bu iyi değil.",
            pron: "das ist nişt gut",
          },
          {
            en: "Wir spielen heute nicht.",
            tr: "Bugün oynamıyoruz.",
            pron: "vir şpiilen hoyte nişt",
          },
          {
            en: "Er hat keine Zeit.",
            tr: "Onun zamanı yok.",
            pron: "er hat kayne tsayt",
          },
        ]}
      />

      <Sub title="Yaygın Hatalar" />
      <Callout type="error" title="Dikkat">
        <ul className="compact-list">
          <li>
            <em>Ich habe nicht Auto</em> ❌ → <Term>Ich habe kein Auto</Term> ✅
          </li>
          <li>
            Genel olumsuz: <em>nicht gut</em> (sıfattan önce).
          </li>
          <li>
            İçecek/yiyecek olmaması: <em>Ich trinke keinen Kaffee</em>.
          </li>
        </ul>
      </Callout>

      <Sub title="Mikro Driller" />
      <ExerciseFill
        title="kein/keine/keinen vs. nicht"
        items={[
          {
            id: "nkM1",
            before: "Ich habe ___ Geld.",
            after: "",
            answers: ["kein"],
          },
          {
            id: "nkM2",
            before: "Das ist ___ richtig.",
            after: "",
            answers: ["nicht"],
          },
          {
            id: "nkM3",
            before: "Er trinkt ___ Tee.",
            after: "",
            answers: ["keinen"],
          },
          {
            id: "nkM4",
            before: "Wir haben ___ Bücher.",
            after: "",
            answers: ["keine"],
          },
          {
            id: "nkM5",
            before: "Ich komme heute ___ .",
            after: "",
            answers: ["nicht"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Sahiplik yokluğu hangisi?",
            choices: ["nicht", "kein/keine", "ohne"],
            correctIndex: 1,
            explain: "Artikelin olumsuzu → kein/keine.",
          },
          {
            q: "Aşağıdakilerden hangisi doğru?",
            choices: [
              "Ich habe nicht Auto.",
              "Ich habe kein Auto.",
              "Ich habe keine Auto.",
            ],
            correctIndex: 1,
            explain: "‘kein Auto’.",
          },
        ]}
      />
    </>
  );
}

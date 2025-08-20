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

export default function PronounsSeinHaben() {
  return (
    <>
      <div className="rule-box">
        <strong>Kişi Zamirleri + sein/haben</strong> — Tanışma, meslek,
        milliyet, yaş, sahiplik gibi <Key>A1 çekirdek</Key> cümleler.
      </div>

      <Explain
        title="sein mi, haben mi? A1 kullanım alanları"
        lead="Kısa açıklama: ‘sein’ kimlik/yer/yaş; ‘haben’ sahiplik/durum."
      >
        <ul className="compact-list">
          <li>
            <Key>sein</Key>: kimlik/meslek/milliyet/yer/yaş →{" "}
            <em>Ich bin 20.</em>
          </li>
          <li>
            <Key>haben</Key>: sahiplik/durum → <em>Ich habe Zeit/Hunger.</em>
          </li>
          <li>
            Olumsuz sahiplik: <Key>kein/keine</Key> →{" "}
            <em>Ich habe keine Zeit.</em>
          </li>
        </ul>
      </Explain>

      <Sub title="Personalpronomen (Kişi Zamirleri)" />
      <MiniTable
        head={["TR", "Almanca", "Kullanım / Not"]}
        rows={[
          ["ben", "ich", "—"],
          ["sen", "du", "samimi/tekil"],
          ["o (erkek/kadın/nesne)", "er / sie / es", "insan/eşya"],
          ["biz", "wir", "—"],
          ["siz (çoğul)", "ihr", "samimi/çoğul"],
          ["siz (resmî)", "Sie", "daima büyük; tekil/çoğul"],
        ]}
      />

      <Sub title="sein (olmak) — Präsens çekimi" />
      <MiniTable
        head={["Özne", "sein", "Örnek"]}
        rows={[
          ["ich", "bin", "Ich bin Ali. (Ben Ali’yim.)"],
          ["du", "bist", "Du bist Student. (Sensin)"],
          ["er/sie/es", "ist", "Sie ist Lehrerin. / Es ist kalt."],
          ["wir", "sind", "Wir sind müde."],
          ["ihr", "seid", "Ihr seid neu hier."],
          ["Sie", "sind", "Sind Sie Frau Yılmaz?"],
        ]}
      />
      <Callout type="tip" title="A1 kalıpları (sein)">
        <ul className="compact-list">
          <li>
            <Term>Meslek</Term>: Ich bin Lehrer(in). (artikel yok)
          </li>
          <li>
            <Term>Milliyet</Term>: Ich bin Türke/Türkin. / Ich bin aus der
            Türkei.
          </li>
          <li>
            <Term>Yaş</Term>: Ich bin 20 (Jahre alt).
          </li>
          <li>
            <Term>Yer</Term>: Ich bin zu Hause / in Berlin.
          </li>
        </ul>
      </Callout>

      <Sub title="haben (sahip olmak) — Präsens çekimi" />
      <MiniTable
        head={["Özne", "haben", "Örnek"]}
        rows={[
          ["ich", "habe", "Ich habe Zeit."],
          ["du", "hast", "Du hast ein Problem."],
          ["er/sie/es", "hat", "Er hat zwei Kinder."],
          ["wir", "haben", "Wir haben Hunger/Durst."],
          ["ihr", "habt", "Ihr habt Hausaufgaben."],
          ["Sie", "haben", "Sie haben einen Termin."],
        ]}
      />
      <Callout type="tip" title="A1 kalıpları (haben)">
        <ul className="compact-list">
          <li>
            <Term>Hunger/Durst/Angst</Term> → <Key>haben</Key>: Ich habe Hunger.
          </li>
          <li>
            <Term>Zeit/Problem/Fieber</Term> → <Key>haben</Key>: Er hat Fieber.
          </li>
          <li>
            Olumsuz: <Key>kein/keine</Key> ile: Ich habe keine Zeit.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "Ich bin aus der Türkei.",
            tr: "Türkiye’denim.",
            pron: "ih bin aus der türkay",
          },
          {
            en: "Wir sind Freunde.",
            tr: "Biz arkadaşız.",
            pron: "vir zint froynde",
          },
          {
            en: "Ich habe keine Zeit.",
            tr: "Vaktim yok.",
            pron: "ih habe kayne tsayt",
          },
          {
            en: "Sie hat einen Bruder.",
            tr: "Onun bir erkek kardeşi var.",
            pron: "zi hat aynın bruder",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog">
        <p>
          <strong>A:</strong> Wer sind Sie?
          <br />
          <strong>B:</strong> Ich bin Ayla Demir. Ich habe einen Termin um 10
          Uhr.
        </p>
      </Callout>

      <Sub title="Yaygın Hatalar" />
      <Callout type="error" title="Dikkat">
        <ul className="compact-list">
          <li>
            <em>Ich ist</em> ❌ → <Term>Ich bin</Term> ✅
          </li>
          <li>
            <em>Ich habe 20 Jahre alt</em> ❌ →{" "}
            <Term>Ich bin 20 (Jahre alt)</Term> ✅
          </li>
          <li>
            Resmî <Key>Sie</Key> → daima <Key>sind/haben</Key>.
          </li>
        </ul>
      </Callout>

      <Sub title="Mikro Driller (dönüştürme)" />
      <ExerciseFill
        title="sein ↔ haben — doğru olanı seç"
        items={[
          { id: "shm1", before: "Ich ___ müde.", after: "", answers: ["bin"] },
          {
            id: "shm2",
            before: "Du ___ ein Auto.",
            after: "",
            answers: ["hast"],
          },
          { id: "shm3", before: "Er ___ krank.", after: "", answers: ["ist"] },
          {
            id: "shm4",
            before: "Wir ___ Hunger.",
            after: "",
            answers: ["haben"],
          },
          {
            id: "shm5",
            before: "Sie (resmî) ___ Zeit.",
            after: "",
            answers: ["haben"],
          },
        ]}
      />

      <Sub title="Gap-fill (olumsuz & soru)" />
      <ExerciseFill
        title="Olumsuz & soru kalıpları"
        items={[
          {
            id: "sh1",
            before: "Ich ___ keine Zeit.",
            after: "",
            answers: ["habe"],
          },
          {
            id: "sh2",
            before: "___ du Student?",
            after: "",
            answers: ["Bist", "bist"],
          },
          {
            id: "sh3",
            before: "___ er einen Termin?",
            after: "",
            answers: ["Hat", "hat"],
          },
          {
            id: "sh4",
            before: "Wir ___ nicht zuhause.",
            after: "",
            answers: ["sind"],
          },
          {
            id: "sh5",
            before: "___ Sie Lehrer?",
            after: "",
            answers: ["Sind", "sind"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Hangi cümle doğrudur?",
            choices: ["Ich ist Lehrer.", "Ich bin Lehrer.", "Ich bist Lehrer."],
            correctIndex: 1,
            explain: "ich → bin.",
          },
          {
            q: "Yaş ifadesi hangi fiille?",
            choices: ["haben", "sein", "machen"],
            correctIndex: 1,
            explain: "Ich bin 20.",
          },
          {
            q: "Sahiplik olumsuzu?",
            choices: ["nicht", "kein/keine", "ohne"],
            correctIndex: 1,
            explain: "Artikelin olumsuzu → kein/keine.",
          },
        ]}
      />
    </>
  );
}

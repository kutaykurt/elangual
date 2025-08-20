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
import Explain from "../../../../../components/Explain";

export default function WordOrderQuestions() {
  return (
    <>
      <div className="rule-box">
        <strong>Wortstellung & Fragen</strong>: Ana kural <Key>Verb-zweit</Key>.
        Sorular: <Key>Ja/Nein</Key> (fiil başa) · <Key>W-Fragen</Key> (soru
        kelimesi + fiil).
      </div>

      <Explain
        title="Soru tipleri: Hızlı kılavuz"
        lead="Kısa açıklama: Ja/Nein vs. W-Frage."
      >
        <ul className="compact-list">
          <li>
            <Key>Ja/Nein</Key>: Fiil başa → <em>Kommst du heute?</em>
          </li>
          <li>
            <Key>W-Frage</Key>: Soru kelimesi + fiil → <em>Wann kommst du?</em>
          </li>
          <li>
            Cevapta fiil kişiyle uyumlu: <em>Ja, ich komme.</em>
          </li>
        </ul>
      </Explain>

      <Sub title="Bildirici cümle — Verb-zweit" />
      <Formula
        rows={[
          ["Düz", "Özne + Fiil + ...", "Ich komme heute."],
          ["Vurgulu", "Heute + komme ich ...", "Zaman/yer + fiil + özne"],
        ]}
      />

      <Sub title="Ja/Nein-Fragen" />
      <Formula rows={[["Yapı", "Fiil + özne + ... ?", "Kommst du bugün?"]]} />
      <Callout type="tip" title="Evet/Hayır cevapları">
        <em>Ja, …</em> / <em>Nein, …</em> + özne + fiil.
        <em> — Kommst du? — Ja, ich komme. / Nein, ich komme nicht.</em>
      </Callout>

      <Sub title="W-Fragen — A1 soru kelimeleri" />
      <MiniTable
        head={["Kelime", "TR", "Örnek"]}
        rows={[
          ["wer", "kim", "Wer ist das?"],
          ["was", "ne", "Was machst du?"],
          [
            "wo / wohin / woher",
            "nerede / nereye / nereden",
            "Wo wohnst du? Wohin gehst du? Woher kommst du?",
          ],
          ["wann", "ne zaman", "Wann beginnt der Kurs?"],
          [
            "wie / wie alt",
            "nasıl / kaç yaşında",
            "Wie heißt du? Wie alt bist du?",
          ],
          [
            "wie viel(e)",
            "ne kadar / kaç",
            "Wie viel kostet das? Wie viele Bücher?",
          ],
          ["warum", "neden", "Warum lernst du Deutsch?"],
        ]}
      />

      <Sub title="Parçacıklar: ‘oder?’ / ‘nicht wahr?’" />
      <Callout type="info" title="Kibar teyit sorusu">
        <em>Du kommst bugün, oder?</em> ·{" "}
        <em>Sie sind Herr Demir, nicht wahr?</em>
      </Callout>

      <Sub title="Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "Lernst du Deutsch?",
            tr: "Almanca öğreniyor musun?",
            pron: "lernst du doytş",
          },
          {
            en: "Wann kommst du?",
            tr: "Ne zaman geliyorsun?",
            pron: "van komst du",
          },
          {
            en: "Wie alt bist du?",
            tr: "Kaç yaşındasın?",
            pron: "vii alt bist du",
          },
          {
            en: "Woher kommen Sie?",
            tr: "Nereden geliyorsunuz? (resmî)",
            pron: "voher kommen zi",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog">
        <p>
          <strong>A:</strong> Wo wohnst du?
          <br />
          <strong>B:</strong> Ich wohne in Ankara. Und du?
          <br />
          <strong>A:</strong> In Izmir. Kommst du heute, oder?
          <br />
          <strong>B:</strong> Ja, ich komme.
        </p>
      </Callout>

      <Sub title="Mikro Alıştırmalar" />
      <ExerciseFill
        title="W-Kelime + Fiil"
        items={[
          {
            id: "woM1",
            before: "___ kommst du? (ne zaman)",
            after: "",
            answers: ["Wann"],
          },
          {
            id: "woM2",
            before: "___ wohnst du? (nerede)",
            after: "",
            answers: ["Wo"],
          },
          {
            id: "woM3",
            before: "___ gehst du? (nereye)",
            after: "",
            answers: ["Wohin"],
          },
          {
            id: "woM4",
            before: "___ kommst du? (nereden)",
            after: "",
            answers: ["Woher"],
          },
        ]}
      />

      <Sub title="Gap-fill — Diziliş" />
      <ExerciseFill
        title="Verb-zweit koru"
        items={[
          {
            id: "wo1",
            before: "Heute ___ ich nicht.",
            after: "",
            answers: ["komme"],
          },
          {
            id: "wo2",
            before: "Morgen ___ wir Deutsch.",
            after: "",
            answers: ["lernen"],
          },
          {
            id: "wo3",
            before: "___ du müde? (sein)",
            after: "",
            answers: ["Bist", "bist"],
          },
          {
            id: "wo4",
            before: "___ kostet das? (ne kadar)",
            after: "",
            answers: ["Wie viel", "Wieviel"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Doğru Ja/Nein sorusu?",
            choices: [
              "Du kommst heute?",
              "Kommst du heute?",
              "Heute kommst du?",
            ],
            correctIndex: 1,
            explain: "Fiil başa: Kommst du …?",
          },
          {
            q: "Hangi W-soru ‘nereye’?",
            choices: ["wo", "wohin", "woher"],
            correctIndex: 1,
            explain: "wohin = nereye.",
          },
        ]}
      />
    </>
  );
}

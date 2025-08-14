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

export default function Articles() {
  return (
    <>
      <div className="rule-box">
        <Term>a/an</Term> (belirtisiz) · <Term>the</Term> (belirli) ·{" "}
        <Term>ø</Term> (sıfır artikel, genel).
      </div>

      <Sub title="a / an (ses önemli) (sound matters)" />
      <MiniTable
        head={["Kural", "Örnek", "Not"]}
        rows={[
          [
            "a + ünsüz sesi",
            "a book, a dog, a university",
            "university /juː/ → ünsüz sesi: a",
          ],
          [
            "an + ünlü sesi",
            "an apple, an hour, an umbrella",
            "hour /aʊ-/ → an",
          ],
        ]}
      />
      <Examples
        items={[
          { en: "I have a car.", tr: "Arabam var.", pron: "ay hev ı kar" },
          {
            en: "She eats an apple.",
            tr: "O bir elma yer.",
            pron: "şii iits en epıl",
          },
        ]}
      />

      <Sub title="the (belirli) (definite)" />
      <Callout type="tip" title="Ne zaman the?">
        <ul className="compact-list">
          <li>
            Tek, bilinen şeyler: <em>the sun, the moon</em>
          </li>
          <li>
            Bahsedilmiş/özgül: <em>the book on the table</em>
          </li>
          <li>
            Superlatives: <em>the best, the biggest</em>
          </li>
        </ul>
      </Callout>
      <Examples
        items={[
          {
            en: "Open the door, please.",
            tr: "Kapıyı aç lütfen.",
            pron: "oupın dı dor pliiz",
          },
          {
            en: "The sun is bright.",
            tr: "Güneş parlak.",
            pron: "dı san iz brayt",
          },
        ]}
      />

      <Sub title="Artikelsiz kullanım (ø) (Zero article)" />
      <Callout type="tip" title="Genel konuşurken">
        <ul className="compact-list">
          <li>
            Genel çoğul/sayılamayan:{" "}
            <em>Milk is healthy. Books are expensive.</em>
          </li>
          <li>
            Yemek isimleri: <em>We have breakfast at 8.</em>
          </li>
          <li>
            Diller/şehirler/ülkeler:{" "}
            <em>She speaks English. I live in Ankara.</em>
          </li>
        </ul>
      </Callout>

      <Sub title="Mini Sözlük (Mini Vocabulary)" />
      <MiniTable
        head={["İfade", "Çeviri", "Not"]}
        rows={[
          [
            "have breakfast/lunch/dinner",
            "kahvaltı/öğle/akşam yemeği yemek",
            "ø",
          ],
          ["go to school/work", "okula/işe gitmek", "çoğu kullanımda ø"],
          ["play the guitar", "gitar çalmak", "belirli enstrümanlarda the"],
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="a / an / the / ø"
        items={[
          {
            id: "ar1",
            before: "I have ___ umbrella.",
            after: "",
            answers: ["an"],
          },
          {
            id: "ar2",
            before: "He is ___ engineer.",
            after: "",
            answers: ["an"],
          },
          {
            id: "ar3",
            before: "Open ___ window, please.",
            after: "",
            answers: ["the"],
          },
          {
            id: "ar4",
            before: "___ sugar is sweet.",
            after: "",
            answers: ["", "—"],
            hint: "genel ifade",
          },
          {
            id: "ar5",
            before: "She bought ___ book.",
            after: "",
            answers: ["a"],
          },
        ]}
      />
      <ExerciseMC
        items={[
          {
            q: "Hangi cümlede *an* gerekir?",
            choices: ["___ university", "___ orange", "___ house"],
            correctIndex: 1,
            explain: "orange ünlü sesi ile başlar: an orange.",
          },
          {
            q: "Hangisi genel ifade (ø)?",
            choices: [
              "The water is cold.",
              "Water is important.",
              "A water is cold.",
            ],
            correctIndex: 1,
            explain: "Genel: Water is important.",
          },
        ]}
      />
    </>
  );
}

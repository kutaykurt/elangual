import React from "react";
import {
  Term,
  MiniTable,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
  Key,
  Sub,
} from "../../../blocks";

export default function SubjectPronouns() {
  return (
    <>
      <div className="rule-box">
        Özne zamirleri: <Term>I, you, he, she, it, we, you, they</Term>.
        Türkçedeki <em>o</em> İngilizcede <Term>he/she/it</Term> olarak ayrılır.
        <Term>you</Term> tekil/çoğul olabilir. <Key>it</Key> insan için
        kullanılmaz.
      </div>

      <Sub title="Tablo & Notlar (Table & Notes)" />
      <MiniTable
        head={["EN", "TR telaffuz", "Türkçe", "Not"]}
        rows={[
          ["I", "ay", "ben", "Kendinden bahsederken"],
          ["you", "yu", "sen/siz", "Tekil & çoğul"],
          ["he", "hii", "o (erkek)", "Erkek kişi"],
          ["she", "şii", "o (kadın)", "Kadın kişi"],
          ["it", "ıt", "o (nesne/hayvan)", "Hava/saat için de"],
          ["we", "vii", "biz", "Konuşan + başkası"],
          ["they", "dey", "onlar", "İnsan/nesne çoğul"],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog (Examples & Mini-Dialogue)" />
      <Examples
        items={[
          {
            en: "She is my sister.",
            tr: "O (kadın) kız kardeşim.",
            pron: "şii iz may sistır",
          },
          { en: "They are here.", tr: "Onlar burada.", pron: "dey ar hiır" },
          { en: "It is cold.", tr: "Hava soğuk.", pron: "ıt iz kould" },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog (Mini-Dialogue)">
        <p>
          <strong>A:</strong> Who is Ali?
          <br />
          <strong>B:</strong> He is my friend.
        </p>
        <p className="hint">TR: “Ali kim?” — “O (erkek) arkadaşım.”</p>
      </Callout>

      <Callout type="error" title="it ≠ he/she (insanlar için kullanılmaz)">
        <Term>it</Term> insanlar için kullanılmaz; hayvan/nesne/hava/saat için
        kullanılır: <em>It’s 5 o’clock.</em>
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        items={[
          {
            id: "sp1",
            before: "_____ am from Izmir.",
            after: "",
            answers: ["I", "i"],
          },
          {
            id: "sp2",
            before: "_____ is a doctor. (erkek)",
            after: "",
            answers: ["He", "he"],
          },
          {
            id: "sp3",
            before: "_____ are students.",
            after: "",
            answers: ["They", "they"],
          },
          {
            id: "sp4",
            before: "This is a cat. _____ is cute.",
            after: "",
            answers: ["It", "it"],
          },
          {
            id: "sp5",
            before: "_____ are my friends. (sen/siz)",
            after: "",
            answers: ["You", "you"],
          },
        ]}
        title="Boşluk Doldurma (Gap-fill): Doğru özneyi seç"
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi cümlede *it* doğrudur?",
            choices: [
              "It are my mother.",
              "It is raining.",
              "It are students.",
            ],
            correctIndex: 1,
            explain: "Hava/yağmur gibi durumlar için it: It is raining.",
          },
          {
            q: "Hangisi çoğul özne değildir?",
            choices: ["they", "we", "he"],
            correctIndex: 2,
            explain: "he tekildir.",
          },
        ]}
      />
    </>
  );
}

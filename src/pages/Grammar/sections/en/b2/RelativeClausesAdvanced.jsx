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

export default function RelativeClausesAdvanced() {
  return (
    <>
      <div className="rule-box">
        <strong>İleri Relative Clauses</strong>: Defining / Non-defining,
        ‘which’ ile <em>tüm cümleyi</em> niteleme, edatla bitirme/öne alma,
        kısaltma.
      </div>

      <Sub title="Defining vs Non-defining (virgül farkı)" />
      <MiniTable
        head={["Tür", "Örnek", "Not"]}
        rows={[
          [
            "Defining",
            "The students who live in Ankara are here.",
            "Kimlerden bahsettiğimizi belirler; virgül yok.",
          ],
          [
            "Non-defining",
            "My brother, who lives in Ankara, is here.",
            "Ek bilgi; iki virgül arasında.",
          ],
        ]}
      />

      <Sub title="Edatlar: preposition + which/whom" />
      <MiniTable
        head={["Desen", "Örnek", "Stil"]}
        rows={[
          ["end-placed", "the topic which I told you about", "Konuşma dili"],
          ["fronted", "the topic about which I told you", "Resmi/yazılı"],
          ["people", "the person to whom I spoke", "who yerine whom (resmi)"],
        ]}
      />

      <Sub title="‘which’ tüm cümleyi nitelediğinde" />
      <Examples
        items={[
          {
            en: "He refused to comment, which surprised everyone.",
            tr: "Yorum yapmayı reddetti; bu da herkesi şaşırttı.",
            pron: "hi rif-yuuzd tü koment, viç sarp-rayzd evrywın",
          },
          {
            en: "She passed the exam, which made her family proud.",
            tr: "Sınavı geçti — bu da ailesini gururlandırdı.",
            pron: "şii past di egzäm, viç meyd hör femıli praud",
          },
        ]}
      />
      <Callout type="tip" title="Türkçeye çeviri">
        Bu <Key>which</Key>, sondaki <em>bu da / bu ise</em> anlamını verir;
        önceki tüm cümleye referans yapar.
      </Callout>

      <Sub title="Kısaltma (reduction) tekrar" />
      <MiniTable
        head={["Tam", "Kısa", "Not"]}
        rows={[
          ["people who are working", "people working", "be + V-ing düşer"],
          ["results that were expected", "results expected", "pasif kısaltma"],
          [
            "the first person who entered",
            "the first person to enter",
            "to-infinitive (amaç/gelecek)",
          ],
        ]}
      />

      <Sub title="Alıştırma — Gap-fill" />
      <ExerciseFill
        title="Relative Advanced"
        items={[
          {
            id: "rc1",
            before: "My thesis, ___ was finally approved, took two years.",
            after: "",
            answers: ["which"],
          },
          {
            id: "rc2",
            before: "The woman to ___ I spoke was the director.",
            after: "",
            answers: ["whom"],
          },
          {
            id: "rc3",
            before:
              "The city ___ I grew up is by the sea. (end-placed preposition)",
            after: "",
            answers: ["which", "that"],
          },
          {
            id: "rc4",
            before:
              "The first student ___ submit the form will get a bonus. (to-infinitive)",
            after: "",
            answers: ["to"],
          },
          {
            id: "rc5",
            before: "Employees ___ (work) remotely must log in by 9.",
            after: "",
            answers: ["working"],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test"
        items={[
          {
            q: "Non-defining clause için hangisi DOĞRU?",
            choices: [
              "Virgül yoktur.",
              "Virgül gerekir ve ‘that’ kullanılmaz.",
              "‘that’ zorunludur.",
            ],
            correctIndex: 1,
            explain: "Non-defining: virgül gerekir; ‘that’ kullanılmaz.",
          },
          {
            q: "‘which’ tüm cümleyi nitelediğinde işlevi nedir?",
            choices: [
              "Nesneyi belirtir.",
              "Önceki tüm cümleye ‘bu da/ki bu’ anlamı katar.",
              "Sadece zamanı belirtir.",
            ],
            correctIndex: 1,
            explain: "Önceki cümleye referans veren bağlaç görevi görür.",
          },
        ]}
      />
    </>
  );
}

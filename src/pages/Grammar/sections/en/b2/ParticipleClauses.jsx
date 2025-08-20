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

export default function ParticipleClauses() {
  return (
    <>
      <div className="rule-box">
        <strong>Participle Clauses</strong>: Cümleyi kısaltıp akıcı hale
        getirir.
        <Key>Present (-ing)</Key>, <Key>Past (-ed/V3)</Key>,{" "}
        <Key>Perfect (having + V3)</Key>. Genellikle <strong>aynı özne</strong>{" "}
        kuralı vardır.
      </div>

      <Sub title="Present Participle (V-ing) — aynı anda / sebep / sonuç" />
      <MiniTable
        head={["İlişki", "Yapı", "Örnek"]}
        rows={[
          ["Zaman/Eşzamanlı", "V-ing", "Walking down the street, I met Ali."],
          ["Sebep", "V-ing", "Feeling tired, she went to bed early."],
          ["Sonuç", "V-ing", "He slipped, hitting his head."],
        ]}
      />
      <Callout type="tip" title="Aynı özne kuralı">
        <em>Walking down the street,</em> kısmının öznesi{" "}
        <strong>sonraki cümlenin öznesiyle</strong> aynı olmalı:
        <em>✗ Walking down the street, the rain started.</em> (yanlış)
      </Callout>

      <Sub title="Past Participle (V3) — edilgen anlam / önce gelen eylem" />
      <Examples
        items={[
          {
            en: "Given more time, we could finish.",
            tr: "Daha çok zaman verilirse bitirebiliriz.",
            pron: "givın mor taym, vii kud fınış",
          },
          {
            en: "Left unattended, the machine overheats.",
            tr: "Kontrolsüz bırakılınca makine aşırı ısınır.",
            pron: "left anaten-dıd, dı maşiin ouvır-hiits",
          },
        ]}
      />

      <Sub title="Perfect Participle (having + V3) — önce biten eylem" />
      <MiniTable
        head={["Yapı", "Örnek", "Anlam"]}
        rows={[
          [
            "Having + V3",
            "Having finished the report, she went home.",
            "Raporu bitirdikten sonra…",
          ],
          [
            "Having been + V3",
            "Having been warned, he acted carefully.",
            "Uyarıldığı için…",
          ],
        ]}
      />

      <Sub title="Relative clause kısaltma (reduction)" />
      <MiniTable
        head={["Tam biçim", "Kısaltma", "Not"]}
        rows={[
          ["Students who live in Ankara", "Students living in Ankara", "Etken"],
          [
            "Books that were written in 19th c.",
            "Books written in the 19th c.",
            "Edilgen",
          ],
        ]}
      />

      <Sub title="Örnekler" />
      <Examples
        items={[
          {
            en: "Not knowing what to say, I kept silent.",
            tr: "Ne diyeceğimi bilmediğim için sustum.",
            pron: "not nouiŋ vot tü sey, ay kept saylınt",
          },
          {
            en: "Shocked by the news, they called their parents.",
            tr: "Haber karşısında şoka uğrayıp ailelerini aradılar.",
            pron: "şokd bay dı nyuus, dey kold der perınts",
          },
          {
            en: "Having worked all day, he was exhausted.",
            tr: "Bütün gün çalıştığından bitkindi.",
            pron: "heviŋ vörkt ol dey, hii woz egzostıd",
          },
        ]}
      />
      <Callout type="warn" title="Sık hatalar">
        <ul className="compact-list">
          <li>
            <strong>Dangling participle</strong>: Yan tümcenin öznesi belli
            değilse anlam kayar.
          </li>
          <li>
            <strong>Kısa yazma takıntısı</strong>: Akademik yazıda güzel; ama
            aşırı kullanım okunabilirliği düşürür.
          </li>
        </ul>
      </Callout>

      <Sub title="Alıştırma — Gap-fill" />
      <ExerciseFill
        title="Participle Practice"
        items={[
          {
            id: "pc1",
            before: "___ (Not / know) the answer, I asked the teacher.",
            after: "",
            answers: ["Not knowing"],
          },
          {
            id: "pc2",
            before: "___ (Warn) about the risks, she refused to sign.",
            after: "",
            answers: ["Warned", "Having been warned"],
          },
          {
            id: "pc3",
            before: "___ (Finish) the project, we took a day off.",
            after: "",
            answers: ["Having finished"],
          },
          {
            id: "pc4",
            before: "Students ___ (live) in dorms must register.",
            after: "",
            answers: ["living"],
          },
          {
            id: "pc5",
            before: "Books ___ (write) before 1900 are in the archive.",
            after: "",
            answers: ["written"],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test"
        items={[
          {
            q: "Hangi cümlede özne uyumu HATALI?",
            choices: [
              "Walking along the river, I saw a swan.",
              "Having finished, the report was uploaded.",
              "Shocked by the news, she cried.",
            ],
            correctIndex: 1,
            explain:
              "‘Having finished’ kimin bitirdiği belirsiz; özne uyumsuz (‘dangling’).",
          },
        ]}
      />
    </>
  );
}

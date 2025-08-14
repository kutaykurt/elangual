import React from "react";
import {
  Key,
  Examples,
  ExerciseFill,
  ExerciseMC,
  MiniTable,
  Sub,
} from "../../../blocks";

export default function PrepositionsTime() {
  return (
    <>
      <div className="rule-box">
        <strong>Zaman edatları</strong>: <Key>in / on / at</Key> + tipik
        eşleşmeler, ayrıca <Key>ago / in (future) / until / by / from…to</Key>.
      </div>

      <Sub title="in / on / at (time uses)" />
      <MiniTable
        head={["Edat", "Kullanım", "Örnek"]}
        rows={[
          [
            "in",
            "aylar, yıllar, mevsimler, uzun aralıklar",
            "in June, in 2020, in winter, in the morning",
          ],
          ["on", "günler, tarihler", "on Monday, on 5th May"],
          [
            "at",
            "saat, kısa noktalar",
            "at 7 o’clock, at night, at the weekend (UK)",
          ],
        ]}
      />

      <Sub title="Diğerleri (Others)" />
      <MiniTable
        head={["İfade", "Anlam", "Örnek"]}
        rows={[
          ["ago", "geçmişte", "two days ago"],
          ["in (future)", "gelecekten itibaren", "in two days (iki gün sonra)"],
          ["until / till", "…e kadar", "I will wait until 6."],
          ["by", "…e kadar (en geç)", "Finish this by Friday."],
          ["from … to …", "…den …e kadar", "from 9 to 5"],
        ]}
      />

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "We have a meeting on Friday at 10.",
            tr: "Cuma günü saat 10’da toplantımız var.",
            pron: "vii hev ı miiting on fraydey et ten",
          },
          {
            en: "I started this job in 2021.",
            tr: "Bu işe 2021’de başladım.",
            pron: "ay startıd dıs cab in tüenti tüenti van",
          },
          {
            en: "Please finish it by tomorrow.",
            tr: "Lütfen bunu yarına kadar bitir.",
            pron: "pliiz finiş it bay tımorou",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="in / on / at / ago / by"
        items={[
          {
            id: "pt1",
            before: "The class starts ___ 9 a.m.",
            after: "",
            answers: ["at"],
          },
          {
            id: "pt2",
            before: "My birthday is ___ March.",
            after: "",
            answers: ["in"],
          },
          {
            id: "pt3",
            before: "We met ___ Monday.",
            after: "",
            answers: ["on"],
          },
          {
            id: "pt4",
            before: "I called her two days ___.",
            after: "",
            answers: ["ago"],
          },
          {
            id: "pt5",
            before: "Finish the report ___ Friday.",
            after: "",
            answers: ["by"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Doğru olan?",
            choices: ["in Monday", "on Monday", "at Monday"],
            correctIndex: 1,
            explain: "Günlerde ‘on’.",
          },
        ]}
      />
    </>
  );
}

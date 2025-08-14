import React from "react";
import {
  Key,
  Term,
  Formula,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
  Sub,
} from "../../../blocks";

export default function WasWere() {
  return (
    <>
      <div className="rule-box">
        <Term>be</Term>’nin geçmişi: <Key>was / were</Key>.{" "}
        <Key>I/he/she/it → was</Key>, <Key>you/we/they → were</Key>.
      </div>

      <Sub title="Kuruluş (Formation)" />
      <Formula
        rows={[
          ["Olumlu", "Özne + was/were", "I was at home."],
          ["Olumsuz", "Özne + wasn’t/weren’t", "They weren’t happy."],
          ["Soru", "Was/Were + Özne ... ?", "Were you tired?"],
          ["Kısa cevap", "Yes, I was. / No, we weren’t.", ""],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog (Examples & Mini-Dialogue)" />
      <Examples
        items={[
          {
            en: "She was a teacher.",
            tr: "O (kadın) öğretmendi.",
            pron: "şii vaz ı tiiçır",
          },
          {
            en: "We were in Ankara last week.",
            tr: "Geçen hafta Ankara’daydık.",
            pron: "vii vör in ankara last viik",
          },
          { en: "Was it cold?", tr: "Soğuk muydu?", pron: "vaz it kould" },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog (Mini-Dialogue)">
        <p>
          <strong>A:</strong> Were they at the meeting?
          <br />
          <strong>B:</strong> No, they weren’t.
        </p>
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="was / were"
        items={[
          {
            id: "w1",
            before: "I ___ very busy yesterday.",
            after: "",
            answers: ["was"],
          },
          {
            id: "w2",
            before: "They ___ not at school.",
            after: "",
            answers: ["were", "weren't", "were not"],
          },
          {
            id: "w3",
            before: "___ she your teacher?",
            after: "",
            answers: ["Was"],
          },
          {
            id: "w4",
            before: "We ___ in class last Monday.",
            after: "",
            answers: ["were"],
          },
          {
            id: "w5",
            before: "It ___ a sunny day.",
            after: "",
            answers: ["was"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Doğru dizi?",
            choices: [
              "I were / You was",
              "I was / You were",
              "I was / You was",
            ],
            correctIndex: 1,
            explain: "I/he/she/it → was · you/we/they → were.",
          },
        ]}
      />
    </>
  );
}

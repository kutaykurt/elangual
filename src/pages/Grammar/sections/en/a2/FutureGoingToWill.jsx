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

export default function FutureGoingToWill() {
  return (
    <>
      <div className="rule-box">
        <strong>Gelecek</strong>: <Key>be going to</Key> (niyet/plan & kanıtlı
        tahmin) vs <Key>will</Key> (ani karar, teklif, söz).
      </div>

      <Sub title="be going to (plan/niyet — intention/plan)" />
      <Formula
        rows={[
          ["Olumlu", "Özne + am/is/are + going to + V1", "I’m going to study."],
          [
            "Olumsuz",
            "am/is/are + not + going to + V1",
            "She isn’t going to come.",
          ],
          [
            "Soru",
            "Am/Is/Are + Özne + going to + V1?",
            "Are you going to travel?",
          ],
        ]}
      />
      <Callout type="tip" title="Kullanım (Usage)">
        <ul className="compact-list">
          <li>
            <Term>Plan/niyet</Term>: I’m going to visit my friend.
          </li>
          <li>
            <Term>Kanıtlı tahmin</Term>: Look at those clouds! It’s going to
            rain.
          </li>
        </ul>
      </Callout>

      <Sub title="will (ani karar/teklif — spontaneous decision/offer)" />
      <Formula
        rows={[
          ["Olumlu", "Özne + will + V1", "I’ll call you."],
          ["Olumsuz", "Özne + won’t + V1", "He won’t come."],
          ["Soru", "Will + Özne + V1?", "Will you help me?"],
        ]}
      />
      <Callout type="tip" title="Kullanım (Usage)">
        <ul className="compact-list">
          <li>
            <Term>Ani karar</Term>: I’m hungry. I’ll make a sandwich.
          </li>
          <li>
            <Term>Teklif/söz</Term>: I’ll help you.
          </li>
          <li>
            <Term>Tahmin (subjektif)</Term>: I think it’ll be easy.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler & Mini-Diyalog (Examples & Mini-Dialogue)" />
      <Examples
        items={[
          {
            en: "She’s going to start a new job.",
            tr: "Yeni bir işe başlayacak.",
            pron: "şiz gouing tü start ı nyuu cab",
          },
          {
            en: "I’ll carry your bag.",
            tr: "Çantanı taşıyayım.",
            pron: "ayl keri yor beg",
          },
          {
            en: "It’s going to snow.",
            tr: "Kar yağacak.",
            pron: "its gouing tü snou",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog (Mini-Dialogue)">
        <p>
          <strong>A:</strong> It’s very heavy.
          <br />
          <strong>B:</strong> Don’t worry, I’ll help you.
        </p>
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="going to vs will (plan/niyet vs ani karar)"
        items={[
          {
            id: "f1",
            before: "Look at the sky! It ___ (rain).",
            after: "",
            answers: ["is going to rain", "’s going to rain"],
          },
          {
            id: "f2",
            before: "I forgot my pen. I ___ (lend) you mine. (teklif)",
            after: "",
            answers: ["will lend", "’ll lend"],
          },
          {
            id: "f3",
            before: "She ___ (start) a course next week. (plan)",
            after: "",
            answers: ["is going to start", "’s going to start"],
          },
          {
            id: "f4",
            before: "I think they ___ (win).",
            after: "",
            answers: ["will win", "’ll win"],
          },
          {
            id: "f5",
            before: "We ___ (not / travel) this summer. (plan)",
            after: "",
            answers: ["are not going to travel", "aren’t going to travel"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi durumda ‘will’ daha uygun?",
            choices: [
              "kanıtlı hava tahmini",
              "ani karar/teklif",
              "planlı gelecek",
            ],
            correctIndex: 1,
            explain: "Ani karar/teklif → will.",
          },
        ]}
      />
    </>
  );
}

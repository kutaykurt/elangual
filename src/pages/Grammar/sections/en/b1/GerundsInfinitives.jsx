import React from "react";
import {
  Key,
  Examples,
  ExerciseFill,
  ExerciseMC,
  MiniTable,
  Sub,
} from "../../../blocks";

export default function GerundsInfinitives() {
  return (
    <>
      <div className="rule-box">
        <strong>Gerund</strong> (fiile <Key>-ing</Key> eklenmiş hali) &{" "}
        <strong>Infinitive</strong> (<Key>to + fiilin temel hali</Key>). Bazı
        fiiller <Key>-ing</Key> alır (enjoy, mind), bazıları{" "}
        <Key>to + fiil</Key> (want, need), bazıları ikisi (start, like).
      </div>

      <Sub title="Tipik listeler (Typical lists)" />
      <MiniTable
        head={["-ing alan fiiller", "Örnek", "TR telaffuz (yaklaşık)"]}
        rows={[
          [
            "enjoy, mind, suggest, avoid, consider, finish",
            "I enjoy reading.",
            "incoy riiding",
          ],
        ]}
      />
      <MiniTable
        head={["to + fiil alan fiiller", "Örnek", "TR telaffuz (yaklaşık)"]}
        rows={[
          [
            "want, need, decide, hope, plan, learn",
            "I want to learn English.",
            "ay vont tü lörn ingliş",
          ],
        ]}
      />
      <MiniTable
        head={["İkisi de (anlam farkı olabilir)", "Örnek", "Not"]}
        rows={[
          [
            "start, begin, like, love, hate",
            "She started to cry / crying.",
            "B1’de ikisi de kabul.",
          ],
        ]}
      />

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "He avoided talking about money.",
            tr: "Paradan bahsetmekten kaçındı.",
            pron: "hi ıvoydıd tolking ıbaut mani",
          },
          {
            en: "We decided to stay home.",
            tr: "Evde kalmaya karar verdik.",
            pron: "vii disaydıd tü stey houm",
          },
          {
            en: "I enjoy listening to music.",
            tr: "Müzik dinlemekten hoşlanırım.",
            pron: "ay incoy lisınıng tü myuzik",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="-ing mi, to + fiil mi?"
        items={[
          {
            id: "gi1",
            before: "I enjoy _____ (read).",
            after: "",
            answers: ["reading"],
          },
          {
            id: "gi2",
            before: "She wants _____ (go) home.",
            after: "",
            answers: ["to go"],
          },
          {
            id: "gi3",
            before: "They decided _____ (move).",
            after: "",
            answers: ["to move"],
          },
          {
            id: "gi4",
            before: "He avoided _____ (speak).",
            after: "",
            answers: ["speaking"],
          },
          {
            id: "gi5",
            before: "We like _____ (cook) at weekends.",
            after: "",
            answers: ["cooking", "to cook"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangi fiil genelde -ing alır?",
            choices: ["avoid", "want", "decide"],
            correctIndex: 0,
            explain: "avoid + -ing.",
          },
        ]}
      />
    </>
  );
}

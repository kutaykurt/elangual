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

export default function RelativeClauses() {
  return (
    <>
      <div className="rule-box">
        <strong>Relative Clauses</strong> = ismi <Key>tanımlayan</Key>{" "}
        cümlecikler: <Term>who/that (insan)</Term>,{" "}
        <Term>which/that (nesne)</Term>, <Term>where</Term>, <Term>whose</Term>.{" "}
        B1 odak: <Term>defining</Term> (virgül yok).
      </div>

      <Sub title="Tablo (Table)" />
      <MiniTable
        head={["Bağıl", "Kullanım", "Örnek"]}
        rows={[
          [
            "who / that",
            "insan",
            "The man who/that lives next door is a doctor.",
          ],
          ["which / that", "nesne", "The book which/that I bought is great."],
          ["where", "yer", "The place where I was born is small."],
          ["whose", "iyelik", "A friend whose car is red."],
        ]}
      />

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "The woman who teaches us is very kind.",
            tr: "Bize ders veren kadın çok nazik.",
            pron: "dı vuman hu tiiçız as iz veri kaynd",
          },
          {
            en: "I lost the keys that you gave me.",
            tr: "Bana verdiğin anahtarları kaybettim.",
            pron: "ay lost dı kiiz det yu geyv mii",
          },
          {
            en: "That’s the café where we met.",
            tr: "Buluştuğumuz kafe o.",
            pron: "dets dı kafe vɛr vii met",
          },
        ]}
      />
      <Callout type="tip" title="that yerine who/which">
        Konuşmada <Term>who/which</Term> yerine <Term>that</Term> çok yaygın.
      </Callout>

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="who / which / that / where / whose"
        items={[
          {
            id: "rc1",
            before: "The boy _____ lives next door is my cousin.",
            after: "",
            answers: ["who", "that"],
          },
          {
            id: "rc2",
            before: "The car _____ I bought is cheap.",
            after: "",
            answers: ["which", "that"],
          },
          {
            id: "rc3",
            before: "Do you know a place _____ we can study?",
            after: "",
            answers: ["where"],
          },
          {
            id: "rc4",
            before: "The woman _____ house is big is a singer.",
            after: "",
            answers: ["whose"],
          },
          {
            id: "rc5",
            before: "This is the film _____ I told you about.",
            after: "",
            answers: ["which", "that"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Nesneler için en yaygın iki bağıl?",
            choices: ["who / which", "which / that", "who / that"],
            correctIndex: 1,
            explain: "Nesne → which/that.",
          },
        ]}
      />
    </>
  );
}

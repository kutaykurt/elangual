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
import Explain from "../../../../../components/Explain";

export default function PrepositionsBasic() {
  return (
    <>
      <div className="rule-box">
        <strong>Temel Präpositionen (A1)</strong>:{" "}
        <Key>in, bei, mit, nach, zu, von, aus</Key>. A1’de{" "}
        <strong>anlam + tipik kalıplar</strong> önemlidir.
      </div>

      <Explain
        title="A1’de hal bilgisi nasıl düşünülür?"
        lead="Kısa açıklama: Anlama ve sabit kalıplara odaklan."
      >
        <p>
          Bu seviyede <strong>anlam ve sabit kalıplar</strong>a odaklan.
          <Key>nach</Key> (şehir/ülke yön), <Key>zu</Key> (kişi/kurum yön),
          <Key>bei</Key> (yanında/kurumda), <Key>aus</Key> (…den) gibi.
          Kısaltmalar: <code>in dem → im</code>, <code>in das → ins</code>,{" "}
          <code>zu der → zur</code>, <code>an dem → am</code>.
        </p>
      </Explain>

      <Sub title="Yer & kişi" />
      <MiniTable
        head={["Edat", "Anlam", "Örnek"]}
        rows={[
          ["in", "içinde", "Ich bin in Berlin."],
          [
            "bei",
            "-de/-da (kişide/kurumda)",
            "Ich bin bei Ali / bei der Arbeit.",
          ],
          ["mit", "ile", "Ich gehe mit Freunden."],
        ]}
      />

      <Sub title="Yön/varış" />
      <MiniTable
        head={["Edat", "Anlam", "Örnek"]}
        rows={[
          ["nach", "şehir/ülke yön", "Ich fahre nach Ankara."],
          ["zu", "kişiye/kuruma yön", "Ich gehe zu dem Arzt / zur Schule."],
        ]}
      />

      <Sub title="Kaynak/aitlik" />
      <MiniTable
        head={["Edat", "Anlam", "Örnek"]}
        rows={[
          ["von", "…den/…ın", "ein Geschenk von meiner Mutter"],
          ["aus", "…den (içinden)/menşei", "Ich komme aus der Türkei."],
        ]}
      />

      <Sub title="Örnekler" />
      <Examples
        items={[
          {
            en: "Ich arbeite bei Siemens.",
            tr: "Siemens’te çalışıyorum.",
            pron: "ih arbayte bay ziimenz",
          },
          {
            en: "Wir fahren nach Köln.",
            tr: "Köln’e gidiyoruz.",
            pron: "vir fahren nah köln",
          },
          {
            en: "Kommst du mit mir?",
            tr: "Benimle geliyor musun?",
            pron: "komst du mit mi:r",
          },
        ]}
      />

      <Sub title="Mikro Alıştırmalar" />
      <ExerciseFill
        title="Doğru edat"
        items={[
          {
            id: "pbM1",
            before: "Ich gehe ___ Schule.",
            after: "",
            answers: ["zur", "zu der"],
          },
          {
            id: "pbM2",
            before: "Er wohnt ___ Berlin.",
            after: "",
            answers: ["in"],
          },
          {
            id: "pbM3",
            before: "Das ist ein Geschenk ___ meinem Vater.",
            after: "",
            answers: ["von"],
          },
          {
            id: "pbM4",
            before: "Wir kommen ___ der Türkei.",
            after: "",
            answers: ["aus"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Kişiye giderken hangisi?",
            choices: ["nach Ali", "zu Ali", "in Ali"],
            correctIndex: 1,
            explain: "Kişi/kurum → zu.",
          },
          {
            q: "Şehir/ülke yönü?",
            choices: ["in", "nach", "zu"],
            correctIndex: 1,
            explain: "Varış (şehir/ülke) → nach.",
          },
        ]}
      />
    </>
  );
}

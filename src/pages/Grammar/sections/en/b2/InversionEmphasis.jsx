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

export default function InversionEmphasis() {
  return (
    <>
      <div className="rule-box">
        <strong>Inversion</strong>: Vurgu için yardımcı fiil özneden önce gelir.
        Soru değildir, ama <em>soru dizilimi</em> kullanırız.
      </div>

      <Sub title="Negative adverbials (asla, nadiren) + inversion" />
      <MiniTable
        head={["Başlatıcı", "Yapı", "Örnek"]}
        rows={[
          [
            "Never / Rarely / Seldom",
            "Never + <Key>have I</Key> ...",
            "Never have I seen such a view.",
          ],
          [
            "Hardly / Scarcely ... when",
            "Hardly + <Key>had</Key> S + V3 ... when ...",
            "Hardly had I sat down when the phone rang.",
          ],
          [
            "No sooner ... than",
            "No sooner + <Key>had</Key> S + V3 ... than ...",
            "No sooner had we arrived than it started to rain.",
          ],
          [
            "Not until / Only when",
            "Not until ... + <Key>did</Key> S + V1",
            "Not until later did I realize my mistake.",
          ],
        ]}
      />
      <Callout type="tip" title="Neden kullanılır?">
        Yazılı ve resmi dilde <strong>vurgu</strong> ve <strong>drama</strong>{" "}
        katar. Türkçede vurgu tonlamayla/kelime yer değiştirmeyle yapılır;
        İngilizcede inversion güçlü bir araçtır.
      </Callout>

      <Sub title="‘Only’ ifadeleri (only after/by/then/when/if) + inversion" />
      <Examples
        items={[
          {
            en: "Only after the meeting did we understand the issue.",
            tr: "Sadece toplantıdan sonra meseleyi anladık.",
            pron: "ounli after dı miiting did vii andırstend dhi işyu",
          },
          {
            en: "Only then did she agree to help.",
            tr: "Ancak o zaman yardım etmeyi kabul etti.",
            pron: "ounli den did şii egrii tü help",
          },
        ]}
      />

      <Sub title="So / Such ... that + inversion" />
      <MiniTable
        head={["Desen", "Örnek", "Anlam"]}
        rows={[
          [
            "So + adj + <Key>be</Key> + S + that",
            "So beautiful was the view that we stayed.",
            "O kadar güzeldi ki kaldık.",
          ],
          [
            "Such + (a/an) + adj + noun + <Key>be</Key> + S + that",
            "Such a mess was the room that we left.",
            "O kadar dağınıktı ki çıktık.",
          ],
        ]}
      />

      <Sub title="Little did I know ... (habersizlik, sürpriz)" />
      <Examples
        items={[
          {
            en: "Little did I know that this course would change my life.",
            tr: "Bu kursun hayatımı değiştireceğinden hiç haberim yoktu.",
            pron: "lidıl did ay nou det dis kors vud çeynç may layf",
          },
        ]}
      />

      <Callout type="warn" title="Sık hatalar">
        <ul className="compact-list">
          <li>
            <strong>Yardımcı fiil şart</strong>: <em>✗ Never I saw</em> →{" "}
            <strong>✓</strong> <Key>Never did I see</Key>.
          </li>
          <li>
            <strong>Zaman uyumu</strong>: <em>No sooner</em> ve{" "}
            <em>Hardly/Scarcely</em> genelde <Key>Past Perfect</Key> ister.
          </li>
        </ul>
      </Callout>

      <Sub title="Alıştırma — Gap-fill" />
      <ExerciseFill
        title="Inversion Practice"
        items={[
          {
            id: "inv1",
            before: "___ had we started the exam than the fire alarm went off.",
            after: "",
            answers: ["No sooner"],
          },
          {
            id: "inv2",
            before: "Only after the results ___ we realize the error.",
            after: "",
            answers: ["did"],
          },
          {
            id: "inv3",
            before: "___ did I imagine I would pass with such a high score.",
            after: "",
            answers: ["Never"],
          },
          {
            id: "inv4",
            before: "Hardly ___ I opened the door when the cat ran out.",
            after: "",
            answers: ["had"],
          },
          {
            id: "inv5",
            before: "So difficult ___ the task that many people gave up.",
            after: "",
            answers: ["was"],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test"
        items={[
          {
            q: "Hangi cümlede doğru inversion var?",
            choices: [
              "Only after we checked we did see the bug.",
              "Only after we checked did we see the bug.",
              "Only after checked we did see the bug.",
            ],
            correctIndex: 1,
            explain:
              "Only + adverbial → yardımcı fiil özneden önce: did we see.",
          },
          {
            q: "‘No sooner’ ile tipik zaman hangisi?",
            choices: ["Past Simple", "Past Perfect", "Present Perfect"],
            correctIndex: 1,
            explain: "No sooner + had + S + V3 ... than ...",
          },
        ]}
      />
    </>
  );
}

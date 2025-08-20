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

export default function PassiveAdvanced() {
  return (
    <>
      <div className="rule-box">
        <strong>Gelişmiş Pasif</strong>: (1) <Key>Passive reporting</Key> —
        rivayet yapıları, (2) <Key>Causative</Key> — birine bir şey yaptırmak:{" "}
        <Key>have/get something done</Key>.
      </div>

      <Sub title="Passive reporting (rivayet kalıpları)" />
      <MiniTable
        head={["Desen", "Örnek", "Ne zaman?"]}
        rows={[
          [
            "It + be + said/believed/expected + that ...",
            "It is said that he owns a startup.",
            "Genel rivayet",
          ],
          [
            "S + be + said/known/thought + to + V1",
            "He is said to own a startup.",
            "Özneye odak",
          ],
          [
            "S + be + said/known + to have + V3",
            "She is believed to have left.",
            "Geçmiş eylem",
          ],
        ]}
      />
      <Callout type="tip" title="Türkçeden İngilizceye">
        Türkçedeki “<em>… deniyor / … olduğu söyleniyor</em>” ifadelerinin
        doğrudan karşılığıdır: <em>It is said that…</em>
      </Callout>

      <Sub title="Causative: have/get something done" />
      <MiniTable
        head={["Yapı", "Örnek", "Anlam"]}
        rows={[
          ["have + nesne + V3", "I had my hair cut.", "Birine yaptırdım."],
          [
            "get + nesne + V3",
            "We got the car repaired.",
            "Birine yaptırttık (daha konuşma dili).",
          ],
          [
            "have + nesne + V1 (aktif)",
            "I had the technician check the server.",
            "Birine <em>yaptırmak</em> (aktif)",
          ],
        ]}
      />
      <Callout type="warn" title="Sık hatalar">
        <ul className="compact-list">
          <li>
            <strong>make/let vs have/get</strong>: <em>make/let</em> +{" "}
            <Key>V1</Key>; <em>have/get</em> + <Key>V3</Key> (pasif).{" "}
          </li>
          <li>
            <strong>Zaman</strong>: <em>had/got</em> geçmiş; <em>am having</em>{" "}
            şimdi vb.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "It is believed that the policy will change soon.",
            tr: "Politikanın yakında değişeceğine inanılıyor.",
            pron: "it iz bilivd det dı polisi vil çeync suun",
          },
          {
            en: "The CEO is reported to have resigned.",
            tr: "CEO’nun istifa ettiği bildiriliyor.",
            pron: "dı sii-i-ou iz riported tü hev rizaynd",
          },
          {
            en: "I had my laptop fixed yesterday.",
            tr: "Dizüstümü dün tamir ettirdim.",
            pron: "ay hed may leptop fikst yestırdey",
          },
          {
            en: "We got our house painted last summer.",
            tr: "Geçen yaz evimizi boyattık.",
            pron: "vii gat aur haus peyntıd lest samır",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog">
        <p>
          <strong>A:</strong> Who repaired your phone?
          <br />
          <strong>B:</strong> I <strong>had it repaired</strong> at the mall.
        </p>
      </Callout>

      <Sub title="Alıştırma — Gap-fill" />
      <ExerciseFill
        title="Passive Reporting & Causative"
        items={[
          {
            id: "pa1",
            before: "___ is said ___ the match tonight. (rivals to cancel)",
            after: "",
            answers: [
              "It, that the rivals will cancel",
              "It, that the rivals are going to cancel",
            ],
          },
          {
            id: "pa2",
            before: "She ___ (believe) ___ (move) to Canada.",
            after: "",
            answers: ["is believed to have moved"],
          },
          {
            id: "pa3",
            before: "I ___ my car ___ (wash) every week.",
            after: "",
            answers: ["have, washed"],
          },
          {
            id: "pa4",
            before: "We ___ our website ___ (redesign) last month.",
            after: "",
            answers: ["had, redesigned", "got, redesigned"],
          },
          {
            id: "pa5",
            before: "He ___ (report) ___ (be) involved in the case.",
            after: "",
            answers: ["is reported to be"],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test"
        items={[
          {
            q: "Hangi cümle rivayet pasifine örnektir?",
            choices: [
              "They made me rewrite the essay.",
              "It is said that the museum is closed.",
              "I got my jacket cleaned.",
            ],
            correctIndex: 1,
            explain: "It + be + said + that ...",
          },
          {
            q: "‘Birine yaptırdım’ anlamı için en doğal?",
            choices: [
              "I had my car repaired.",
              "I repaired my car.",
              "I made my car repaired.",
            ],
            correctIndex: 0,
            explain: "Causative: have + object + V3.",
          },
        ]}
      />
    </>
  );
}

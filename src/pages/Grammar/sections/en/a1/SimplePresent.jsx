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

export default function SimplePresent() {
  return (
    <>
      <div className="rule-box">
        <strong>Simple Present</strong> ={" "}
        <Key>alışkanlıklar, genel doğrular</Key>. <Term>He/She/It</Term> için{" "}
        <Key>fiil + -s/-es/-ies</Key>.
      </div>

      <Sub title="Kuruluş (Formation)" />
      <Formula
        rows={[
          ["Olumlu", "Özne + Fiil1 (+s/es/ies)", "He plays. / They play."],
          ["Olumsuz", "Özne + do/does + not + Fiil1", "She doesn’t like tea."],
          ["Soru", "Do/Does + Özne + Fiil1 ?", "Does he live in Izmir?"],
        ]}
      />

      <Sub title="He/She/It: Yazım (Spelling)" />
      <MiniTable
        head={["Kural", "Örnek", "Not"]}
        rows={[
          ["-s", "play→plays", "çoğu fiil"],
          ["-es", "watch→watches, go→goes", "-ch/-sh/-o/-x/-ss"],
          ["-ies", "study→studies", "ünsüz + y → -ies"],
          ["have→has", "have→has", "özel durum"],
        ]}
      />

      <Sub title="Sıklık Zarfları (Adverbs of Frequency — position)" />
      <MiniTable
        head={["Zarf", "Kullanım", "Örnek"]}
        rows={[
          [
            "always / usually / often / sometimes / never",
            "Özne + zarf + fiil",
            "I often read at night.",
          ],
          ["be + zarf", "Özne + be + zarf", "She is always late."],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog (Examples & Mini-Dialogue)" />
      <Examples
        items={[
          {
            en: "I work every day.",
            tr: "Her gün çalışırım.",
            pron: "ay vörk evri dey",
          },
          {
            en: "He plays football.",
            tr: "O futbol oynar.",
            pron: "hii pleyz futbol",
          },
          {
            en: "She doesn’t like tea.",
            tr: "O çayı sevmez.",
            pron: "şii dazınt layk tii",
          },
          {
            en: "Do you live in Ankara?",
            tr: "Ankara’da mı yaşıyorsun?",
            pron: "du yu lıv ın ankəra",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog (Mini-Dialogue)">
        <p>
          <strong>A:</strong> Do you usually get up early?
          <br />
          <strong>B:</strong> Yes, I do. I always get up at 6.
        </p>
      </Callout>

      <Callout type="error" title="Yaygın Hatalar (Common Mistakes)">
        <ul className="compact-list">
          <li>
            <em>He don’t like…</em> ❌ → <Term>He doesn’t like…</Term> ✅
          </li>
          <li>
            <em>She doesn’t likes…</em> ❌ → <Term>She doesn’t like…</Term> ✅
          </li>
          <li>
            <em>He have…</em> ❌ → <Term>He has…</Term> ✅
          </li>
        </ul>
      </Callout>

      <Sub title="Mini Sözlük (Daily Routine)" />
      <MiniTable
        head={["Fiil", "TR", "Örnek"]}
        rows={[
          ["get up", "kalkmak", "I get up at 7."],
          ["have breakfast", "kahvaltı etmek", "She has breakfast at 8."],
          [
            "go to work/school",
            "işe/okula gitmek",
            "They go to school by bus.",
          ],
          [
            "read / watch / study",
            "okumak/izlemek/çalışmak",
            "He reads in the evening.",
          ],
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Fiili doğru biçimde kullan (Use the correct verb form)"
        items={[
          {
            id: "s1",
            before: "He ____ (play) tennis on Mondays.",
            after: "",
            answers: ["plays"],
          },
          {
            id: "s2",
            before: "They ____ (not / like) coffee.",
            after: "",
            answers: ["don't like", "do not like"],
          },
          {
            id: "s3",
            before: "____ she ____ (live) in Berlin?",
            after: "",
            answers: ["does she live"],
          },
          {
            id: "s4",
            before: "I ____ (often / read) books at night.",
            after: "",
            answers: ["often read"],
          },
          {
            id: "s5",
            before: "She ____ (have) two brothers.",
            after: "",
            answers: ["has"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangisi doğrudur?",
            choices: [
              "She don’t likes pizza.",
              "She doesn’t like pizza.",
              "She doesn’t likes pizza.",
            ],
            correctIndex: 1,
            explain: "doesn’t + fiil1 (sız).",
          },
          {
            q: "Hangi cümle Simple Present?",
            choices: [
              "I am reading now.",
              "I read every day.",
              "I am going to read.",
            ],
            correctIndex: 1,
            explain: "Rutin/alışkanlık: I read every day.",
          },
        ]}
      />
    </>
  );
}

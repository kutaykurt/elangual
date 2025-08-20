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

export default function ModalDeduction() {
  return (
    <>
      <div className="rule-box">
        <strong>Çıkarım (Deduction)</strong>: Delillere bakarak
        olasılık/kesinlik bildiririz. Şimdi:{" "}
        <Key>must / can’t / might-may-could + V1</Key>. Geçmiş:{" "}
        <Key>must have / can’t (couldn’t) have / might-may-could have + V3</Key>
        .
      </div>

      <Sub title="Present Deduction — Şimdiye dair çıkarım" />
      <MiniTable
        head={["Güç", "Yapı (Form)", "Örnek (Example)"]}
        rows={[
          ["Kesin (pozitif)", "must + V1", "He must be at work. (Kesin işte)"],
          [
            "Kesin (negatif)",
            "can’t / cannot + V1",
            "She can’t be serious. (Ciddi olamaz)",
          ],
          [
            "Olası (belki)",
            "might / may / could + V1",
            "They might be tired. (Yorgun olabilirler)",
          ],
        ]}
      />
      <Callout type="tip" title="Türkçeyle fark">
        Türkçede “kesin” anlamı için bazen <em>-dır/-dir</em> kullanılır (O
        iştedir). İngilizcede bunun karşılığı <Key>must</Key>’tır:
        <em>He must be at work.</em> Negatif kesinlik için <Key>can’t</Key>{" "}
        kullan: <em>It can’t be true.</em>
      </Callout>

      <Sub title="Past Deduction — Geçmişe dair çıkarım" />
      <MiniTable
        head={["Güç", "Yapı", "Örnek"]}
        rows={[
          [
            "Kesin (pozitif)",
            "must have + V3",
            "He must have left early. (Kesin erken çıktı)",
          ],
          [
            "Kesin (negatif)",
            "can’t / couldn’t have + V3",
            "She can’t have seen us. (Bizi görmüş olamaz)",
          ],
          [
            "Olası (belki)",
            "might / may / could have + V3",
            "They might have forgotten. (Unutmuş olabilirler)",
          ],
        ]}
      />
      <Callout type="warn" title="Sık hata">
        <strong>✗</strong> <em>He must went</em> değil, <strong>✓</strong>{" "}
        <Key>must have gone</Key>. Modal + <Key>have + V3</Key> kuralını geçmiş
        çıkarımda unutma.
      </Callout>

      <Sub title="Kanıt dili (evidence language) — ipuçları" />
      <MiniTable
        head={["İpucu", "Tipik ifade", "Doğru modal"]}
        rows={[
          [
            "Güçlü delil",
            "All the lights are off / receipt shows 10:00",
            "must / can’t",
          ],
          [
            "Zayıf delil",
            "maybe / I guess / I’m not sure",
            "might / may / could",
          ],
          [
            "Mantıksal sonuç",
            "given that / considering / obviously",
            "must / can’t",
          ],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "The door is locked. They must be inside.",
            tr: "Kapı kilitli. Kesin içerideler.",
            pron: "dı door iz lokt. dey mast bi insayd",
          },
          {
            en: "It’s 3 a.m. He can’t be at the office.",
            tr: "Saat 3. Ofiste olamaz.",
            pron: "its thrii ey-em. hii kent bi et di ofis",
          },
          {
            en: "I can’t find my wallet. I might have left it on the bus.",
            tr: "Cüzdanımı bulamıyorum. Otobüste bırakmış olabilirim.",
            pron: "ay kent faynd may volet. ay mayt hev left it on dı bas",
          },
          {
            en: "Given the traffic, they must have taken the metro.",
            tr: "Trafiğe bakılırsa kesin metroya binmişler.",
            pron: "givın dı trafık, dey mast hev teykın dı metro",
          },
          {
            en: "She looks confused. She could be new here.",
            tr: "Kafası karışmış görünüyor. Buraya yeni olabilir.",
            pron: "şii luks konfyuuzd. şii kud bi nyuu hiır",
          },
        ]}
      />
      <Callout type="tip" title="Mini-Diyalog">
        <p>
          <strong>A:</strong> The report isn’t in the folder.
          <br />
          <strong>B:</strong> It <strong>must have</strong> been emailed
          yesterday.
        </p>
      </Callout>

      <Sub title="Alıştırma — Gap-fill" />
      <ExerciseFill
        title="Present vs Past Deduction"
        items={[
          {
            id: "ded1",
            before: "He knows everyone’s name. He ___ (be) the manager.",
            after: "",
            answers: ["must be"],
          },
          {
            id: "ded2",
            before: "The ground is wet. It ___ (rain). (belki)",
            after: "",
            answers: [
              "might have rained",
              "may have rained",
              "could have rained",
            ],
          },
          {
            id: "ded3",
            before: "It’s her handwriting. She ___ (write) this note.",
            after: "",
            answers: ["must have written"],
          },
          {
            id: "ded4",
            before: "Lights are off; they ___ (sleep). (kesin değil)",
            after: "",
            answers: [
              "might be sleeping",
              "may be sleeping",
              "could be sleeping",
            ],
          },
          {
            id: "ded5",
            before: "He was abroad yesterday, so he ___ (attend) the meeting.",
            after: "",
            answers: [
              "can’t have attended",
              "cannot have attended",
              "couldn’t have attended",
            ],
          },
          {
            id: "ded6",
            before: "I can’t see his car. He ___ (leave).",
            after: "",
            answers: ["must have left"],
          },
          {
            id: "ded7",
            before: "The email isn’t in my inbox; IT ___ (block) it.",
            after: "",
            answers: [
              "might have blocked",
              "may have blocked",
              "could have blocked",
            ],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test"
        items={[
          {
            q: "Şimdiki zamanda ‘imkânsız’ için doğru yapı hangisi?",
            choices: ["mustn’t + V1", "can’t + V1", "might not + V1"],
            correctIndex: 1,
            explain: "‘Kesin değil’ ≠ ‘yasak’. İmkânsızlık: can’t + V1.",
          },
          {
            q: "Hangi cümle geçmişe dair güçlü çıkarım?",
            choices: [
              "He must be tired.",
              "He might have called.",
              "He must have finished.",
            ],
            correctIndex: 2,
            explain: "Geçmiş + güçlü → must have + V3.",
          },
          {
            q: "Zayıf çıkarım (belki) için hangisi UYGUN değil?",
            choices: ["might", "may", "must"],
            correctIndex: 2,
            explain: "‘must’ güçlü kesinlik verir.",
          },
        ]}
      />
    </>
  );
}

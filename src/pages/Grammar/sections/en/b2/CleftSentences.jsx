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

export default function CleftSentences() {
  return (
    <>
      <div className="rule-box">
        <strong>Cleft sentences</strong>: Bilgiyi iki parçaya bölerek bir ögeyi
        vurgularız. En yaygınları: <Key>It-cleft</Key> ve <Key>Wh-cleft</Key>{" "}
        (what-clause).
      </div>

      <Sub title="It-cleft — ‘Vurgulanan öge + be + that/who …’" />
      <Formula
        rows={[
          [
            "Yapı",
            "It + be + [vurgu] + that/who + cümle",
            "It was <u>John</u> who called.",
          ],
          [
            "Zaman",
            "be fiili zamana göre çekimlenir",
            "It <u>is</u> the price that matters.",
          ],
        ]}
      />
      <Callout type="tip" title="Ne zaman kullanılır?">
        Özne, nesne, zaman, yer gibi bir kısmı öne çıkarmak için:{" "}
        <em>
          It was <u>yesterday</u> that…
        </em>
      </Callout>

      <Sub title="Wh-cleft (Pseudo-cleft) — ‘What ... is ...’" />
      <MiniTable
        head={["Desen", "Örnek", "Not"]}
        rows={[
          [
            "What + S + V + is + N",
            "What I need is time.",
            "Vurgu ‘ihtiyaç’ üzerinde",
          ],
          [
            "What + S + be + V-ing + is + N",
            "What we’re doing is learning.",
            "Süreç vurgusu",
          ],
          [
            "All / The thing (that) ... is ...",
            "All I want is coffee.",
            "Sınırlama vurgusu",
          ],
        ]}
      />

      <Sub title="Karşılaştırma: It-cleft vs Wh-cleft" />
      <MiniTable
        head={["Amaç", "It-cleft", "Wh-cleft"]}
        rows={[
          [
            "Öznede vurgu",
            "It was <u>my teacher</u> who helped me.",
            "Who helped me was <u>my teacher</u>.",
          ],
          [
            "Nesnede vurgu",
            "It is <u>this book</u> that I recommend.",
            "What I recommend is <u>this book</u>.",
          ],
          [
            "Fiilde/eylemde vurgu",
            "It was <u>calling</u> that annoyed him.",
            "What annoyed him was <u>calling</u>.",
          ],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "It was in 1923 that the Republic was founded.",
            tr: "Cumhuriyetin kurulduğu yıl 1923’tü (vurgulu).",
            pron: "it woz in nayn-tiin twenti-thrii det dı ripablik woz faundıd",
          },
          {
            en: "It is the methodology that students struggle with.",
            tr: "Öğrencilerin zorlandığı şey yöntemdir.",
            pron: "it iz dı metodolıcı det styudentz stragl wıth",
          },
          {
            en: "What motivates me is progress.",
            tr: "Beni motive eden şey ilerlemedir.",
            pron: "wot motiveyts mi iz prog-res",
          },
          {
            en: "All I need is a short break.",
            tr: "Tek ihtiyacım kısa bir mola.",
            pron: "ol ay niid iz e şort breyk",
          },
        ]}
      />
      <Callout type="warn" title="Sık hatalar">
        <ul className="compact-list">
          <li>
            <strong>That/Who seçimi</strong>: İnsanlar için <Key>who</Key>,
            diğer her şey için <Key>that</Key>.
          </li>
          <li>
            <strong>Çift özne</strong>: <em>✗ It was John he called</em> →{" "}
            <strong>✓</strong>{" "}
            <em>
              It was John <u>who</u> called.
            </em>
          </li>
        </ul>
      </Callout>

      <Sub title="Alıştırma — Gap-fill" />
      <ExerciseFill
        title="It-cleft & Wh-cleft"
        items={[
          {
            id: "cl1",
            before: "___ was last night ___ we finished the project.",
            after: "",
            answers: ["It, that"],
          },
          {
            id: "cl2",
            before: "What I admire most ___ her honesty.",
            after: "",
            answers: ["is"],
          },
          {
            id: "cl3",
            before: "It ___ my brother ___ taught me English.",
            after: "",
            answers: ["was, who"],
          },
          {
            id: "cl4",
            before: "All I want ___ a fair chance.",
            after: "",
            answers: ["is"],
          },
          {
            id: "cl5",
            before: "What matters most ___ consistency.",
            after: "",
            answers: ["is"],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test"
        items={[
          {
            q: "Nesneyi vurgulamak için en doğal it-cleft?",
            choices: [
              "It is I recommend this book.",
              "It is this book that I recommend.",
              "This book it is that I recommend.",
            ],
            correctIndex: 1,
            explain: "It + be + [nesne] + that + cümle gövdesi.",
          },
        ]}
      />
    </>
  );
}

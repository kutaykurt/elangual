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

export default function LinkersContrast() {
  return (
    <>
      <div className="rule-box">
        <strong>Karşıtlık Bağlaçları</strong>:{" "}
        <Key>although / though / even though</Key> (cümle) ve
        <Key>despite / in spite of</Key> (isim/gerund). Yazıda ayrıca{" "}
        <Key>however / nevertheless</Key>.
      </div>

      <Sub title="Cümle bağlayanlar" />
      <MiniTable
        head={["Bağlaç", "Yapı", "Örnek"]}
        rows={[
          [
            "although / though",
            "Although + S + V, ...",
            "Although it was late, we kept working.",
          ],
          [
            "even though",
            "Even though + S + V, ...",
            "Even though I was tired, I went running.",
          ],
          [
            "however",
            "S + V. However, S + V.",
            "It rained. However, we went out.",
          ],
        ]}
      />
      <Callout type="tip" title="Türkçe karşılık">
        <em>Although/even though</em> → “-e rağmen”; <em>however</em> → “ancak,
        yine de” (bağımsız cümleyi bağlar).
      </Callout>

      <Sub title="İsim/fiil-ing ile kullanılanlar" />
      <MiniTable
        head={["Bağlaç", "Yapı", "Örnek"]}
        rows={[
          ["despite", "Despite + noun / V-ing", "Despite the rain, we played."],
          [
            "in spite of",
            "In spite of + noun / V-ing",
            "In spite of being busy, she called.",
          ],
          [
            "despite the fact that",
            "Despite the fact that + clause",
            "Despite the fact that it was late, ...",
          ],
        ]}
      />

      <Sub title="İnce farklar & stil" />
      <Callout type="info" title="Stil notu">
        <ul className="compact-list">
          <li>
            <Key>even though</Key> → daha güçlü karşıtlık.
          </li>
          <li>
            <Key>though</Key> konuşmada sık, cümle <em>sonunda</em> da
            gelebilir: “I liked it, though.”
          </li>
          <li>
            <Key>however</Key> resmi yazıda; <Key>but</Key> konuşmada.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler" />
      <Examples
        items={[
          {
            en: "Although the task was complex, the team delivered.",
            tr: "Görev karmaşık olmasına rağmen ekip teslim etti.",
            pron: "olthough dı tesk woz kompleks, dı tiim dilivırd",
          },
          {
            en: "In spite of the noise, he managed to sleep.",
            tr: "Gürültüye rağmen uyumayı başardı.",
            pron: "in spayt ov dı noyz, hii meneçt tü sliip",
          },
          {
            en: "We were tired; however, we continued.",
            tr: "Yorgunduk; ancak devam ettik.",
            pron: "vii vör tayırd; hav-evır, vii kontin-yuud",
          },
          {
            en: "Despite being new, she performed well.",
            tr: "Yeni olmasına rağmen iyi performans gösterdi.",
            pron: "dispait biiyiŋ nyuu, şii pırformd uel",
          },
        ]}
      />

      <Sub title="Alıştırma — Gap-fill" />
      <ExerciseFill
        title="Contrast Linkers"
        items={[
          {
            id: "lk1",
            before: "___ it was snowing, the match went on.",
            after: "",
            answers: ["Although", "Even though"],
          },
          {
            id: "lk2",
            before: "___ the pressure, they delivered on time.",
            after: "",
            answers: ["Despite", "In spite of"],
          },
          {
            id: "lk3",
            before: "She was ill; ___, she attended the class.",
            after: "",
            answers: ["however", "nevertheless"],
          },
          {
            id: "lk4",
            before: "___ being warned, he took the risk.",
            after: "",
            answers: ["Despite", "In spite of"],
          },
          {
            id: "lk5",
            before: "___ it was late, we stayed to help.",
            after: "",
            answers: ["Even though", "Although"],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test"
        items={[
          {
            q: "Hangisi isimle kullanılır?",
            choices: ["although", "despite", "even though"],
            correctIndex: 1,
            explain: "despite + isim/V-ing.",
          },
          {
            q: "Hangi seçenek daha güçlü karşıtlık verir?",
            choices: ["although", "even though", "though (sonda)"],
            correctIndex: 1,
            explain: "‘even though’ en güçlü vurgudur.",
          },
        ]}
      />
    </>
  );
}

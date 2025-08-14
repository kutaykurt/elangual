// src/pages/Grammar/registry/sections/en/b1/AdverbsDegree.jsx
import React from "react";
import {
  Key,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
  MiniTable,
  Sub,
} from "../../../blocks";

export default function AdverbsDegree() {
  return (
    <>
      <div className="rule-box">
        <strong>Derece/Miktar Zarfları (Adverbs of Degree)</strong>:{" "}
        <Key>really, very, quite</Key>, <Key>too</Key>, <Key>enough</Key>,{" "}
        <Key>so…that / such…that</Key>.
      </div>

      <Sub title="Yerleşim & Kullanım (Placement & Usage)" />
      <MiniTable
        head={["Öge", "Yerleşim", "Örnek"]}
        rows={[
          [
            "really / very / quite",
            "sıfat veya zarfın önünde",
            "really/very/quite interesting",
          ],
          [
            "too + sıfat/zarf",
            "gereğinden fazla",
            "too expensive / too slowly",
          ],
          ["sıfat/zarf + enough", "yeterince", "warm enough / quickly enough"],
          ["enough + isim", "isimden önce", "enough money / enough time"],
        ]}
      />

      <Sub title="so…that / such…that (neden–sonuç / degree)" />
      <MiniTable
        head={["Yapı", "Şablon", "Örnek"]}
        rows={[
          ["so…that", "so + sıfat/zarf + that", "It was so late that we left."],
          [
            "such…that",
            "such + (sıfat) + isim + that",
            "It was such a good film that we watched it twice.",
          ],
        ]}
      />

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "It’s quite cold but not too cold.",
            tr: "Oldukça soğuk ama çok değil.",
            pron: "its kuayt kould bat not tuu kould",
          },
          {
            en: "The test was so hard that many students failed.",
            tr: "Sınav o kadar zordu ki birçok öğrenci kaldı.",
            pron: "dı test vaz sou haard det meni styudınts feyld",
          },
          {
            en: "We don’t have enough time.",
            tr: "Yeterince zamanımız yok.",
            pron: "vii dont hev inaf taym",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Degree / so…that / such…that"
        items={[
          {
            id: "ad1",
            before: "This is _____ (really / very) interesting.",
            after: "",
            answers: ["really interesting", "very interesting"],
          },
          {
            id: "ad2",
            before: "It’s _____ late that we can’t go.",
            after: "",
            answers: ["so"],
          },
          {
            id: "ad3",
            before: "It was _____ a good idea that we tried it.",
            after: "",
            answers: ["such"],
          },
          {
            id: "ad4",
            before: "We don’t have _____ time.",
            after: "",
            answers: ["enough"],
          },
          {
            id: "ad5",
            before: "This coat is _____ expensive.",
            after: "",
            answers: ["too"],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Doğru eşleşme?",
            choices: ["enough + adj", "adj + enough", "too + noun"],
            correctIndex: 1,
            explain:
              "sıfat + enough (warm enough); enough + isim (enough money).",
          },
        ]}
      />
    </>
  );
}

import React from "react";
import {
  Key,
  Examples,
  ExerciseFill,
  ExerciseMC,
  MiniTable,
  Sub,
} from "../../../blocks";

export default function Quantifiers() {
  return (
    <>
      <div className="rule-box">
        <strong>Sayılabilen vs sayılamayan</strong> isimlerle miktar
        belirteçleri:{" "}
        <Key>
          some/any, much/many, a lot of/lots of, a few/a little, too/enough
        </Key>
        .
      </div>

      <Sub title="Countable vs Uncountable (sayılabilen / sayılamayan)" />
      <MiniTable
        head={["Tür", "Örnek", "Miktar kelimeleri"]}
        rows={[
          [
            "Countable (çoğul olur)",
            "book(s), car(s), idea(s)",
            "many, few, a few",
          ],
          [
            "Uncountable (çoğul olmaz)",
            "water, sugar, money, advice",
            "much, little, a little",
          ],
        ]}
      />

      <Sub title="some / any / a lot of (temel kullanım — basic use)" />
      <MiniTable
        head={["Kural", "Örnek", "Not"]}
        rows={[
          [
            "some (olumlu, teklif/rica)",
            "I have some time. / Would you like some tea?",
            "count/uncount",
          ],
          [
            "any (olumsuz/soru)",
            "I don’t have any money. / Do you have any books?",
            "count/uncount",
          ],
          ["a lot of / lots of", "There are a lot of cars.", "count/uncount"],
        ]}
      />

      <Sub title="much / many · a few / a little (karşılaştırma — contrast)" />
      <MiniTable
        head={["Kural", "Örnek", "Not"]}
        rows={[
          ["many (count)", "many books", ""],
          ["much (uncount)", "much water", ""],
          ["a few (count)", "a few friends", "az ama yeterli"],
          ["few (count)", "few friends", "az ve yetersiz (negatif)"],
          ["a little (uncount)", "a little time", "az ama yeterli"],
          ["little (uncount)", "little time", "az ve yetersiz (negatif)"],
        ]}
      />

      <Sub title="too / enough (derece — degree)" />
      <MiniTable
        head={["Kural", "Örnek", "Not"]}
        rows={[
          ["too + sıfat/zarf", "too expensive", "gereğinden fazla"],
          ["sıfat/zarf + enough", "cheap enough", "yeterince"],
          ["enough + isim", "enough money", ""],
        ]}
      />

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "I have a few questions.",
            tr: "Birkaç sorum var (yeterli).",
            pron: "ay hev ı fyuu kwesçınz",
          },
          {
            en: "We don’t have much time.",
            tr: "Fazla vaktimiz yok.",
            pron: "vii dont hev maç taym",
          },
          {
            en: "It’s too late. We don’t have enough time.",
            tr: "Çok geç. Yeterince zamanımız yok.",
            pron: "its tuu leyt. vii dont hev inaf taym",
          },
        ]}
      />

      <Sub title="Alıştırma (Exercise)" />
      <ExerciseFill
        title="Doğru miktar kelimesi (Choose the correct quantifier)"
        items={[
          {
            id: "q1",
            before: "There aren’t _____ chairs.",
            after: "",
            answers: ["many"],
          },
          {
            id: "q2",
            before: "I have _____ money. (yeterli değil)",
            after: "",
            answers: ["little"],
          },
          {
            id: "q3",
            before: "We need _____ water.",
            after: "",
            answers: ["some", "a lot of"],
          },
          {
            id: "q4",
            before: "He has _____ friends. (az ama yeterli)",
            after: "",
            answers: ["a few"],
          },
          {
            id: "q5",
            before: "This car is _____ expensive.",
            after: "",
            answers: ["too"],
          },
        ]}
      />
      <ExerciseMC
        title="Mini Test (Mini Quiz)"
        items={[
          {
            q: "Hangisi uncountable ile kullanılır?",
            choices: ["many water", "much water", "a few water"],
            correctIndex: 1,
            explain: "water uncountable → much.",
          },
        ]}
      />
    </>
  );
}

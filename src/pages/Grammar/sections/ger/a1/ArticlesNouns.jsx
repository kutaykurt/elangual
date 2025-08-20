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
  Formula,
} from "../../../blocks";
import Explain from "../../../../../components/Explain";

export default function ArticlesNouns() {
  return (
    <>
      <div className="rule-box">
        <strong>Artikel + Nomen (A1)</strong> — Üç cinsiyet:
        <Key>der</Key> (mask.), <Key>die</Key> (fem. & Plural), <Key>das</Key>{" "}
        (neutr.). Belirtisiz: <Key>ein / eine</Key>. Olumsuz:{" "}
        <Key>kein / keine</Key>. A1’de <Term>Nominativ</Term> ve en çok
        kullanılan <Term>Akkusativ (mask.)</Term> temeli.
      </div>

      <Explain
        title="Neden artikel öğreniyoruz? Nasıl düşünmeli?"
        lead="Kısa açıklama: Artikel mantığı ve Nom/Akk farkı."
      >
        <ul className="compact-list">
          <li>
            Almancada <strong>isimler artikelle birlikte</strong> ezberlenir:
            <code>der Tisch</code>, <code>die Tür</code>, <code>das Buch</code>…
          </li>
          <li>
            Cümlede <Term>kim/ne?</Term> = <strong>Nominativ</strong> (özne),
            <Term>kimi/neyi?</Term> = <strong>Akkusativ</strong> (nesne).
          </li>
          <li>
            Olumsuz isimde <Key>kein/keine</Key>; <Key>nicht</Key>{" "}
            fiil/sıfat/cümle olumsuzu (bkz. Negation).
          </li>
        </ul>
      </Explain>

      <Sub title="Nominativ — Kim/Ne? (özne) · Temel Tablo" />
      <MiniTable
        head={["Cinsiyet", "Belirli", "Belirtisiz", "Olumsuz"]}
        rows={[
          ["maskulin", "der Mann", "ein Mann", "kein Mann"],
          ["feminin", "die Lampe", "eine Lampe", "keine Lampe"],
          ["neutrum", "das Auto", "ein Auto", "kein Auto"],
          ["Plural", "die Bücher", "—", "keine Bücher"],
        ]}
      />

      <Sub title="Akkusativ — Nesne (kimi/ne/neyi?)" />
      <Explain
        title="Akkusativte ne değişir?"
        lead="Kısa açıklama: Neden sadece maskulin değişir?"
      >
        <p>
          Yalnızca <strong>maskulin</strong> isimler nesne olduğunda değişir:
          <code>der → den</code>, <code>ein → einen</code>,{" "}
          <code>kein → keinen</code>.
        </p>
      </Explain>
      <MiniTable
        head={["Cinsiyet", "Belirli", "Belirtisiz", "Olumsuz", "Örnek"]}
        rows={[
          ["maskulin", "den", "einen", "keinen", "Ich habe einen Bruder."],
          ["feminin", "die", "eine", "keine", "Ich sehe die Lampe."],
          ["neutrum", "das", "ein", "kein", "Ich kaufe ein Auto."],
          ["Plural", "die", "—", "keine", "Wir kaufen keine Bücher."],
        ]}
      />

      <Sub title="‘kein/keine’ — artikelin olumsuzu" />
      <MiniTable
        head={["Durum", "Yapı", "Örnek"]}
        rows={[
          ["Belirtisiz isim", "kein(e) + Nomen", "Ich habe kein Auto."],
          ["Plural", "keine + Plural", "Wir haben keine Kinder."],
          ["Akk. mask.", "keinen + Nomen", "Er trinkt keinen Kaffee."],
        ]}
      />
      <Callout type="tip" title="kein ≠ nicht">
        <Term>kein</Term> → isim yokluğu. <Term>nicht</Term> → fiil/sıfat veya
        tüm cümle olumsuzu.
      </Callout>

      <Sub title="Plural — A1 mini harita" />
      <MiniTable
        head={["Singular → Plural", "Örnek", "İpucu"]}
        rows={[
          [
            "-e (+ Umlaut olabilir)",
            "der Tag → die Tage · der Apfel → die Äpfel",
            "maskulinde yaygın",
          ],
          [
            "-er (+ Umlaut olabilir)",
            "das Kind → die Kinder · das Buch → die Bücher",
            "neutrumda sık",
          ],
          [
            "-n / -en",
            "die Lampe → die Lampen · die Frau → die Frauen",
            "feminin çoğu",
          ],
          ["-s", "das Auto → die Autos", "yabancı köken/kısaltmalar"],
          ["— (değişmez)", "der Lehrer → die Lehrer", "bazen aynı"],
        ]}
      />

      <Sub title="Cinsiyet ipuçları (A1 güvenli kurallar)" />
      <MiniTable
        head={["Grup / Ek", "Genelde Artikel", "Örnekler"]}
        rows={[
          [
            "Erkek kişiler / meslekler",
            "der",
            "der Mann, der Lehrer, der Arzt",
          ],
          ["Kadın kişiler (-in)", "die", "die Frau, die Lehrerin, die Ärztin"],
          ["-e (çoğu isim)", "die", "die Lampe, die Blume"],
          [
            "-ung/-heit/-keit/-schaft/-ion/-tät",
            "die",
            "die Zeitung, die Gesundheit, die Nation",
          ],
          ["-chen/-lein (küçültme)", "das", "das Mädchen, das Fräulein"],
          [
            "Gün/ay/mevsim/yön",
            "der",
            "der Montag, der Januar, der Sommer, der Norden",
          ],
          ["Fiilden isimleşen (das + Verb)", "das", "das Essen, das Trinken"],
        ]}
      />

      <Sub title="Karar adımları — Hızlı Check" />
      <Formula
        rows={[
          ["Küçültme eki var mı?", "→ das", "das Mädchen"],
          ["Soyut ek (-ung/-heit…)?", "→ die", "die Meinung"],
          ["Zaman adı mı (gün/ay…)?", "→ der", "der Freitag"],
          [
            "Kişi mi? Cinsiyeti belli mi?",
            "er→der · sie→die",
            "der Vater / die Mutter",
          ],
          ["Belirsiz genel nesne mi?", "ein/eine", "ein Auto / eine Lampe"],
        ]}
      />

      <Sub title="Örnekler (Nom + Akk karışık)" />
      <Examples
        items={[
          {
            en: "Der Tisch ist neu.",
            tr: "Masa yeni.",
            pron: "der tiş ist noy",
          },
          {
            en: "Ich kaufe einen Tisch.",
            tr: "Bir masa satın alıyorum.",
            pron: "ih kaufı aynın tiş",
          },
          {
            en: "Die Lampe ist schön.",
            tr: "Lamba güzel.",
            pron: "dii lampe ist şön",
          },
          {
            en: "Ich sehe die Lampe.",
            tr: "Lambayı görüyorum.",
            pron: "ih zee dii lampe",
          },
          {
            en: "Das Kind spielt.",
            tr: "Çocuk oynuyor.",
            pron: "das kint şpiilt",
          },
          {
            en: "Ich habe kein Auto.",
            tr: "Arabam yok.",
            pron: "ih habe kayn auto",
          },
          {
            en: "Er trinkt keinen Kaffee.",
            tr: "Kahve içmiyor.",
            pron: "er trinkt kaynın kafe",
          },
          {
            en: "Wir haben keine Bücher.",
            tr: "Kitabımız yok.",
            pron: "vir haben kayne büher",
          },
        ]}
      />

      <Sub title="Mini Sözlük (ev/okul teması)" />
      <MiniTable
        head={["Singular", "Plural", "TR"]}
        rows={[
          ["der Stuhl", "die Stühle", "sandalye"],
          [
            "der Lehrer / die Lehrerin",
            "die Lehrer / die Lehrerinnen",
            "öğretmen (e/k)",
          ],
          ["die Tür", "die Türen", "kapı"],
          ["die Aufgabe", "die Aufgaben", "ödev/görev"],
          ["das Heft", "die Hefte", "defter"],
          ["das Zimmer", "die Zimmer", "oda"],
        ]}
      />

      <Sub title="Yaygın Hatalar" />
      <Callout type="error" title="Dikkat">
        <ul className="compact-list">
          <li>
            <strong>die</strong> hem <strong>feminin</strong> hem de{" "}
            <strong>plural</strong> olabilir → cümleden çöz.
          </li>
          <li>
            Mask. Akk.: <em>Ich sehe der Lehrer</em> ❌ →{" "}
            <Term>Ich sehe den Lehrer</Term> ✅
          </li>
          <li>
            Genel sıvılar/yiyecek bazen artikelsiz: <em>Ich trinke Wasser</em>.
            “Yok” dersen <Term>kein(e)</Term>.
          </li>
        </ul>
      </Callout>

      <Sub title="Mikro Alıştırmalar (Artikel seçimi)" />
      <ExerciseFill
        title="Doğru artikel?"
        items={[
          {
            id: "anM1",
            before: "___ Montag (belirli)",
            after: "",
            answers: ["Der"],
          },
          {
            id: "anM2",
            before: "Ich habe ___ Idee. (belirtisiz)",
            after: "",
            answers: ["eine"],
          },
          {
            id: "anM3",
            before: "Ich trinke ___ Kaffee nicht. (olumsuz, Akk.)",
            after: "",
            answers: ["keinen"],
          },
          {
            id: "anM4",
            before: "___ Mädchen ist hier. (belirli)",
            after: "",
            answers: ["Das"],
          },
          {
            id: "anM5",
            before: "Wir kaufen ___ Bücher. (olumsuz, Pl.)",
            after: "",
            answers: ["keine"],
          },
        ]}
      />

      <Sub title="Gap-fill (Nom/Akk karışık)" />
      <ExerciseFill
        title="Nom vs. Akk · ein/eine/kein/keine"
        items={[
          {
            id: "an1",
            before: "___ Stuhl ist kaputt. (belirli)",
            after: "",
            answers: ["Der"],
          },
          {
            id: "an2",
            before: "Ich kaufe ___ Lampe. (belirtisiz)",
            after: "",
            answers: ["eine"],
          },
          {
            id: "an3",
            before: "Wir brauchen ___ Tisch. (olumsuz)",
            after: "",
            answers: ["keinen"],
          },
          {
            id: "an4",
            before: "Plural: das Heft → die ___",
            after: "",
            answers: ["Hefte"],
          },
          {
            id: "an5",
            before: "Ich sehe ___ Lehrer. (Akk.)",
            after: "",
            answers: ["den"],
          },
          {
            id: "an6",
            before: "Sie hat ___ Auto. (olumsuz)",
            after: "",
            answers: ["kein"],
          },
          {
            id: "an7",
            before: "___ Bücher sind teuer. (belirli, Pl.)",
            after: "",
            answers: ["Die"],
          },
          {
            id: "an8",
            before: "Er trinkt ___ Tee. (belirtisiz)",
            after: "",
            answers: ["einen"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Maskulin nesne (Akk.) hangisi doğru?",
            choices: [
              "Ich sehe der Mann.",
              "Ich sehe den Mann.",
              "Ich sehe die Mann.",
            ],
            correctIndex: 1,
            explain: "Mask. Akk. → den.",
          },
          {
            q: "Hangi çift doğru paket?",
            choices: [
              "die Buch (Bücher)",
              "das Buch (Bücher)",
              "der Buch (Bücher)",
            ],
            correctIndex: 1,
            explain: "‘Buch’ nötr: das Buch, die Bücher.",
          },
          {
            q: "Genel yiyecek/sıvı cümlesi?",
            choices: [
              "Ich trinke der Wasser.",
              "Ich trinke Wasser.",
              "Ich trinke ein Wasser immer.",
            ],
            correctIndex: 1,
            explain: "Genel ifade → ø: Wasser.",
          },
        ]}
      />
    </>
  );
}

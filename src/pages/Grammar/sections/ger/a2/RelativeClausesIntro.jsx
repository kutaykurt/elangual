// src/pages/Grammar/sections/ger/a2/RelativeClausesIntro.jsx
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
import Explain from "../../../../../components/Explain";

export default function RelativeClausesIntro() {
  return (
    <>
      <div className="rule-box">
        <strong>İlgi Tümceleri (Relativsätze – giriş)</strong>: Bir ismi
        ayrıntıyla anlatan ek cümledir. Bu ek cümle <Key>virgülden sonra</Key>{" "}
        gelir, <Key>der/die/das</Key> gibi bir <Term>bağlayıcı zamir</Term> ile
        başlar ve ek cümlenin <Key>çekimli fiili en sonda</Key> olur.
      </div>

      <Explain
        title="İlgi tümcesi nedir? (Was ist ein Relativsatz?)"
        lead="Bir kişiyi ya da şeyi daha net tanımlamak istediğimizde ana cümleye küçük bir açıklama cümlesi ekleriz."
      >
        <p>
          Türkçede “yanındaki adam <em>ki</em> Berlin’de yaşıyor” gibi yapılar
          kurarız. Almancada bu görevi <Term>der/die/das</Term> gibi{" "}
          <strong>bağlayıcı zamirler</strong> üstlenir:
        </p>
        <p>
          <em>
            Das ist der Mann, <u>der</u> in Berlin <u>wohnt</u>.
          </em>{" "}
          “Bu,{" "}
          <strong>
            Berlin’de <u>oturan</u>
          </strong>{" "}
          adam.”
        </p>
        <p>
          Burada “adam” kelimesini ek cümle açıklıyor. Ek cümle virgülden sonra
          gelir ve oradaki <strong>çekimli fiil her zaman sonda</strong> olur (
          <em>wohnt</em>).
        </p>
      </Explain>

      <Sub title="Adım adım kurulum (Schritt für Schritt)" />
      <Explain
        title="Nasıl kurarım?"
        lead="Hedef ismi bul → ek cümlenin görevini belirle (özne mi nesne mi?) → doğru zamiri seç → virgül koy → ek cümlenin fiilini en sona gönder."
      >
        <ol className="compact-list">
          <li>
            <strong>Hedef isim</strong>: Hangi ismi açıklamak istiyorsun? Örnek:{" "}
            <em>der Mann</em>, <em>die Frau</em>, <em>das Auto</em>.
          </li>
          <li>
            <strong>Görev</strong>: Ek cümlede bu isim <u>özne</u> mi, yoksa{" "}
            <u>nesne</u> mi? Özne ise “kim?” sorusu; nesne ise “kimi/neyi?”
            sorusu.
          </li>
          <li>
            <strong>Zamir</strong>: Özne için <Term>der/die/das</Term>, nesne
            için erkek tekilde <Term>den</Term>, dişi ve nötrde{" "}
            <Term>die/das</Term>, çoğulda her iki durumda da <Term>die</Term>.
          </li>
          <li>
            <strong>Fiil en sonda</strong>: Ek cümlenin çekimli fiilini en sona
            koy.
          </li>
        </ol>
        <p>
          Dönüşüm örneği:{" "}
          <em>
            Ich kenne den Mann. Der Mann arbeitet hier. → Ich kenne den Mann,
            <u>der</u> hier <u>arbeitet</u>.
          </em>
        </p>
      </Explain>

      <Sub title="Bağlayıcı zamirler: hangi durumda hangisi? (Relativpronomen – Nom./Akk.)" />
      <Explain
        title="Kısa kural"
        lead="Ek cümledeki görev özne ise der/die/das; nesne ise yalnızca erkek tekilde den değişir, diğerleri aynıdır."
      >
        <p>
          Ek cümle <strong>özne</strong> ise:
          <em> der (m) · die (f) · das (n) · die (pl)</em>. Ek cümle{" "}
          <strong>nesne</strong> ise:
          <em> den (m) · die (f) · das (n) · die (pl)</em>.
        </p>
      </Explain>
      <MiniTable
        head={[
          "Tür",
          "Erkek (der Mann)",
          "Dişi (die Frau)",
          "Nötr (das Auto)",
          "Çoğul (die Leute)",
          "Türkçe ipucu",
        ]}
        rows={[
          [
            "Özne (kim?)",
            "der",
            "die",
            "das",
            "die",
            "‘…-en kişi/şey’ anlamı: “ki …-ar”",
          ],
          [
            "Nesne (kimi/neyi?)",
            "den",
            "die",
            "das",
            "die",
            "Erkek tekilde den; diğerleri aynı",
          ],
        ]}
      />

      <Sub title="Virgül ve fiil en sonda (Komma + Verb am Ende)" />
      <Explain
        title="Neden virgül ve neden fiil sonda?"
        lead="Ek cümle ana cümlenin içine küçük bir açıklama gibi girer; Almanca ek cümlelerde çekimli fiil her zaman en sonda olur."
      >
        <p>
          <em>
            Das ist die Frau, <u>die</u> im Krankenhaus <u>arbeitet</u>.
          </em>{" "}
          Virgül ek cümleyi ayırır; <em>arbeitet</em> en sonda.
        </p>
        <p>
          <em>
            Ich suche die Tasche, <u>die</u> du gestern <u>gesehen</u> hast.
          </em>{" "}
          Burada “Tasche” ek cümlede <strong>nesne</strong> oldu; bu yüzden{" "}
          <em>die</em> değişmedi (dişi). Yardımcı fiil <em>hast</em> yine en
          sonda.
        </p>
      </Explain>

      <Sub title="Örnekler (Beispiele)" />
      <Examples
        items={[
          {
            en: "Das ist der Lehrer, der aus Köln kommt.",
            tr: "Bu, Köln’den gelen öğretmen.",
            pron: "das ist dea leha, dea aus köln komt",
          },
          {
            en: "Ich kenne die Frau, die neben uns wohnt.",
            tr: "Yanımızda oturan kadını tanıyorum.",
            pron: "ih kene di frau, di neybın uns vont",
          },
          {
            en: "Das ist das Auto, das ich kaufen will.",
            tr: "Bu, almak istediğim araba.",
            pron: "das ist das auto, das ih kaufın vil",
          },
          {
            en: "Ich suche den Mann, den du gestern gesehen hast.",
            tr: "Dün gördüğün adamı arıyorum.",
            pron: "ih zuhe den man, den du gestan gezeen hast",
          },
          {
            en: "Wo sind die Leute, die hier arbeiten?",
            tr: "Burada çalışan insanlar nerede?",
            pron: "vo zint di loyte, di hiya arbaytn",
          },
        ]}
      />

      <Sub title="Sık yapılan hatalar (Typische Fehler)" />
      <Callout type="error" title="Dikkat">
        <ul className="compact-list">
          <li>
            Erkek tekil <strong>nesne</strong> durumunda mutlaka{" "}
            <Term>den</Term> gerekir:
            <em>
              {" "}
              Ich kenne den Mann, <u>den</u> du kennst.
            </em>
          </li>
          <li>
            Ek cümlede <strong>çekimli fiil</strong> her zaman{" "}
            <strong>en sonda</strong>:
            <em>
              {" "}
              …, die im Büro <u>arbeitet</u>.
            </em>
          </li>
          <li>
            Yer isimlerinde günlük dilde bazen <Term>wo</Term> kullanılır:{" "}
            <em>
              Das ist der Ort, <u>wo</u> ich wohne.
            </em>{" "}
            Ancak standart yazıda <em>der/die/das</em> tercih edilir:
            <em>
              {" "}
              … der Ort, <u>in dem</u> ich wohne.
            </em>{" "}
            Bu seviye için <strong>der/die/das</strong> ile çalışmak en
            güvenlisidir.
          </li>
        </ul>
      </Callout>

      <Sub title="Dönüşüm alıştırması (Haupt cümleleri birleştir → ilgi tümcesi)" />
      <ExerciseFill
        title="Cümleleri ilgi tümcesiyle birleştir"
        items={[
          {
            id: "rc1",
            before:
              "Ich kenne den Mann. Er arbeitet in Berlin. → Ich kenne den Mann, ___ in Berlin ___.",
            after: "",
            answers: ["der arbeitet", "der in Berlin arbeitet"],
          },
          {
            id: "rc2",
            before:
              "Das ist die Frau. Du suchst die Frau. → Das ist die Frau, ___ du ___ .",
            after: "",
            answers: ["die suchst", "die du suchst"],
          },
          {
            id: "rc3",
            before:
              "Ich brauche das Buch. Das Buch ist neu. → Ich brauche das Buch, ___ neu ___.",
            after: "",
            answers: ["das ist", "das neu ist"],
          },
          {
            id: "rc4",
            before:
              "Ich sehe den Film. Du empfiehlst den Film. → Ich sehe den Film, ___ du ___ .",
            after: "",
            answers: ["den empfiehlst", "den du empfiehlst"],
          },
          {
            id: "rc5",
            before:
              "Wo sind die Leute? Sie warten draußen. → Wo sind die Leute, ___ draußen ___ ?",
            after: "",
            answers: ["die warten", "die draußen warten"],
          },
        ]}
      />

      <Sub title="Boşluk doldurma (Zamir seçimi + fiil sonda)" />
      <ExerciseFill
        title="der / die / das / den seç – fiili en sona gönder"
        items={[
          {
            id: "rc6",
            before: "Kennst du den Lehrer, ___ in Ankara ___ (wohnen)?",
            after: "",
            answers: ["der wohnt", "der in Ankara wohnt"],
          },
          {
            id: "rc7",
            before: "Das ist das Essen, ___ ich gestern ___ (kaufen) habe.",
            after: "",
            answers: ["das gekauft", "das ich gestern gekauft"],
          },
          {
            id: "rc8",
            before: "Ich suche die Frau, ___ du heute ___ (sehen) hast.",
            after: "",
            answers: ["die gesehen", "die du heute gesehen"],
          },
          {
            id: "rc9",
            before: "Wo ist der Zug, ___ nach München ___ (fahren)?",
            after: "",
            answers: ["der fährt", "der nach München fährt"],
          },
          {
            id: "rc10",
            before:
              "Ich kenne den Mann, ___ du in der Schule ___ (treffen) kannst.",
            after: "",
            answers: ["den treffen", "den du in der Schule treffen"],
          },
        ]}
      />

      <Sub title="Mini Test (Multiple Choice)" />
      <ExerciseMC
        title="Hızlı kontrol: doğru zamir ve fiil yeri"
        items={[
          {
            q: "Doğru cümle hangisi?",
            choices: [
              "Ich kenne den Mann, der arbeitet hier.",
              "Ich kenne den Mann, der hier arbeitet.",
              "Ich kenne den Mann, den arbeitet hier.",
            ],
            correctIndex: 1,
            explain:
              "Ek cümlede çekimli fiil sonda: … der hier arbeitet. ‘den arbeitet’ yanlış görev.",
          },
          {
            q: "Erkek tekil NESNE olduğunda hangi zamir?",
            choices: ["der", "den", "das"],
            correctIndex: 1,
            explain:
              "Nesne durumunda yalnızca erkek tekilde ‘den’ olur; diğerleri değişmez.",
          },
          {
            q: "Hangi cümlede virgül ve fiil yeri doğru?",
            choices: [
              "Das ist die Frau die im Büro arbeitet.",
              "Das ist die Frau, die im Büro arbeitet.",
              "Das ist die Frau, die arbeitet im Büro.",
            ],
            correctIndex: 1,
            explain: "Virgül gerekli ve fiil sonda: …, die im Büro arbeitet.",
          },
        ]}
      />

      <Sub title="Telaffuz ipuçları (Aussprache – Türkçe odaklı)" />
      <Callout type="tip" title="Küçük ama etkili ipuçları">
        <ul className="compact-list">
          <li>
            <Term>der</Term>: “dea” gibi; <Term>die</Term>: kısa “di”;{" "}
            <Term>das</Term>: kısa “das”; <Term>den</Term>: “deyn”.
          </li>
          <li>
            Virgülde çok kısa bir duraklama yap; sonra ek cümleyi doğal bir
            akışla söyle.
          </li>
        </ul>
      </Callout>
    </>
  );
}

// src/pages/Grammar/sections/ger/a2/CasesDAIntro.jsx
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

export default function CasesDAIntro() {
  return (
    <>
      <div className="rule-box">
        <strong>Hâl Bilgisi: –i hâli ve –e/–a hâli (Akkusativ & Dativ)</strong>:
        Cümlede doğrudan etkilenen nesne genelde <Key>–i hâli (Akkusativ)</Key>,
        dolaylı alıcı/yararlanan ise <Key>–e/–a hâli (Dativ)</Key> olur. Örnek:
        <em>
          {" "}
          Ich gebe <u>dem Kind</u> <u>den Ball</u>.
        </em>
        Burada <em>dem Kind</em> (çocuğa) Dativ, <em>den Ball</em> (topu)
        Akkusativ.
      </div>

      <Explain
        title="Neden hâl bilgisi öğreniyoruz? (Warum Kasus?)"
        lead="Almancada isimlerin ve zamirlerin biçimi, cümledeki görevine göre değişir."
      >
        <p>
          Türkçede eklerle anlatırız:{" "}
          <em>
            kitab<i>ı</i>
          </em>{" "}
          (–i hâli),{" "}
          <em>
            Ali’<u>ye</u>
          </em>{" "}
          (–e/–a hâli). Almancada bu görevleri <Term>Artikel</Term> ve bazen
          isim biçimi gösterir.
          <strong>–i hâli (Akkusativ)</strong> çoğu zaman doğrudan nesnedir:
          <em>
            {" "}
            Ich kaufe <u>ein Auto</u>.
          </em>
        </p>
        <p>
          <strong>–e/–a hâli (Dativ)</strong> çoğu zaman alıcı veya yararlanan
          kişidir:
          <em>
            {" "}
            Ich gebe <u>meinem Bruder</u> ein Buch.
          </em>{" "}
          (Kardeşime bir kitap veriyorum.)
        </p>
      </Explain>

      <Sub title="–i hâli: Doğrudan nesne (Akkusativ – Direktes Objekt)" />
      <Explain
        title="Ne zaman –i hâli kullanılır?"
        lead="Fiilin etkilediği şey ya da kişiyi –i hâli ile veririz."
      >
        <p>
          <em>Was? (Neyi?)</em> ve <em>Wen? (Kimi?)</em> sorularına yanıt veren
          unsur genelde doğrudan nesnedir. Örnekler:
        </p>
        <p>
          <em>
            Ich suche <u>den Schlüssel</u>.
          </em>{" "}
          (Anahtarı arıyorum.)
          <br />
          <em>
            Sie liest <u>ein Buch</u>.
          </em>{" "}
          (O bir kitap okuyor.)
        </p>
        <Callout type="tip" title="Küçük ipucu">
          <p>
            Erkek cins diye bilinen <Term>der</Term> artikel, –i hâlinde
            çoğunlukla
            <Term>den</Term> olur: <em>der Mann → den Mann</em>.
          </p>
        </Callout>
      </Explain>

      <Sub title="–e/–a hâli: Dolaylı nesne (Dativ – Indirektes Objekt)" />
      <Explain
        title="Ne zaman –e/–a hâli kullanılır?"
        lead="Alıcı, yararlanan ya da hedef kişi çoğu zaman –e/–a hâlidir."
      >
        <p>
          <em>Wem? (Kime?)</em> sorusuna yanıt verir. Örnekler:
        </p>
        <p>
          <em>
            Ich helfe <u>meiner Mutter</u>.
          </em>{" "}
          (Anneme yardım ediyorum.)
          <br />
          <em>
            Der Lehrer erklärt <u>den Kindern</u> die Aufgabe.
          </em>{" "}
          (Öğretmen çocuklara görevi açıklıyor.)
        </p>
        <Callout type="info" title="Dativ isteyen tipik fiiller">
          <p>
            Şu fiillerden sonra nesne genelde –e/–a hâli olur:
            <Term> helfen</Term> (yardım etmek),
            <Term> danken</Term> (teşekkür etmek),
            <Term> gehören</Term> (ait olmak),
            <Term> gefallen</Term> (hoşa gitmek),
            <Term> passen</Term> (uymak),
            <Term> schmecken</Term> (tadı hoşuna gitmek).
          </p>
        </Callout>
      </Explain>

      <Sub title="Artikel değişimleri: net tablo (Bestimmte/Unbestimmte Artikel)" />
      <Explain
        title="Önce mantığı gör, sonra tabloya bak"
        lead="Eril isimler –i hâlinde genelde den olur; –e/–a hâlinde eril dem, dişil der, nötr dem, çoğul den + isimde –n eki."
      >
        <p>
          Çoğulda –e/–a hâli için isimlerin çoğu sonuna <strong>–n</strong>{" "}
          alır:
          <em>
            {" "}
            die Kinder → den Kinder<strong>n</strong>
          </em>
          .
        </p>
      </Explain>
      <MiniTable
        head={[
          "Hâl",
          "Eril (mask.)",
          "Dişil (fem.)",
          "Nötr (neut.)",
          "Çoğul (Pl.)",
        ]}
        rows={[
          [
            "Belirli artikel (der/die/das →)",
            "der → den",
            "die → die",
            "das → das",
            "die → die",
          ],
          ["–e/–a hâli (Dativ, belirli)", "dem", "der", "dem", "den + -n"],
          [
            "Belirsiz artikel (ein/eine →)",
            "ein → einen",
            "eine → eine",
            "ein → ein",
            "—",
          ],
          ["–e/–a hâli (Dativ, belirsiz)", "einem", "einer", "einem", "—"],
        ]}
      />
      <Examples
        items={[
          {
            en: "Ich sehe den Mann.",
            tr: "Adamı görüyorum. (–i hâli)",
            pron: "ih zee-e den man",
          },
          {
            en: "Ich gebe dem Mann das Buch.",
            tr: "Adama kitabı veriyorum. (–e/–a hâli + –i hâli)",
            pron: "ih ge-be dem man das buH",
          },
          {
            en: "Der Lehrer hilft den Kindern.",
            tr: "Öğretmen çocuklara yardım ediyor. (–e/–a hâli çoğul + -n)",
            pron: "dea lea-ra hilt den kindan",
          },
        ]}
      />

      <Sub title="Edatlarla hâl: kısa hatırlatma (Präpositionen + Kasus)" />
      <Explain
        title="Bazı edatlar her zaman –e/–a hâli ister"
        lead="Şunlardan sonra isim –e/–a hâlidir: mit, nach, bei, seit, von, zu, aus."
      >
        <p>
          <em>
            mit <u>dem</u> Auto
          </em>{" "}
          (arabayla),
          <em>
            {" "}
            zu <u>der</u> Schule → zur Schule
          </em>
          ,
          <em>
            {" "}
            bei <u>der</u> Arbeit
          </em>
          ,
          <em>
            {" "}
            aus <u>der</u> Türkei
          </em>
          .
        </p>
        <Callout type="tip" title="Yön ve konum edatları">
          <p>
            <em>in, auf, an</em> gibi bazı edatlar hareket varsa çoğunlukla –i
            hâli, konum varsa çoğunlukla –e/–a hâli alır. Bu konu “Wechsel
            Edatları” bölümünde ayrıntılı işlendi.
          </p>
        </Callout>
      </Explain>

      <Sub title="Nesnelerin sırası ve zamirler (Reihenfolge im Satz)" />
      <Explain
        title="Doğal Almanca diziliş"
        lead="İki isim birlikteyse genelde önce –e/–a hâli, sonra –i hâli gelir. Zamir varsa zamir öne gelme eğilimindedir."
      >
        <p>
          İki isim:{" "}
          <em>
            Ich gebe <u>dem Kind</u> <u>den Ball</u>.
          </em>
        </p>
        <p>
          Zamir + isim:{" "}
          <em>
            Ich gebe <u>ihm</u> <u>den Ball</u>.
          </em>
        </p>
        <p>
          İki zamir:{" "}
          <em>
            Ich gebe <u>ihn</u> <u>dir</u>.
          </em>{" "}
          ya da
          <em>
            {" "}
            Ich gebe <u>dir</u> <u>ihn</u>.
          </em>{" "}
          Konuşmada en doğal olanı çoğunlukla
          <em>
            {" "}
            Ich gebe <u>ihn</u> <u>dir</u>.
          </em>{" "}
          şeklindedir.
        </p>
        <Formula
          rows={[
            [
              "Bildirim",
              "Özne + fiil + (–e/–a hâli) + (–i hâli)",
              "Ich gebe dem Kind den Ball.",
            ],
            [
              "Genel soru",
              "Fiil + özne + ... ?",
              "Gibst du dem Kind den Ball?",
            ],
            [
              "Olumsuz",
              "Özne + fiil + nicht/kein + ...",
              "Ich gebe dem Kind den Ball nicht.",
            ],
          ]}
        />
      </Explain>

      <Sub title="Sık hatalar (Häufige Fehler)" />
      <Callout type="error" title="Dikkat et">
        <ul className="compact-list">
          <li>
            <em>*Ich helfe den Mann*</em> değil,
            <Term>
              {" "}
              Ich helfe <u>dem Mann</u>
            </Term>
            .
          </li>
          <li>
            Çoğul –e/–a hâlinde isim sonuna genelde <strong>–n</strong> gelir:
            <em>
              {" "}
              den Kind<u>ern</u>
            </em>
            .
          </li>
          <li>
            Eril isim –i hâli: <em>der</em> → <em>den</em>:
            <em>
              {" "}
              Ich sehe <u>den</u> Hund
            </em>
            .
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler (Beispiele)" />
      <Examples
        items={[
          {
            en: "Kannst du dem Nachbarn helfen?",
            tr: "Komşuya yardım edebilir misin?",
            pron: "kanst du dem nah-ba:n helfen",
          },
          {
            en: "Ich kaufe der Schwester ein Geschenk.",
            tr: "Kız kardeşe bir hediye alıyorum.",
            pron: "ih kau-fe dea şvesta ayn ge-şenk",
          },
          {
            en: "Gibst du mir bitte das Salz?",
            tr: "Bana lütfen tuzu verir misin?",
            pron: "gibst du mi:r bitte das zalts",
          },
        ]}
      />

      <Sub title="Boşluk doldurma – doğru hâli seç (seçmeli)" />
      <ExerciseFill
        title="–i hâli mi, –e/–a hâli mi?"
        items={[
          {
            id: "da1",
            before: "Ich sehe ___ Mann.",
            after: "",
            answers: ["den"],
            answersOptions: ["der", "den", "dem"],
          },
          {
            id: "da2",
            before: "Ich helfe ___ Frau.",
            after: "",
            answers: ["der"],
            answersOptions: ["die", "der", "den"],
          },
          {
            id: "da3",
            before: "Er gibt ___ Kind ___ Ball.",
            after: "",
            answers: ["dem", "den"],
            answersOptions: ["dem / den", "den / dem", "der / das"],
          },
          {
            id: "da4",
            before: "Wir danken ___ Lehrerin.",
            after: "",
            answers: ["der"],
            answersOptions: ["die", "der", "den"],
          },
          {
            id: "da5",
            before: "Sie kauft ___ Bruder ein Auto.",
            after: "",
            answers: ["dem"],
            answersOptions: ["den", "dem", "der"],
          },
          {
            id: "da6",
            before: "Der Mantel passt ___ Mann nicht.",
            after: "",
            answers: ["dem"],
            answersOptions: ["den", "dem", "der"],
          },
        ]}
      />

      <Sub title="Mini Test (Multiple Choice)" />
      <ExerciseMC
        title="Hızlı kontrol"
        items={[
          {
            q: "Doğru cümle hangisi?",
            choices: [
              "Ich helfe den Mann.",
              "Ich helfe dem Mann.",
              "Ich helfe den Mannes.",
            ],
            correctIndex: 1,
            explain: "helfen fiili –e/–a hâli ister: dem Mann.",
          },
          {
            q: "Hangi cümlede –i hâli doğru?",
            choices: [
              "Ich sehe der Hund.",
              "Ich sehe den Hund.",
              "Ich sehe dem Hund.",
            ],
            correctIndex: 1,
            explain: "Doğrudan nesne → –i hâli: den Hund.",
          },
          {
            q: "Çoğul –e/–a hâlinde doğru biçim?",
            choices: ["den Kinder", "den Kindern", "dem Kindern"],
            correctIndex: 1,
            explain: "Çoğul –e/–a hâli: den + isimde -n → den Kindern.",
          },
          {
            q: "Doğal diziliş hangisi?",
            choices: [
              "Ich gebe den Ball dem Kind.",
              "Ich gebe dem Kind den Ball.",
              "Ich gebe den Ball es.",
            ],
            correctIndex: 1,
            explain:
              "İki isim olduğunda sık kalıp: önce –e/–a hâli, sonra –i hâli.",
          },
        ]}
      />

      <Sub title="Mini yazma (40–80 kelime)" />
      <Callout type="tip" title="Verme–yardım etme senaryosu yaz">
        <p>
          En az üç cümlede kime ne verdiğini, kime nasıl yardım ettiğini anlat.
          En az iki cümlede –e/–a hâli, iki cümlede –i hâli kullan. Örn.:
          <em> Ich gebe meiner Schwester ein Buch. Ich helfe dem Nachbarn.</em>
        </p>
      </Callout>
    </>
  );
}

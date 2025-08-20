// src/pages/Grammar/sections/ger/a2/PronounsDA.jsx
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

export default function PronounsDA() {
  return (
    <>
      <div className="rule-box">
        <strong>
          Zamirler: –i hâli ve –e/–a hâli (Akkusativ- & Dativpronomen)
        </strong>{" "}
        · “Neyi/kimi?” sorusu → <Key>–i hâli (Akkusativ)</Key>, “kime?” sorusu →{" "}
        <Key>–e/–a hâli (Dativ)</Key>. Örnek:{" "}
        <em>
          Ich gebe <u>ihm</u> <u>es</u>.
        </em>{" "}
        (Ona onu veriyorum.)
      </div>

      <Explain
        title="Büyük resim: Neden zamir kullanırız? (Warum Pronomen?)"
        lead="Zamirler ismi tekrar etmekten kurtarır ve cümleyi akıcı yapar."
      >
        <p>
          Türkçede “kitabı Ali’ye verdim → <strong>onu</strong>{" "}
          <strong>ona</strong> verdim” deriz. Almancada da aynı mantık
          geçerlidir: doğrudan nesne (<em>neyi/kimi?</em>) için
          <Term>–i hâli (Akkusativ)</Term>, alıcı/yararlanan (<em>kime?</em>)
          için
          <Term>–e/–a hâli (Dativ)</Term> kullanırız:
          <em>
            {" "}
            Ich gebe <u>ihm</u> <u>es</u>.
          </em>
        </p>
        <p>
          Soruları unutma: <strong>Wen?/Was?</strong> (= kimi/neyi?) → –i hâli.{" "}
          <strong>Wem?</strong> (= kime?) → –e/–a hâli.
        </p>
      </Explain>

      <Sub title="–i hâli zamirleri (Akkusativpronomen)" />
      <Explain
        title="Ne zaman –i hâli? (kimi/neyi?)"
        lead="Fiilin doğrudan etkilediği kişi/şey → –i hâli zamiri."
      >
        <p>
          <em>
            Ich sehe <u>ihn</u>.
          </em>{" "}
          (Onu görüyorum.) ·
          <em>
            {" "}
            Kannst du <u>mich</u> hören?
          </em>{" "}
          (Beni duyabiliyor musun?)
        </p>
      </Explain>
      <MiniTable
        head={["Kişi", "–i hâli zamiri (Akkusativ)", "Kısa açıklama"]}
        rows={[
          ["ben", "mich", "beni"],
          ["sen", "dich", "seni"],
          ["o (eril)", "ihn", "onu (erkek kişi/eril nesne)"],
          ["o (dişil)", "sie", "onu (kadın kişi/dişil nesne)"],
          ["o (nötr şey)", "es", "onu (nötr nesne)"],
          ["biz", "uns", "bizi"],
          ["siz", "euch", "sizi"],
          ["onlar / Siz (resmî)", "sie / Sie", "onları / Sizi (resmî)"],
        ]}
      />

      <Sub title="–e/–a hâli zamirleri (Dativpronomen)" />
      <Explain
        title="Ne zaman –e/–a hâli? (kime?)"
        lead="Alıcı, yararlanan ya da dolaylı nesne → –e/–a hâli zamiri."
      >
        <p>
          <em>
            Ich gebe <u>dir</u> das Buch.
          </em>{" "}
          (Sana kitabı veriyorum.) ·
          <em>
            {" "}
            Er hilft <u>ihr</u>.
          </em>{" "}
          (Ona yardım ediyor.)
        </p>
      </Explain>
      <MiniTable
        head={["Kişi", "–e/–a hâli zamiri (Dativ)", "Kısa açıklama"]}
        rows={[
          ["ben", "mir", "bana"],
          ["sen", "dir", "sana"],
          ["o (eril)", "ihm", "ona (eril)"],
          ["o (dişil)", "ihr", "ona (dişil)"],
          ["o (nötr şey)", "ihm", "ona (nötr)"],
          ["biz", "uns", "bize"],
          ["siz", "euch", "size"],
          ["onlar", "ihnen", "onlara"],
          ["Siz (resmî)", "Ihnen", "Size (resmî, büyük harfle yazılır)"],
        ]}
      />

      <Sub title="Cümlede zamirlerin yeri (Stellung im Satz)" />
      <Explain
        title="Zamir sırası ve akıcı diziliş"
        lead="İki isim → önce –e/–a hâli, sonra –i hâli. İki zamir → genellikle önce –i hâli, sonra –e/–a hâli."
      >
        <p>
          İki isimle:{" "}
          <em>
            Ich gebe <u>dem Kind</u> <u>den Ball</u>.
          </em>{" "}
          (Topu çocuğa veriyorum.)
        </p>
        <p>
          İki zamirle (doğal konuşma):{" "}
          <em>
            Ich gebe <u>ihn</u> <u>dir</u>.
          </em>{" "}
          (Onu sana veriyorum.) Alternatif:{" "}
          <em>
            Ich gebe <u>dir</u> <u>ihn</u>.
          </em>{" "}
          de mümkündür; ancak ilk kalıp konuşmada daha yaygın ve hızlıdır.
        </p>
        <p>
          Yardımcı fiilli yapılarda:{" "}
          <em>
            Ich will <u>es</u> <u>dir</u> geben.
          </em>{" "}
          (Onu sana vermek istiyorum.) Ayrılabilen fiilde:{" "}
          <em>
            Ich rufe <u>ihn</u> <u>an</u>.
          </em>{" "}
          (Onu arıyorum.)
        </p>
        <Callout type="info" title="Olumsuzluk nerede durur?">
          <p>
            En yaygın:{" "}
            <em>
              Ich gebe es dir <u>nicht</u>.
            </em>{" "}
            “nicht” çoğu zaman fiili veya tüm cümleyi olumsuzlar, zamir
            ikilisini bölmeyiz. Vurgu için başka konumlar da mümkün olsa da bu
            kalıp en doğal olandır.
          </p>
        </Callout>
      </Explain>

      <Sub title="Edat + zamir: hangi hâl? (Präposition + Pronomen)" />
      <Explain
        title="Edat hangi hâli istiyorsa, zamir de aynı hâli alır"
        lead="für → –i hâli; ohne → –i hâli; mit → –e/–a hâli; zu → –e/–a hâli vb."
      >
        <p>
          <em>
            für <u>mich</u>
          </em>{" "}
          (benim için),{" "}
          <em>
            ohne <u>ihn</u>
          </em>{" "}
          (onsuz),
          <em>
            {" "}
            mit <u>dir</u>
          </em>{" "}
          (seninle),{" "}
          <em>
            zu <u>ihr</u>
          </em>{" "}
          (ona). Edat sabitse hâl de sabittir. Örn. <Term>mit</Term> daima –e/–a
          hâli ister:{" "}
          <em>
            mit <u>mir</u>
          </em>
          ,{" "}
          <em>
            mit <u>ihm</u>
          </em>
          .
        </p>
      </Explain>

      <Sub title="Sık dative isteyen fiiller (häufig Dativ verlangende Verben)" />
      <Explain
        title="Bazı fiiller nesnesini –e/–a hâlinde ister"
        lead="Bu fiillerde zamir neredeyse her zaman –e/–a hâlidir."
      >
        <p>
          <Term>helfen</Term> (yardım etmek), <Term>danken</Term> (teşekkür
          etmek),
          <Term>gefallen</Term> (hoşuna gitmek), <Term>gehören</Term> (ait
          olmak),
          <Term>passen</Term> (uymak):{" "}
          <em>
            Das passt <u>mir</u> nicht.
          </em>
        </p>
      </Explain>
      <MiniTable
        head={["Fiil", "Kalıp", "Örnek cümle", "Türkçe"]}
        rows={[
          [
            "helfen",
            "jemandem helfen",
            "Ich helfe <b>dir</b>.",
            "Sana yardım ediyorum.",
          ],
          [
            "danken",
            "jemandem danken",
            "Wir danken <b>ihnen</b>.",
            "Onlara teşekkür ediyoruz.",
          ],
          [
            "gefallen",
            "jemandem gefallen",
            "Der Film gefällt <b>mir</b>.",
            "Film hoşuma gidiyor.",
          ],
          ["gehören", "jemandem gehören", "Das gehört <b>ihm</b>.", "Ona ait."],
          [
            "passen",
            "jemandem passen",
            "Der Termin passt <b>uns</b>.",
            "Randevu bize uyuyor.",
          ],
        ]}
      />

      <Sub title="Karıştırılan biçimler (sie/Sie, ihr, Ihnen…)" />
      <Explain
        title="Anlamı bağlam belirler"
        lead="Yazım ve büyük harf önemli olabilir."
      >
        <ul className="compact-list">
          <li>
            <Term>sie</Term> küçük: “o (kadın)” veya “onlar”. <Term>Sie</Term>{" "}
            büyük: “Siz” (resmî).
          </li>
          <li>
            <Term>ihr</Term> = “ona (dişil, –e/–a hâli)” ya da “sizin” anlamında
            iyelik sıfatı olabilir; bağlama bak.
          </li>
          <li>
            <Term>Ihnen</Term> = “Size” (resmî, –e/–a hâli), her zaman büyük
            harfle.
          </li>
          <li>
            Zamir çiftleri sık kullanılır:{" "}
            <em>
              Ich gebe <u>es</u> <u>ihm</u>.
            </em>{" "}
            ·
            <em>
              {" "}
              Ich erkläre <u>es</u> <u>ihnen</u>.
            </em>
          </li>
        </ul>
      </Explain>

      <Sub title="Örnekler (Beispiele)" />
      <Examples
        items={[
          {
            en: "Ich sehe dich, aber du siehst mich nicht.",
            tr: "Seni görüyorum, ama sen beni görmüyorsun.",
            pron: "ih zee-e diH, aba du ziist miH niHt",
          },
          {
            en: "Gibst du mir bitte das Salz?",
            tr: "Bana lütfen tuzu verir misin?",
            pron: "gibst du mi:r bitte das zalts",
          },
          {
            en: "Kannst du es ihr erklären?",
            tr: "Bunu ona (kadın) açıklayabilir misin?",
            pron: "kanst du es ia eklärn",
          },
          {
            en: "Ich schenke es ihm später.",
            tr: "Onu ona daha sonra hediye edeceğim.",
            pron: "ih şen-ke es ihm shpé-ta",
          },
          {
            en: "Wir sprechen mit euch über das Projekt.",
            tr: "Sizinle proje hakkında konuşuyoruz.",
            pron: "vi:a şpreHn mit oyH yböa das proyekt",
          },
        ]}
      />

      <Sub title="Boşluk doldurma: doğru zamiri seç (seçmeli)" />
      <ExerciseFill
        title="–i hâli mi, –e/–a hâli mi?"
        items={[
          {
            id: "pr1",
            before: "Kannst du ___ hören? (ben)",
            after: "",
            answers: ["mich"],
            answersOptions: ["mich", "mir", "ich"],
          },
          {
            id: "pr2",
            before: "Ich gebe ___ das Buch. (sen)",
            after: "",
            answers: ["dir"],
            answersOptions: ["du", "dich", "dir"],
          },
          {
            id: "pr3",
            before: "Er sieht ___ nicht. (o/eril)",
            after: "",
            answers: ["ihn"],
            answersOptions: ["ihm", "ihn", "er"],
          },
          {
            id: "pr4",
            before: "Wir danken ___. (onlar)",
            after: "",
            answers: ["ihnen"],
            answersOptions: ["sie", "ihnen", "euch"],
          },
          {
            id: "pr5",
            before: "Ich erkläre ___ alles. (o/dişil)",
            after: "",
            answers: ["ihr"],
            answersOptions: ["sie", "ihr", "ihn"],
          },
          {
            id: "pr6",
            before: "Kaufst du ___? (onu – nötr nesne)",
            after: "",
            answers: ["es"],
            answersOptions: ["es", "ihm", "ihn"],
          },
          {
            id: "pr7",
            before: "Der Mantel passt ___. (ben)",
            after: "",
            answers: ["mir"],
            answersOptions: ["mich", "mir", "ich"],
          },
          {
            id: "pr8",
            before: "Geben Sie ___ bitte die Rechnung? (Siz – resmî, bana)",
            after: "",
            answers: ["mir"],
            answersOptions: ["mich", "mir", "Ihnen"],
          },
        ]}
      />

      <Sub title="Zamir sırası: dönüştürme alıştırması" />
      <ExerciseFill
        title="İsimleri zamirle değiştir"
        items={[
          {
            id: "tr1",
            before: "Ich gebe dem Kind den Ball. → Ich gebe ___ ___.",
            after: "",
            answers: ["ihn ihm", "ihm ihn"],
            answersOptions: ["ihn ihm", "ihm ihn", "es ihr"],
          },
          {
            id: "tr2",
            before: "Er erklärt der Frau das Problem. → Er erklärt ___ ___.",
            after: "",
            answers: ["es ihr", "ihr es"],
            answersOptions: ["sie ihr", "es ihr", "ihn ihr"],
          },
          {
            id: "tr3",
            before:
              "Wir schicken den Eltern die Fotos. → Wir schicken ___ ___.",
            after: "",
            answers: ["sie ihnen"],
            answersOptions: ["ihnen sie", "sie ihnen", "es ihnen"],
          },
        ]}
      />

      <Sub title="Seçmeli sorular (Multiple Choice) – kullanım ve anlam" />
      <ExerciseMC
        title="Hızlı kontrol"
        items={[
          {
            q: "Doğal konuşmada iki zamir yan yana geldiğinde hangi sıra daha yaygındır?",
            choices: [
              "Ich gebe dir ihn.",
              "Ich gebe ihn dir.",
              "Ich gebe er dir.",
            ],
            correctIndex: 1,
            explain:
              "İki zamir → çoğunlukla önce –i hâli (onu), sonra –e/–a hâli (sana): Ich gebe ihn dir.",
          },
          {
            q: "Edat + zamir hâli doğru olan hangisi?",
            choices: ["für mir", "mit mich", "für mich"],
            correctIndex: 2,
            explain: "für → –i hâli (mich). mit → –e/–a hâli (mit mir).",
          },
          {
            q: "Hangi soru hangi hâli tetikler?",
            choices: [
              "Wem? → –i hâli",
              "Wen?/Was? → –e/–a hâli",
              "Wem? → –e/–a hâli",
            ],
            correctIndex: 2,
            explain:
              "Wem? (kime?) → –e/–a hâli. Wen?/Was? (kimi/neyi?) → –i hâli.",
          },
          {
            q: "Hangi cümle doğrudur?",
            choices: ["Ich helfe dich.", "Ich helfe dir.", "Ich helfe du."],
            correctIndex: 1,
            explain: "helfen → –e/–a hâli ister: dir.",
          },
          {
            q: "Resmî hitapta –e/–a hâli zamiri hangisidir?",
            choices: ["ihnen", "Ihnen", "Sie"],
            correctIndex: 1,
            explain: "Resmî –e/–a hâli: Ihnen (büyük harfle).",
          },
        ]}
      />

      <Sub title="Mini yazma (40–80 kelime) – verme/yardım senaryosu" />
      <Callout type="tip" title="Zamirleri zorunlu tut">
        <p>
          En az üç cümle yaz: birine bir şey ver, birine yardım et, birinden bir
          şey iste. Her cümlede <strong>en az bir</strong> –i hâli ve/veya –e/–a
          hâli zamiri olsun:
          <em>
            {" "}
            Gibst du <u>mir</u> <u>es</u>? Ich helfe <u>ihr</u>. Er erklärt{" "}
            <u>ihnen</u> <u>es</u>.
          </em>
        </p>
      </Callout>
    </>
  );
}

// src/pages/Grammar/sections/ger/a2/ParticlesDochMal.jsx
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

export default function ParticlesDochMal() {
  return (
    <>
      <div className="rule-box">
        <strong>Partikeller: doch, mal (Modalpartikeln)</strong>: Bu iki küçük
        kelime cümlenin <Key>tonunu</Key> ayarlar: rica eder, teşvik eder,
        yumuşatır ya da şaşkınlık/itiraz katar. Tam bir Türkçe karşılığı yok;
        bağlama göre
        <em> “hadi, ya, bir kez, baksana, ama canım”</em> gibi duygular verir.
      </div>

      <Explain
        title="Neden ‘doch’ ve ‘mal’ öğrenmeliyiz? (Warum doch/mal?)"
        lead="Aynı cümleyi daha doğal, daha nazik veya daha motive edici söylemek için."
      >
        <p>
          Almancada <Term>modalpartikeller</Term> denen bu küçük kelimeler,
          cümlenin
          <strong>duygusunu</strong> ve <strong>niyetini</strong> gösterir.
          Gramer anlamı taşımazlar; <strong>ton</strong> verirler. Türkçedeki{" "}
          <em>“hadi, -ya, bir, baksana”</em> gibi eklemeler gibidir. Özellikle{" "}
          <Term>rica</Term>, <Term>teşvik</Term>, <Term>nazik emir</Term> ve{" "}
          <Term>itiraz</Term> etmekte çok kullanışlıdırlar.
        </p>
        <p>
          Basit kural: <Key>Emirde</Key> genellikle fiilden hemen sonra
          gelirler:{" "}
          <em>
            Komm <u>doch</u>!
          </em>{" "}
          /{" "}
          <em>
            Mach <u>mal</u> auf!
          </em>{" "}
          Normal cümlelerde de <strong>çekimli fiilden sonra</strong>, orta
          alanda yer alır:{" "}
          <em>
            Das ist <u>doch</u> klar.
          </em>
        </p>
      </Explain>

      <Sub title="‘doch’ (teşvik, itiraz, hatırlatma) (doch)" />
      <Explain
        title="Ne zaman ‘doch’?"
        lead="‘doch’ ile konuşmaya duygu katarsın: ‘ama bak’, ‘hadi ya’, ‘aslında öyle’."
      >
        <ul className="compact-list">
          <li>
            <strong>Teşvik / davet</strong>: Yumuşakça ikna etme.{" "}
            <em>
              Komm <u>doch</u> mit!
            </em>{" "}
            (Hadi gel, ya.)
          </li>
          <li>
            <strong>İtiraz / düzeltme</strong>: Karşıdakinin dediğine nazikçe
            karşı çıkma.{" "}
            <em>
              Das stimmt <u>doch</u> nicht.
            </em>{" "}
            (Ama bu doğru değil ki.)
          </li>
          <li>
            <strong>Hatırlatma / bariz olanı vurgulama</strong>:{" "}
            <em>
              Du weißt das <u>doch</u>.
            </em>{" "}
            (Bunu zaten biliyorsun ya.)
          </li>
          <li>
            <strong>Şaşkınlık / sitem</strong>:{" "}
            <em>
              Warum sagst du <u>doch</u> nichts?
            </em>{" "}
            (Neden ama hiçbir şey söylemiyorsun ki?)
          </li>
        </ul>
        <Callout type="info" title="Ton önemlidir">
          <p>
            <Term>doch</Term> bazen yumuşatır (<em>Komm doch!</em>), bazen de
            hafif itiraz eder (<em>Das ist doch klar.</em>). Ses tonun ve bağlam
            anlamı belirler.
          </p>
        </Callout>
      </Explain>

      <Examples
        items={[
          {
            en: "Komm doch mit!",
            tr: "Hadi gel (ya).",
            pron: "kom dohH mit",
          },
          {
            en: "Das ist doch klar.",
            tr: "Bu zaten açık (ama canım, belli yani).",
            pron: "das ist dohH klar",
          },
          {
            en: "Das stimmt doch nicht.",
            tr: "Ama bu doğru değil ki.",
            pron: "das ştimt dohH niHt",
          },
        ]}
      />

      <Sub title="‘mal’ (yumuşatma, nazik rica, ‘bir kere/bi’) (mal)" />
      <Explain
        title="Ne zaman ‘mal’?"
        lead="Emirleri yumuşatır, günlük konuşmayı doğal yapar: ‘bir bak’, ‘bi gelsene’."
      >
        <ul className="compact-list">
          <li>
            <strong>Nazik rica / yumuşatma</strong>:{" "}
            <em>
              Mach <u>mal</u> das Fenster auf.
            </em>{" "}
            (Şu pencereyi bi açsana.)
          </li>
          <li>
            <strong>Kısa bir eylem / ‘şöyle bir’</strong>:{" "}
            <em>
              Warte <u>mal</u> kurz.
            </em>{" "}
            (Bi saniye bekle.)
          </li>
          <li>
            <strong>Soruda doğal ton</strong>:{" "}
            <em>
              Kannst du <u>mal</u> helfen?
            </em>{" "}
            (Bi yardım edebilir misin?)
          </li>
        </ul>
        <Callout type="tip" title="Naziklik farkı">
          <p>
            <em>Mach die Tür auf!</em> sert olabilir.{" "}
            <em>
              Mach <u>mal</u> die Tür auf.
            </em>{" "}
            daha <strong>nazik</strong> ve <strong>doğal</strong> gelir.
          </p>
        </Callout>
      </Explain>

      <Examples
        items={[
          {
            en: "Warte mal kurz.",
            tr: "Bi saniye bekle.",
            pron: "varte mal kurz",
          },
          {
            en: "Schau mal!",
            tr: "Bi bak!",
            pron: "şau mal",
          },
          {
            en: "Kannst du mal kommen?",
            tr: "Bi gelebilir misin?",
            pron: "kanst du mal kommen",
          },
        ]}
      />

      <Sub title="‘doch mal’ birlikte (nazik teşvik) (doch mal – zusammen)" />
      <Explain
        title="Neden ‘doch mal’ birlikte?"
        lead="‘Hadi bi dene’ gibi hem teşvik eder hem nazikleştirir."
      >
        <p>
          <Term>doch mal</Term> ikilisi çok yaygındır:{" "}
          <em>
            Probier <u>doch mal</u>!
          </em>{" "}
          (Hadi bir dene!) Bu yapı nazik, arkadaşça ve motive edicidir.{" "}
          <em>
            Komm <u>doch mal</u> her!
          </em>{" "}
          (Hadi bir gel buraya.)
        </p>
      </Explain>

      <Examples
        items={[
          {
            en: "Probier doch mal!",
            tr: "Hadi bir dene!",
            pron: "probir dohH mal",
          },
          {
            en: "Ruf ihn doch mal an.",
            tr: "Hadi onu bir ara.",
            pron: "ruf in dohH mal an",
          },
        ]}
      />

      <Sub title="Kısa özet tablo (Schnellüberblick)" />
      <MiniTable
        head={["Parçacık", "Ana işlev", "Örnek"]}
        rows={[
          [
            "doch",
            "teşvik / itiraz / barizliği vurgulama",
            "Komm doch mit! · Das ist doch klar.",
          ],
          ["mal", "nazik rica / yumuşatma", "Warte mal kurz. · Mach mal auf."],
          [
            "doch mal",
            "nazik teşvik (hadi bir…)",
            "Probier doch mal! · Ruf doch mal an.",
          ],
        ]}
      />

      <Sub title="Dikkat ve kullanım ipuçları (Hinweise)" />
      <Callout type="warn" title="Fazla kullanma, bağlama bak">
        <ul className="compact-list">
          <li>
            Resmî e-postalarda <Term>mal</Term> yerine daha nötr ifadeler
            kullan:
            <em> Könnten Sie bitte …?</em>
          </li>
          <li>
            <Term>doch</Term> yanlış tonla sert duyulabilir. Nazik söyle:{" "}
            <em>Komm doch mal bitte kurz.</em>
          </li>
        </ul>
      </Callout>

      <Sub title="Boşluk doldurma (doğru parçacığı seç ve yaz)" />
      <ExerciseFill
        title="doch / mal / doch mal / — (gerek yok)"
        items={[
          {
            id: "pm1",
            before: "_____ komm mit! (hadi gel, teşvik)",
            after: "",
            answers: ["doch"],
          },
          {
            id: "pm2",
            before: "Mach _____ die Tür auf. (nazik rica, yumuşatma)",
            after: "",
            answers: ["mal"],
          },
          {
            id: "pm3",
            before: "Probier _____! (hadi bir dene)",
            after: "",
            answers: ["doch mal", "mal doch"],
          },
          {
            id: "pm4",
            before: "Das stimmt _____ nicht. (nazik itiraz)",
            after: "",
            answers: ["doch"],
          },
          {
            id: "pm5",
            before: "Warte _____ kurz! (kısa bekleme, doğal ton)",
            after: "",
            answers: ["mal"],
          },
          {
            id: "pm6",
            before: "Ruf sie _____ an. (nazik teşvik: bir ara)",
            after: "",
            answers: ["doch mal"],
          },
        ]}
      />

      <Sub title="Mini Test (3 seçenekli çeldiricilerle)" />
      <ExerciseMC
        title="doch / mal – doğru kullanım"
        items={[
          {
            q: "Hangi cümle nazik ricadır?",
            choices: [
              "Mach die Tür auf!",
              "Mach mal die Tür auf.",
              "Die Tür, mach auf.",
            ],
            correctIndex: 1,
            explain: "‘mal’ emir tonunu yumuşatır: Mach mal die Tür auf.",
          },
          {
            q: "Hangi cümle nazik teşviktir?",
            choices: ["Probier doch mal!", "Probier!", "Du probierst."],
            correctIndex: 0,
            explain: "‘doch mal’ birlikte motive eder: Hadi bir dene!",
          },
          {
            q: "Hangi cümle itiraz anlamı taşır?",
            choices: [
              "Das ist mal klar.",
              "Das ist doch klar.",
              "Das ist klar mal.",
            ],
            correctIndex: 1,
            explain:
              "‘doch’ burada ‘zaten’ anlamlı vurgudur: Bariz olanı hatırlatır.",
          },
          {
            q: "Hangisi günlük ve nazik bir çağrı?",
            choices: ["Komm doch mal her!", "Komm her!", "Komm her mal doch!"],
            correctIndex: 0,
            explain: "‘doch mal’ yakın ve nazik bir davet tonu verir.",
          },
          {
            q: "Hangi seçenek doğal değildir?",
            choices: [
              "Kannst du mal helfen?",
              "Komm doch mit!",
              "Das mal stimmt nicht.",
            ],
            correctIndex: 2,
            explain:
              "‘mal’ bu konumda doğal değil; ‘Das stimmt doch nicht.’ doğru olur.",
          },
        ]}
      />
    </>
  );
}

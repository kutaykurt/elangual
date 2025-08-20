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
} from "../../../blocks";
import Explain from "../../../../../components/Explain";

export default function PossessiveArticles() {
  return (
    <>
      <div className="rule-box">
        <strong>Possessivartikel</strong> (iyelik):
        <Key>mein, dein, sein, ihr, unser, euer, Ihr</Key>. A1’de{" "}
        <Term>Nominativ</Term> + <Term>Akkusativ (mask.)</Term> temeli.
      </div>

      <Explain
        title="Neden form değişiyor?"
        lead="Kısa açıklama: Form, ismin cinsiyetine ve hâline uyar."
      >
        <p>
          İyelik sözcükleri{" "}
          <strong>bağlandığı ismin cinsiyetine ve hâline</strong> uyar. Maskulin
          nesnede (Akkusativ) çoğu form <Key>-en</Key> alır:
          <em> mein → meinen</em>, <em>dein → deinen</em>…
        </p>
      </Explain>

      <Sub title="Nominativ — aile kelimeleriyle" />
      <MiniTable
        head={["Sahip", "Mask./Neut.", "Fem./Pl.", "Örnekler"]}
        rows={[
          ["ich", "mein", "meine", "mein Vater · meine Mutter"],
          ["du", "dein", "deine", "dein Bruder · deine Schwester"],
          ["er", "sein", "seine", "sein Onkel · seine Tante"],
          ["sie (o)", "ihr", "ihre", "ihr Sohn · ihre Tochter"],
          ["wir", "unser", "unsere", "unser Haus · unsere Kinder"],
          ["ihr", "euer", "eure", "euer Freund · eure Freunde"],
          ["Sie", "Ihr", "Ihre", "Ihr Name · Ihre Adresse"],
        ]}
      />
      <Callout type="tip" title="İsim cinsiyetini unutma">
        Aile kelimeleri karışık: <Key>der</Key> Vater, <Key>die</Key> Mutter,{" "}
        <Key>das</Key> Kind. Possessiv formunu bunlara göre seç.
      </Callout>

      <Sub title="Akkusativ (mask.) — en kritik dönüşüm" />
      <MiniTable
        head={["Nominativ → Akkusativ (mask.)", "Örnek cümle"]}
        rows={[
          ["mein → meinen", "Ich sehe meinen Vater."],
          ["dein → deinen", "Du hast deinen Termin."],
          [
            "sein → seinen / ihr → ihren",
            "Er sieht seinen Bruder. / Sie besucht ihren Onkel.",
          ],
        ]}
      />
      <Callout type="info" title="Hızlı kontrol">
        Nesne <strong>maskulin</strong> mi? → <Key>-en</Key> ekle.
      </Callout>

      <Sub title="Örnekler" />
      <Examples
        items={[
          {
            en: "Das ist meine Familie.",
            tr: "Bu benim ailem.",
            pron: "das ist mayne familie",
          },
          {
            en: "Ich sehe meinen Vater.",
            tr: "Babamı görüyorum.",
            pron: "ih zee maynın fater",
          },
          {
            en: "Sie besucht ihre Schwester.",
            tr: "Kız kardeşini ziyaret ediyor.",
            pron: "zi bezuHt ire şvester",
          },
          {
            en: "Wir lieben unser Kind.",
            tr: "Çocuğumuzu seviyoruz.",
            pron: "vir liiben unzer kind",
          },
        ]}
      />

      <Sub title="Yaygın Hatalar" />
      <Callout type="error" title="Dikkat">
        <ul className="compact-list">
          <li>
            <em>Ich sehe mein Bruder.</em> ❌ →{" "}
            <Term>Ich sehe meinen Bruder.</Term> ✅
          </li>
          <li>
            Resmî <Key>Ihr/Ihre</Key> büyük harfle.
          </li>
          <li>
            Pluralda daima <Key>meine/deine/…e</Key>.
          </li>
        </ul>
      </Callout>

      <Sub title="Mikro Alıştırmalar" />
      <ExerciseFill
        title="mein/dein/… + doğru form"
        items={[
          {
            id: "poM1",
            before: "Das ist ___ Mutter (benim).",
            after: "",
            answers: ["meine"],
          },
          {
            id: "poM2",
            before: "Ich sehe ___ Bruder (senin).",
            after: "",
            answers: ["deinen"],
          },
          {
            id: "poM3",
            before: "Wir besuchen ___ Onkel (bizim).",
            after: "",
            answers: ["unseren"],
          },
          {
            id: "poM4",
            before: "Sie kauft ein Geschenk için ___ Kinder (onun).",
            after: "",
            answers: ["ihre"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Akkusativ mask. doğru?",
            choices: [
              "Ich sehe mein Onkel.",
              "Ich sehe meinen Onkel.",
              "Ich sehe meine Onkel.",
            ],
            correctIndex: 1,
            explain: "Mask. Akk. → meinen.",
          },
          {
            q: "Resmî ‘sizin’ hangisi?",
            choices: ["euer/eure", "Ihr/Ihre", "sein/seine"],
            correctIndex: 1,
            explain: "Sie (resmî) → Ihr/Ihre.",
          },
        ]}
      />
    </>
  );
}

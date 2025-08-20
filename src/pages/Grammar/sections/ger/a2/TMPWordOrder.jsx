// src/pages/Grammar/sections/ger/a2/TMPWordOrder.jsx
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

export default function TMPWordOrder() {
  return (
    <>
      <div className="rule-box">
        <strong>ZAMAN–ŞEKİL–YER Dizilişi (Temporal–Modal–Lokal)</strong>:
        Almancada temel sıra çoğu ana cümlede şöyledir:{" "}
        <Key>Özne + çekimli fiil + Zaman + Şekil/Araç/Yöntem + Yer</Key>. Örnek:{" "}
        <em>
          Ich fahre <u>heute</u> <u>mit dem Bus</u> <u>in die Stadt</u>.
        </em>
      </div>

      <Explain
        title="Neden bu sıra önemli? (Warum diese Reihenfolge?)"
        lead="Almanlar bilgiyi doğal bir düzende verir: önce ‘ne zaman’, sonra ‘nasıl/kimle/hangi araçla’, en sonda ‘nerede/nereye’."
      >
        <p>
          Türkçede “Ben <strong>bugün</strong> <strong>otobüsle</strong>{" "}
          <strong>şehre</strong> gidiyorum” deriz. Almanca da aynıdır:{" "}
          <em>
            Ich fahre <u>heute</u> <u>mit dem Bus</u> <u>in die Stadt</u>.
          </em>{" "}
          Bu düzen cümleyi <strong>akıcı</strong> ve <strong>doğal</strong>{" "}
          yapar.
        </p>
        <ul className="compact-list">
          <li>
            <Term>Zaman</Term> (ne zaman, ne kadar süre, ne sıklıkla):{" "}
            <em>heute, morgen, oft, drei Stunden, am Abend, um 8 Uhr…</em>
          </li>
          <li>
            <Term>Şekil / Araç / Yöntem</Term> (nasıl, hangi araçla, kimle):{" "}
            <em>langsam, mit dem Bus, mit Freunden, allein, per E-Mail…</em>
          </li>
          <li>
            <Term>Yer</Term> (nerede, nereye, nereden):{" "}
            <em>zu Hause, im Büro, nach Berlin, in die Stadt, von Ankara…</em>
          </li>
        </ul>
        <p>
          Zaman ifadesini özellikle vurgulamak istersen cümlenin en başına
          taşıyabilirsin. O zaman çekimli fiil yine <strong>ikinci öge</strong>{" "}
          kalır:{" "}
          <em>
            <u>Heute</u> <u>fahre</u> ich mit dem Bus in die Stadt.
          </em>
        </p>
      </Explain>

      <Sub title="Örneklerle yapı (Mit Beispielen verstehen)" />
      <Examples
        items={[
          {
            en: "Ich lerne heute Abend zu Hause.",
            tr: "Bu akşam evde ders çalışıyorum.",
            pron: "ih lörne hoytə abınt tsu hauzə",
          },
          {
            en: "Wir fahren morgen mit dem Zug nach Köln.",
            tr: "Yarın trenle Köln’e gidiyoruz.",
            pron: "via farən morgen mit dem tsug nah köln",
          },
          {
            en: "Sie arbeitet oft am Wochenende im Café.",
            tr: "Hafta sonu sık sık kafede çalışır.",
            pron: "zi arbeitet oft am voHenende im kafe",
          },
          {
            en: "Heute fahre ich mit Freunden in die Stadt.",
            tr: "Bugün arkadaşlarla şehre gidiyorum.",
            pron: "hoytə fare ih mit froyndn in di ştat",
          },
        ]}
      />

      <Sub title="Parçaları tanı (Was gehört wohin?)" />
      <MiniTable
        head={["Bölüm", "Ne sorusu?", "Tipik örnekler"]}
        rows={[
          [
            "Zaman",
            "Ne zaman?",
            "heute, morgens, am Montag, um 8 Uhr, drei Stunden",
          ],
          [
            "Şekil/Araç",
            "Nasıl/kimle/neyinle?",
            "langsam, mit dem Auto, mit Freunden, per E-Mail",
          ],
          [
            "Yer",
            "Nerede/Nereye/Nereden?",
            "zu Hause, im Büro, nach Berlin, in die Stadt, aus der Türkei",
          ],
        ]}
      />

      <Sub title="Olumsuzluk nereye gelir? (nicht / kein)" />
      <Explain
        title="Basit yerleştirme kuralları"
        lead="‘kein’ isimleri olumsuzlar; ‘nicht’ fiili veya tüm cümleyi olumsuzlar ve genelde yüklemden önce gelir."
      >
        <ul className="compact-list">
          <li>
            <Term>kein</Term>:{" "}
            <em>
              Ich habe <u>kein</u> Auto.
            </em>{" "}
            ·{" "}
            <em>
              Sie trinkt <u>keinen</u> Kaffee.
            </em>
          </li>
          <li>
            <Term>nicht</Term>: yer/zaman/zarfın <strong>önünde</strong>{" "}
            olabilir ya da cümle sonunda Partizip’ten <strong>önce</strong>:{" "}
            <em>
              Ich fahre <u>nicht</u> heute, sondern morgen.
            </em>{" "}
            ·{" "}
            <em>
              Ich habe <u>nicht</u> gearbeitet.
            </em>
          </li>
        </ul>
        <Callout type="info" title="Doğal yerleşim">
          Genelde şu akış doğaldır: <Term>Zaman</Term> → <Term>Şekil/Araç</Term>{" "}
          → <Term>Yer</Term>. Olumsuzluk gerekli yerde anlamı netleştirecek
          şekilde konur:{" "}
          <em>
            Ich fahre heute <u>nicht</u> mit dem Bus, sondern mit dem Auto.
          </em>
        </Callout>
      </Explain>

      <Sub title="Cümleyi başa Zaman getirerek kur (Vurgulu zaman)" />
      <Formula
        rows={[
          [
            "Zaman başta",
            "<b>Zaman</b> + <b>çekimli fiil</b> + özne + Şekil + Yer",
            "Heute fahre ich mit dem Bus in die Stadt.",
          ],
          [
            "Sade sıra",
            "Özne + <b>çekimli fiil</b> + Zaman + Şekil + Yer",
            "Ich fahre heute mit dem Bus in die Stadt.",
          ],
        ]}
      />

      <Sub title="Sık yapılan hatalar (und düzeltmeleri)" />
      <Callout type="error" title="Dikkat!">
        <ul className="compact-list">
          <li>
            <em>*Ich fahre in die Stadt mit dem Bus heute.*</em> → Doğalı:{" "}
            <Term>Ich fahre heute mit dem Bus in die Stadt.</Term>
          </li>
          <li>
            <em>*Heute ich fahre…*</em> → Çekimli fiil ikinci öge olmalı:{" "}
            <Term>Heute fahre ich…</Term>
          </li>
          <li>
            Birden fazla zaman ifadesi kullanırken genişten dara doğru git:{" "}
            <em>am Montag um 8 Uhr</em>. Örnek:{" "}
            <Term>Ich arbeite am Montag um 8 Uhr im Büro.</Term>
          </li>
        </ul>
      </Callout>

      <Sub title="Boşluk doldurma (Zaman–Şekil–Yer sırasını kur)" />
      <ExerciseFill
        title="Doğal sırayı yaz"
        items={[
          {
            id: "tml1",
            before:
              "Ich fahre ___ ___ ___ . (heute · mit dem Bus · in die Stadt)",
            after: "",
            answers: ["heute mit dem Bus in die Stadt"],
          },
          {
            id: "tml2",
            before:
              "Wir treffen uns ___ ___ ___. (am Abend · im Park · mit Freunden)",
            after: "",
            answers: ["am Abend mit Freunden im Park"],
          },
          {
            id: "tml3",
            before: "Sie arbeitet ___ ___ ___. (oft · im Café · allein)",
            after: "",
            answers: ["oft allein im Café", "oft im Café allein"],
          },
          {
            id: "tml4",
            before: "Heute ___ ___ ___ . (ich · zu Hause · lerne)",
            after: "",
            answers: ["lerne ich zu Hause"],
          },
          {
            id: "tml5",
            before:
              "Er fährt ___ ___ ___. (morgen · mit dem Auto · nach Berlin)",
            after: "",
            answers: ["morgen mit dem Auto nach Berlin"],
          },
        ]}
      />

      <Sub title="Çeldiricili Mini Test (Her soruda 3 seçenek)" />
      <ExerciseMC
        title="ZAMAN–ŞEKİL–YER – Doğru cümleyi seç"
        items={[
          {
            q: "Doğal ve doğru sıra hangisi?",
            choices: [
              "Ich fahre in die Stadt mit dem Bus heute.",
              "Ich fahre heute mit dem Bus in die Stadt.",
              "Ich fahre mit dem Bus in die Stadt heute.",
            ],
            correctIndex: 1,
            explain:
              "Zaman → Şekil/Araç → Yer: heute → mit dem Bus → in die Stadt.",
          },
          {
            q: "Zamanı başa al: ‘… fahre ich mit dem Auto nach Köln.’",
            choices: [
              "Morgen ich fahre mit dem Auto nach Köln.",
              "Morgen fahre ich mit dem Auto nach Köln.",
              "Ich fahre morgen mit dem Auto nach Köln.",
            ],
            correctIndex: 1,
            explain:
              "Zaman başta ise çekimli fiil ikinci ögedir: Morgen <b>fahre</b> ich …",
          },
          {
            q: "Olumsuzluğu doğru yere koy:",
            choices: [
              "Ich arbeite nicht heute im Büro.",
              "Ich arbeite heute nicht im Büro.",
              "Ich arbeite heute im Büro nicht.",
            ],
            correctIndex: 1,
            explain:
              "Genelde ‘nicht’ anlamı en iyi netleştirecek yerde durur: bugün çalışmıyorum (yer değil, eylem zamanı olumsuz).",
          },
          {
            q: "Doğru sırayı seç:",
            choices: [
              "Wir essen im Restaurant heute mit Freunden.",
              "Wir essen heute mit Freunden im Restaurant.",
              "Wir essen mit Freunden im Restaurant heute.",
            ],
            correctIndex: 1,
            explain:
              "Zaman → Şekil/Kimle → Yer: heute → mit Freunden → im Restaurant.",
          },
          {
            q: "Hangi cümle fiili ikinci öge yapıyor?",
            choices: [
              "Heute ich koche zu Hause.",
              "Heute koche ich zu Hause.",
              "Ich heute koche zu Hause.",
            ],
            correctIndex: 1,
            explain:
              "Zaman başta → çekimli fiil ikinci: Heute <b>koche</b> ich …",
          },
        ]}
      />
    </>
  );
}

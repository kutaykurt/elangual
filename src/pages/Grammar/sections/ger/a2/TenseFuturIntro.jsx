// src/pages/Grammar/sections/ger/a2/TenseFuturIntro.jsx
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

export default function TenseFuturIntro() {
  return (
    <>
      <div className="rule-box">
        <strong>Gelecek Zaman (Futur I & Planlı Şimdiki Zaman)</strong>:
        Geleceği iki yolla anlatırız: <Key>Futur I</Key> =
        <Key>werden + mastar</Key> ve <Key>planlı şimdiki zaman</Key> =
        <Key>Präsens + zaman ifadesi</Key>. Seçim anlam ve tonlamaya bağlıdır.
      </div>

      <Explain
        title="Gelecek nasıl ifade edilir? (Wie spreche ich über die Zukunft?)"
        lead="Almancada gelecek için hem ‘werden + mastar’ (Futur I) hem de ‘Präsens + zaman’ kullanılır."
      >
        <p>
          <strong>Futur I</strong>, iki ana durumda çok uygundur:{" "}
          <em>tahmin/olasılık</em> ve <em>karar/niyet</em>. Örneğin:{" "}
          <em>Es wird morgen regnen.</em> (Büyük ihtimalle yarın yağmur
          yağacak.) veya <em>Ich werde mehr Deutsch lernen.</em> (Niyet/karar).
        </p>
        <p>
          <strong>Planlı şimdiki zaman</strong> ise takvimli, ayarlı veya
          netleşmiş planlarda doğal duyulur:{" "}
          <em>Am Freitag fahre ich nach Berlin.</em> (Cuma Berlin’e gidiyorum.)
        </p>
        <p>
          Günlük hayatta, <Key>net plan</Key> varsa çoğu zaman{" "}
          <Term>Präsens + zaman</Term> seçilir; <Key>tahmin/varsayım</Key> varsa{" "}
          <Term>Futur I</Term> daha uygundur.
        </p>
      </Explain>

      <Sub title="Futur I: Kuruluş (Futur I – werden + mastar)" />
      <Explain
        title="Cümle iskeleti ve anlam"
        lead="Çekimli fiil ‘werden’ ortada; asıl fiil cümlenin sonunda mastar hâlinde kalır."
      >
        <ol className="compact-list">
          <li>
            Özne + <Term>werden</Term> (şimdiki zamanda çekimli) + diğer ögeler
            + <Term>mastar</Term> (cümlenin sonunda).
          </li>
          <li>
            Anlam: gelecek, niyet, söz, tahmin. Tonu yumuşatmak için{" "}
            <em>wahrscheinlich, sicher, vielleicht</em> gibi zarf
            ekleyebilirsin.
          </li>
        </ol>
        <p>
          Örnek:{" "}
          <em>
            Ich <u>werde</u> morgen früher <u>aufstehen</u>.
          </em>
        </p>
      </Explain>

      <Formula
        rows={[
          [
            "Olumlu",
            "Özne + <b>werden</b> + … + <b>mastar</b>",
            "Ich <u>werde</u> mehr lernen.",
          ],
          [
            "Olumsuz",
            "Özne + <b>werden</b> + nicht + … + <b>mastar</b>",
            "Er <u>wird</u> heute <u>nicht</u> kommen.",
          ],
          [
            "Soru",
            "<b>Werden</b> + özne + … + <b>mastar</b>?",
            "Wirst du morgen arbeiten?",
          ],
          [
            "Yan cümle",
            "…, weil/da özne … <b>mastar</b> + <b>werden</b>.",
            "…, weil ich mehr lernen <u>werde</u>.",
          ],
        ]}
      />

      <MiniTable
        head={["Kişi", "werden çekimi", "Yaklaşık TR okunuşu"]}
        rows={[
          ["ich", "werde", "vearde"],
          ["du", "wirst", "virst"],
          ["er/sie/es", "wird", "vird"],
          ["wir", "werden", "vearden"],
          ["ihr", "werdet", "veardet"],
          ["sie/Sie", "werden", "vearden"],
        ]}
      />

      <Examples
        items={[
          {
            en: "Ich werde morgen zu Hause bleiben.",
            tr: "Yarın evde kalacağım.",
            pron: "ih vearde morgen tsu hauze blaybn",
          },
          {
            en: "Es wird bald warm.",
            tr: "Yakında hava ısınacak.",
            pron: "es vird balt varm",
          },
          {
            en: "Wirst du pünktlich ankommen?",
            tr: "Zamanında varacak mısın?",
            pron: "virst du pünktlih ankomen",
          },
        ]}
      />

      <Sub title="Planlı şimdiki zaman (Geplantes Präsens)" />
      <Explain
        title="Ne zaman Präsens + zaman ifadesi daha doğal?"
        lead="Takvimle sabitlenmiş randevu, bilet, ders programı, çalışma planı gibi durumlarda."
      >
        <ul className="compact-list">
          <li>
            Net plan + zaman ifadesi: <em>Am Freitag</em>, <em>morgen</em>,{" "}
            <em>um 9 Uhr</em>, <em>nächsten Monat</em>.
          </li>
          <li>
            Cümle yapısı: Özne + <Term>Präsens</Term> çekimi + zaman/yer
            bilgisini ekle. Gelecek anlamı zaman ifadesinden anlaşılır.
          </li>
        </ul>
        <p>
          Örnekler:{" "}
          <em>
            Am Freitag <u>fahre</u> ich nach Berlin.
          </em>{" "}
          ·{" "}
          <em>
            Um 9 Uhr <u>beginnt</u> der Kurs.
          </em>
        </p>
      </Explain>

      <Examples
        items={[
          {
            en: "Nächste Woche habe ich einen Termin beim Zahnarzt.",
            tr: "Gelecek hafta dişçide randevum var.",
            pron: "nekste vohe habe ih aynın termin baym zaan-arst",
          },
          {
            en: "Heute Abend treffen wir uns im Café.",
            tr: "Bu akşam kafede buluşuyoruz.",
            pron: "hoyte abnt treffen via uns im kafe",
          },
        ]}
      />

      <Sub title="Olasılık, niyet ve nazik ton (Wahrscheinlichkeit & Absicht)" />
      <Explain
        title="Zarf ve fiillerle anlamı ayarla"
        lead="wahrscheinlich (büyük ihtimal), vielleicht (belki), sicher (kesin); wollen/möchten (niyet/nazik istek)."
      >
        <p>
          <strong>Futur I + zarf</strong>:{" "}
          <em>Er wird wahrscheinlich spät kommen.</em> (Büyük ihtimalle geç
          gelecek.)
        </p>
        <p>
          <strong>wollen/möchten</strong>: niyet ve istek verir. Gelecek değil,{" "}
          <em>istek</em> vurgusu: <em>Ich möchte morgen früher anfangen.</em>
        </p>
        <Callout type="warn" title="werden ≠ wollen/möchten">
          <p>
            <Term>werden</Term> gelecek/olasılık bildirir;{" "}
            <Term>wollen/möchten</Term> istek/niyet bildirir.{" "}
            <em>Ich werde kommen</em> (geleceğim) ≠ <em>Ich möchte kommen</em>{" "}
            (gelmek istiyorum).
          </p>
        </Callout>
      </Explain>

      <Sub title="Telaffuz İpuçları (Aussprache – TR odaklı)" />
      <Callout type="info" title="Hızlı rehber">
        <ul className="compact-list">
          <li>
            <Term>werde/wird</Term>: “<Key>vearde</Key> / <Key>vird</Key>”.
          </li>
          <li>
            <Term>morgen</Term>: “<Key>mo:rgn</Key>” (r yumuşak, sonunda n
            hafif).
          </li>
          <li>
            <Term>wahrscheinlich</Term>: “<Key>vah-şaynliH</Key>”.
          </li>
        </ul>
      </Callout>

      <Sub title="Mikro Alıştırmalar (Lückentext – werden + mastar)" />
      <ExerciseFill
        title="Futur I – doğru çekim"
        items={[
          {
            id: "f1",
            before: "Ich ____ (werden) morgen mehr Deutsch ____ (lernen).",
            after: "",
            answers: ["werde lernen"],
          },
          {
            id: "f2",
            before: "Er ____ (werden) nicht zu spät ____ (kommen).",
            after: "",
            answers: ["wird kommen", "wird nicht zu spät kommen"],
            hint: "nicht fiilden önce gelebilir: wird nicht kommen",
          },
          {
            id: "f3",
            before: "____ du morgen mit uns ____ (kommen)?",
            after: "",
            answers: ["Wirst kommen", "Wirst du kommen"],
          },
          {
            id: "f4",
            before: "Wir ____ (werden) wahrscheinlich früh ____ (ankommen).",
            after: "",
            answers: ["werden ankommen"],
          },
          {
            id: "f5",
            before: "Es ____ (werden) bald warm ____ (sein).",
            after: "",
            answers: ["wird sein", "wird bald warm sein"],
          },
        ]}
      />

      <Sub title="Seçmeli Sorular (Präsens planı mı, Futur I mi?)" />
      <ExerciseMC
        title="Doğal olanı seç"
        items={[
          {
            q: "Biletler alındı, plan net. Hangisi daha doğal?",
            choices: [
              "Am Freitag werde ich nach Berlin fahren.",
              "Am Freitag fahre ich nach Berlin.",
              "Ich werde am Freitag fahre nach Berlin.",
            ],
            correctIndex: 1,
            explain:
              "Net plan + zaman ifadesi → Präsens doğal: Am Freitag fahre ich …",
          },
          {
            q: "Sadece tahmin yapıyorum. Hangisi uygun?",
            choices: [
              "Er kommt bestimmt pünktlich.",
              "Er wird wahrscheinlich pünktlich kommen.",
              "Er ist pünktlich kommen.",
            ],
            correctIndex: 1,
            explain:
              "Tahmin/olasılık için Futur I + zarf çok uygun: wird wahrscheinlich … kommen.",
          },
          {
            q: "Niyet bildiriyorum. Hangisi daha doğru?",
            choices: [
              "Ich werde wollen mehr lernen.",
              "Ich werde mehr lernen.",
              "Ich möchte werde mehr lernen.",
            ],
            correctIndex: 1,
            explain:
              "Niyet/karar → Futur I: Ich werde mehr lernen. ‘werden + wollen’ olmaz.",
          },
          {
            q: "Randevu saatini bildiriyorum (takvimli).",
            choices: [
              "Der Kurs wird um 9 Uhr beginnen.",
              "Um 9 Uhr beginnt der Kurs.",
              "Der Kurs ist um 9 Uhr beginnt.",
            ],
            correctIndex: 1,
            explain:
              "Program/çizelge → Präsens doğal: Um 9 Uhr beginnt der Kurs.",
          },
          {
            q: "Nazik istek: hangisi uygun?",
            choices: [
              "Ich werde einen Kaffee.",
              "Ich möchte einen Kaffee.",
              "Ich werde einen Kaffee trinken müssen.",
            ],
            correctIndex: 1,
            explain: "İstek/naziklik → möchten.",
          },
        ]}
      />

      <Sub title="Mini Yazma (40–80 kelime)" />
      <Callout type="tip" title="Plan + Tahmin karışık kullan">
        <p>
          Başlık: <strong>“Gelecek hafta planlarım”</strong>. En az iki cümlede{" "}
          <Term>Präsens + zaman</Term>, en az iki cümlede <Term>Futur I</Term>{" "}
          kullan. Örn.: <em>Am Samstag treffe ich meine Freunde.</em> /{" "}
          <em>Ich werde wahrscheinlich am Sonntag arbeiten.</em>
        </p>
      </Callout>
    </>
  );
}

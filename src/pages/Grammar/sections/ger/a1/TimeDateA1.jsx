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

export default function TimeDateA1() {
  return (
    <>
      <div className="rule-box">
        <strong>Zeit & Datum</strong>: <Key>um</Key> + Uhrzeit · <Key>am</Key> +
        gün/tarih · <Key>im</Key> + ay/mevsim/yıl. 24-saat yaygın: 18:30 =
        achtzehn Uhr dreißig.
      </div>

      <Explain
        title="Saat söyleme ipuçları"
        lead="Kısa açıklama: um / am / im ve yarım/çeyrek ifadeleri."
      >
        <ul className="compact-list">
          <li>
            <Key>um</Key> + saat: <em>um 10 Uhr</em>
          </li>
          <li>
            Yarım saat: <em>halb acht</em> = 7:30 (bir sonraki saatten “yarım”)
          </li>
          <li>
            Çeyrek geçe/ kala: <em>Viertel nach sieben</em> /{" "}
            <em>Viertel vor acht</em>
          </li>
        </ul>
      </Explain>

      <Sub title="Uhrzeit (saat söyleme)" />
      <MiniTable
        head={["Saat", "Okunuş", "Cümle"]}
        rows={[
          ["7:00", "sieben Uhr", "Der Kurs beginnt um sieben Uhr."],
          ["7:30", "halb acht", "Es ist halb acht."],
          [
            "7:15",
            "Viertel nach sieben",
            "Wir treffen uns Viertel nach sieben.",
          ],
          ["7:45", "Viertel vor acht", "Ich gehe Viertel vor acht."],
        ]}
      />
      <Callout type="tip" title="12h vs 24h">
        Günlük hayatta 24h çok yaygın: <em>um 18 Uhr</em>. Resmî yerlerde 24h
        kullan.
      </Callout>

      <Sub title="Gün/Ay/Mevsim/Yıl" />
      <MiniTable
        head={["Kategori", "Edat", "Örnek"]}
        rows={[
          ["Gün", "am", "am Montag / am Wochenende"],
          ["Ay/Mevsim/Yıl", "im", "im Januar / im Sommer / im Jahr 2025"],
        ]}
      />

      <Sub title="Tarih söyleme (A1)" />
      <MiniTable
        head={["Yapı", "Örnek", "Not"]}
        rows={[
          ["am + sıra sayı", "am 3. Mai / am 20. Juni", "nokta ile (3.)"],
          ["von … bis …", "von 9 bis 11 Uhr", "saat aralığı"],
          ["jeden/jede", "jeden Tag / jede Woche", "sıklık"],
        ]}
      />

      <Sub title="Örnekler" />
      <Examples
        items={[
          {
            en: "Der Termin ist um 10 Uhr.",
            tr: "Randevu saat 10’da.",
            pron: "der termin ist um tsen u:hr",
          },
          {
            en: "Wir treffen uns am Freitag.",
            tr: "Cuma buluşuyoruz.",
            pron: "vir treffen uns am fraytak",
          },
          {
            en: "Ich fahre im Juli nach Berlin.",
            tr: "Temmuz’da Berlin’e gidiyorum.",
            pron: "ih fare im yuli nah berlin",
          },
        ]}
      />

      <Sub title="Mikro Alıştırmalar" />
      <ExerciseFill
        title="um / am / im"
        items={[
          {
            id: "tdM1",
            before: "Der Kurs beginnt ___ 18 Uhr.",
            after: "",
            answers: ["um"],
          },
          {
            id: "tdM2",
            before: "Wir reisen ___ August.",
            after: "",
            answers: ["im"],
          },
          {
            id: "tdM3",
            before: "Das Spiel ist ___ Samstag.",
            after: "",
            answers: ["am"],
          },
          {
            id: "tdM4",
            before: "Das Museum ist ___ 10 ___ 17 Uhr offen.",
            after: "",
            answers: ["von", "bis"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "‘Yazın’ hangisi?",
            choices: ["am Sommer", "im Sommer", "um Sommer"],
            correctIndex: 1,
            explain: "Mevsimler → im.",
          },
          {
            q: "7:30 nasıl söylenir?",
            choices: ["sieben Uhr dreißig", "halb acht", "Viertel vor sieben"],
            correctIndex: 1,
            explain: "İkisi de olur; gündelikte ‘halb acht’ çok yaygın.",
          },
        ]}
      />
    </>
  );
}

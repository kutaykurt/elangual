// src/pages/Grammar/sections/ger/a2/AdjectivesCompSup.jsx
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

export default function AdjectivesCompSup() {
  return (
    <>
      <div className="rule-box">
        <strong>Sıfatlarla karşılaştırma (Komparativ & Superlativ)</strong>: İki
        şeyi karşılaştırırken <Key>Komparativ: -er + als</Key> kullanılır. En
        üst derece için
        <Key>Superlativ</Key> kullanılır: <Key>am …-sten</Key> ya da{" "}
        <Key>der/die/das …-ste</Key>. Eşitlik için <Key>so … wie</Key>, eşit
        olmama için <Key>nicht so … wie</Key>.
      </div>

      <Explain
        title="Neden karşılaştırma kullanırız? (Warum vergleichen?)"
        lead="Günlük hayatta seçim yapar, karşılaştırır ve en uygun olanı söyleriz."
      >
        <p>
          Türkçede “daha hızlı, en güzel, onun kadar iyi” deriz. Almancada bunun
          üç temel yolu var:
          <strong> eşitlik</strong> (<em>so … wie</em>), <strong>daha</strong>{" "}
          derecesi (<em>Komparativ</em>), ve <strong>en</strong> derecesi (
          <em>Superlativ</em>). Aşağıda her birini net örneklerle adım adım
          göreceksin.
        </p>
      </Explain>

      <Sub title="Eşitlik: ‘… kadar …’ (so … wie / nicht so … wie)" />
      <Explain
        title="Eşit ya da eşit değil"
        lead="Kalıp çok basit: <Key>so + sıfat + wie</Key>. Eşit değilse <Key>nicht so + sıfat + wie</Key>."
      >
        <p>
          <em>
            Ali ist <u>so groß wie</u> Cem.
          </em>{" "}
          (Ali, Cem <strong>kadar uzun</strong>.)
          <br />
          <em>
            Das Handy ist <u>nicht so teuer wie</u> der Laptop.
          </em>{" "}
          (Telefon <strong>laptop kadar pahalı değil</strong>.)
        </p>
      </Explain>

      <Sub title="Daha: Komparativ (…-er + als)" />
      <Explain
        title="İki şey arasında birini ‘daha …’ yapmak"
        lead="Genel kural: <Key>sıfat + -er</Key> ve karşılaştırılan ikinci şeyden önce <Key>als</Key> gelir."
      >
        <p>
          <em>
            Berlin ist <u>größer</u> <u>als</u> Bonn.
          </em>{" "}
          (Berlin Bonn’dan <strong>daha büyük</strong>.)
          <br />
          <em>
            Dieses Hemd ist <u>billiger</u> <u>als</u> jenes.
          </em>{" "}
          (Bu gömlek <strong>daha ucuz</strong>.)
        </p>
        <Callout type="info" title="Yazım ve ses değişimleri">
          <ul className="compact-list">
            <li>
              Birçok sıfat: <em>schnell → schneller</em>, <em>klug → klüger</em>{" "}
              (ü dönüşümü olabilir).
            </li>
            <li>
              <Term>gut → besser</Term> (iyi → daha iyi),{" "}
              <Term>gern → lieber</Term> (isteyerek → daha çok isteyerek),
              <Term>viel → mehr</Term> (çok → daha çok),{" "}
              <Term>hoch → höher</Term> (yüksek → daha yüksek).
            </li>
            <li>
              <Term>teuer → teurer</Term> (pahalı → daha pahalı),{" "}
              <Term>groß → größer</Term> (büyük → daha büyük),
              <Term>jung → jünger</Term>, <Term>alt → älter</Term>,{" "}
              <Term>nah → näher</Term>.
            </li>
          </ul>
        </Callout>
      </Explain>

      <Sub title="En: Superlativ (am …-sten / der/die/das …-ste)" />
      <Explain
        title="‘En …’ demek için iki yol"
        lead="Sıfat yüklem olarak kullanılıyorsa <Key>am + sıfat + -sten</Key>. İsimden önce geliyorsa <Key>der/die/das + sıfat + -ste</Key>."
      >
        <p>
          Yüklem (isimden sonra, tek başına):{" "}
          <em>
            Er läuft <u>am schnellsten</u>.
          </em>{" "}
          (O <strong>en hızlı</strong> koşuyor.)
          <br />
          İsimden önce:{" "}
          <em>
            Das ist <u>der schnellste</u> Zug.
          </em>{" "}
          (Bu <strong>en hızlı</strong> tren.)
        </p>
        <Callout type="tip" title="Özel biçimler ve yazım">
          <ul className="compact-list">
            <li>
              <Term>gut → am besten / der beste</Term>,{" "}
              <Term>gern → am liebsten</Term>, <Term>viel → am meisten</Term>,{" "}
              <Term>hoch → am höchsten</Term>.
            </li>
            <li>
              Sonu <em>-t, -d, -s, -ß, -sch, -z, -x</em> ile bitenlerde genelde{" "}
              <Term>-esten</Term>: <em>laut → am lautesten</em>.
            </li>
            <li>
              İsimden önceki kullanımda <strong>artikel ve sıfat eki</strong>{" "}
              gerekir; bunu ayrıntılı olarak “Sıfat Ekleri” bölümünde
              işleyeceğiz.
            </li>
          </ul>
        </Callout>
      </Explain>

      <Sub title="Anlam ve kullanım: karşılaştırmada dikkat" />
      <Explain
        title="‘als’ ve ‘wie’ farkı"
        lead="‘als’ farklılık gösterir, ‘wie’ eşitliği gösterir."
      >
        <p>
          <em>
            Ich bin <u>älter als</u> du.
          </em>{" "}
          (Senden <strong>daha yaşlıyım</strong>.) —
          <em>
            {" "}
            Ich bin <u>so alt wie</u> du.
          </em>{" "}
          (<strong>Senin kadar</strong> yaşıtım.)
        </p>
        <p>
          Olumsuz eşitlik:{" "}
          <em>
            Er ist <u>nicht so groß wie</u> sein Bruder.
          </em>{" "}
          (Kardeşi <strong>kadar uzun değil</strong>.)
        </p>
      </Explain>

      <Sub title="Telaffuz ipuçları (Aussprache – TR odaklı)" />
      <Explain
        title="Kısa ama etkili ipuçları"
        lead="Umlaut seslerine ve uzun/kısa ünlülere dikkat."
      >
        <ul className="compact-list">
          <li>
            <Term>ö/ü</Term> Türkçedeki ön yuvarlak seslere benzer:{" "}
            <em>größer → grö-sa</em>, <em>jünger → yün-ga</em>.
          </li>
          <li>
            <Term>ä</Term> çoğu zaman açık <em>e</em> gibi:{" "}
            <em>näher → ne-ya</em>.
          </li>
          <li>
            <Term>hoch</Term> kelimesinde son <em>ch</em> boğazdan hafif
            hışırtı: <em>hoh</em> gibi, “hoh”a yakın.
          </li>
        </ul>
      </Explain>

      <Sub title="Düzensiz örnekler (irregular) – hızlı tablo" />
      <MiniTable
        head={[
          "Sıfat/Zarf",
          "Komparativ (daha …)",
          "Superlativ (en …)",
          "Türkçe",
        ]}
        rows={[
          ["gut", "besser", "am besten / der beste", "iyi → daha iyi → en iyi"],
          ["gern", "lieber", "am liebsten", "isteyerek → daha çok → en çok"],
          ["viel", "mehr", "am meisten", "çok → daha çok → en çok"],
          ["hoch", "höher", "am höchsten / der höchste", "yüksek → daha → en"],
          ["nah", "näher", "am nächsten / der nächste", "yakın → daha → en"],
        ]}
      />

      <Sub title="Örnekler (Beispiele)" />
      <Examples
        items={[
          {
            en: "Dieses Restaurant ist günstiger als das andere.",
            tr: "Bu restoran diğerinden daha uygun.",
            pron: "di:zıs restorant ist günsti-ga als das andre",
          },
          {
            en: "Er spricht so gut wie seine Schwester.",
            tr: "O, kız kardeşi kadar iyi konuşuyor.",
            pron: "ea şpriHt zo gut vi zaynə şvesta",
          },
          {
            en: "Sie lernt am schnellsten in der Gruppe.",
            tr: "O, grupta en hızlı öğreniyor.",
            pron: "zi lernt am şnelstn in dea grupe",
          },
          {
            en: "Das ist der beste Weg.",
            tr: "Bu en iyi yol.",
            pron: "das ist dea beste vek",
          },
        ]}
      />

      <Sub title="Biçim kalıpları (Formation – örnekli)" />
      <Formula
        rows={[
          [
            "Eşitlik",
            "<b>so</b> + sıfat + <b>wie</b>",
            "Das Auto ist so teuer wie das andere.",
          ],
          [
            "Daha (Komparativ)",
            "sıfat + <b>-er</b> + <b>als</b>",
            "Heute ist es wärmer als gestern.",
          ],
          [
            "En (Superlativ – yüklem)",
            "<b>am</b> + sıfat + <b>-sten/-esten</b>",
            "Er läuft am langsamsten.",
          ],
          [
            "En (Superlativ – isimden önce)",
            "<b>der/die/das</b> + sıfat + <b>-ste/-este</b> + isim",
            "die schönste Stadt",
          ],
        ]}
      />

      <Sub title="Boşluk doldurma – doğru kalıbı seç" />
      <ExerciseFill
        title="so … wie · -er + als · am …-sten"
        items={[
          {
            id: "ac1",
            before: "Mein Zimmer ist ___ groß ___ dein Zimmer.",
            after: "",
            answers: ["so ... wie"],
            answersOptions: ["so ... wie", "…er als", "am …sten"],
          },
          {
            id: "ac2",
            before: "Heute ist es ____ ____ gestern. (warm)",
            after: "",
            answers: ["wärmer als"],
            answersOptions: ["am wärmsten", "so warm wie", "wärmer als"],
          },
          {
            id: "ac3",
            before: "Das ist ____ ____ Kuchen im Café. (gut)",
            after: "",
            answers: ["der beste"],
            answersOptions: ["am besten", "der beste", "besser als"],
          },
          {
            id: "ac4",
            before: "Er rennt ____ ____. (schnell – Superlativ, yüklem)",
            after: "",
            answers: ["am schnellsten"],
            answersOptions: [
              "am schnellsten",
              "schneller als",
              "so schnell wie",
            ],
          },
          {
            id: "ac5",
            before: "Diese Lösung ist ____ ____ deine. (einfach)",
            after: "",
            answers: ["einfacher als"],
            answersOptions: [
              "am einfachsten",
              "einfacher als",
              "so einfach wie",
            ],
          },
          {
            id: "ac6",
            before: "Ich mag Tee ____ als Kaffee. (gern → ?)",
            after: "",
            answers: ["lieber"],
            answersOptions: ["mehr", "lieber", "am liebsten"],
          },
          {
            id: "ac7",
            before: "Er arbeitet ____ ____. (viel → Superlativ, yüklem)",
            after: "",
            answers: ["am meisten"],
            answersOptions: ["mehr als", "am meisten", "so viel wie"],
          },
          {
            id: "ac8",
            before: "Sie ist ____ ____ ich. (alt – Komparativ)",
            after: "",
            answers: ["älter als"],
            answersOptions: ["am ältesten", "älter als", "so alt wie"],
          },
        ]}
      />

      <Sub title="Çoktan seçmeli – anlam ve kullanım" />
      <ExerciseMC
        title="Hızlı kontrol"
        items={[
          {
            q: "Eşitlik hangi kalıpla verilir?",
            choices: [
              "sıfat + -er + als",
              "so + sıfat + wie",
              "am + sıfat + -sten",
            ],
            correctIndex: 1,
            explain:
              "Eşitlik = so … wie. ‘als’ fark belirtir, ‘am …-sten’ en derecedir.",
          },
          {
            q: "Aşağıdakilerden hangisi yazım bakımından doğrudur?",
            choices: [
              "hoch → hoher → am hochsten",
              "hoch → höher → am höchsten",
              "hoch → höher → der hocheste Mann",
            ],
            correctIndex: 1,
            explain: "Doğru: hoch → höher → am höchsten / der höchste.",
          },
          {
            q: "‘gut’ için doğru dizilim hangisi?",
            choices: [
              "gut → guter → am gutesten",
              "gut → besser → am besten",
              "gut → mehr gut → am meisten gut",
            ],
            correctIndex: 1,
            explain: "Düzensiz: gut → besser → am besten.",
          },
          {
            q: "İsimden önce ‘en’ derecesi nasıl kurulur?",
            choices: [
              "am + sıfat + -sten + isim",
              "der/die/das + sıfat + -ste + isim",
              "so + sıfat + wie + isim",
            ],
            correctIndex: 1,
            explain:
              "İsimden önce artikel + sıfat + -ste gerekir: der/die/das schnellste Zug.",
          },
          {
            q: "Hangi cümle fark (daha) bildirir?",
            choices: [
              "Das Haus ist so groß wie meine Wohnung.",
              "Das Haus ist größer als meine Wohnung.",
              "Das Haus ist am größten.",
            ],
            correctIndex: 1,
            explain:
              "‘… als …’ fark (daha) bildirir; ‘so … wie’ eşitlik; ‘am …-sten’ en derecedir.",
          },
        ]}
      />

      <Sub title="Mini yazma (40–80 kelime) – şehir/ürün kıyası" />
      <Callout type="tip" title="Karşılaştırma kalıplarını zorunlu tut">
        <p>
          İki şehir ya da iki ürün seç. En az üç cümlede biri için{" "}
          <strong>so … wie</strong>, biri için
          <strong> …-er als</strong>, biri için de <strong>am …-sten</strong>{" "}
          kullan. Örn.:
          <em>
            {" "}
            Diese Stadt ist größer als …; Die Mieten sind nicht so hoch wie …;
            Das Essen ist am besten in …
          </em>
        </p>
      </Callout>
    </>
  );
}

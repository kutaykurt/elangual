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

export default function TensePerfekt() {
  return (
    <>
      <div className="rule-box">
        <strong>Geçmiş Zaman – Konuşma Dili (Perfekt)</strong>: Günlük konuşmada
        geçmişi anlatmak için <Key>haben/sein + Partizip II</Key>.{" "}
        <Key>haben/sein</Key> cümlede 2. pozisyonda, <Key>Partizip II</Key>{" "}
        daima sonda. Zaman/şekil/yer için <Key>T–M–L</Key> sırası.
      </div>

      <Explain
        title="Perfekt ne işe yarar? (Perfekt – Wozu?)"
        lead="Dün ne oldu, hafta sonu ne yaptın? Bu soruları Almanca konuşmada çoğunlukla Perfekt ile anlatırız."
      >
        <p>
          Günlük diyaloglarda <strong>olup biten olayları</strong> söylemek için{" "}
          <Term>Perfekt</Term> kullanılır:
          <em>
            {" "}
            Ich <u>habe</u> gearbeitet.
          </em>{" "}
          ·
          <em>
            {" "}
            Ich <u>bin</u> nach Hause <u>gegangen</u>.
          </em>
        </p>
        <p>
          <Term>Präteritum</Term> yazı dilinde daha yaygındır; A2’de önce{" "}
          <Key>Perfekt</Key> oturtulur. Temel kalıp: çekimli{" "}
          <Key>haben/sein</Key> + sonda <Key>Partizip II</Key>.
        </p>
      </Explain>

      <Sub title="Kuruluş – Yapı (Bildung – Satzgerüst)" />
      <Explain
        title="Cümle iskeleti (Satzbau im Überblick)"
        lead="Pozisyon 1: tema/zaman → Pozisyon 2: haben/sein → orta alan → sonda: Partizip II."
      >
        <Formula
          rows={[
            [
              "Olumlu",
              "Özne + <b>haben/sein</b> + … + <b>Partizip II</b>",
              "Ich <u>habe</u> gelernt. · Er <u>ist</u> angekommen.",
            ],
            [
              "Olumsuz",
              "Özne + haben/sein + … + <b>nicht/kein</b> + Partizip II",
              "Wir haben heute <u>nicht</u> gearbeitet.",
            ],
            [
              "Soru (Ja/Nein)",
              "<b>Haben/Sein</b> + özne + … + Partizip II?",
              "Hast du schon gegessen?",
            ],
          ]}
        />
        <Examples
          items={[
            {
              en: "Heute habe ich mit Freunden gesprochen.",
              tr: "Bugün arkadaşlarımla konuştum.",
              pron: "hoytə habe ih mit froyndən geşprohen",
            },
            {
              en: "Gestern ist sie spät angekommen.",
              tr: "Dün geç geldi.",
              pron: "gestan ist zi shpét ankekomen",
            },
          ]}
        />
      </Explain>

      <Sub title="haben mı, sein mı? (Hilfsverben – Auswahl)" />
      <Explain
        title="Hangi yardımcı fiil? (Welches Hilfsverb?)"
        lead="Hareket + hedef ve durum değişimi için genelde <Key>sein</Key>; diğer fiillerde çoğu zaman <Key>haben</Key>."
      >
        <MiniTable
          head={["Tür", "Tipik Fiiller", "Örnek cümle"]}
          rows={[
            [
              "Hareket + hedef",
              "gehen, kommen, fahren, fliegen",
              "Ich <b>bin</b> nach Köln <b>gefahren</b>.",
            ],
            [
              "Durum değişimi",
              "aufwachen, einschlafen, sterben",
              "Er <b>ist</b> früh <b>eingeschlafen</b>.",
            ],
            [
              "Özel",
              "bleiben, passieren",
              "Wir <b>sind</b> zu Hause <b>geblieben</b>.",
            ],
            [
              "Diğer çoğu",
              "arbeiten, lernen, essen, sehen…",
              "Ich <b>habe</b> den Film <b>gesehen</b>.",
            ],
          ]}
        />
      </Explain>

      <Sub title="Partizip II nasıl yapılır? (Partizip II bilden)" />
      <Explain
        title="Beş ana kalıp (Fünf Muster)"
        lead="Düzenli, -ieren, untrennbar, trennbar, düzensiz."
      >
        <MiniTable
          head={["Tür", "Kalıp", "Örnek", "TR ipucu"]}
          rows={[
            ["Düzenli", "ge + kök + t", "machen → gemacht", "çoğu -t"],
            ["-ieren", "ge yok, -iert", "studieren → studiert", "ge gelmez"],
            [
              "Untrennbar",
              "önek + kök + t/en (ge yok)",
              "verstehen → verstanden",
              "vurgusuz önek",
            ],
            [
              "Trennbar",
              "önek + ge + kök + t/en",
              "auf-räumen → auf<b>ge</b>räumt",
              "ge araya girer",
            ],
            [
              "Düzensiz",
              "ge + kök değişimi + -en",
              "schreiben → geschrieben",
              "ezber listesi",
            ],
          ]}
        />
        <Examples
          items={[
            {
              en: "Ich habe mein Zimmer aufgeräumt.",
              tr: "Odamı topladım.",
              pron: "ih habe mayn tsimmer auf-geroymt",
            },
            {
              en: "Er hat viel geschrieben.",
              tr: "Çok yazdı.",
              pron: "ea hat fil ge-şriben",
            },
          ]}
        />
      </Explain>

      <Sub title="Ayrılabilen/Ayrılamayan önekler (Trennbar/Untrennbar)" />
      <Explain
        title="Nasıl ayırt ederim? (Erkennen)"
        lead="Trennbar önekte vurgu vardır ve Perfekt’te ‘ge’ içeri girer; untrennbar önekler vurgusuzdur ve ‘ge’ almaz."
      >
        <MiniTable
          head={["Trennbar (Perfekt)", "Untrennbar (Perfekt)", "Anlam"]}
          rows={[
            [
              "anrufen → angerufen",
              "besuchen → besucht",
              "telefon etmek · ziyaret etmek",
            ],
            [
              "aufstehen → aufgestanden",
              "verstehen → verstanden",
              "kalkmak · anlamak",
            ],
            [
              "mitbringen → mitgebracht",
              "bekommen → bekommen",
              "getirmek · almak",
            ],
            [
              "einladen → eingeladen",
              "erklären → erklärt",
              "davet etmek · açıklamak",
            ],
          ]}
        />
      </Explain>

      <Sub title="Söz dizimi ve T–M–L (Wortstellung & T–M–L)" />
      <Explain
        title="Zaman–Şekil–Yer sırası (Temporal–Modal–Lokal)"
        lead="Önce <Term>zaman</Term>, sonra <Term>şekil/araç/kişi</Term>, en sonda <Term>yer</Term>. Partizip II daima sonda."
      >
        <Examples
          items={[
            {
              en: "Am Abend habe ich mit Freunden im Café gesessen.",
              tr: "Akşam arkadaşlarla kafede oturdum.",
              pron: "am abend habe ih mit froyndən im kafe gezesen",
            },
            {
              en: "Gestern bin ich mit dem Zug nach Köln gefahren.",
              tr: "Dün trenle Köln’e gittim.",
              pron: "gestan bin ih mit dem tsuuk nah köln gefaren",
            },
          ]}
        />
        <Callout type="info" title="Negasyon konumu">
          <p>
            <Term>nicht</Term> çoğunlukla Partizip’ten önce gelir:{" "}
            <em>
              Ich habe heute <u>nicht</u> gearbeitet.
            </em>
          </p>
          <p>
            <Term>kein</Term> isimleri olumsuzlar:{" "}
            <em>
              Ich habe <u>kein</u> Auto gekauft.
            </em>
          </p>
        </Callout>
      </Explain>

      <Sub title="Soru ve olumsuz (Frage & Negation)" />
      <Explain
        title="Nasıl sorarım, nasıl olumsuz yaparım?"
        lead="E/H sorusunda yardımcı fiil başa; olumsuzda nicht/kein Partizip’ten önce."
      >
        <Examples
          items={[
            {
              en: "Hast du die E-Mails geschrieben?",
              tr: "E-postaları yazdın mı?",
              pron: "hast du di imeyls geşriben",
            },
            {
              en: "Nein, ich habe sie nicht geschrieben.",
              tr: "Hayır, yazmadım.",
              pron: "nayn, ih habe zi niHt geşriben",
            },
            {
              en: "Hat er ein Ticket gekauft?",
              tr: "O bilet aldı mı?",
              pron: "hat ea ayn tiket gekauft",
            },
            {
              en: "Nein, er hat kein Ticket gekauft.",
              tr: "Hayır, bilet almadı.",
              pron: "nayn, ea hat kayn tiket gekauft",
            },
          ]}
        />
      </Explain>

      <Sub title="Telaffuz odak (Aussprache – TR ipuçları)" />
      <Explain
        title="Ses ipuçları"
        lead="ge- kısa; -t net; -en çoğu zaman ‘ın’ gibi; sein/haben doğal bir şekilde ‘zayn/habın’ duyulur."
      >
        <ul className="compact-list">
          <li>
            <Term>ge-</Term>: “ge”: <em>gemacht, gesehen</em> → “ge-maht,
            ge-zeen”
          </li>
          <li>
            <Term>-t</Term>: kısa/sert:{" "}
            <em>
              gemach<strong>t</strong>
            </em>{" "}
            → “gemaht”
          </li>
          <li>
            <Term>-en</Term>: çoğu zaman “ın”: <em>geschrieben</em> → “ge-şrib
            <strong>ın</strong>”
          </li>
          <li>
            <Term>sein/haben</Term>: “zayn / habın”.
          </li>
        </ul>
      </Explain>

      <Sub title="Sık düzensiz Partizipler (Häufige unregelmäßige Partizipien)" />
      <MiniTable
        head={["Infinitiv", "Partizip II", "TR okunuşu", "Anlam"]}
        rows={[
          ["gehen", "gegangen", "gegangın", "gitmek"],
          ["kommen", "gekommen", "gekomen", "gelmek"],
          ["sehen", "gesehen", "gezeen", "görmek"],
          ["sein", "gewesen", "gevézın", "olmak (oldum)"],
          ["schreiben", "geschrieben", "geşriben", "yazmak"],
          ["sprechen", "gesprochen", "geşprohen", "konuşmak"],
          ["nehmen", "genommen", "genomen", "almak"],
          ["finden", "gefunden", "gefındın", "bulmak"],
        ]}
      />

      <Sub title="Örnek cümleler (Beispiele)" />
      <Examples
        items={[
          {
            en: "Am Morgen habe ich gefrühstückt.",
            tr: "Sabah kahvaltı yaptım.",
            pron: "am morgen habe ih gefryuştükt",
          },
          {
            en: "Dann bin ich zur Arbeit gefahren.",
            tr: "Sonra işe gittim (araçla).",
            pron: "dan bin ih zur arbeit gefaren",
          },
          {
            en: "Wir haben die Wohnung aufgeräumt.",
            tr: "Evi topladık.",
            pron: "vir haben di vo:nung auf-geroymt",
          },
          {
            en: "Er ist spät eingeschlafen.",
            tr: "Geç uykuya daldı.",
            pron: "ea ist shpét ayn-geşlafen",
          },
        ]}
      />

      <Sub title="Boşluk doldurma (Lückentext)" />
      <ExerciseFill
        title="Perfekt: haben/sein + Partizip II"
        items={[
          {
            id: "pf1",
            before: "Gestern ____ ich meine Freunde ________ (besuchen).",
            after: "",
            answers: ["habe besucht"],
          },
          {
            id: "pf2",
            before: "Er ____ um 7 Uhr ________ (aufstehen).",
            after: "",
            answers: ["ist aufgestanden"],
          },
          {
            id: "pf3",
            before: "Wir ____ im Café lange ________ (sprechen).",
            after: "",
            answers: ["haben gesprochen"],
          },
          {
            id: "pf4",
            before: "Sie ____ nach Ankara ________ (fliegen).",
            after: "",
            answers: ["ist nach Ankara geflogen", "ist geflogen nach Ankara"],
          },
          {
            id: "pf5",
            before: "Ich ____ das Zimmer ________ (aufräumen).",
            after: "",
            answers: ["habe aufgeräumt"],
          },
          {
            id: "pf6",
            before: "Ihr ____ den Film ________ (sehen).",
            after: "",
            answers: ["habt gesehen"],
          },
          {
            id: "pf7",
            before: "Er ____ gestern ________ (nicht / arbeiten).",
            after: "",
            answers: ["hat nicht gearbeitet"],
          },
          {
            id: "pf8",
            before: "Wir ____ zu Hause ________ (bleiben).",
            after: "",
            answers: ["sind geblieben"],
          },
        ]}
      />

      <Sub title="Mini test (Multiple Choice)" />
      <ExerciseMC
        title="Perfekt – Hızlı kontrol"
        items={[
          {
            q: "Hangi cümle T–M–L sırasına uygun?",
            choices: [
              "Ich habe im Büro gestern gearbeitet.",
              "Gestern habe ich im Büro gearbeitet.",
              "Ich habe gearbeitet im Büro gestern.",
            ],
            correctIndex: 1,
            explain: "Önce zaman, yer en sonda: Gestern … im Büro gearbeitet.",
          },
          {
            q: "Hangi fiil genelde sein ister?",
            choices: ["arbeiten", "kommen", "spielen"],
            correctIndex: 1,
            explain: "Hareket + hedef: kommen → sein.",
          },
          {
            q: "Trennbar fiilin Perfekt’i hangisi?",
            choices: [
              "verstehen → verstanden",
              "anrufen → gerufenan",
              "aufstehen → aufgestanden",
            ],
            correctIndex: 2,
            explain:
              "Trennbar: önek + ge + kök + en/t → auf + ge + stand + en.",
          },
          {
            q: "Olumsuz doğru kullanım hangisi?",
            choices: [
              "Ich habe kein gearbeitet.",
              "Ich habe nicht gearbeitet.",
              "Ich habe gearbeitet nicht.",
            ],
            correctIndex: 1,
            explain: "nicht Partizip’ten önce gelir: nicht gearbeitet.",
          },
          {
            q: "Hangi Partizip doğru?",
            choices: [
              "studieren → gestudiert",
              "telefonieren → telefoniert",
              "besuchen → gebesucht",
            ],
            correctIndex: 1,
            explain: "-ieren fiillerinde ge- yok: telefoniert.",
          },
        ]}
      />
    </>
  );
}

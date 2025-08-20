// src/pages/Grammar/sections/ger/a2/PassiveIntro.jsx
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

export default function PassiveIntro() {
  return (
    <>
      <div className="rule-box">
        <strong>Edilgen Çatı Girişi (Passiv Präsens – Einführung)</strong>:
        Nesneyi öne çıkarmak için <Key>werden + Partizip II</Key> kullanılır:
        <em>
          {" "}
          Das Fenster <u>wird</u> <u>geöffnet</u>.
        </em>{" "}
        Kim yaptığı önemli değilse ya da bilinmiyorsa edilgen uygundur.
      </div>

      <Explain
        title="Edilgen neden kullanılır? (Warum Passiv?)"
        lead="Yapan kişi önemli değilse, bilinmiyorsa veya resmî/duyuru dili gerekiyorsa edilgen seçilir."
      >
        <p>
          Etkende yapan kişi merkezde:{" "}
          <em>Der Techniker repariert den Drucker.</em>
          Edilgende yapılan iş ve nesne merkezde:{" "}
          <em>
            Der Drucker <u>wird repariert</u>.
          </em>{" "}
          Türkçedeki “kapı kapatıldı, yollar onarılıyor” cümleleri gibi.
          Talimatlarda ve resmî duyurularda da çok yaygındır:{" "}
          <em>Die Tür wird um 20 Uhr geschlossen.</em>
        </p>
        <p>
          Eğer yapan kişiyi söylemek istersen <Term>von + kişi</Term> veya{" "}
          <Term>durch + araç/yöntem</Term> eklersin:{" "}
          <em>
            Der Brief <u>wird</u> <u>von der Lehrerin</u> geschrieben.
          </em>
        </p>
      </Explain>

      <Sub title="Kuruluş (Bildung: werden + Partizip II)" />
      <Explain
        title="Temel yapı nasıl kurulur?"
        lead="Çekimli fiil 2. pozisyona <b>werden</b> gelir, <b>Partizip II</b> cümlenin sonuna gider."
      >
        <p>
          Özne (genelde nesne olmuş isim) → <Term>werden</Term> çekimli hâli →
          diğer ögeler → <Term>Partizip II</Term> sonda:
          <br />
          <em>
            Das Auto <u>wird</u> morgen <u>gewaschen</u>.
          </em>
        </p>
      </Explain>

      <MiniTable
        head={["Etken (Aktiv)", "Edilgen (Passiv Präsens)", "Not"]}
        rows={[
          [
            "Jemand repariert das Gerät.",
            "Das Gerät wird repariert.",
            "yapan kişi önemli değil",
          ],
          [
            "Die Firma liefert die Pakete.",
            "Die Pakete werden geliefert.",
            "çoğul özne → werden",
          ],
          [
            "Der Koch bereitet das Essen zu.",
            "Das Essen wird zubereitet.",
            "ayrılabilen fiiller: zu<b>bereitet</b>",
          ],
        ]}
      />

      <Sub title="‘werden’ çekimi (Präsens)" />
      <MiniTable
        head={["Kişi", "Çekim", "Örnek parça"]}
        rows={[
          ["ich", "werde", "ich werde informiert"],
          ["du", "wirst", "du wirst informiert"],
          ["er/sie/es", "wird", "es wird gemacht"],
          ["wir", "werden", "wir werden bezahlt"],
          ["ihr", "werdet", "ihr werdet abgeholt"],
          ["sie/Sie", "werden", "sie werden eingeladen"],
        ]}
      />

      <Sub title="‘von’ ve ‘durch’ (Kimin tarafından? Hangi araçla?)" />
      <Explain
        title="Kimin tarafından ve hangi araçla ifade edilir?"
        lead="<b>von</b> + kişi/kurum; <b>durch</b> + araç, yöntem, neden."
      >
        <ul className="compact-list">
          <li>
            <Term>von</Term>: kimin yaptığı.{" "}
            <em>
              Die Tür wird <u>von dem Hausmeister</u> geschlossen.
            </em>
          </li>
          <li>
            <Term>durch</Term>: hangi araçla/nasıl.{" "}
            <em>
              Die Stadt wird <u>durch Solarenergie</u> versorgt.
            </em>
          </li>
        </ul>
      </Explain>

      <Sub title="Kelime sırası (Ana cümle ve yan cümle)" />
      <Explain
        title="Cümle içinde yerleşim"
        lead="Ana cümlede çekimli ‘werden’ ikinci yerdedir; Partizip II en sondadır. Yan cümlede ikisi de sona gider."
      >
        <p>
          Ana cümle:{" "}
          <em>
            Die Rechnung <u>wird</u> morgen <u>bezahlt</u>.
          </em>
          Yan cümle:{" "}
          <em>
            …, weil die Rechnung morgen <u>bezahlt wird</u>.
          </em>{" "}
          Görüldüğü gibi yan cümlede <Term>Partizip II</Term> sonra{" "}
          <Term>werden</Term> gelir.
        </p>
      </Explain>

      <Sub title="Ne zaman edilgen, ne zaman etken?" />
      <Callout type="tip" title="Hızlı karar">
        <ul className="compact-list">
          <li>
            İşlem ve sonuç önemliyse, yapan belirsiz/önemsizse →{" "}
            <strong>edilgen</strong>.
          </li>
          <li>
            Yapanı özellikle vurgulamak istiyorsan → <strong>etken</strong> veya
            edilgende <em>von + kişi</em>.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler (Beispiele) – kısa bağlamla" />
      <Examples
        items={[
          {
            en: "Die Straße wird gerade repariert.",
            tr: "Sokak şu an onarılıyor.",
            pron: "di ştra-se vird gera-de repararirt",
          },
          {
            en: "Die E-Mails werden am Abend geschrieben.",
            tr: "E-postalar akşam yazılıyor.",
            pron: "di i-me-ils vearden am a-bent geşriben",
          },
          {
            en: "Das Paket wird morgen geliefert.",
            tr: "Paket yarın teslim edilecek.",
            pron: "das paket vird morgen gelifert",
          },
          {
            en: "Die Tür wird um 20 Uhr geschlossen.",
            tr: "Kapı saat 20:00’de kapatılır.",
            pron: "di tür vird um tsvan-tsiH uar geşlo-sn",
          },
          {
            en: "Der Patient wird vom Arzt untersucht.",
            tr: "Hasta doktor tarafından muayene ediliyor.",
            pron: "dea patsiyent vird fom arts untarzuHt",
          },
        ]}
      />

      <Sub title="Boşluk doldurma (werden + Partizip II)" />
      <ExerciseFill
        title="Edilgen Präsens – doğru parçayı yaz"
        items={[
          {
            id: "pa1",
            before: "Die Wohnung ___ morgen ___ (aufräumen).",
            after: "",
            answers: ["wird aufgeräumt"],
            answersOptions: [
              "wird aufgeräumt",
              "ist aufräumt",
              "wird aufräumen",
            ],
          },
          {
            id: "pa2",
            before: "Die Briefe ___ jeden Tag ___ (schreiben).",
            after: "",
            answers: ["werden geschrieben"],
            answersOptions: [
              "werden geschrieben",
              "werden schrieben",
              "werden geschriebenen",
            ],
          },
          {
            id: "pa3",
            before: "Der Test ___ nächste Woche ___ (machen).",
            after: "",
            answers: ["wird gemacht"],
            answersOptions: ["wird gemacht", "wird gemachen", "ist gemacht"],
          },
          {
            id: "pa4",
            before: "Die Gäste ___ um 19 Uhr ___ (einladen).",
            after: "",
            answers: ["werden eingeladen"],
            answersOptions: [
              "werden eingeladen",
              "werden eingeladenen",
              "werden einladet",
            ],
          },
          {
            id: "pa5",
            before: "Das Protokoll ___ später ___ (schicken) ___ dem Chef.",
            after: "",
            answers: ["wird geschickt an"],
            answersOptions: [
              "wird geschickt an",
              "wird geschickt von",
              "wird geschickt durch",
            ],
          },
        ]}
      />

      <Sub title="Çoktan seçmeli – kullanım ve anlam" />
      <ExerciseMC
        title="Passiv Präsens – hızlı kontrol"
        items={[
          {
            q: "Hangi cümle edilgen çatıdadır?",
            choices: [
              "Jemand repariert das Fahrrad.",
              "Das Fahrrad wird repariert.",
              "Der Techniker wird das Fahrrad.",
            ],
            correctIndex: 1,
            explain: "werden + Partizip II → edilgen: wird repariert.",
          },
          {
            q: "Kimin tarafından ifadesi için hangisi doğru?",
            choices: [
              "Die Tür wird der Hausmeister geschlossen.",
              "Die Tür wird durch den Hausmeister geschlossen.",
              "Die Tür wird von dem Hausmeister geschlossen.",
            ],
            correctIndex: 2,
            explain:
              "Kişi → von + Dativ: von dem Hausmeister. ‘durch’ genelde araç/yöntem içindir.",
          },
          {
            q: "Yan cümlede doğru sıralama hangisi?",
            choices: [
              "…, weil die Pakete werden geliefert.",
              "…, weil die Pakete geliefert werden.",
              "…, weil werden die Pakete geliefert.",
            ],
            correctIndex: 1,
            explain:
              "Yan cümlede Partizip II + werden en sonda: geliefert werden.",
          },
          {
            q: "Aşağıdakilerden hangisi anlamca edilgene daha uygundur?",
            choices: [
              "Paketin kim tarafından gönderildiği önemli değil.",
              "Gönderen kişinin adı çok önemli.",
              "Sadece ben paket gönderirim.",
            ],
            correctIndex: 0,
            explain:
              "Yapan önemsizse edilgen uygundur: Das Paket wird gesendet.",
          },
          {
            q: "Ayrılabilen fiilin Partizip II’si edilgende nasıl görünür?",
            choices: ["zu öffnet", "aufgemacht", "macht auf worden"],
            correctIndex: 1,
            explain:
              "Trennbar: Präfix + ge + kök + t/en → aufgemacht; edilgen: wird aufgemacht.",
          },
        ]}
      />

      <Sub title="Mini yazma (40–80 kelime) – duyuru metni" />
      <Callout type="tip" title="Edilgeni zorunlu kullan">
        <p>
          Bina duyurusu yaz: temizlik, kapı saatleri, teslimatlar. En az 5
          cümlede
          <em>werden + Partizip II</em> kullan:{" "}
          <em>Die Treppe wird gereinigt…</em>
        </p>
      </Callout>
    </>
  );
}

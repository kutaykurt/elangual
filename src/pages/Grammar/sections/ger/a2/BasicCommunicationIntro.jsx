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

export default function BasicCommunicationIntro() {
  return (
    <>
      <div className="rule-box">
        <strong>İletişim Hedefleri (Kommunikative Ziele – A2)</strong>: Günlük
        konular hakkında konuşma, geçmiş deneyimleri <Key>Perfekt</Key> ile
        anlatma, plan/gelecekten söz etme (<Key>Futur I</Key> veya planlı{" "}
        <Key>Präsens</Key>), görüş + gerekçe (<Key>dass, weil, denn</Key>),
        nazik istek ve basit formlar.
      </div>

      <Explain
        title="A2’de iletişim resmi (Was kann ich auf A2?)"
        lead="Hedef: günlük hayatı anlatmak, planları paylaşmak, basit gerekçeler vermek ve nazikçe ricada bulunmak."
      >
        <p>
          A2 seviyesinde amaç, <strong>tanıdık durumlar</strong> hakkında net ve
          basit cümlelerle konuşmaktır. Bunun için temel zamanlar (
          <Term>Präsens, Perfekt, Futur I</Term>), cümle bağları (
          <Term>weil, dass, denn</Term>) ve <Term>nazik kalıplar</Term>ı
          kullanırız.
        </p>
      </Explain>

      <Sub title="Günlük konular: ana kelimeler ve kalıplar (Alltagsthemen – Kernvokabeln & Chunks)" />
      <Explain
        title="Konuları nasıl ele alırım? (Wie spreche ich über Alltag?)"
        lead="Her tema için 3 şey: temel isimler, tipik fiiller, hazır kalıplar."
      >
        <MiniTable
          head={["Konu", "Hazır kalıp (TR çeviri)", "Örnek cümle"]}
          rows={[
            [
              "Ev & Yaşam (Wohnen)",
              "Ich wohne in … (…’de yaşıyorum)",
              "Ich wohne in Köln, in einer kleinen Wohnung.",
            ],
            [
              "İş & Meslek (Arbeit)",
              "Ich arbeite als … (… olarak çalışıyorum)",
              "Ich arbeite als Verkäuferin in einem Geschäft.",
            ],
            [
              "Okul & Ders (Schule/Studium)",
              "Ich gehe auf … (… okuluna gidiyorum)",
              "Mein Sohn geht auf die Grundschule.",
            ],
            [
              "Alışveriş & Hizmet (Einkaufen/Service)",
              "Ich brauche … (…’a ihtiyacım var)",
              "Ich brauche heute frisches Gemüse.",
            ],
            [
              "Seyahat & Ulaşım (Reisen/Verkehr)",
              "Ich fahre nach … (…’e gidiyorum)",
              "Wir fahren morgen nach Berlin.",
            ],
            [
              "Sağlık (Gesundheit)",
              "Ich habe … (…’im var)",
              "Ich habe Kopfschmerzen und einen Termin beim Arzt.",
            ],
          ]}
        />
      </Explain>

      <Sub title="Geçmişi anlatma (Vergangenheit – Perfekt)" />
      <Explain
        title="Ne oldu? Ne yaptın? (Wie erzähle ich von gestern?)"
        lead="Konuşmada geçmiş için genelde Perfekt: <Key>haben/sein + Partizip II</Key>."
      >
        <Formula
          rows={[
            [
              "Olumlu",
              "Özne + haben/sein + … + Partizip II",
              "Ich habe gearbeitet. · Er ist spät gekommen.",
            ],
            [
              "Olumsuz",
              "Özne + haben/sein + … + nicht/kein + Partizip II",
              "Wir haben heute nicht gelernt.",
            ],
            [
              "Soru",
              "Haben/Sein + özne + … + Partizip II?",
              "Hast du am Wochenende gearbeitet?",
            ],
          ]}
        />
        <Examples
          items={[
            {
              en: "Am Wochenende habe ich meine Familie besucht.",
              tr: "Hafta sonu ailemi ziyaret ettim.",
              pron: "am vokənende habe ih maynə familie bezu:ht",
            },
            {
              en: "Gestern ist sie früh eingeschlafen.",
              tr: "Dün o erken uykuya daldı.",
              pron: "gestan ist zi fryu ayn-geşlafen",
            },
          ]}
        />
      </Explain>

      <Sub title="Gelecek & planlar (Zukunft & Pläne – Futur I / Präsens)" />
      <Explain
        title="Ne yapacaksın? (Wie spreche ich über Zukunft?)"
        lead="Planlı gelecek için <Key>Präsens + zaman zarfı</Key>, tahmin/niyet için <Key>Futur I: werden + Infinitiv</Key>."
      >
        <MiniTable
          head={["Yapı", "Kalıp", "Örnek"]}
          rows={[
            [
              "Planlı Präsens",
              "Präsens + zaman",
              "Morgen <b>gehe</b> ich zum Zahnarzt.",
            ],
            [
              "Futur I",
              "werden + Infinitiv",
              "Ich <b>werde</b> nächstes Jahr Deutsch <b>lernen</b>.",
            ],
          ]}
        />
        <Callout type="tip" title="Ne zaman hangisi?">
          <p>
            <Term>Bugün/Yarın/Haftaya</Term> gibi net planlarda Präsens çok
            doğal: <em>Am Freitag fahre ich nach München.</em>
          </p>
          <p>
            <Term>İnanma/tahmin/niyet</Term> vurgusunda Futur I:{" "}
            <em>Es wird bald regnen.</em>
          </p>
        </Callout>
        <Examples
          items={[
            {
              en: "Morgen treffe ich meine Freunde.",
              tr: "Yarın arkadaşlarımla buluşuyorum.",
              pron: "morgen trefə ih maynə froynde",
            },
            {
              en: "Ich werde mehr Sport machen.",
              tr: "Daha fazla spor yapacağım.",
              pron: "ih verde mea şport mahın",
            },
          ]}
        />
      </Explain>

      <Sub title="Görüş + gerekçe (Meinung + Begründung: dass/weil/denn)" />
      <Explain
        title="Neden öyle düşünüyorsun? (Wie begründe ich?)"
        lead="Görüş: <Key>ich finde/denke, dass …</Key>. Gerekçe: <Key>weil</Key> yan cümle, <Key>denn</Key> ana cümle."
      >
        <MiniTable
          head={["Bağlantı", "Kalıp", "Örnek"]}
          rows={[
            [
              "Görüş + içerik",
              "Ich finde, dass …",
              "Ich finde, dass dieser Kurs sehr gut ist.",
            ],
            [
              "Sebep (yan cümle)",
              "…, weil …",
              "Ich bleibe zu Hause, weil ich krank bin.",
            ],
            [
              "Sebep (ana cümle)",
              "…, denn …",
              "Ich bleibe zu Hause, denn ich bin krank.",
            ],
          ]}
        />
        <Examples
          items={[
            {
              en: "Ich denke, dass Deutsch wichtig ist.",
              tr: "Almancanın önemli olduğunu düşünüyorum.",
              pron: "ih denke, das doyç vihtiH ist",
            },
            {
              en: "Wir fahren nicht, denn es ist zu teuer.",
              tr: "Gitmiyoruz, çünkü çok pahalı.",
              pron: "via farən niHt, den es ist tsu toya",
            },
          ]}
        />
      </Explain>

      <Sub title="Nazik istek & formlar (Höfliche Bitten & Formulare)" />
      <Explain
        title="Rica nasıl yapılır? (Wie bitte ich höflich?)"
        lead="Kalıplar: <Key>Könnten Sie …?</Key> · <Key>Würden Sie …?</Key> · <Key>Dürfte ich …?</Key>"
      >
        <MiniTable
          head={["Durum", "Kalıp", "Örnek cümle"]}
          rows={[
            [
              "Yardım isteme",
              "Könnten Sie …?",
              "Könnten Sie mir bitte helfen?",
            ],
            [
              "Randevu/istek",
              "Würden Sie …?",
              "Würden Sie mir einen Termin geben?",
            ],
            ["İzin sorma", "Dürfte ich …?", "Dürfte ich hier sitzen?"],
          ]}
        />
        <Callout type="info" title="Form doldurma kelimeleri">
          <p>
            <Term>
              Name, Adresse, Geburtsdatum, Unterschrift, Termin, Formular
            </Term>{" "}
            gibi kelimeler A2’de sık geçer.
          </p>
        </Callout>
        <Examples
          items={[
            {
              en: "Könnten Sie das Formular erklären?",
              tr: "Formu açıklayabilir misiniz?",
              pron: "köntən zi das formulare erklären",
            },
            {
              en: "Dürfte ich mit Karte bezahlen?",
              tr: "Kartla ödeyebilir miyim?",
              pron: "dürfte ih mit karte betsalən",
            },
          ]}
        />
      </Explain>

      <Sub title="Mikro alıştırmalar (Mini-Übungen)" />
      <ExerciseFill
        title="Geçmiş – Gelecek – Gerekçe"
        items={[
          {
            id: "bc1",
            before: "Gestern ____ ich meine Freunde ________ (treffen).",
            after: "",
            answers: ["habe getroffen"],
          },
          {
            id: "bc2",
            before: "Morgen ____ ich zum Arzt. (gehen – planlı Präsens)",
            after: "",
            answers: ["gehe"],
          },
          {
            id: "bc3",
            before: "Ich bleibe zu Hause, ___ ich müde bin.",
            after: "",
            answers: ["weil"],
          },
          {
            id: "bc4",
            before: "___ Sie mir bitte helfen?",
            after: "",
            answers: ["Könnten"],
          },
          {
            id: "bc5",
            before: "Ich denke, ___ Deutsch wichtig ist.",
            after: "",
            answers: ["dass"],
          },
        ]}
      />
      <ExerciseMC
        title="Hızlı kontrol"
        items={[
          {
            q: "Planlı gelecek için en doğal cümle hangisi?",
            choices: [
              "Morgen werde ich ins Büro gehen.",
              "Morgen gehe ich ins Büro.",
              "Ich bin morgen ins Büro gegangen.",
            ],
            correctIndex: 1,
            explain: "Plan + zaman zarfı → Präsens: Morgen gehe ich …",
          },
          {
            q: "Hangi cümlede gerekçe yan cümleyle verilir?",
            choices: [
              "Ich bleibe zu Hause, denn ich bin krank.",
              "Ich bleibe zu Hause, weil ich krank bin.",
              "Ich bleibe zu Hause, ich bin krank.",
            ],
            correctIndex: 1,
            explain: "weil → yan cümlede fiil sonda: … weil ich krank bin.",
          },
          {
            q: "Nazik rica kalıbı hangisi?",
            choices: [
              "Ich will Hilfe.",
              "Hilf mir!",
              "Könnten Sie mir bitte helfen?",
            ],
            correctIndex: 2,
            explain: "A2’de nazik yapı: Könnten Sie … bitte …?",
          },
        ]}
      />

      <Callout type="tip" title="Mini yazma görevi (40–60 kelime)">
        <p>
          Hafta sonun hakkında yaz: Ne yaptın (<Term>Perfekt</Term>)? Yarın için
          planın ne (<Term>Präsens/Futur I</Term>)? Görüş + neden ekle (
          <Term>dass/weil</Term>). En az iki nazik rica örneği kullan.
        </p>
      </Callout>
    </>
  );
}

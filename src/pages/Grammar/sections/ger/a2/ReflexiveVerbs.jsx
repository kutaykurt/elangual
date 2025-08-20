// src/pages/Grammar/sections/ger/a2/ReflexiveVerbs.jsx
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

export default function ReflexiveVerbs() {
  return (
    <>
      <div className="rule-box">
        <strong>Dönüşlü Fiiller (Reflexive Verben)</strong>: Öznenin yaptığı
        eylem yine öznenin kendisini etkiler. Temel yapı:
        <Key>özne + refleksif zamir + fiil</Key>. Örn.:
        <em>
          {" "}
          Ich <u>wasche mich</u>.
        </em>{" "}
        /
        <em>
          {" "}
          Wir <u>treffen uns</u>.
        </em>
      </div>

      <Explain
        title="Dönüşlü fiil nedir? (Was sind Reflexivverben?)"
        lead="Eylemin sonucu öznenin kendisine döner ya da eylem karşılıklıdır."
      >
        <p>
          <strong>Dönüşlü</strong> kullanımda kişi, eylemi kendi üzerinde yapar:
          <em> Ich wasche mich.</em> (Kendimi yıkıyorum.)
          <br />
          <strong>Karşılıklı</strong> kullanımda eylem iki kişi arasında olur:
          <em> Wir treffen uns.</em> (Birbirimizle buluşuyoruz.)
        </p>
        <p>
          Bu fiiller kişiyle <Term>uyumlu refleksif zamir</Term> ister:
          <Term> mich, dich, sich, uns, euch, sich</Term>. Hangi zamir
          gerektiğini aşağıdaki tabloda göreceksin.
        </p>
      </Explain>

      <Sub title="Refleksif zamirler – kişi uyumu (Reflexivpronomen)" />
      <Explain
        title="Akkusativ ve Dativ farkı nasıl anlaşılır?"
        lead="Çoğu dönüşlü fiil Akkusativ ister. Beden parçası gibi bir nesne varsa çoğu kez Dativ + artikel kullanılır."
      >
        <p>
          <strong>Akkusativ (–i hâli)</strong>: Eylem doğrudan kendine yönelir.
          <em>
            {" "}
            Ich wasche <u>mich</u>.
          </em>
        </p>
        <p>
          <strong>Dativ (–e/–a hâli)</strong>: “Kendime” anlamı + nesne
          belirtirsin (beden parçası genelde artikel ile gelir).
          <em>
            {" "}
            Ich wasche <u>mir</u> die Hände.
          </em>{" "}
          (Ellerimi yıkıyorum.)
        </p>
      </Explain>
      <MiniTable
        head={["Kişi", "Akkusativ (kendisini)", "Dativ (kendisine)"]}
        rows={[
          ["ich", "mich", "mir"],
          ["du", "dich", "dir"],
          ["er/sie/es", "sich", "sich"],
          ["wir", "uns", "uns"],
          ["ihr", "euch", "euch"],
          ["sie/Sie", "sich", "sich"],
        ]}
      />
      <Examples
        items={[
          {
            en: "Ich wasche mich.",
            tr: "Kendimi yıkıyorum.",
            pron: "ih va-şe miH",
          },
          {
            en: "Ich wasche mir die Hände.",
            tr: "Ellerimi yıkıyorum.",
            pron: "ih va-şe mi:r di hende",
          },
          {
            en: "Wir treffen uns im Park.",
            tr: "Parkta buluşuyoruz.",
            pron: "vi:r trefn uns im park",
          },
        ]}
      />

      <Sub title="Günlük kalıplar (Alltag) – anlamı ve örnekleri" />
      <Explain
        title="Neden bu kalıplar önemli?"
        lead="A2 seviyesinde günlük rutini anlatırken en çok bu dönüşlü fiilleri kullanırsın."
      >
        <p>
          Aşağıdaki cümlelerde önce <strong>Türkçe açıklama</strong>, sonra{" "}
          <strong>örnek</strong> ve <strong>yaklaşık okunuş</strong> var.
        </p>
      </Explain>
      <MiniTable
        head={["Kalıp", "Anlam (TR)", "Örnek cümle"]}
        rows={[
          [
            "sich waschen",
            "kendini yıkamak",
            "Ich wasche mich jeden Morgen. (Her sabah kendimi yıkarım.)",
          ],
          [
            "sich anziehen",
            "giyinmek",
            "Ich ziehe mich schnell an. (Hızlıca giyinirim.)",
          ],
          [
            "sich ausruhen",
            "dinlenmek",
            "Nach der Arbeit ruhe ich mich aus. (İşten sonra dinlenirim.)",
          ],
          ["sich beeilen", "acele etmek", "Beeil dich! (Acele et!)"],
          [
            "sich treffen",
            "buluşmak (karşılıklı)",
            "Wir treffen uns um 6 Uhr. (Saat 6’da buluşuyoruz.)",
          ],
          [
            "sich konzentrieren (auf + Akkusativ)",
            "…e odaklanmak",
            "Ich konzentriere mich auf die Aufgabe. (Göreve odaklanıyorum.)",
          ],
        ]}
      />

      <Sub title="Edatlı kalıplar (mit Präpositionen) – anlam farkları" />
      <Explain
        title="Aynı fiil farklı edatla farklı anlam verir"
        lead="Edat + hâl kombinasyonu kalıptır; birlikte ezberle."
      >
        <p>
          <Term>sich freuen auf + Akkusativ</Term> = gelecekte olacak bir şeye
          sevinmek:
          <em> Ich freue mich auf den Urlaub.</em> (Tatile seviniyorum.)
        </p>
        <p>
          <Term>sich freuen über + Akkusativ</Term> = olmuş/olan bir şeye
          sevinmek:
          <em> Er freut sich über das Geschenk.</em> (Hediye için seviniyor.)
        </p>
        <p>
          <Term>sich erinnern an + Akkusativ</Term> = bir şeyi hatırlamak:
          <em> Ich erinnere mich an die Schule.</em>
        </p>
        <p>
          <Term>sich interessieren für + Akkusativ</Term> = bir şeye ilgi
          duymak:
          <em> Sie interessiert sich für Politik.</em>
        </p>
        <p>
          <Term>sich kümmern um + Akkusativ</Term> = bir şeye/göreve göz kulak
          olmak:
          <em> Ich kümmere mich um die Kinder.</em>
        </p>
      </Explain>

      <Sub title="Cümle düzeni: nerede durur? (Wortstellung)" />
      <Explain
        title="Bildirim, soru, olumsuz ve emir cümleleri"
        lead="Refleksif zamir (mich/dich/sich/…) genelde fiilin hemen yanında durur."
      >
        <p>
          <strong>Bildirim</strong>:<em> Ich wasche mich jetzt.</em> (Şimdi
          kendimi yıkıyorum.)
        </p>
        <p>
          <strong>Genel soru (Evet/Hayır)</strong>:<em> Wäschst du dich?</em>{" "}
          (Kendini yıkıyor musun?)
        </p>
        <p>
          <strong>W-sorusu</strong>:<em> Wann triffst du dich mit Ali?</em> (Ali
          ile ne zaman buluşuyorsun?)
        </p>
        <p>
          <strong>Olumsuz</strong>:
          <em>
            {" "}
            Ich wasche mich <u>nicht</u>.
          </em>{" "}
          (Kendimi yıkamıyorum.)
        </p>
        <p>
          <strong>Emir</strong>:<em> Wasch dich!</em> /{" "}
          <em> Waschen Sie sich!</em>
        </p>
      </Explain>

      <Sub title="Ayrılabilen fiillerle birleşim (trennbare Verben)" />
      <Explain
        title="Refleksif zamir ortada, ayraç sonda"
        lead="Önek sonda görünür; refleksif zamir çekimli fiilden sonra gelir."
      >
        <p>
          <em>
            Ich <u>ziehe</u> mich <u>an</u>.
          </em>{" "}
          (Giyiniyorum.)
          <br />
          <em>Ruh dich aus!</em> (Dinlen!)
          <br />
          <em>
            Ich <u>melde</u> mich online <u>an</u>.
          </em>{" "}
          (Çevrimiçi kayıt oluyorum.)
        </p>
      </Explain>

      <Sub title="Geçmiş zaman (Perfekt) – düzen" />
      <Explain
        title="Kuruluş ve örnekler"
        lead="Genelde ‘haben’ yardımcı fiili kullanılır: ‘haben + sich + Partizip II’."
      >
        <p>
          <em>
            Ich <u>habe</u> mich <u>ausgeruht</u>.
          </em>{" "}
          (Dinlendim.)
          <br />
          <em>
            Wir <u>haben</u> uns <u>getroffen</u>.
          </em>{" "}
          (Buluştuk.)
          <br />
          <em>
            Ich <u>habe</u> mich <u>angemeldet</u>.
          </em>{" "}
          (Kayıt oldum.)
        </p>
        <Callout type="warn" title="Küçük not">
          <p>
            Çoğu dönüşlü fiilde yardımcı fiil <Term>haben</Term>’dır. Nadiren
            hareket/varış anlamlı bazı kalıp fiillerde fark görebilirsin, ancak
            A2’de genelde <Term>haben</Term> ile çalış.
          </p>
        </Callout>
      </Explain>

      <Sub title="Sık hatalar (Häufige Fehler)" />
      <Callout type="error" title="Dikkat et">
        <ul className="compact-list">
          <li>
            <Term>*Ich interessiere für …*</Term> değil,
            <Term> Ich interessiere mich für …</Term>.
          </li>
          <li>
            <Term>*Ich wasche mich die Hände*</Term> değil,
            <Term> Ich wasche mir die Hände</Term>.
          </li>
          <li>
            Ayrılabilen fiillerde sıra:{" "}
            <em>
              Ich <u>ziehe</u> mich <u>an</u>
            </em>
            , <em>*Ich ziehe an mich*</em> değil.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler (Beispiele)" />
      <Examples
        items={[
          {
            en: "Ich interessiere mich für Sprachen.",
            tr: "Dillere ilgi duyuyorum.",
            pron: "ih interesire miH fyr şpraHn",
          },
          {
            en: "Ruh dich aus!",
            tr: "Dinlen!",
            pron: "ruh diH aus",
          },
          {
            en: "Wir haben uns gestern getroffen.",
            tr: "Dün buluştuk.",
            pron: "vi:r haben uns gestern getrofn",
          },
        ]}
      />

      <Sub title="Mikro Alıştırmalar – boşluğu doldur (seçmeli)" />
      <ExerciseFill
        title="Doğru refleksif biçimi seç"
        items={[
          {
            id: "rv1",
            before: "Ich ___ (sich freuen) auf den Urlaub.",
            after: "",
            answers: ["freue mich"],
            answersOptions: ["freue mich", "freue mir", "freut mich"],
          },
          {
            id: "rv2",
            before: "Er ___ (sich interessieren) für Politik.",
            after: "",
            answers: ["interessiert sich"],
            answersOptions: [
              "interessiert sich",
              "interessiert ihn",
              "interessiert ihm",
            ],
          },
          {
            id: "rv3",
            before: "Wir ___ (sich treffen) heute Abend.",
            after: "",
            answers: ["treffen uns"],
            answersOptions: ["treffen uns", "treffen wir uns", "treffen euch"],
          },
          {
            id: "rv4",
            before: "Ich ___ (sich die Hände waschen).",
            after: "",
            answers: ["wasche mir die Hände"],
            answersOptions: [
              "wasche mir die Hände",
              "wasche mich die Hände",
              "wasche mir die Hand",
            ],
          },
          {
            id: "rv5",
            before: "Bitte, ___! (sich setzen – emir)",
            after: "",
            answers: ["setz dich"],
            answersOptions: ["setz dich", "setz dir", "setz du dich bitte"],
          },
          {
            id: "rv6",
            before: "Nach dem Sport ___ ich mich ___ (sich ausruhen).",
            after: "",
            answers: ["ruhe mich aus"],
            answersOptions: ["ruhe mich aus", "ruhen mich aus", "ruhe mir aus"],
          },
        ]}
      />

      <Sub title="Mini Test (Multiple Choice)" />
      <ExerciseMC
        title="Hızlı kontrol"
        items={[
          {
            q: "Doğru kullanım hangisi?",
            choices: [
              "Ich interessiere für Musik.",
              "Ich interessiere mich für Musik.",
              "Ich interessiere mir für Musik.",
            ],
            correctIndex: 1,
            explain: "Kalıp: sich interessieren für + Akkusativ (–i hâli).",
          },
          {
            q: "Ayrılabilen fiil ile doğru sıra hangisi?",
            choices: [
              "Ich anziehe mich.",
              "Ich ziehe mich an.",
              "Ich ziehe an mich.",
            ],
            correctIndex: 1,
            explain:
              "Refleksif zamir çekimli fiilden sonra, önek sonda: ziehe mich an.",
          },
          {
            q: "‘Ellerimi yıkıyorum’ cümlesi hangisi?",
            choices: [
              "Ich wasche mich die Hände.",
              "Ich wasche mir die Hände.",
              "Ich wasche die Hände mich.",
            ],
            correctIndex: 1,
            explain:
              "Sahiplik Dativ + beden parçası: mir + die Hände (Akkusativ nesne).",
          },
          {
            q: "Perfekt doğru kullanım hangisi?",
            choices: [
              "Ich habe mich ausgeruht.",
              "Ich bin mich ausgeruht.",
              "Ich habe mir ausgeruht.",
            ],
            correctIndex: 0,
            explain: "Dönüşlü fiiller A2’de genelde ‘haben’ alır.",
          },
        ]}
      />

      <Sub title="Mini yazma (40–80 kelime)" />
      <Callout
        type="tip"
        title="Günlük rutinini anlat – en az 4 dönüşlü fiil kullan"
      >
        <p>
          Örn.:{" "}
          <em>Ich stehe auf, dusche mich, rasiere mich, ziehe mich an.</em>{" "}
          Sonra <em>sich freuen auf</em> ve <em>sich interessieren für</em>{" "}
          kalıplarıyla iki cümle ekle. Net, kısa, ama doğal yaz.
        </p>
      </Callout>
    </>
  );
}

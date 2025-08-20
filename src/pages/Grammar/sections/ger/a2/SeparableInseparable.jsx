// src/pages/Grammar/sections/ger/a2/SeparableInseparable.jsx
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

export default function SeparableInseparable() {
  return (
    <>
      <div className="rule-box">
        <strong>
          Ayrılabilen ve Ayrılmayan Önekli Fiiller (Trennbare und Untrennbare
          Verben)
        </strong>
        : Birçok Almanca fiilin başında <Key>önek</Key> (ör.{" "}
        <Term>an-, auf-, ver-, be-</Term>) vardır.
        <Term>Ayrılabilen</Term> fiillerde önek, ana cümlede çoğu zaman{" "}
        <Key>sona gider</Key>;<Term>ayrılmayan</Term> fiillerde önek fiile{" "}
        <Key>birleşik</Key> kalır.
      </div>

      <Explain
        title="Neden bu konu önemli? (Warum ist das wichtig?)"
        lead="Önek, fiilin anlamını değiştirir ve cümle yapısını etkiler."
      >
        <p>
          Türkçede “geri- gelmek”, “içeri- girmek”, “aç- mak” gibi eklerle anlam
          değişir. Almancada da <Term>önek</Term> anlamı dönüştürür:{" "}
          <em>rufen</em> (aramak) → <em>anrufen</em> (telefonla aramak),{" "}
          <em>stehen</em> (durmak) → <em>aufstehen</em> (ayağa kalkmak).
          Ayrılabilen fiiller günlük cümlede öneklerini çoğu zaman cümlenin
          sonuna gönderir; yan cümlede ise birleşik kalır.
        </p>
      </Explain>

      <Sub title="Ayrılabilen Önekler (Trennbare Präfixe)" />
      <Explain
        title="Cümlede nasıl görünür?"
        lead="Ana cümlede çekimli fiil ortada, önek sonda. Yan cümlede birleşik."
      >
        <ol className="compact-list">
          <li>
            Özne + <Term>fiil kökü</Term> (çekimli) + diğer ögeler +{" "}
            <Term>önek</Term> (sonda). Örnek:{" "}
            <em>
              Ich <u>rufe</u> dich später <u>an</u>.
            </em>
          </li>
          <li>
            Soru: Çekimli kısım başa gelir, önek yine sonda kalır.{" "}
            <em>
              Rufst du mich heute <u>an</u>?
            </em>
          </li>
          <li>
            Yan cümlede birleşik kalır:{" "}
            <em>
              …, weil er früh <u>aufsteht</u>.
            </em>
          </li>
        </ol>
      </Explain>

      <MiniTable
        head={[
          "Önek (ayrılabilen)",
          "Ana anlam",
          "Örnek fiil",
          "Örnek cümle",
          "Açıklama + Çeviri",
        ]}
        rows={[
          [
            "an-",
            "başlatma/temas",
            "anrufen",
            "Ich rufe dich später <b>an</b>.",
            "<em>TR:</em> an- çoğu zaman bir eylemi <b>başlatmayı</b> ya da biriyle <b>teması</b> gösterir (telefon etmek gibi).<br/><em>DE:</em> an- zeigt oft den <b>Beginn</b> einer Handlung oder den <b>Kontakt</b> (z. B. telefonieren).",
          ],
          [
            "auf-",
            "yukarı/açma",
            "aufstehen / aufmachen",
            "Er steht um 6 Uhr <b>auf</b>.",
            "<em>TR:</em> auf- <b>yukarı</b> yönlü hareketi veya bir şeyi <b>açmayı</b> anlatır.<br/><em>DE:</em> auf- drückt eine <b>Aufwärtsbewegung</b> oder das <b>Öffnen</b> aus.",
          ],
          [
            "ein-",
            "içeri/başlat",
            "einladen / einsteigen",
            "Sie lädt uns zum Essen <b>ein</b>.",
            "<em>TR:</em> ein- <b>içeri</b> hareket ya da bir şeyi <b>başlatma</b> anlamı verir.<br/><em>DE:</em> ein- bedeutet oft <b>hinein</b> oder etwas <b>beginnen</b>.",
          ],
          [
            "mit-",
            "birlikte",
            "mitbringen / mitkommen",
            "Bring bitte Brot <b>mit</b>.",
            "<em>TR:</em> mit- bir işi <b>birlikte</b> yapmayı veya yanında getirmeyi gösterir.<br/><em>DE:</em> mit- zeigt <b>Gemeinsamkeit</b> oder das <b>Mitbringen</b>.",
          ],
          [
            "zurück-",
            "geri",
            "zurückkommen",
            "Ich komme morgen <b>zurück</b>.",
            "<em>TR:</em> zurück- <b>geri dönmeyi</b> veya geri vermeyi anlatır.<br/><em>DE:</em> zurück- bedeutet <b>zurückkehren</b> oder <b>zurückgeben</b>.",
          ],
          [
            "zu-",
            "kapatma/yaklaşma",
            "zumachen / zuhören",
            "Bitte mach das Fenster <b>zu</b>.",
            "<em>TR:</em> zu- <b>kapatma</b>yı ya da birine dikkatle <b>yakınlaşarak</b> dinlemeyi anlatır.<br/><em>DE:</em> zu- steht für <b>schließen</b> oder <b>aufmerksam zuwenden</b> (zuhören).",
          ],
          [
            "aus-",
            "dışarı/kapama",
            "ausgehen / ausmachen",
            "Wir gehen heute <b>aus</b>.",
            "<em>TR:</em> aus- <b>dışarı çıkma</b>yı ya da bir şeyi <b>kapamayı</b> ifade eder.<br/><em>DE:</em> aus- bedeutet <b>hinausgehen</b> oder <b>ausschalten</b>.",
          ],
          [
            "vor-",
            "öne/önceden",
            "vorbereiten",
            "Ich bereite das Essen <b>vor</b>.",
            "<em>TR:</em> vor- bir şeyi <b>önden/önceden</b> yapmayı, hazırlamayı anlatır.<br/><em>DE:</em> vor- drückt <b>Voraus</b>-Handeln, <b>Vorbereitung</b> aus.",
          ],
          [
            "nach-",
            "takip/sonra",
            "nachfragen",
            "Ich frage im Büro <b>nach</b>.",
            "<em>TR:</em> nach- <b>ardından sorma/araştırma</b> veya <b>takip</b> anlamı katar.<br/><em>DE:</em> nach- steht für <b>nachfragen</b>, <b>nachgehen</b>.",
          ],
        ]}
      />

      <Sub title="Ayrılmayan Önekler (Untrennbare Präfixe)" />
      <Explain
        title="Cümlede nasıl görünür?"
        lead="Önek fiile yapışık kalır; hem ana cümlede hem yan cümlede birleşik yazılır."
      >
        <p>
          <em>
            Ich <u>verstehe</u> dich nicht.
          </em>{" "}
          /{" "}
          <em>
            …, weil ich dich nicht <u>verstehe</u>.
          </em>{" "}
          — Önek ayrılmaz.
        </p>
      </Explain>

      <MiniTable
        head={[
          "Önek (ayrılmayan)",
          "Ana anlam",
          "Örnek fiil",
          "Örnek cümle",
          "Açıklama + Çeviri",
        ]}
        rows={[
          [
            "be-",
            "nesneye yöneltme",
            "besuchen",
            "Wir <b>besuchen</b> unsere Oma.",
            "<em>TR:</em> be- fiili bir <b>nesneye yöneltir</b> (çoğu zaman -i hali).<br/><em>DE:</em> be- richtet die Handlung <b>auf ein Objekt</b> (transitiv).",
          ],
          [
            "ver-",
            "değişim/sonuç",
            "verstehen / verkaufen",
            "Ich <b>verstehe</b> dich.",
            "<em>TR:</em> ver- sıkça bir <b>değişim/sonuç</b> anlamı katar; bazen ‘yanlış’ı da ifade eder (misslingen ≈ verfehlen türleriyle karşılaştır).<br/><em>DE:</em> ver- trägt oft <b>Veränderung/Resultat</b>, teils auch ‘falsch’. ",
          ],
          [
            "er-",
            "başarma/sonuç",
            "erklären / erreichen",
            "Er <b>erklärt</b> das Problem.",
            "<em>TR:</em> er- çoğu zaman bir <b>sonuca ulaşmayı</b> vurgular.<br/><em>DE:</em> er- betont häufig das <b>Erreichen</b> eines Ergebnisses.",
          ],
          [
            "zer-",
            "parçalama",
            "zerbrechen",
            "Das Glas ist <b>zerbrochen</b>.",
            "<em>TR:</em> zer- <b>parçalara ayırma/kırma</b> anlamı taşır.<br/><em>DE:</em> zer- bedeutet <b>in Stücke</b> gehen/machen.",
          ],
          [
            "ent-",
            "uzaklaştırma/çıkarma",
            "entfernen / entdecken",
            "Sie <b>entdeckt</b> einen Fehler.",
            "<em>TR:</em> ent- genellikle bir şeyden <b>uzaklaştırma/çıkarma</b> veya <b>ortaya çıkarma/keşfetme</b> anlamı verir.<br/><em>DE:</em> ent- steht für <b>entfernen</b> oder <b>entdecken</b> (zum Vorschein bringen).",
          ],
          [
            "miss-",
            "yanlış/eksik",
            "missverstehen",
            "Ich habe dich <b>missverstanden</b>.",
            "<em>TR:</em> miss- <b>yanlış/eksik</b> yapmayı anlatır.<br/><em>DE:</em> miss- drückt ein <b>Fehl</b>verhalten aus.",
          ],
          [
            "emp-",
            "alma/başlatma",
            "empfehlen",
            "Ich <b>empfehle</b> dieses Buch.",
            "<em>TR:</em> emp- bazen <b>başlatılan alma/verme</b> yönü hissi taşır (tavsiye ‘birine yöneltme’).<br/><em>DE:</em> emp- hat oft ein Gefühl der <b>Zuwendung</b> (empfehlen).",
          ],
          [
            "ge-",
            "sabit (anlama bağlı)",
            "gehören / gefallen",
            "Das <b>gehört</b> mir.",
            "<em>TR:</em> ge- bazı fiillerde <b>sabit</b> önek; anlam fiile göre değişir.<br/><em>DE:</em> ge- ist bei manchen Verben ein <b>festes Präfix</b>.",
          ],
        ]}
      />

      <Sub title="Perfekt Zamanı: Biçim ve Örnekler (Perfekt – Bildung)" />
      <Explain
        title="Ne zaman ‘ge’ gelir, ne zaman gelmez?"
        lead="Ayrılabilen: önek + ge + kök + t/en. Ayrılmayan: genelde ‘ge’ yok. -ieren’de de ‘ge’ yok."
      >
        <p>
          <strong>Ayrılabilen:</strong>{" "}
          <code>
            auf-räumen → auf<b>ge</b>räumt
          </code>
          ,{" "}
          <code>
            an-rufen → an<b>ge</b>rufen
          </code>{" "}
          • <strong>Ayrılmayan:</strong> <code>besuchen → besucht</code>,{" "}
          <code>erklären → erklärt</code> • <strong>-ieren:</strong>{" "}
          <code>studieren → studiert</code>
        </p>
      </Explain>

      <MiniTable
        head={["Fiil", "Perfekt biçimi", "Örnek cümle", "Açıklama + Çeviri"]}
        rows={[
          [
            "aufräumen",
            "hat aufgeräumt",
            "Ich habe mein Zimmer <b>aufgeräumt</b>.",
            "<em>TR:</em> Ayrılabilen: önek + <b>ge</b> + kök + t. Tamamlanmış eylem.<br/><em>DE:</em> Trennbar: Präfix + <b>ge</b> + Stamm + t — vollendete Handlung.",
          ],
          [
            "anrufen",
            "hat angerufen",
            "Er hat mich gestern <b>angerufen</b>.",
            "<em>TR:</em> Telefonla aradı; önek ‘an’ içeri <b>ge</b> alır.<br/><em>DE:</em> Telefonierte; das Präfix steht mit <b>ge</b> im Partizip II.",
          ],
          [
            "besuchen",
            "hat besucht",
            "Wir haben unsere Oma <b>besucht</b>.",
            "<em>TR:</em> Ayrılmayan: <b>ge</b> yok; ‘besucht’.<br/><em>DE:</em> Untrennbar: kein <b>ge</b>; ‘besucht’.",
          ],
          [
            "erklären",
            "hat erklärt",
            "Sie hat alles gut <b>erklärt</b>.",
            "<em>TR:</em> Ayrılmayan: <b>ge</b> yok; ‘erklärt’.<br/><em>DE:</em> Untrennbar: kein <b>ge</b>; ‘erklärt’.",
          ],
          [
            "studieren",
            "hat studiert",
            "Mein Bruder hat in Köln <b>studiert</b>.",
            "<em>TR:</em> -ieren’de <b>ge</b> gelmez; ‘studiert’.<br/><em>DE:</em> Bei -ieren kein <b>ge</b>; ‘studiert’.",
          ],
        ]}
      />

      <Sub title="Telaffuz İpuçları (Aussprache – TR odaklı)" />
      <Callout type="info" title="Vurgu iyi bir ipucudur">
        <ul className="compact-list">
          <li>
            Ayrılabilen fiillerde vurgu çoğu zaman önektedir:{" "}
            <em>
              <Key>AN</Key>rufen, <Key>AUF</Key>stehen
            </em>
            .
          </li>
          <li>
            Ayrılmayanlarda vurgu genellikle köktedir:{" "}
            <em>
              ver<strong>STE</strong>hen
            </em>
            ,{" "}
            <em>
              be<strong>SU</strong>chen
            </em>
            .
          </li>
          <li>
            Yaklaşık TR okunuş: <em>anrufen</em> ≈ “an-ru:fn”,{" "}
            <em>aufstehen</em> ≈ “auf-şte:en”, <em>verstehen</em> ≈
            “fer-şte:en”.
          </li>
        </ul>
      </Callout>

      <Sub title="Örnekler (Beispiele)" />
      <Examples
        items={[
          {
            en: "Ich rufe dich heute Abend an.",
            tr: "Seni bu akşam ararım (telefon ederim).",
            pron: "ih rufe diH hoyte abnt an",
          },
          {
            en: "Er steht jeden Morgen um 6 Uhr auf.",
            tr: "Her sabah saat 6’da kalkar.",
            pron: "ea ştet yedn morgen um zeks ua auf",
          },
          {
            en: "Wir haben unsere Freunde besucht.",
            tr: "Arkadaşlarımızı ziyaret ettik.",
            pron: "via haben unzre froynde bezuHt",
          },
          {
            en: "Sie hat das Problem gut erklärt.",
            tr: "Problemi iyi açıkladı.",
            pron: "zi hat das problem gut erkleyat",
          },
        ]}
      />

      <Sub title="Boşluk Doldurma (Lückentext – Präsens ve Perfekt)" />
      <ExerciseFill
        title="Ayrılabilen mi, ayrılmayan mı? Doğru biçimi yaz"
        items={[
          {
            id: "si1",
            before: "Ich ____ dich später ____ (anrufen).",
            after: "",
            answers: ["rufe an"],
          },
          {
            id: "si2",
            before: "Er ____ jeden Tag um 6 Uhr ____ (aufstehen).",
            after: "",
            answers: ["steht auf"],
          },
          {
            id: "si3",
            before:
              "Wir ____ unsere Lehrerin gestern ____ (besuchen, Perfekt).",
            after: "",
            answers: ["haben besucht"],
          },
          {
            id: "si4",
            before: "Sie ____ das Thema gut ____ (erklären, Perfekt).",
            after: "",
            answers: ["hat erklärt"],
          },
          {
            id: "si5",
            before: "Kannst du das Fenster ____ (zumachen)? Bitte jetzt ____!",
            after: "",
            answers: ["zumachen", "mach zu"],
          },
          {
            id: "si6",
            before: "Er ____ mich gestern ____ (anrufen, Perfekt).",
            after: "",
            answers: ["hat angerufen"],
          },
          {
            id: "si7",
            before: "Ich ____ heute Abend ____ (mitkommen)?",
            after: "",
            answers: ["komme mit", "darf mitkommen"],
          },
          {
            id: "si8",
            before: "Wir ____ das Zimmer gestern ____ (aufräumen, Perfekt).",
            after: "",
            answers: ["haben aufgeräumt"],
          },
        ]}
      />

      <Sub title="Seçmeli Sorular (Multiple Choice – dikkat dağıtıcılarla)" />
      <ExerciseMC
        title="Doğru cümleyi seç"
        items={[
          {
            q: "Telefonla aramak istiyorum: hangisi doğru?",
            choices: [
              "Ich anrufe dich später.",
              "Ich rufe dich später an.",
              "Ich rufe an dich später.",
            ],
            correctIndex: 1,
            explain:
              "Ayrılabilen fiillerde çekimli kısım ortada, önek sonda: rufe … an.",
          },
          {
            q: "Aşağıdakilerden hangisi ayrılmayan önektir ve birleşik kalır?",
            choices: ["ver-", "an-", "auf-"],
            correctIndex: 0,
            explain: "ver- ayrılmayan; an-, auf- ayrılabilen.",
          },
          {
            q: "Perfekt’te doğru olan hangisi?",
            choices: [
              "Ich habe das Zimmer geaufräumt.",
              "Ich habe das Zimmer aufgeräumt.",
              "Ich habe das Zimmer aufräumt.",
            ],
            correctIndex: 1,
            explain: "Ayrılabilen: önek + ge + kök + t/en → auf<b>ge</b>räumt.",
          },
          {
            q: "Doğru sıralama?",
            choices: [
              "Er macht die Tür zu.",
              "Er zu macht die Tür.",
              "Er macht zu die Tür.",
            ],
            correctIndex: 0,
            explain:
              "Çekimli kısım ortada, önek sonda: macht … zu. Nesne (die Tür) fiil ve önek arasına gelir.",
          },
          {
            q: "Cümleyi tamamla: “Bitte ___ das Fenster ___!”",
            choices: ["mach … zu", "zu … mach", "machst … zu"],
            correctIndex: 0,
            explain: "Emir kipi: du-kök + önek sonda → mach … zu!",
          },
        ]}
      />

      <Sub title="Sık Hatalar (Häufige Fehler) – Kısa Rehber" />
      <Callout type="error" title="Dikkat et">
        <ul className="compact-list">
          <li>
            Ayrılabilen fiillerde önek yanlış yere yazılıyor:
            <em> Ich anrufe dich</em> ❌ yerine{" "}
            <em>
              Ich rufe dich <strong>an</strong>
            </em>{" "}
            ✅.
          </li>
          <li>
            Perfekt’te <code>ge</code> konumu: <em>angerufen, aufgeräumt</em>;{" "}
            <em>geanrufen</em> ❌ değildir.
          </li>
          <li>
            Ayrılmayan öneklerle <code>ge</code> genelde gelmez:{" "}
            <em>verstehen → verstanden</em> ✅, <em>geverstanden</em> ❌.
          </li>
        </ul>
      </Callout>

      <Sub title="Mini Yazma (40–80 kelime)" />
      <Callout type="tip" title="Günlük rutin + dün/yarın planı">
        <p>
          En az <strong>3 ayrılabilen</strong> ve <strong>2 ayrılmayan</strong>{" "}
          fiil kullan. Bir cümleyi <strong>Perfekt</strong> ile, bir cümleyi{" "}
          <strong>yarın</strong> planıyla yaz. Örn.:{" "}
          <em>
            Ich stehe früh auf. Gestern habe ich mein Zimmer aufgeräumt. Morgen
            rufe ich meine Oma an. Ich besuche sie am Wochenende.
          </em>
        </p>
      </Callout>
    </>
  );
}

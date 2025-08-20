// src/pages/Grammar/sections/ger/a2/AdjectiveEndings.jsx
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

export default function AdjectiveEndings() {
  return (
    <>
      <div className="rule-box">
        <strong>Sıfat Ekleri (Adjektivendungen)</strong>: Sıfatın ismin önünde
        kullanıldığı durumlarda sonuna küçük ekler gelir. Bu ekler, önce{" "}
        <Key>hangi artikel türü</Key> kullanıldığına ve sonra{" "}
        <Key>hangi hâl (Nominativ, Akkusativ, Dativ)</Key> olduğuna göre
        belirlenir.
      </div>

      <Explain
        title="Neden sıfat eki var? (Warum Endungen?)"
        lead="Almanca’da isimlerin cinsiyeti ve hâli önemlidir. Bazen bu bilgiyi artikel verir, bazen de sıfat üstlenir."
      >
        <p>
          Türkçede “<em>yeni kitap</em>” deriz; ekler fiilde veya isimde
          görünür. Almanca’da ise “
          <em>
            das neu<strong>e</strong> Buch
          </em>
          ” gibi sıfat da küçük bir ek alır. Amaç, dinleyenin{" "}
          <Term>cinsiyeti</Term> (eril/dişil/nötr) ve <Term>çoğul</Term> ile
          <Term>hâli</Term> (Nominativ = özne, Akkusativ = çoğu nesne, Dativ =
          -e/-a hâli) hemen anlamasını sağlamaktır.
        </p>
        <p>
          Bu yüzden önce şu soruları sor: Hangi <Key>artikel ailesi</Key> var?{" "}
          <Term>der/die/das</Term> mı,
          <Term>ein/kein/benim-senin</Term> gibi mi, yoksa{" "}
          <Term>artikelsiz</Term> mi? Sonra hangi <Key>hâl</Key> kullanılıyor:
          özne mi, nesne mi, -e/-a mı?
        </p>
      </Explain>

      <Sub title="Üç paket yaklaşımı (Der-Grubu, Ein-Grubu, Artikelsiz)" />
      <Explain
        title="Genel fikir: güçlü–zayıf paylaşım"
        lead="Der/die/das gibi belirli artikel bilgiyi zaten taşır → sıfat çoğu zaman <b>-e/-en</b>. Artikelsizse bilgiyi sıfat taşır → daha ‘güçlü’ ekler."
      >
        <ul className="compact-list">
          <li>
            <strong>Der-Grubu</strong> (belirli artikel: der/die/das, bu/şu gibi
            işaretliler): Artikel zaten hangi hâl olduğunu gösterir. Sıfat çoğu
            yerde <Term>-e</Term> ya da <Term>-en</Term> alır.
          </li>
          <li>
            <strong>Ein-Grubu</strong> (ein/kein ve iyelik: mein/dein/sein…):
            Bazı bilgiler eksik olabilir. Sıfat bu boşluğu kısmen doldurur.
          </li>
          <li>
            <strong>Artikelsiz</strong> (hiç artikel yok): Bilgiyi sıfat taşır.
            Bu yüzden daha “güçlü” ekler görürsün:{" "}
            <em>neuer Mann, neues Auto, neuen Mann, neuer Frau…</em>
          </li>
        </ul>
        <Callout type="tip" title="Hızlı anahtar (tekil için pratik ipucu)">
          <p>
            Der-Grubu tekilde: Nominativde genelde <Term>-e</Term>, diğerlerinde
            sıkça <Term>-en</Term>. Ein-Grubu tekilde: Maskulin Akkusativ ve tüm
            Dativlerde <Term>-en</Term> çok görünür. Artikelsiz: Sıfat ekleri
            daha belirgindir; tabloya bakarak pekiştir.
          </p>
        </Callout>
      </Explain>

      <Sub title="Nominativ (Özne) – ‘Kim? Ne?’" />
      <Explain
        title="Özne olduğunda tipik kalıplar"
        lead="Der-Grubu: çoğu tekil durumda sıfat <b>-e</b>. Ein-Grubu: artikel eksik bilgiyi kısmen tamamlar. Artikelsiz: bilgiyi sıfat taşır."
      >
        <p>
          Özne olduğunda basit düşün:{" "}
          <em>der neue Mann, die neue Frau, das neue Kind</em>. Çoğulda hem
          Der-Grubu hem de Ein-Grubu:{" "}
          <em>
            die neu<strong>en</strong> Leute
          </em>
          . Artikelsiz özne:{" "}
          <em>neuer Mann, neue Frau, neues Kind, neue Leute</em>.
        </p>
      </Explain>
      <MiniTable
        head={["Kalıp", "Maskulin", "Feminin", "Neutrum", "Plural"]}
        rows={[
          [
            "Der-Grubu",
            "der neue Mann",
            "die neue Frau",
            "das neue Kind",
            "die neuen Leute",
          ],
          [
            "Ein-Grubu",
            "ein neuer Mann",
            "eine neue Frau",
            "ein neues Kind",
            "keine neuen Leute",
          ],
          ["Artikelsiz", "neuer Mann", "neue Frau", "neues Kind", "neue Leute"],
        ]}
      />

      <Sub title="Akkusativ (Nesne) – ‘Kimi? Neyi?’" />
      <Explain
        title="Nesne olduğunda en çok maskeuline dikkat"
        lead="Maskulin Akkusativ belirgindir: der → den; ein → einen; sıfat çoğu zaman <b>-en</b> olur."
      >
        <p>
          <em>
            Ich sehe{" "}
            <u>
              den neu<strong>en</strong> Mann
            </u>
            .
          </em>
          <br />
          <em>
            Ich habe{" "}
            <u>
              einen neu<strong>en</strong> Laptop
            </u>
            .
          </em>
          <br />
          Feminin ve Neutrumda şekil genelde Nominative benzer kalır. Çoğulda{" "}
          <em>
            die neu<strong>en</strong> …
          </em>
          . Artikelsiz Akkusativ maskulin: <em>neuen Mann</em>.
        </p>
      </Explain>
      <MiniTable
        head={["Kalıp", "Maskulin", "Feminin", "Neutrum", "Plural"]}
        rows={[
          [
            "Der-Grubu",
            "den neuen Mann",
            "die neue Frau",
            "das neue Kind",
            "die neuen Leute",
          ],
          [
            "Ein-Grubu",
            "einen neuen Mann",
            "eine neue Frau",
            "ein neues Kind",
            "keine neuen Leute",
          ],
          ["Artikelsiz", "neuen Mann", "neue Frau", "neues Kind", "neue Leute"],
        ]}
      />

      <Sub title="Dativ (Yönelme/‘-e/-a’) – ‘Kime? Neye? Nerede?’" />
      <Explain
        title="Dativte çoğu yerde sıfat <b>-en</b>"
        lead="Der-Grubu: dem/der/dem + <b>neuen</b> …; Plural: den + <b>neuen</b> Leuten. Ein-Grubu da benzer. Artikelsiz: <b>neuem/neuer/neuem/neuen</b>."
      >
        <p>
          <em>
            mit{" "}
            <u>
              dem neu<strong>en</strong> Freund
            </u>
          </em>
          ,
          <em>
            {" "}
            bei{" "}
            <u>
              der neu<strong>en</strong> Kollegin
            </u>
          </em>
          ,
          <em>
            {" "}
            mit{" "}
            <u>
              dem neu<strong>en</strong> Auto
            </u>
          </em>
          ,
          <em>
            {" "}
            mit{" "}
            <u>
              den neu<strong>en</strong> Leuten
            </u>
          </em>
          . Artikelsiz:{" "}
          <em>
            mit <u>neuem</u> Freund, mit <u>neuer</u> Kollegin
          </em>
          .
        </p>
      </Explain>
      <MiniTable
        head={["Kalıp", "Maskulin", "Feminin", "Neutrum", "Plural"]}
        rows={[
          [
            "Der-Grubu",
            "dem neuen Mann",
            "der neuen Frau",
            "dem neuen Kind",
            "den neuen Leuten",
          ],
          [
            "Ein-Grubu",
            "einem neuen Mann",
            "einer neuen Frau",
            "einem neuen Kind",
            "keinen neuen Leuten",
          ],
          [
            "Artikelsiz",
            "neuem Mann",
            "neuer Frau",
            "neuem Kind",
            "neuen Leuten",
          ],
        ]}
      />

      <Sub title="Örnekler (Beispiele – kısa bağlamla)" />
      <Examples
        items={[
          {
            en: "Der neue Lehrer ist freundlich.",
            tr: "Yeni öğretmen (erkek) arkadaş canlısı.",
            pron: "dea noyə lea-ra ist froyntliH",
          },
          {
            en: "Ich nehme den neuen Bus.",
            tr: "Yeni otobüsü alıyorum (ona biniyorum).",
            pron: "iH neme den noyən bus",
          },
          {
            en: "Sie spricht mit dem neuen Chef.",
            tr: "Yeni müdürle konuşuyor.",
            pron: "zi şpriHt mit dem noyən şef",
          },
          {
            en: "Wir suchen eine neue Wohnung.",
            tr: "Yeni bir daire arıyoruz.",
            pron: "via zuxən aynə noyə vo:nung",
          },
          {
            en: "Er arbeitet mit neuen Technologien.",
            tr: "Yeni teknolojilerle çalışıyor.",
            pron: "ea arbaytet mit noyən tek-nolo-gi:ən",
          },
        ]}
      />

      <Sub title="Telaffuz ipuçları (TR odaklı)" />
      <Explain
        title="Kısa yönlendirmeler"
        lead="Çoğu ek zayıf hece gibi okunur; vurguyu kelimenin kökünde tut."
      >
        <ul className="compact-list">
          <li>
            <Term>-en</Term>, <Term>-em</Term>, <Term>-er</Term> ekleri kısa ve
            hızlı: <em>noyən, noyəm, noyə</em> gibi.
          </li>
          <li>
            <Term>eu</Term> “oy” gibi: <em>neu → noy</em>; <em>neue → noyə</em>.
          </li>
          <li>
            Uzun ünlülerde süreyı koru: <em>Frau</em> “frau”, <em>Auto</em>{" "}
            “auto”.
          </li>
        </ul>
      </Explain>

      <Sub title="Boşluk doldurma (doğru kalıbı seç)" />
      <ExerciseFill
        title="Der/Ein/Artikelsiz + sıfat eki"
        items={[
          {
            id: "ae1",
            before:
              "Ich suche ___ ___ Wohnung. (neu, Nominativ/Akkusativ – feminin, Ein-Grubu)",
            after: "",
            answers: ["eine neue"],
            answersOptions: ["eine neue", "ein neues", "einen neuen"],
          },
          {
            id: "ae2",
            before:
              "Wir helfen ___ ___ Nachbar. (freundlich, Dativ – maskulin, Der-Grubu)",
            after: "",
            answers: ["dem freundlichen"],
            answersOptions: [
              "dem freundliche",
              "dem freundlichen",
              "den freundlichen",
            ],
          },
          {
            id: "ae3",
            before:
              "Er hat ___ ___ Laptop gekauft. (teuer, Akkusativ – maskulin, Ein-Grubu)",
            after: "",
            answers: ["einen teuren"],
            answersOptions: ["ein teurer", "einen teuren", "einem teuren"],
          },
          {
            id: "ae4",
            before:
              "___ ___ Kinder spielen im Park. (klein, Nominativ – Plural, Der-Grubu)",
            after: "",
            answers: ["die kleinen"],
            answersOptions: ["die kleinen", "die kleine", "den kleinen"],
          },
          {
            id: "ae5",
            before:
              "Sie fährt mit ___ ___ Auto. (schnell, Dativ – Neutrum, Artikelsiz)",
            after: "",
            answers: ["schnellem"],
            answersOptions: ["schneller", "schnellem", "schnelles"],
          },
          {
            id: "ae6",
            before:
              "Ich treffe ___ ___ Kollegen. (neu, Akkusativ – maskulin, Der-Grubu)",
            after: "",
            answers: ["den neuen"],
            answersOptions: ["der neue", "den neuen", "dem neuen"],
          },
          {
            id: "ae7",
            before:
              "Er spricht mit ___ ___ Kollegin. (nett, Dativ – feminin, Ein-Grubu)",
            after: "",
            answers: ["einer netten"],
            answersOptions: ["eine nette", "einer netten", "einem netten"],
          },
          {
            id: "ae8",
            before:
              "___ ___ Buch liegt auf dem Tisch. (interessant, Nominativ – Neutrum, Artikelsiz)",
            after: "",
            answers: ["interessantes"],
            answersOptions: ["interessantes", "interessantem", "interessanten"],
          },
        ]}
      />

      <Sub title="Çoktan seçmeli – anlam ve kalıp" />
      <ExerciseMC
        title="Hızlı kontrol"
        items={[
          {
            q: "Aşağıdakilerden hangisi doğru? (Akkusativ, maskulin, Der-Grubu)",
            choices: ["der neue Mann", "den neuen Mann", "dem neuen Mann"],
            correctIndex: 1,
            explain:
              "Akkusativ maskulin: der → den, sıfat genelde -en: den neuen Mann.",
          },
          {
            q: "Ein-Grubu Dativ maskulin doğru olan:",
            choices: [
              "einem neuen Freund",
              "einen neuen Freund",
              "ein neuer Freund",
            ],
            correctIndex: 0,
            explain: "Dativ maskulin: einem neuen Freund.",
          },
          {
            q: "Artikelsiz Nominativ maskulin:",
            choices: ["neuer Lehrer", "neuen Lehrer", "neuem Lehrer"],
            correctIndex: 0,
            explain: "Artikelsiz Nominativ maskulin: neuer Lehrer.",
          },
          {
            q: "Plural Dativ Der-Grubu doğru kullanım:",
            choices: ["den neuen Leuten", "die neuen Leuten", "den neue Leute"],
            correctIndex: 0,
            explain:
              "Dativ plural: den + -n çoğu isimde; sıfat -en: den neuen Leuten.",
          },
          {
            q: "Feminin Nominativ Ein-Grubu:",
            choices: ["eine neue Frau", "einen neuen Frau", "einem neuen Frau"],
            correctIndex: 0,
            explain: "Nominativ feminin: eine neue Frau.",
          },
        ]}
      />

      <Sub title="Mini yazma (40–80 kelime) – ev/iş ilanı" />
      <Callout type="tip" title="Sıfat eklerini zorunlu kullan">
        <p>
          Küçük bir ilan yaz: “Düzgün bir iş arıyorum” veya “Sessiz bir daire
          arıyorum” gibi. En az 6 kez isimden önce sıfat kullan:{" "}
          <em>
            eine ruhige Wohnung, ein modernes Büro, nette Kollegen, flexible
            Arbeitszeiten
          </em>{" "}
          vb.
        </p>
      </Callout>
    </>
  );
}

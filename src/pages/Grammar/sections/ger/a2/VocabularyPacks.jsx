// src/pages/Grammar/sections/ger/a2/VocabularyPacks.jsx
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

export default function VocabularyPacks() {
  return (
    <>
      <div className="rule-box">
        <strong>Konu Sözlükleri (Wortschatzfelder)</strong>: Her gün kullanılan
        alanlara göre kelime öğren. Her kelimeyi <Key>artikel</Key>{" "}
        (der/die/das) ve
        <Key>çoğul</Key> ile birlikte kaydet. Mümkünse bir <Key>kalıp</Key> ile
        öğren:
        <em> eine Wohnung mieten</em>, <em>zum Arzt gehen</em>,{" "}
        <em>mit der Bahn fahren</em>.
      </div>

      <Explain
        title="Kelimeleri nasıl kalıcı öğrenirim?"
        lead="Üç adım: (1) Kelime + artikel + çoğul, (2) küçük bir cümle veya hazır kalıp, (3) duyma ve söyleme pratiği."
      >
        <ol className="compact-list">
          <li>
            <strong>Artikel ve çoğul ile kaydet:</strong>{" "}
            <em>die Wohnung – die Wohnungen</em>,{" "}
            <em>der Termin – die Termine</em>, <em>das Rezept – die Rezepte</em>
            .
          </li>
          <li>
            <strong>Kalıpla öğren:</strong> Kelimeyi tek başına değil, küçük bir
            kullanım kalıbıyla ezberle:{" "}
            <em>
              eine Wohnung <u>mieten</u>
            </em>
            ,{" "}
            <em>
              einen Termin <u>vereinbaren</u>
            </em>
            ,{" "}
            <em>
              ein Rezept <u>bekommen</u>
            </em>
            .
          </li>
          <li>
            <strong>Ses ve vurgu:</strong> Yaklaşık Türkçe okunuş ekle; yüksek
            sesle tekrarla. Örneğin <Term>ä</Term> çoğu zaman <Key>e</Key> gibi,{" "}
            <Term>ö</Term> ile <Term>ü</Term> Türkçedeki <Key>ö</Key>/
            <Key>ü</Key>’ye yakın, <Term>eu/äu</Term> genelde <Key>oy</Key> gibi
            duyulur (<em>neun → noy(n)</em>, <em>Häuser → hoyza</em>).
          </li>
        </ol>
      </Explain>

      <Sub title="Ev & Yaşam (Home & Living)" />
      <Explain
        title="Günlük yaşamda en çok geçen isimleri kalıpla öğren"
        lead="Kira, oda, mobilya, komşular ve ev işleri gibi konular."
      >
        <p>
          Bu alanda <strong>ev kiralama</strong>, <strong>taşınma</strong> ve{" "}
          <strong>evde yapılacak işler</strong> öne çıkar. Bir isim gördüğünde
          onu bir fiille birleştir: <em>die Miete zahlen</em> (kira ödemek),{" "}
          <em>die Waschmaschine reparieren</em> (çamaşır makinesini tamir
          etmek).
        </p>
      </Explain>
      <MiniTable
        head={["Kelime (Artikel ile)", "Çoğul", "Türkçe", "Not / Okunuş"]}
        rows={[
          ["die Wohnung", "die Wohnungen", "daire", "vo:nung"],
          ["die Miete", "die Mieten", "kira", "mi:te"],
          [
            "der Vermieter / die Vermieterin",
            "die Vermieter / die Vermieterinnen",
            "ev sahibi",
            "fe:a-mi:ta",
          ],
          ["der Vertrag", "die Verträge", "sözleşme", "fet-rage → fet-rége"],
          ["das Möbel", "die Möbel", "mobilya", "möbıl"],
          [
            "der Nachbar / die Nachbarin",
            "die Nachbarn / die Nachbarinnen",
            "komşu",
            "nahh-bar",
          ],
        ]}
      />
      <Examples
        items={[
          {
            en: "Ich möchte eine Wohnung mieten.",
            tr: "Bir daire kiralamak istiyorum.",
            pron: "ih möhşte ayne vo:nung mi:tn",
          },
          {
            en: "Die Miete ist hoch.",
            tr: "Kira yüksek.",
            pron: "di mi:te ist hoh",
          },
        ]}
      />

      <Sub title="İş & Meslekler (Work & Jobs)" />
      <Explain
        title="İş arama, sözleşme ve işyeri kalıpları"
        lead="İlan okuma, başvuru yapma ve işyerinde temel hareketler."
      >
        <p>
          <em>eine Stelle suchen</em> (iş aramak),{" "}
          <em>einen Vertrag unterschreiben</em> (sözleşme imzalamak),
          <em>Überstunden machen</em> (fazla mesai yapmak) gibi kalıpları
          birlikte söyle.
        </p>
      </Explain>
      <MiniTable
        head={["Kelime (Artikel ile)", "Çoğul", "Türkçe", "Not / Okunuş"]}
        rows={[
          ["die Stelle", "die Stellen", "iş pozisyonu", "ştele"],
          ["die Bewerbung", "die Bewerbungen", "başvuru", "be-vér-bung"],
          ["der Vertrag", "die Verträge", "sözleşme", "fet-rége"],
          [
            "die Arbeitszeit",
            "die Arbeitszeiten",
            "çalışma zamanı",
            "arbayts-tsayt",
          ],
          ["das Gehalt", "die Gehälter", "maaş", "ge-halt → ge-helta"],
          [
            "der Kollege / die Kollegin",
            "die Kollegen / die Kolleginnen",
            "iş arkadaşı",
            "ko-legen / ko-legegin",
          ],
        ]}
      />
      <Examples
        items={[
          {
            en: "Ich schreibe eine Bewerbung.",
            tr: "Bir başvuru yazıyorum.",
            pron: "ih şraybə ayne be-vér-bung",
          },
          {
            en: "Mein Gehalt ist zufriedenstellend.",
            tr: "Maaşımdan memnunum.",
            pron: "mayn ge-halt ist tsu-fri:den-ştelend",
          },
        ]}
      />

      <Sub title="Sağlık & Vücut (Health & Body)" />
      <Explain
        title="Randevu alma, belirtileri anlatma, eczane"
        lead="Temel ihtiyaç: randevu, muayene, reçete ve ilaç isimleri."
      >
        <p>
          <em>einen Termin vereinbaren</em> (randevu ayarlamak),{" "}
          <em>Symptome beschreiben</em> (belirtileri anlatmak),{" "}
          <em>ein Rezept bekommen</em> (reçete almak) kalıplarını tekrarla.
        </p>
      </Explain>
      <MiniTable
        head={["Kelime (Artikel ile)", "Çoğul", "Türkçe", "Not / Okunuş"]}
        rows={[
          ["der Termin", "die Termine", "randevu", "te:r-mi:n"],
          ["der Schmerz", "die Schmerzen", "ağrı", "şmerts"],
          ["die Apotheke", "die Apotheken", "eczane", "apo-te:ke"],
          ["das Rezept", "die Rezepte", "reçete", "re-tsept"],
          ["die Tablette", "die Tabletten", "hap", "ta-blette"],
          ["die Untersuchung", "die Untersuchungen", "muayene", "unta-zu:hung"],
        ]}
      />
      <Examples
        items={[
          {
            en: "Ich brauche einen Termin beim Arzt.",
            tr: "Doktordan randevuya ihtiyacım var.",
            pron: "ih brauhe aynın te:rmi:n baym arts(t)",
          },
          {
            en: "Ich habe Kopfschmerzen.",
            tr: "Başım ağrıyor.",
            pron: "ih habe kopf-şmertsn",
          },
        ]}
      />

      <Sub title="Seyahat & Ulaşım (Travel & Transport)" />
      <Explain
        title="Bilet, rota, araçlar: tren, otobüs, uçak"
        lead="Sık kalıplar: bileti almak, aktarma yapmak, gecikmeyi sormak."
      >
        <p>
          <em>ein Ticket kaufen</em>, <em>mit der Bahn fahren</em>,{" "}
          <em>umsteigen</em> (aktarma yapmak), <em>Verspätung haben</em>{" "}
          (gecikme) gibi kalıpları gerçek cümlelerle söyle:{" "}
          <em>Der Zug hat Verspätung.</em>
        </p>
      </Explain>
      <MiniTable
        head={["Kelime (Artikel ile)", "Çoğul", "Türkçe", "Not / Okunuş"]}
        rows={[
          ["das Ticket", "die Tickets", "bilet", "tiket"],
          ["der Zug", "die Züge", "tren", "tsu:g → tsüge"],
          ["der Bus", "die Busse", "otobüs", "bus → busse"],
          [
            "der Fahrplan",
            "die Fahrpläne",
            "sefer planı",
            "far-plan → far-pléne",
          ],
          ["die Haltestelle", "die Haltestellen", "durak", "halte-ştele"],
          ["die Verspätung", "die Verspätungen", "gecikme", "fer-şpétung"],
        ]}
      />
      <Examples
        items={[
          {
            en: "Ich steige in Köln um.",
            tr: "Köln’de aktarma yapıyorum.",
            pron: "ih ştayge in köln um",
          },
          {
            en: "Der Zug hat Verspätung.",
            tr: "Tren gecikmeli.",
            pron: "dea tsu:g hat fer-şpétung",
          },
        ]}
      />

      <Sub title="Alışveriş & Hizmetler (Shopping & Services)" />
      <Explain
        title="Ürün sorma, iade, kargo ve banka"
        lead="Fiyat sormayı, iade etmeyi ve kargo süreçlerini kalıpla öğren."
      >
        <p>
          <em>Wie viel kostet …?</em> (ne kadar), <em>umtauschen</em>{" "}
          (değiştirmek),
          <em>zurückgeben</em> (iade etmek), <em>ein Paket schicken</em> (kargo
          göndermek) gibi kalıpları kısa diyaloglarla kullan.
        </p>
      </Explain>
      <MiniTable
        head={["Kelime (Artikel ile)", "Çoğul", "Türkçe", "Not / Okunuş"]}
        rows={[
          ["der Preis", "die Preise", "fiyat", "prayzə"],
          ["der Kassenbon", "die Kassenbons", "fiş", "kassen-bon"],
          ["die Quittung", "die Quittungen", "makbuz", "kvitung"],
          ["das Paket", "die Pakete", "koli, paket", "paketə"],
          ["die Bank", "die Banken", "banka", "bank"],
          ["die Karte", "die Karten", "kart", "karte"],
        ]}
      />
      <Examples
        items={[
          {
            en: "Ich möchte das umtauschen.",
            tr: "Bunu değiştirmek istiyorum.",
            pron: "ih möhşte das umtauşn",
          },
          {
            en: "Haben Sie eine Quittung?",
            tr: "Makbuzunuz var mı?",
            pron: "haben zi ayne kvitung",
          },
        ]}
      />

      <Sub title="Hızlı Alıştırmalar: Artikel + Çoğul + Kalıp" />
      <ExerciseFill
        title="Artikel ve doğru kalıbı tamamla"
        items={[
          {
            id: "vp1",
            before: "____ Wohnung – Ich möchte eine ____ mieten.",
            after: "",
            answers: ["die", "Wohnung"],
            hint: "Artikel: die; kalıp: eine Wohnung mieten",
          },
          {
            id: "vp2",
            before: "____ Termin – Ich brauche heute einen ____ beim Arzt.",
            after: "",
            answers: ["der", "Termin"],
            hint: "Artikel: der; kalıp: einen Termin vereinbaren",
          },
          {
            id: "vp3",
            before: "____ Zug – Der ____ hat Verspätung.",
            after: "",
            answers: ["der", "Zug"],
            hint: "Artikel: der; cümle: Der Zug hat Verspätung",
          },
          {
            id: "vp4",
            before: "____ Preis – Wie viel kostet der ____?",
            after: "",
            answers: ["der", "Preis"],
          },
        ]}
      />

      <Sub title="Mini Test (Seçmeli – çeldiricili)" />
      <ExerciseMC
        title="Konuya göre doğru kalıbı seç"
        items={[
          {
            q: "Ev kiralama bağlamında en doğal kalıp hangisi?",
            choices: [
              "eine Wohnung mieten",
              "eine Wohnung kaufen zurück",
              "eine Wohnung fahren",
            ],
            correctIndex: 0,
            explain: "Ev kiralama: eine Wohnung mieten.",
          },
          {
            q: "Doktor bağlamında uygun olan?",
            choices: [
              "einen Termin vereinbaren",
              "einen Termin fahren",
              "eine Termin kaufen",
            ],
            correctIndex: 0,
            explain: "Randevu ayarlamak: einen Termin vereinbaren.",
          },
          {
            q: "Ulaşım bağlamında doğru olan?",
            choices: [
              "mit der Bahn fahren",
              "mit der Bahn essen",
              "mit der Bahn kaufen",
            ],
            correctIndex: 0,
            explain: "Ulaşım: mit der Bahn fahren.",
          },
          {
            q: "Alışveriş bağlamı: iade etmek?",
            choices: ["zurückgeben", "umfahren", "aufstehen"],
            correctIndex: 0,
            explain: "İade: zurückgeben (geri vermek).",
          },
          {
            q: "Sağlık bağlamı: reçete?",
            choices: [
              "ein Rezept bekommen",
              "ein Rezept fahren",
              "ein Rezept spielen",
            ],
            correctIndex: 0,
            explain: "Reçete almak: ein Rezept bekommen.",
          },
        ]}
      />

      <Sub title="Kısa Yazma Görevi (40–80 kelime)" />
      <Callout type="tip" title="Mini yazı görevi">
        <p>
          Aşağıdaki başlıkta 40–80 kelimelik kısa bir paragraf yaz:{" "}
          <strong>“Yeni taşındığın evin ve mahallen hakkında bilgi ver”</strong>
          . Şu kelimelerden en az beşini kullan:{" "}
          <em>
            die Wohnung, die Miete, der Nachbar, der Vertrag, die Haltestelle,
            der Bus, das Möbel
          </em>
          .
        </p>
      </Callout>

      <Sub title="Dinleme/Okuma İpucu" />
      <Callout type="info" title="Kelimeleri kulakla hızlandır">
        <p>
          Aynı kategoriden 5–7 kelime seç, sesli oku, telefonuna kaydet, gün
          içinde dinle. Her kelimeyle <strong>bir cümle</strong> kur ve yüksek
          sesle tekrar et. Böylece hem telaffuz hem kullanım aynı anda pekişir.
        </p>
      </Callout>
    </>
  );
}

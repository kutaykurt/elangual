import React from "react";
import {
  Key,
  Term,
  Formula,
  Examples,
  Callout,
  ExerciseMC,
  MiniTable,
  Sub,
} from "../../../blocks";
import Explain from "../../../../../components/Explain";

export default function Wechselpreps() {
  return (
    <>
      <div className="rule-box">
        <strong>Yön mü, yoksa konum mu? (Wechselpräpositionen)</strong>:
        <Key>in, an, auf, unter, über, vor, hinter, neben, zwischen</Key>. Eğer
        cümlede <strong>hareket</strong> ve <strong>varış</strong> varsa “
        <Term>nereye?</Term>” sor ve
        <Key>Akkusativ</Key> kullan. Sadece <strong>konum</strong> anlatılıyorsa
        “<Term>nerede?</Term>” sor ve
        <Key>Dativ</Key> kullan.
      </div>

      <Explain
        title="Başlangıç: Hedefe hareket mi var, yoksa sadece bulunduğu yer mi? (Erst denken, dann wählen)"
        lead="Her cümlede önce sahneyi hayal et: Nesne/kişi yer değiştiriyor mu? Varış noktası var mı? Evetse Akkusativ. Sadece bulunduğu yeri söylüyorsan Dativ."
      >
        <p>
          Bu edatlarla iki farklı bilgi verirsin. <strong>Hareket/varış</strong>{" "}
          varsa “<Term>nereye?</Term>” sorusunun cevabı gelir ve edat{" "}
          <Key>Akkusativ</Key> alır:
          <em>
            {" "}
            Ich gehe <u>in die</u> Küche.
          </em>{" "}
          (nereye? mutfağa).
          <br />
          <strong>Konum</strong> varsa “<Term>nerede?</Term>” sorusunun cevabı
          gelir ve edat <Key>Dativ</Key> alır:
          <em>
            {" "}
            Ich bin <u>in der</u> Küche.
          </em>{" "}
          (nerede? mutfakta).
        </p>
        <p>
          Bir ipucu: Cümlede <Term>koymak, yerleştirmek, götürmek, girmek</Term>{" "}
          gibi hareket fiilleri görürsen çoğu zaman Akkusativ gelir.{" "}
          <Term>durmak, olmak, bulunmak, asılı durmak</Term> gibi fiiller konum
          anlatır ve Dativ ister.
        </p>
      </Explain>

      <Sub title="Adım adım seçim (nereye? → Akkusativ, nerede? → Dativ)" />
      <Explain title="Uygulama planı" lead="Her cümlede şu üç adımı uygula.">
        <ol className="compact-list">
          <li>
            Fiili tanı: <strong>hareket mi</strong> (yer değişimi var) yoksa{" "}
            <strong>konum mu</strong> (yer değişimi yok)?
          </li>
          <li>
            Doğru soruyu sor: <strong>nereye?</strong> ya da{" "}
            <strong>nerede?</strong>
          </li>
          <li>
            Edatı ve hâli seç: nereye → <Key>Akkusativ</Key>, nerede →{" "}
            <Key>Dativ</Key>.
          </li>
        </ol>
        <Formula
          rows={[
            [
              "Hareket/varış (nereye?)",
              "… + edat + artikel (Akkusativ) + yer",
              "Er stellt die Tasse <u>auf den</u> Tisch.",
            ],
            [
              "Konum (nerede?)",
              "… + edat + artikel (Dativ) + yer",
              "Die Tasse steht <u>auf dem</u> Tisch.",
            ],
          ]}
        />
        <Callout type="tip" title="Mini kontrol listesi">
          <ul className="compact-list">
            <li>Varış noktası var mı? → Akkusativ.</li>
            <li>Yer değiştirme yok, sadece bulunduğu yer mi? → Dativ.</li>
            <li>
              “Koymak–durmak” çiftini dene: <Term>stellen/stehen</Term>,{" "}
              <Term>legen/liegen</Term>, <Term>setzen/sitzen</Term>,{" "}
              <Term>hängen/hängen</Term>.
            </li>
          </ul>
        </Callout>
      </Explain>

      <Sub title="Edatları anlamla öğren (Türkçe açıklama + Almanca örnek)" />

      <Explain
        title="in — içine / içinde"
        lead="Kapalı bir alanın sınırları vardır. İçine hareket edebilir veya içinde bulunabilirsin."
      >
        <p>
          <Term>in</Term> kapalı bir alana <strong>giriş</strong> (Akkusativ) ya
          da o alanın <strong>içinde bulunma</strong> (Dativ) bildirir. Hareket:{" "}
          <em>
            Ich gehe <u>ins</u> Zimmer.
          </em>{" "}
          Konum:{" "}
          <em>
            Ich bin <u>im</u> Zimmer.
          </em>
        </p>
        <Examples
          items={[
            {
              en: "Ich gehe ins Kino.",
              tr: "Sinemaya gidiyorum.",
              pron: "ih ge-e ins kino",
            },
            {
              en: "Ich bin im Kino.",
              tr: "Sinemadayım.",
              pron: "ih bin im kino",
            },
          ]}
        />
      </Explain>

      <Explain
        title="an — kenarına/yanına (dikey yüzey, su kenarı) · kenarında/yanında"
        lead="Dikey yüzeye temas veya su/çerçeve/pencere gibi bir kenara yaklaşma–bulunma ilişkisi."
      >
        <p>
          <Term>an</Term>, bir şeyin <strong>kenarına/yanına hareket</strong>{" "}
          (Akkusativ) ya da <strong>kenarında/yanında konum</strong> (Dativ)
          demektir. Hareket:{" "}
          <em>
            Ich hänge das Poster <u>an die</u> Wand.
          </em>{" "}
          Konum:{" "}
          <em>
            Das Poster hängt <u>an der</u> Wand.
          </em>
        </p>
        <Examples
          items={[
            {
              en: "Wir fahren ans Meer.",
              tr: "Denize gidiyoruz.",
              pron: "vir farın ans meer",
            },
            {
              en: "Wir sind am Meer.",
              tr: "Deniz kenarındayız.",
              pron: "vir zint am meer",
            },
          ]}
        />
      </Explain>

      <Explain
        title="auf — üstüne (yatay yüzey) · üstünde"
        lead="Masa, raf, tezgâh gibi yatay yüzey ilişkisi."
      >
        <p>
          <Term>auf</Term> <strong>yatay yüzey</strong>e doğru hareket
          (Akkusativ) veya o yüzeyin <strong>üstünde konum</strong> (Dativ)
          demektir. Hareket:{" "}
          <em>
            Ich lege das Buch <u>auf den</u> Tisch.
          </em>{" "}
          Konum:{" "}
          <em>
            Das Buch liegt <u>auf dem</u> Tisch.
          </em>
        </p>
        <Examples
          items={[
            {
              en: "Stell die Tasse auf den Tisch.",
              tr: "Fincanı masanın üstüne koy.",
              pron: "ştel di tase auf den tiş",
            },
            {
              en: "Die Tasse steht auf dem Tisch.",
              tr: "Fincan masanın üstünde.",
              pron: "di tase şteyt auf dem tiş",
            },
          ]}
        />
      </Explain>

      <Explain
        title="unter — altına · altında"
        lead="Bir şeyin altına hareket etmek ya da aşağıda bulunmak."
      >
        <p>
          <Term>unter</Term> hareket:{" "}
          <em>
            Die Katze läuft <u>unter den</u> Tisch.
          </em>{" "}
          Konum:{" "}
          <em>
            Die Katze ist <u>unter dem</u> Tisch.
          </em>
        </p>
      </Explain>

      <Explain
        title="über — üzerine/üstünden (temassız) · üzerinde (temassız)"
        lead="Yukarıdan, temas olmadan kurulan ilişki; uçmak, asılı durmak gibi."
      >
        <p>
          <Term>über</Term> genelde <strong>temas yok</strong>. Hareket:{" "}
          <em>
            Der Vogel fliegt <u>über den</u> See.
          </em>{" "}
          Konum:{" "}
          <em>
            Die Lampe hängt <u>über dem</u> Tisch.
          </em>
        </p>
      </Explain>

      <Explain
        title="vor / hinter — önüne/arkasına · önünde/arkasında"
        lead="Ön–arka ekseninde hareket ya da konum."
      >
        <p>
          <Term>vor</Term> ve <Term>hinter</Term> ile hareket:{" "}
          <em>
            Ich stelle das Auto <u>vor das</u> Haus.
          </em>{" "}
          Konum:{" "}
          <em>
            Das Auto steht <u>vor dem</u> Haus.
          </em>
          <br />
          Arkası için:{" "}
          <em>
            Er parkt <u>hinter das</u> Haus.
          </em>{" "}
          /{" "}
          <em>
            Das Auto steht <u>hinter dem</u> Haus.
          </em>
        </p>
      </Explain>

      <Explain
        title="neben / zwischen — yanına/arasına · yanında/arasında"
        lead="Yan–komşuluk veya iki nesnenin arasına/ arasında bulunma."
      >
        <p>
          <Term>neben</Term> hareket:{" "}
          <em>
            Ich setze mich <u>neben den</u> Mann.
          </em>{" "}
          Konum:{" "}
          <em>
            Ich sitze <u>neben dem</u> Mann.
          </em>
          <br />
          <Term>zwischen</Term> hareket:{" "}
          <em>
            Ich stelle den Stuhl <u>zwischen die</u> Tische.
          </em>{" "}
          Konum:{" "}
          <em>
            Der Stuhl steht <u>zwischen den</u> Tischen.
          </em>
        </p>
      </Explain>

      <Sub title="‘Koymak’ ve ‘durmak’ fiil çiftleriyle güvenli seçim" />
      <Explain
        title="Neden bu çiftler çok faydalı?"
        lead="Aynı sahneyi iki şekilde anlat: önce hareket fiiliyle yerleştir (Akkusativ), sonra konum fiiliyle nerede durduğunu söyle (Dativ)."
      >
        <p>
          Hareket fiilleri çoğunlukla <strong>Akkusativ</strong> ister:{" "}
          <Term>legen</Term> (yatay koymak), <Term>stellen</Term> (dikey
          koymak),
          <Term>setzen</Term> (oturtmak), <Term>hängen</Term> (asmak). Konum
          fiilleri çoğunlukla <strong>Dativ</strong> ister:
          <Term>liegen</Term> (yatay durmak), <Term>stehen</Term> (ayakta
          durmak), <Term>sitzen</Term> (oturmak),
          <Term>hängen</Term> (asılı durmak).
        </p>
      </Explain>
      <MiniTable
        head={["Hareket (Akkusativ)", "Konum (Dativ)", "Örnek cümle çifti"]}
        rows={[
          [
            "legen",
            "liegen",
            "Ich lege das Handy <b>auf den</b> Tisch. / Das Handy liegt <b>auf dem</b> Tisch.",
          ],
          [
            "stellen",
            "stehen",
            "Ich stelle die Flasche <b>in den</b> Schrank. / Die Flasche steht <b>im</b> Schrank.",
          ],
          [
            "setzen",
            "sitzen",
            "Ich setze das Kind <b>auf den</b> Stuhl. / Das Kind sitzt <b>auf dem</b> Stuhl.",
          ],
          [
            "hängen",
            "hängen",
            "Ich hänge das Bild <b>an die</b> Wand. / Das Bild hängt <b>an der</b> Wand.",
          ],
        ]}
      />

      <Sub title="Kısaltmalar ve doğal söyleyiş (ins, im, ans, am…)" />
      <Explain
        title="Neden kısaltma var?"
        lead="Konuşmada akıcı olmak için artikel + edat bazen birleşerek tek bir biçim olur."
      >
        <p>
          <code>in das → ins</code> (Ich gehe <u>ins</u> Kino),{" "}
          <code>in dem → im</code> (Ich bin <u>im</u> Kino),
          <code>an das → ans</code> (ans Fenster), <code>an dem → am</code> (am
          Fenster).
        </p>
      </Explain>

      <Sub title="Sık yapılan hatalar ve ipuçları" />
      <Callout type="error" title="Nereye–Nerede karışıklığı">
        <ul className="compact-list">
          <li>
            <em>*Ich gehe in dem Park.</em> yerine{" "}
            <Term>
              Ich gehe <u>in den</u> Park.
            </Term>{" "}
            (hareket).
          </li>
          <li>
            <em>*Ich bin in den Park.</em> yerine{" "}
            <Term>
              Ich bin <u>im</u> Park.
            </Term>{" "}
            (konum).
          </li>
          <li>
            <Term>an</Term> çoğu zaman duvar/pencere/kenar; <Term>auf</Term>{" "}
            yatay yüzey; <Term>über</Term> temassız yukarıdadır.
          </li>
        </ul>
      </Callout>

      <Sub title="Telaffuz ipuçları (Türkçe odaklı)" />
      <Explain
        title="Kulağa nasıl gelir?"
        lead="Basit yaklaşım kullan; uzun–kısa ünlüyü Türkçe yazımıyla yaklaşık ver."
      >
        <ul className="compact-list">
          <li>
            <Term>in</Term> → <em>in</em>, <Term>an</Term> → <em>an</em>.
          </li>
          <li>
            <Term>auf</Term> → <em>auf</em> (au ≈ av).
          </li>
          <li>
            <Term>über</Term> → <em>ü-ber</em>, <Term>unter</Term> →{" "}
            <em>un-ter</em>.
          </li>
          <li>
            <Term>vor</Term> → <em>for</em>, <Term>hinter</Term> →{" "}
            <em>hinter</em>, <Term>neben</Term> → <em>ne-ben</em>,{" "}
            <Term>zwischen</Term> → <em>ts-vi-şın</em>.
          </li>
        </ul>
      </Explain>

      <Sub title="Mikro alıştırmalar: doğru edat + artikel (seçimli)" />
      <ExerciseMC
        title="nereye? → Akkusativ · nerede? → Dativ"
        items={[
          {
            q: "Ich gehe ___ Park. (nereye?)",
            choices: ["im", "in den", "in dem"],
            correctIndex: 1,
            explain: "Hareket/varış var → Akkusativ: in den Park.",
          },
          {
            q: "Ich bin ___ Park. (nerede?)",
            choices: ["ins", "im", "in den"],
            correctIndex: 1,
            explain: "Konum → Dativ: im Park (= in dem Park).",
          },
          {
            q: "Stell die Flasche ___ Tisch! (nereye?)",
            choices: ["auf dem", "auf den", "auf der"],
            correctIndex: 1,
            explain: "Hareket/varış → Akkusativ: auf den Tisch.",
          },
          {
            q: "Die Flasche steht ___ Tisch. (nerede?)",
            choices: ["auf den", "auf dem", "auf der"],
            correctIndex: 1,
            explain: "Konum → Dativ: auf dem Tisch.",
          },
          {
            q: "Wir fahren ___ Meer. (nereye?)",
            choices: ["ans", "am", "an dem"],
            correctIndex: 0,
            explain: "Hareket/varış → Akkusativ: ans Meer (= an das Meer).",
          },
          {
            q: "Wir sind ___ Meer. (nerede?)",
            choices: ["ans", "am", "an das"],
            correctIndex: 1,
            explain: "Konum → Dativ: am Meer (= an dem Meer).",
          },
          {
            q: "Ich setze mich ___ Stuhl. (nereye?)",
            choices: ["auf den", "auf dem", "auf der"],
            correctIndex: 0,
            explain: "Hareket/varış → Akkusativ: auf den Stuhl.",
          },
          {
            q: "Ich sitze ___ Stuhl. (nerede?)",
            choices: ["auf den", "auf dem", "auf der"],
            correctIndex: 1,
            explain: "Konum → Dativ: auf dem Stuhl.",
          },
        ]}
      />

      <Sub title="Mini Test (çoktan seçmeli)" />
      <ExerciseMC
        title="Wechselpräpositionen – kontrol"
        items={[
          {
            q: "Doğru olan hangisi? “Sinemaya gidiyorum.”",
            choices: [
              "Ich gehe im Kino.",
              "Ich gehe ins Kino.",
              "Ich bin ins Kino.",
            ],
            correctIndex: 1,
            explain: "Hareket/varış var: nereye? → Akkusativ: ins Kino.",
          },
          {
            q: "Doğru olan hangisi? “Poster duvarda asılı.”",
            choices: [
              "Das Poster hängt an der Wand.",
              "Das Poster hängt an die Wand.",
              "Das Poster hängt auf der Wand.",
            ],
            correctIndex: 0,
            explain: "Konum anlatılıyor: nerede? → Dativ: an der Wand.",
          },
          {
            q: "Hangi cümlede yatay yüzey ilişkisi var?",
            choices: [
              "Das Bild hängt an der Wand.",
              "Die Tasse steht auf dem Tisch.",
              "Wir sind am Meer.",
            ],
            correctIndex: 1,
            explain: "Masa yatay yüzeydir: auf dem Tisch.",
          },
          {
            q: "“Arabayı evin önüne koydum.” cümlesi hangisi?",
            choices: [
              "Ich stelle das Auto vor dem Haus.",
              "Ich stelle das Auto vor das Haus.",
              "Das Auto steht vor dem Haus.",
            ],
            correctIndex: 1,
            explain:
              "Hareket/varış: nereye? → vor das Haus. Konum cümlesi: steht vor dem Haus.",
          },
        ]}
      />
    </>
  );
}

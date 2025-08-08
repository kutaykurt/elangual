import React from "react";

function PronunciationBasics() {
  return (
    <div>
      const PronunciationBasics = () => (
      <Section title="0) Pronunciation" tr="Telaffuz Kuralları (Hızlı ve Net)">
        <p className="explanation">
          Aşağıdaki kurallar Türkçe konuşanlara göre hazırlandı. IPA yok; sadece
          **nasıl söyleyeceğini** adım adım anlatıyoruz. Her kuralda:{" "}
          <em>nasıl yap</em>,<em>örnek</em>, ve <em>yanlışlara dikkat</em>.
        </p>

        {/* 1) TH – iki çeşit */}
        <div className="phonetic-block">
          <h3>
            1) <code>th</code> — iki farklı ses
          </h3>
          <div className="howto">
            <strong>
              a) Yumuşak “th” (this, that, the) → <u>d</u> gibi
            </strong>
            <ul>
              <li>
                Dili üst/alt ön dişlerin arasına <em>hafifçe</em> koy.
              </li>
              <li>
                Türkçe <u>d</u> söyle ama dil dişlere değsin:{" "}
                <code>dıs, det, dı</code>.
              </li>
            </ul>
            <div className="ex">
              Örnek: <strong>this</strong> → <code>dıs</code> ·{" "}
              <strong>the book</strong> → <code>dı buk</code> ·{" "}
              <strong>that</strong> → <code>det</code>
            </div>
            <div className="dont">
              Yanlış: <code>dis</code> (dil dişlere değmiyor), <code>zıs</code>
            </div>
          </div>

          <div className="howto">
            <strong>
              b) Sert “th” (think, thanks, three) → <u>t</u> gibi
            </strong>
            <ul>
              <li>
                Aynı dil pozisyonu, bu kez Türkçe <u>t</u> çıkar.
              </li>
            </ul>
            <div className="ex">
              Örnek: <strong>think</strong> → <code>tink</code> ·{" "}
              <strong>thanks</strong> → <code>tenks</code> ·{" "}
              <strong>three</strong> → <code>trii</code>
            </div>
            <div className="dont">
              Yanlış: <code>sink</code>, <code>zree</code>
            </div>
          </div>
        </div>

        {/* 2) Kısa i ve Uzun ii */}
        <div className="phonetic-block">
          <h3>
            2) Kısa “i” = <u>ı</u>, Uzun “ii” = <u>ii</u>
          </h3>
          <div className="howto">
            <ul>
              <li>
                <strong>Kısa i</strong> (this, is, sit) → <code>ı</code>:{" "}
                <code>dıs, ız, sıt</code>
              </li>
              <li>
                <strong>Uzun ii</strong> (she, need, see) → <code>ii</code>:{" "}
                <code>şii, niid, sii</code>
              </li>
            </ul>
            <div className="dont">
              Yanlış: <code>this → dis</code>, <code>she → şe</code>
            </div>
          </div>
        </div>

        {/* 3) W = V */}
        <div className="phonetic-block">
          <h3>
            3) <code>w</code> = Türkçe <u>v</u>
          </h3>
          <div className="howto">
            <ul>
              <li>
                Dudaklar yuvarlak başlar, ama ses Türkçe <u>v</u>’ye yakındır.
              </li>
            </ul>
            <div className="ex">
              Örnek: <strong>we</strong> → <code>vii</code> ·{" "}
              <strong>work</strong> → <code>vörk</code> · <strong>water</strong>{" "}
              → <code>votır</code>
            </div>
            <div className="dont">
              Yanlış: <code>uuork</code>, <code>guater</code>
            </div>
          </div>
        </div>

        {/* 4) R ve “ör/ör” rengi */}
        <div className="phonetic-block">
          <h3>
            4) İngilizce <u>r</u> — yuvarlak, sert değil
          </h3>
          <div className="howto">
            <ul>
              <li>
                Türkçe’deki sert/tekerlek r yok. İngilizce r yumuşak, özellikle
                “or/er/ir/ur” hecelerinde <u>ö/ı</u> rengini verir.
              </li>
            </ul>
            <div className="ex">
              <strong>work</strong> → <code>vörk</code> · <strong>word</strong>{" "}
              → <code>vörd</code> · <strong>bird</strong> → <code>börd</code>
            </div>
            <div className="dont">
              Yanlış: <code>vork</code> (o ile), <code>verrk</code> (r’yi
              titreterek)
            </div>
          </div>
        </div>

        {/* 5) O / OU farkı */}
        <div className="phonetic-block">
          <h3>
            5) <u>o</u> ve <u>ou</u> farkı
          </h3>
          <div className="howto">
            <ul>
              <li>
                <strong>ou</strong> (go, no) → <code>ou</code>:{" "}
                <code>gou, nou</code>
              </li>
              <li>
                <strong>o</strong> (hot, not) → Türkçe “a”ya yakın:{" "}
                <code>hat, nat</code>
              </li>
            </ul>
            <div className="ex">
              <strong>coffee</strong> → <code>kofi</code> (ilk hece kısa)
            </div>
            <div className="dont">
              Yanlış: <code>go → go</code> (düz o), <code>hot → hot</code>{" "}
              (Türkçe o)
            </div>
          </div>
        </div>

        {/* 6) Zayıf hece = ı (schwa) */}
        <div className="phonetic-block">
          <h3>
            6) Zayıf hece → kısa <u>ı</u>
          </h3>
          <div className="howto">
            <ul>
              <li>
                Vurgu almayan a/e/o/u çoğu zaman <code>ı</code> olur.
              </li>
            </ul>
            <div className="ex">
              <strong>teacher</strong> → <code>tiiçır</code> ·{" "}
              <strong>banana</strong> → <code>bınana</code> ·{" "}
              <strong>problem</strong> → <code>problım</code> ·{" "}
              <strong>about</strong> → <code>ıbaut</code>
            </div>
          </div>
        </div>

        {/* 7) Hızlı mini eşleştirme (gözle) */}
        <div className="phonetic-block tip">
          <strong>Hızlı kontrol:</strong> <code>this → dıs</code>,{" "}
          <code>three → trii</code>, <code>work → vörk</code>,{" "}
          <code>the → dı</code>, <code>we → vii</code>,{" "}
          <code>teacher → tiiçır</code>
        </div>
      </Section>
      );
    </div>
  );
}

export default PronunciationBasics;

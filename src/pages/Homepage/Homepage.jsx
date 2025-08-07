import "./homepage.scss";
import languageheroimage from "../../language-hero.png";

export default function Homepage() {
  return (
    <>
      <div className="Homepage Main">
        <h2 className="homepage-title">
          Welcome to <span className="highlight">E-Langual</span>!
        </h2>

        <section className="homepage-intro-section">
          <p>
            <strong>English:</strong> Select your base and target language from
            the menu above to start learning vocabulary interactively.
          </p>
          <p>
            <strong>Deutsch:</strong> Wähle oben deine Ausgangssprache und
            Zielsprache, um direkt mit dem Vokabeltraining zu beginnen.
          </p>
          <p>
            <strong>Türkçe:</strong> Etkileşimli kelime öğrenimine başlamak için
            yukarıdaki menüden ana dilini ve hedef dilini seç.
          </p>
          <p>
            <strong>Español:</strong> Selecciona tu idioma de origen y destino
            en el menú superior para comenzar a aprender vocabulario de forma
            interactiva.
          </p>
        </section>

        <section className="example-vocab-section">
          <h3 className="section-title">Examples</h3>
          <table className="example-table">
            <thead>
              <tr>
                <th>Turkish</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Elma</td>
                <td>apple</td>
              </tr>
              <tr>
                <td>ev</td>
                <td>house</td>
              </tr>
              <tr>
                <td>kitap</td>
                <td>book</td>
              </tr>
              <tr>
                <td>arkadaş</td>
                <td>friend</td>
              </tr>
              <tr>
                <td>su</td>
                <td>water</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

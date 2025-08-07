import { Link } from "react-router-dom";
import "./Learngrammar.scss"; // optionales SCSS-File für Styling

const LGTurkishGerman = () => {
  return (
    <div className="vocab-list">
      <div className="vocab-item">
        <p>
          <strong>1. das Abenteuer</strong>{" "}
          <span className="pron">(a-ben-toy-er)</span> –{" "}
          <span className="tr">macera</span>
        </p>
        <p>Das Abenteuer beginnt.</p>
        <p className="tr-sentence">– Macera başlıyor.</p>
      </div>

      <div className="vocab-item">
        <p>
          <strong>2. die Verantwortung</strong>{" "}
          <span className="pron">(fea-ant-vor-tung)</span> –{" "}
          <span className="tr">sorumluluk</span>
        </p>
        <p>Er trägt die Verantwortung.</p>
        <p className="tr-sentence">– O sorumluluğu taşıyor.</p>
      </div>

      <div className="vocab-item">
        <p>
          <strong>3. die Entscheidung</strong>{" "}
          <span className="pron">(ent-şay-dung)</span> –{" "}
          <span className="tr">karar</span>
        </p>
        <p>Ich treffe eine Entscheidung.</p>
        <p className="tr-sentence">– Bir karar veriyorum.</p>
      </div>

      <div className="vocab-item">
        <p>
          <strong>4. die Gewohnheit</strong>{" "}
          <span className="pron">(ge-voon-hayt)</span> –{" "}
          <span className="tr">alışkanlık</span>
        </p>
        <p>Das ist meine Gewohnheit.</p>
        <p className="tr-sentence">– Bu benim alışkanlığım.</p>
      </div>

      <div className="vocab-item">
        <p>
          <strong>5. die Nachricht</strong>{" "}
          <span className="pron">(naah-riht)</span> –{" "}
          <span className="tr">haber/mesaj</span>
        </p>
        <p>Ich lese die Nachricht.</p>
        <p className="tr-sentence">– Haberi / mesajı okuyorum.</p>
      </div>

      <div className="vocab-item">
        <p>
          <strong>6. die Zufriedenheit</strong>{" "}
          <span className="pron">(tsu-fri-den-hayt)</span> –{" "}
          <span className="tr">memnuniyet</span>
        </p>
        <p>Ich bin zufrieden.</p>
        <p className="tr-sentence">– Memnunum.</p>
      </div>

      <div className="vocab-item">
        <p>
          <strong>7. die Geduld</strong> <span className="pron">(ge-dult)</span>{" "}
          – <span className="tr">sabır</span>
        </p>
        <p>Ich bin geduldig.</p>
        <p className="tr-sentence">– Sabırlıyım.</p>
      </div>

      <Link to="/test/nomens">Teste dich – Nomen</Link>
      <Link to="/test/verben">Teste dich – Verben</Link>
    </div>
  );
};

export default LGTurkishGerman;

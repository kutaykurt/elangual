// src/pages/Grammar/GrammarEspA1.jsx
import React, { useMemo, useState, useEffect } from "react";
import "../Grammar.scss";
import { Link } from "react-router-dom";
import SectionNav from "../../../components/SectionNav/SectionNav";

/* ---------- Küçük UI Yardımcıları ---------- */
const Key = ({ children }) => <mark className="key">{children}</mark>;
const Term = ({ children }) => <strong className="term">{children}</strong>;

/* ---------- Bölüm Kabuğu ---------- */
const Section = ({ title, tr, children }) => {
  const isStringTitle = typeof title === "string";
  const match = isStringTitle ? title.match(/^\s*(\d+)\)\s*/) : null;
  const num = match ? `${match[1]}) ` : "";
  const cleanTitle = match ? title.replace(/^\s*\d+\)\s*/, "") : title;

  return (
    <section
      className="g-section"
      id={cleanTitle
        ?.toString()
        .toLowerCase()
        .replace(/[^\w]+/g, "-")}
    >
      <h2>
        {num}
        {tr} <span className="en-tag">({cleanTitle})</span>
      </h2>
      {children}
    </section>
  );
};

const Rule = ({ children }) => <div className="rule-box">{children}</div>;

const Examples = ({ items }) => (
  <div className="examples">
    {items.map((ex, i) => (
      <p key={i}>
        <strong>{ex.en}</strong> — {ex.tr}{" "}
        <span className="pron">({ex.pron})</span>
      </p>
    ))}
  </div>
);

/* ---------- Callouts, Formüller, Mini-Tablo ---------- */
const Callout = ({ type = "tip", title, children }) => (
  <div className={`callout ${type}`}>
    {title && <div className="callout-title">{title}</div>}
    <div className="callout-body">{children}</div>
  </div>
);

const Formula = ({ rows = [] }) => (
  <div className="formula">
    {rows.map((r, i) => (
      <div className="formula-row" key={i}>
        <span className="part">{r[0]}</span>
        <span className="arrow">→</span>
        <span className="result">{r[1]}</span>
        {r[2] && <span className="hint-inline">{r[2]}</span>}
      </div>
    ))}
  </div>
);

const MiniTable = ({ head = [], rows = [] }) => (
  <div className="mini-table-wrap">
    <table className="mini-table">
      {head.length > 0 && (
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => (
              <td key={j}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ---------- Telaffuz Kartları (İspanyolca) ---------- */
const RuleCard = ({ id, title, bullet, children, isOpen, onToggle }) => (
  <details className="pb-card" open={isOpen} onToggle={() => onToggle(id)}>
    <summary>
      <span className="pb-title">{title}</span>
      <span className="pb-bullet">{bullet}</span>
      <span className="pb-cta" aria-hidden>
        {isOpen ? "Kapat" : "Aç"}
      </span>
    </summary>
    <div className="pb-body">{children}</div>
  </details>
);

const PronunciationBasicsES = () => {
  const ids = ["h", "c-z", "ll-y", "gn-tilde", "j-g", "qu-gu"];
  const [openMap, setOpenMap] = useState(
    Object.fromEntries(ids.map((id) => [id, false]))
  );
  const toggle = (id) => setOpenMap((m) => ({ ...m, [id]: !m[id] }));

  return (
    <Section title="1) Pronunciación" tr="Telaffuz Kuralları (Kısa ve Net)">
      <p className="explanation">
        İspanyolca <strong>Latin Amerika</strong> telaffuzu temel alınmıştır
        (c/z → <u>s</u>). Vurgu çoğu zaman sondan bir önceki hecededir;{" "}
        <Term>á/é/í/ó/ú</Term> işaretleri vurguyu gösterir.
      </p>

      <div className="pb-grid">
        <RuleCard
          id="h"
          isOpen={openMap["h"]}
          onToggle={toggle}
          title={
            <>
              <code>h</code> sessiz
            </>
          }
          bullet="hola → ola; hijo → iho"
        >
          <div className="howto">
            <div className="ex">
              hola → <code>ola</code> · hacer → <code>aser</code>
            </div>
          </div>
        </RuleCard>

        <RuleCard
          id="c-z"
          isOpen={openMap["c-z"]}
          onToggle={toggle}
          title="c / z (LA: s-sesi)"
          bullet="c+e/i → s; z → s; ca/co/cu → k"
        >
          <ul className="tight">
            <li>
              gracias → <code>grasias</code>
            </li>
            <li>
              zapato → <code>sapato</code>
            </li>
            <li>
              cosa → <code>kosa</code>
            </li>
          </ul>
        </RuleCard>

        <RuleCard
          id="ll-y"
          isOpen={openMap["ll-y"]}
          onToggle={toggle}
          title="ll / y → y"
          bullet="Me llamo → me yamo"
        >
          <div className="howto">
            çoğu yerde <code>ll</code> ve <code>y</code> aynı: llamar →{" "}
            <code>yamar</code>, playa → <code>playa</code>
          </div>
        </RuleCard>

        <RuleCard
          id="gn-tilde"
          isOpen={openMap["gn-tilde"]}
          onToggle={toggle}
          title="ñ → ny"
          bullet="España → Espanya"
        >
          <div className="howto">
            baño → <code>banyo</code> · niña → <code>ninya</code>
          </div>
        </RuleCard>

        <RuleCard
          id="j-g"
          isOpen={openMap["j-g"]}
          onToggle={toggle}
          title="j / g(e,i) → h (boğazdan)"
          bullet="jamón → hamon; gente → hente"
        >
          <div className="howto">
            <div className="ex">
              jirafa → <code>hirafa</code> · gimnasio → <code>himnasyo</code>
            </div>
          </div>
        </RuleCard>

        <RuleCard
          id="qu-gu"
          isOpen={openMap["qu-gu"]}
          onToggle={toggle}
          title="qu / güe / güi"
          bullet="que/qui → ke/ki; pingüino → pingüino"
        >
          <ul className="tight">
            <li>
              queso → <code>keso</code>, quiero → <code>kiero</code>
            </li>
            <li>
              guitarra → <code>gitarra</code> (u sessiz)
            </li>
            <li>
              pingüino → <code>pingüino</code> (ü okunur)
            </li>
          </ul>
        </RuleCard>

        <RuleCard
          id="b-v"
          isOpen={openMap["b-v"]}
          onToggle={toggle}
          title="b ~ v (aynı ses)"
          bullet="Başta: b | Arada: yumuşak b"
        >
          <ul className="tight">
            <li>
              vosotros → <code>bosotros</code>
            </li>
            <li>
              vino → <code>bino</code>
            </li>
            <li>
              avión → <code>abyon</code> (yumuşak b)
            </li>
          </ul>
        </RuleCard>
      </div>

      <div className="pb-table-wrap">
        <table className="g-table">
          <thead>
            <tr>
              <th>Kelime</th>
              <th>Doğru Yazım (TR telaffuz)</th>
              <th>Türkçe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hola</td>
              <td>ola</td>
              <td>merhaba</td>
            </tr>
            <tr>
              <td>gracias</td>
              <td>grasias</td>
              <td>teşekkürler</td>
            </tr>
            <tr>
              <td>España</td>
              <td>Espanya</td>
              <td>İspanya</td>
            </tr>
            <tr>
              <td>me llamo</td>
              <td>me yamo</td>
              <td>benim adım…</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

/* ---------- Alıştırma (TR yönergeler) ---------- */
function normalize(s = "") {
  return s.toLowerCase().replaceAll("’", "'").replace(/\s+/g, " ").trim();
}

const PRACTICE_ITEMS_ES = [
  {
    id: "ser-yo",
    promptBefore: "Doldur: Yo ",
    promptAfter: " de İzmir. (ser)",
    answers: ["soy"],
    distractors: ["soy", "estoy", "eres"],
  },
  {
    id: "estar-ella",
    promptBefore: "Doldur: Ella ",
    promptAfter: " en casa. (estar)",
    answers: ["está", "esta"],
    distractors: ["está", "es", "estoy"],
  },
  {
    id: "no-neg",
    promptBefore: "Olumsuz yap: Bebo café. → No ",
    promptAfter: " café.",
    answers: ["bebo"],
    distractors: ["bebo", "beba", "bebe"],
  },
  {
    id: "hay",
    promptBefore: "Doldur: ",
    promptAfter: " un libro en la mesa.",
    answers: ["Hay", "hay"],
    distractors: ["Hay", "Es", "Está"],
  },
  {
    id: "article-un",
    promptBefore: "Artikel seç: Tengo ",
    promptAfter: " amigo.",
    answers: ["un"],
    distractors: ["un", "una", "el"],
  },
  {
    id: "dem-este",
    promptBefore: "Seç: ",
    promptAfter: " coche es nuevo. (bu)",
    answers: ["Este", "este"],
    distractors: ["Ese", "Aquel", "Este"],
  },
  {
    id: "poder-tu",
    promptBefore: "Tamamla: ¿",
    promptAfter: " ayudarme? (tú)",
    answers: ["puedes"],
    distractors: ["puede", "puedes", "podemos"],
  },
  {
    id: "adj-post",
    promptBefore: "Doldur: Es un coche ",
    promptAfter: ". (büyük → grande)",
    answers: ["grande"],
    distractors: ["grande", "granda", "gran"],
  },
  {
    id: "poss-mi",
    promptBefore: "Doldur: Es ",
    promptAfter: " casa. (my)",
    answers: ["mi"],
    distractors: ["mi", "mis", "me"],
  },
  {
    id: "wh-donde",
    promptBefore: "Soru sözcüğü: ",
    promptAfter: " vives?",
    answers: ["dónde", "donde"],
    distractors: ["qué", "dónde", "cómo"],
  },
];

function QuickPracticeES_A1() {
  const [values, setValues] = useState(() =>
    Object.fromEntries(PRACTICE_ITEMS_ES.map((i) => [i.id, ""]))
  );
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const r = {};
    PRACTICE_ITEMS_ES.forEach((it) => {
      const user = normalize(values[it.id]);
      const ok = it.answers.some((a) => normalize(a) === user);
      r[it.id] = { ok, user, answers: it.answers, distractors: it.distractors };
    });
    return r;
  }, [values]);

  const correctCount = useMemo(
    () => Object.values(result).filter((x) => x.ok).length,
    [result]
  );

  const handleChange = (id, v) => setValues((s) => ({ ...s, [id]: v }));
  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setValues(Object.fromEntries(PRACTICE_ITEMS_ES.map((i) => [i.id, ""])));
    setSubmitted(false);
  };
  const hint = (opts = []) => (opts.length ? `(${opts.join(" / ")})` : "");

  return (
    <div className="qp">
      <div className="qp-list">
        {PRACTICE_ITEMS_ES.map((it, idx) => {
          const state = result[it.id];
          const cls =
            submitted && state
              ? state.ok
                ? "qp-input is-correct"
                : "qp-input is-wrong"
              : "qp-input";

          return (
            <div className="qp-item" key={it.id}>
              <div className="qp-prompt">
                <span className="idx">{idx + 1}.</span>{" "}
                <span>{it.promptBefore}</span>
                <input
                  aria-label={`Soru ${idx + 1} için cevap`}
                  className={cls}
                  type="text"
                  value={values[it.id]}
                  onChange={(e) => handleChange(it.id, e.target.value)}
                  disabled={submitted}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !submitted) handleSubmit();
                  }}
                />
                <span>{it.promptAfter}</span>{" "}
                <span className="hint">{hint(it.distractors)}</span>
              </div>

              {submitted && !state.ok && (
                <div className="qp-feedback">
                  ❌ Doğru cevap: <em>{it.answers.join(" / ")}</em>
                </div>
              )}
              {submitted && state.ok && (
                <div className="qp-feedback ok">✔️ Doğru</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="qp-actions">
        {!submitted ? (
          <button className="primary-btn" onClick={handleSubmit}>
            Kontrol et
          </button>
        ) : (
          <>
            <div className="qp-score">
              {correctCount} / {PRACTICE_ITEMS_ES.length} doğru
            </div>
            <button className="ghost-btn" onClick={handleReset}>
              Yeniden başlat
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Mini-Choice (ES) ---------- */
const MC_ITEMS_ES = [
  {
    q: "Hangi durumlarda 'ser' kullanılır?",
    choices: [
      "Kimlik/meslek/milliyet/zaman",
      "Geçici durum/konum",
      "Gelecek planı",
    ],
    correctIndex: 0,
    tr: "ser: kimlik, meslek, milliyet, saat/tarih vb.",
  },
  {
    q: "'hay' ne anlama gelir?",
    choices: ["o (erkek) için fiil", "var/yok yapısı", "yakın gösterme"],
    correctIndex: 1,
    tr: "hay: 'var' / 'yok' (çoğul/tekil fark etmez).",
  },
  {
    q: "Olumsuz cümle nasıl yapılır?",
    choices: ["fiilden sonra 'no'", "fiilden önce 'no'", "iki kez 'no'"],
    correctIndex: 1,
    tr: "no + fiil: No vivo en Madrid.",
  },
];

function MiniMC_ES() {
  const [answers, setAnswers] = useState({});
  return (
    <div className="mini-mc">
      {MC_ITEMS_ES.map((it, i) => {
        const picked = answers[i];
        const isDone = picked !== undefined;
        return (
          <div className="mini-mc-item" key={i}>
            <div className="q">
              {i + 1}. {it.q}
            </div>
            <div className="choices">
              {it.choices.map((c, idx) => {
                const isCorrect = idx === it.correctIndex;
                const cls = isDone
                  ? idx === picked
                    ? isCorrect
                      ? "choice correct"
                      : "choice wrong"
                    : "choice disabled"
                  : "choice";
                return (
                  <button
                    key={idx}
                    className={cls}
                    onClick={() => setAnswers((s) => ({ ...s, [i]: idx }))}
                    disabled={isDone}
                    aria-label={`Seçenek ${idx + 1}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            {isDone && (
              <div
                className={`mc-feedback ${
                  answers[i] === it.correctIndex ? "ok" : "bad"
                }`}
              >
                {answers[i] === it.correctIndex ? "✔️ Doğru!" : "❌ Yanlış."}{" "}
                <span className="tr">{it.tr}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Sayfa ---------- */
export default function GrammarEspA1() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="g-doc grammar-page">
      <SectionNav />

      <p className="intro">
        <b>A1 İspanyolca</b>: kısa kurallar, net örnekler,{" "}
        <strong>doğru telaffuz</strong> ve <strong>hata uyarıları</strong>.{" "}
        <Key>Kalın/renkli vurgular</Key> kritik noktaları öne çıkarır.
        <br />
      </p>

      <div className="conversation-invite">
        <b>Gerçek konuşmalarla pratik ister misin?</b>{" "}
        <Link to="/a1-conversations-es" className="invite-link">
          Buraya tıkla →
        </Link>
      </div>

      {/* 1) Telaffuz */}
      <PronunciationBasicsES />

      {/* 2) Zamirler */}
      <Section title="2) Pronombres personales" tr="Özne Zamirleri">
        <Rule>
          İspanyolca özneler:{" "}
          <Term>
            yo, tú, él/ella/usted, nosotros/as, vosotros/as, ellos/ellas/ustedes
          </Term>
          .
          <br />
          <Key>yo</Key> (ben), <Key>tú</Key> (sen), <Key>usted</Key> (resmî
          siz/tekil),
          <Key>ustedes</Key> (resmî siz/çoğul).
        </Rule>

        <table className="g-table">
          <thead>
            <tr>
              <th>İspanyolca</th>
              <th>Telaffuz (TR)</th>
              <th>Türkçe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>yo</td>
              <td>yo</td>
              <td>ben</td>
            </tr>
            <tr>
              <td>tú</td>
              <td>tu</td>
              <td>sen</td>
            </tr>
            <tr>
              <td>él / ella</td>
              <td>el / eya</td>
              <td>o (erkek) / o (kadın)</td>
            </tr>
            <tr>
              <td>usted</td>
              <td>usted</td>
              <td>siz (resmî)</td>
            </tr>
            <tr>
              <td>nosotros / nosotras</td>
              <td>nosotros / nosotras</td>
              <td>biz</td>
            </tr>
            <tr>
              <td>vosotros / vosotras</td>
              <td>bosotros / bosotras</td>
              <td>siz (çoğul, İspanya)</td>
            </tr>
            <tr>
              <td>ellos / ellas</td>
              <td>eyyos / eyas</td>
              <td>onlar</td>
            </tr>
            <tr>
              <td>ustedes</td>
              <td>ustedes</td>
              <td>sizler (LA: genel çoğul)</td>
            </tr>
          </tbody>
        </table>

        <Examples
          items={[
            { en: "Yo soy Ayşe.", tr: "Ben Ayşe’yim.", pron: "yo soy ayşe" },
            {
              en: "Ellos están aquí.",
              tr: "Onlar burada.",
              pron: "eyyos estan aki",
            },
          ]}
        />
      </Section>

      {/* 3) ser / estar */}
      <Section title="3) Verbo 'ser' y 'estar'" tr="‘Olmak’: ser / estar">
        <Rule>
          <Formula
            rows={[
              [
                "ser",
                "soy, eres, es, somos, sois, son",
                "kimlik/meslek/milliyet, kalıcı özellik",
              ],
              [
                "estar",
                "estoy, estás, está, estamos, estáis, están",
                "konum/geçici hâl (hasta, yorgun...)",
              ],
              ["olumsuz", "no + fiil", "No soy médico. / No está en casa."],
            ]}
          />
        </Rule>

        <Examples
          items={[
            { en: "Soy turco/turca.", tr: "Türk’üm.", pron: "soy turko/turka" },
            {
              en: "La casa está limpia.",
              tr: "Ev temiz.",
              pron: "la kasa esta limpya",
            },
            {
              en: "¿Eres estudiante?",
              tr: "Öğrenci misin?",
              pron: "eres estudyente",
            },
          ]}
        />

        <Callout type="tip" title="Ser mi, estar mı?">
          <ul className="compact-list">
            <li>
              <Term>ser</Term>: kimlik, milliyet, meslek, saat/tarih, kalıcı
              nitelik.
            </li>
            <li>
              <Term>estar</Term>: konum, geçici durum/duygu, geçici özellik.
            </li>
          </ul>
        </Callout>
      </Section>

      {/* 4) İyelik Sıfatları */}
      <Section title="4) Adjetivos posesivos" tr="İyelik Sıfatları">
        <Rule>
          <Term>mi(s), tu(s), su(s), nuestro/a(s), vuestro/a(s), su(s)</Term> —{" "}
          <Key>isimden önce</Key> gelir ve{" "}
          <Key>isimle uyuşur (tekil/çoğul)</Key>.
        </Rule>

        <MiniTable
          head={["Sahip", "Tekil", "Çoğul", "TR"]}
          rows={[
            ["yo", "mi", "mis", "benim"],
            ["tú", "tu", "tus", "senin"],
            ["él/ella/usted", "su", "sus", "onun/sizin (resmî)"],
            ["nosotros/as", "nuestro/a", "nuestros/as", "bizim"],
            ["vosotros/as", "vuestro/a", "vuestros/as", "sizin"],
            ["ellos/ellas/ustedes", "su", "sus", "onların/sizlerin"],
          ]}
        />

        <Examples
          items={[
            {
              en: "Mi casa es grande.",
              tr: "Benim evim büyük.",
              pron: "mi kasa es grande",
            },
            {
              en: "Nuestros amigos.",
              tr: "Bizim arkadaşlarımız.",
              pron: "nwestros amigós",
            },
          ]}
        />
      </Section>

      {/* 5) Artikeller */}
      <Section
        title="5) Artículos: un/una/unos/unas; el/la/los/las"
        tr="Artikeller"
      >
        <Rule>
          <Formula
            rows={[
              ["belirtisiz", "un, una, unos, unas", "bir… / birkaç…"],
              ["belirli", "el, la, los, las", "belirli, konuşan-bilen şey"],
              [
                "bükünme",
                "a + el → al; de + el → del",
                "Voy al parque. / Soy del barrio.",
              ],
            ]}
          />
        </Rule>

        <Examples
          items={[
            {
              en: "Quiero una manzana.",
              tr: "Bir elma istiyorum.",
              pron: "kiero una mansana",
            },
            {
              en: "El libro es interesante.",
              tr: "Kitap ilginç.",
              pron: "el libro es interesantes",
            },
            {
              en: "Voy al supermercado.",
              tr: "Süpermarkete gidiyorum.",
              pron: "voy al süpermarkedo",
            },
          ]}
        />
      </Section>

      {/* 6) Dizilim + Basit Şimdiki */}
      <Section
        title="6) Orden básico & Presente"
        tr="Temel Dizilim & Geniş Zaman"
      >
        <Rule>
          <Formula
            rows={[
              [
                "dizilim",
                <>
                  <Term>Özne + Fiil + Nesne</Term>
                </>,
                "Yo estudio español.",
              ],
              [
                "olumsuz",
                <>
                  <Term>no + fiil</Term>
                </>,
                "No trabajo los domingos.",
              ],
              [
                "soru",
                "¿…?",
                "Sadece tonlama/ters işaret; yazıda ¿ ? kullanılır.",
              ],
            ]}
          />
          <Callout type="tip" title="Sıfatların yeri">
            Çoğu sıfat <Key>isimden sonra</Key> gelir: una casa{" "}
            <Term>grande</Term>.
          </Callout>
        </Rule>

        <Examples
          items={[
            {
              en: "Trabajo en Ankara.",
              tr: "Ankara’da çalışıyorum.",
              pron: "trabaho en ankara",
            },
            { en: "No como carne.", tr: "Et yemem.", pron: "no komo karne" },
            {
              en: "¿Vives aquí?",
              tr: "Burada mı yaşıyorsun?",
              pron: "bibes aki",
            },
          ]}
        />

        <Callout type="tip" title="Sinyal sözcükler">
          <Term>siempre, normalmente, a menudo, a veces, rara vez, nunca</Term>
        </Callout>
      </Section>

      {/* 7) Nesne Zamirleri (temel) */}
      <Section
        title="7) Pronombres de objeto (directo)"
        tr="Nesne Zamirleri (temel)"
      >
        <Rule>
          <Term>me, te, lo/la, nos, os, los/las</Term> — genelde{" "}
          <Key>fiilden önce</Key> gelir:
          <em> Lo</em> quiero. / <em> Te</em> ayudo.
        </Rule>
        <Examples
          items={[
            {
              en: "Lo tengo.",
              tr: "Onu bende var / sahipsin.",
              pron: "lo tengo",
            },
            { en: "Te veo.", tr: "Seni görüyorum.", pron: "te beo" },
          ]}
        />
      </Section>

      {/* 8) Hay */}
      <Section title="8) Hay (there is/are)" tr="Var/Yok yapısı: hay">
        <Rule>
          Tekil/çoğul fark etmez: <Term>hay</Term>. Olumsuz: <Term>no hay</Term>
          . Soru: <Term>¿Hay...?</Term>
        </Rule>
        <Examples
          items={[
            {
              en: "Hay un museo aquí.",
              tr: "Burada bir müze var.",
              pron: "ay un muzeo aki",
            },
            {
              en: "No hay problemas.",
              tr: "Sorun yok.",
              pron: "no ay problemas",
            },
          ]}
        />
      </Section>

      {/* 9) İşaret Sözcükleri */}
      <Section title="9) Demostrativos" tr="İşaret Sıfatları/Zamirleri">
        <Rule>
          <MiniTable
            head={["Yakın", "Orta", "Uzak", "TR"]}
            rows={[
              [
                "este/esta/estos/estas",
                "ese/esa/esos/esas",
                "aquel/aquella/aquellos/aquellas",
                "bu / şu / o (uzak)",
              ],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              en: "Esta casa es nueva.",
              tr: "Bu ev yeni.",
              pron: "esta kasa es nweva",
            },
            {
              en: "Aquellos coches son viejos.",
              tr: "Şu uzaktaki arabalar eski.",
              pron: "akeyos koçes son viehos",
            },
          ]}
        />
      </Section>

      {/* 10) Yer Edatları */}
      <Section title="10) Preposiciones de lugar" tr="Yer Edatları">
        <Rule>
          <Term>
            en (içinde/üstünde), sobre (üstünde), debajo de (altında), al lado
            de (yanında), detrás de (arkasında), delante de (önünde), entre
            (arasında)
          </Term>
        </Rule>
        <Examples
          items={[
            {
              en: "El libro está en la mesa.",
              tr: "Kitap masanın üstünde.",
              pron: "el libro esta en la mesa",
            },
            {
              en: "La escuela está detrás del parque.",
              tr: "Okul parkın arkasında.",
              pron: "la esküela esta detras del parke",
            },
          ]}
        />
      </Section>

      {/* 11) poder (can) */}
      <Section title="11) Poder (can)" tr="Yetenek ve rica: poder">
        <Rule>
          <Formula
            rows={[
              ["çekim", "puedo, puedes, puede, podemos, podéis, pueden", ""],
              ["olumsuz", "no + poder + fiil", "No puedo venir."],
              ["soru", "¿Puedes/puede + fiil…?", "¿Puedes ayudarme?"],
            ]}
          />
          <p className="note">
            <Key>saber + fiil</Key> “nasıl yapılacağını bilmek” anlamında da
            kullanılır:
            <em> Sé nadar.</em> (Yüzmesini biliyorum.)
          </p>
        </Rule>
        <Examples
          items={[
            {
              en: "¿Puedes hablar más despacio?",
              tr: "Daha yavaş konuşabilir misin?",
              pron: "puedes hablar mas despasyo",
            },
            {
              en: "No puedo hoy.",
              tr: "Bugün yapamam/gidemem.",
              pron: "no pwedo oy",
            },
          ]}
        />
      </Section>

      {/* 12) Sıklık Zarfları */}
      <Section
        title="12) Adverbios de frecuencia"
        tr="Sıklık Zarfları (yerleşim)"
      >
        <Rule>
          <p>
            <Key>siempre, normalmente, a menudo, a veces, rara vez, nunca</Key>
          </p>
          <ul className="compact-list">
            <li>
              Genelde fiilden <Key>sonra</Key> gelir: <em>Como</em>{" "}
              <Term>siempre</Term> en casa.
            </li>
            <li>
              <Term>nunca</Term> ve <Term>siempre</Term> cümle başında da
              olabilir.
            </li>
          </ul>
        </Rule>
        <Examples
          items={[
            {
              en: "Siempre estudio por la noche.",
              tr: "Her zaman geceleri çalışırım.",
              pron: "siempre estudyo por la noçe",
            },
            {
              en: "A veces salimos.",
              tr: "Bazen dışarı çıkarız.",
              pron: "a beçes salimos",
            },
          ]}
        />
      </Section>

      {/* 13) Şimdiki Süreç */}
      <Section title="13) Estar + gerundio" tr="Şimdiki Süreç (yapıyor olmak)">
        <Rule>
          <Formula
            rows={[
              [
                "kuruluş",
                "estar + V-ando / V-iendo",
                "-ar → -ando; -er/-ir → -iendo",
              ],
              ["ör.", "estoy estudiando / estamos comiendo", ""],
              [
                "dikkat",
                "leer → leyendo; dormir → durmiendo",
                "bazı düzensizler",
              ],
            ]}
          />
          <Callout type="tip" title="Kullanım notu">
            İspanyolca an’da olan eylemler için bu yapı yaygındır; fakat basit
            şimdiki de sık kullanılır. Bağlam önemlidir.
          </Callout>
        </Rule>
        <Examples
          items={[
            {
              en: "Estoy leyendo ahora.",
              tr: "Şu an okuyorum.",
              pron: "estoy leyendo ahora",
            },
            {
              en: "Ellos están trabajando.",
              tr: "Onlar çalışıyor.",
              pron: "eyyos estan trabahando",
            },
          ]}
        />
      </Section>

      {/* 14) Wh-Soruları */}
      <Section
        title="14) Interrogativos"
        tr="Soru Sözcükleri (Ne/Nerede/Neden…)"
      >
        <Rule>
          <ul className="compact-list">
            <li>
              <Term>Qué / Dónde / Cuándo / Quién / Por qué / Cómo</Term>
            </li>
            <li>
              Ters işaretler: <Key>¿ ?</Key> cümlenin başı/sonu.
            </li>
            <li>
              Olumsuzda: <Key>no + fiil</Key> — <em>¿Por qué no vienes?</em>
            </li>
          </ul>
        </Rule>
        <Examples
          items={[
            {
              en: "¿Dónde vives?",
              tr: "Nerede yaşıyorsun?",
              pron: "donde bibes",
            },
            { en: "¿Cómo estás?", tr: "Nasılsın?", pron: "komo estas" },
          ]}
        />
      </Section>

      {/* 15) Hızlı Alıştırma */}
      <Section title="15) Quick Practice" tr="Hızlı Alıştırma">
        <QuickPracticeES_A1 />
        <MiniMC_ES />
      </Section>

      {/* Scroll-to-Top */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Nach oben scrollen"
          title="Nach oben"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 4l-7 7h4v7h6v-7h4z" fill="currentColor" />
          </svg>
        </button>
      )}
    </div>
  );
}

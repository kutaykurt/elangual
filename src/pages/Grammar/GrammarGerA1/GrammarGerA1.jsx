// src/pages/Grammar/GrammarGerA1.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import "../Grammar.scss";
import { Link } from "react-router-dom";
import SectionNav from "../../../components/SectionNav/SectionNav";

/* ---------- kleine Helfer ---------- */
const Key = ({ children }) => <mark className="key">{children}</mark>;
const Term = ({ children }) => <strong className="term">{children}</strong>;

/* ---------- Abschnitt-Hülle ---------- */
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
        <strong>{ex.de}</strong> — {ex.tr}{" "}
        <span className="pron">({ex.pron})</span>
      </p>
    ))}
  </div>
);

/* ---------- Callouts / Formel / Mini-Table ---------- */
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

/* ------------------------------------------------------------------ */
/* Minimal-Accordion mit Padding-/max-height-Fix                      */
/* ------------------------------------------------------------------ */
const Pb2Item = ({ id, title, bullet, open, onToggle, children }) => {
  const innerRef = useRef(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (innerRef.current) setMaxH(innerRef.current.scrollHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [open, children]);

  return (
    <div className={`pb2-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="pb2-head"
        onClick={() => onToggle(id)}
        aria-expanded={open}
      >
        <span className="pb2-title">{title}</span>
        <span className="pb2-bullet">{bullet}</span>
        <span className="pb2-caret" aria-hidden>
          ▾
        </span>
      </button>

      <div
        className="pb2-body"
        style={{ maxHeight: open ? `${maxH}px` : 0 }}
        aria-hidden={!open}
      >
        <div ref={innerRef} className="pb2-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

/* ---------- 1) Aussprache (für TR-Muttersprachler) ---------- */
const PronunciationBasicsDE = () => {
  const ids = [
    "sch",
    "sp-st",
    "ch",
    "z-s-ss",
    "umlaut",
    "ei-eu-au",
    "ie-h-lang",
    "w-v-j",
    "r-er",
    "ig",
    "ß",
  ];
  const [openMap, setOpenMap] = useState(
    Object.fromEntries(ids.map((id) => [id, false]))
  );
  const toggle = (id) => setOpenMap((m) => ({ ...m, [id]: !m[id] }));

  return (
    <Section title="1) Pronunciation" tr="Telaffuz Kuralları (Kısa & Net)">
      <p className="explanation">
        Kurallar <strong>Türkçe kulak</strong> için sadeleştirildi. Kısayı gör,
        detay için tıkla. Yazım ≠ telaffuz; <Term>uzun/kısa ünlüler</Term> ve{" "}
        <Term>schwa</Term> (kısa <u>ı</u>) önemlidir.
      </p>

      <div className="pb2-list">
        <Pb2Item
          id="sch"
          open={openMap["sch"]}
          onToggle={toggle}
          title={
            <>
              <code>sch</code> → ş
            </>
          }
          bullet="Schule → Şule; Fisch → fiş"
        >
          <ul className="tight">
            <li>
              Schule → <code>şule</code>, stehen → <code>şteen</code>
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="sp-st"
          open={openMap["sp-st"]}
          onToggle={toggle}
          title="Wortanfang: sp / st → şp / şt"
          bullet="Sport → Şport; Straße → Ştraase"
        >
          <div className="howto">
            Kelime başında <code>sp</code>/<code>st</code> <Term>şp/şt</Term>{" "}
            olur. İçeride normal <code>sp/st</code>: <code>Wespe</code> (vespe).
          </div>
        </Pb2Item>

        <Pb2Item
          id="ch"
          open={openMap["ch"]}
          onToggle={toggle}
          title={
            <>
              <code>ch</code> iki ses
            </>
          }
          bullet="ich → ‘yumuşak h’; Bach → ‘hırıltılı h’"
        >
          <div className="howto">
            <strong>Ön ünlülerden sonra (i/e/ä/ö/ü):</strong> <code>ich</code>,{" "}
            <code>lächeln</code> → dil önde <em>yumuşak h</em> (Türkçe’de yok;{" "}
            <em>ih</em> gibi).
            <div className="ex">
              ich → <code>ih</code> · Mädchen → <code>meeh-dihin</code>
            </div>
            <strong className="mt-6">a/o/u’dan sonra:</strong> boğazdan{" "}
            <em>hırıltılı h</em>.
            <div className="ex">
              Bach → <code>bahh</code> · Buch → <code>buhh</code>
            </div>
          </div>
        </Pb2Item>

        <Pb2Item
          id="z-s-ss"
          open={openMap["z-s-ss"]}
          onToggle={toggle}
          title="z / s / ss → ts / z / s"
          bullet="Zebra → tsebra; lesen → lezen; Wasser → vasser"
        >
          <ul className="tight">
            <li>
              <code>z</code> = <strong>ts</strong>: Zeit → <code>tsayt</code>
            </li>
            <li>
              Kelime başında <code>s</code> genelde <strong>z</strong>: Sonne →{" "}
              <code>zonne</code>, sehen → <code>zeen</code>
            </li>
            <li>
              <code>ss</code> / <code>ß</code> = <strong>s</strong> (sert):
              Wasser → <code>vasser</code>
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="umlaut"
          open={openMap["umlaut"]}
          onToggle={toggle}
          title="ä / ö / ü"
          bullet="schön → şön; fünf → fünf"
        >
          <ul className="tight">
            <li>
              <strong>ö/ü</strong> Türkçedeki gibi: schön → <code>şön</code>,
              Gefühl → <code>gefüül</code>
            </li>
            <li>
              <strong>ä</strong> çoğu zaman <strong>e</strong>: spät →{" "}
              <code>şpeet</code>
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="ei-eu-au"
          open={openMap["ei-eu-au"]}
          onToggle={toggle}
          title="ei / eu(äu) / au"
          bullet="eins → ayns; neu → noy; Haus → havs"
        >
          <ul className="tight">
            <li>
              <strong>ei</strong> → <Key>ay</Key>: eins → <code>ayns</code>
            </li>
            <li>
              <strong>eu/äu</strong> → <Key>oy</Key>: neun → <code>noyn</code>
            </li>
            <li>
              <strong>au</strong> → <Key>av</Key>: Haus → <code>havs</code>
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="ie-h-lang"
          open={openMap["ie-h-lang"]}
          onToggle={toggle}
          title="ie / h: ünlüyü uzatır"
          bullet="vier → viiir; fahren → faaren"
        >
          <ul className="tight">
            <li>
              <strong>ie</strong> = uzun <u>i</u>: vier → <code>viiir</code>
            </li>
            <li>
              Ünlü + <strong>h</strong> → uzun: sehen → <code>zeeen</code>,
              fahren → <code>faaren</code>
            </li>
            <li>
              Vurgu almayan <strong>e</strong> çoğu zaman kısa <u>ı</u>: bitte →{" "}
              <code>bitı</code>
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="w-v-j"
          open={openMap["w-v-j"]}
          onToggle={toggle}
          title="w / v / j"
          bullet="w→v: Wasser; v→f: Vater; j→y: ja"
        >
          <ul className="tight">
            <li>
              <strong>w</strong> = <u>v</u>: Wasser → <code>vasser</code>
            </li>
            <li>
              <strong>v</strong> genelde <u>f</u>: Vater → <code>fater</code>{" "}
              (ama Video → <code>video</code>)
            </li>
            <li>
              <strong>j</strong> = <u>y</u>: ja → <code>ya</code>, jung →{" "}
              <code>yung</code>
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="r-er"
          open={openMap["r-er"]}
          onToggle={toggle}
          title="r (boğaz r) & -er"
          bullet="rot → ʁot; Lehrer → leera"
        >
          <div className="howto">
            Standart Almanca <strong>boğaz r</strong> (titreşim yok). Kelime
            sonunda <code>-er</code> çoğunlukla <strong>a</strong> gibi: Lehrer
            → <code>leera</code>.
          </div>
        </Pb2Item>

        <Pb2Item
          id="ig"
          open={openMap["ig"]}
          onToggle={toggle}
          title="…ig (sonda) → ‘ih’"
          bullet="könig → könih"
        >
          <div className="howto">
            Sonundaki <code>ig</code> genelde <em>ich</em>-sesine döner: König →{" "}
            <code>könih</code>, ruhig → <code>ruhih</code>.
          </div>
        </Pb2Item>

        <Pb2Item
          id="ß"
          open={openMap["ß"]}
          onToggle={toggle}
          title="ß = ss (sert s)"
          bullet="Straße → ştraase"
        >
          <div className="howto">
            <code>ß</code> = uzun ünlü + sert <u>s</u>: Straße →{" "}
            <code>ştraase</code>.
          </div>
        </Pb2Item>
      </div>

      <div className="pb-table-wrap">
        <table className="g-table">
          <thead>
            <tr>
              <th>Kelime</th>
              <th>TR yazımı (yaklaşık)</th>
              <th>Türkçe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ich</td>
              <td>ih</td>
              <td>ben</td>
            </tr>
            <tr>
              <td>Haus</td>
              <td>havs</td>
              <td>ev</td>
            </tr>
            <tr>
              <td>schön</td>
              <td>şön</td>
              <td>güzel</td>
            </tr>
            <tr>
              <td>Zeit</td>
              <td>tsayt</td>
              <td>zaman</td>
            </tr>
            <tr>
              <td>Lehrer</td>
              <td>leera</td>
              <td>öğretmen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

/* ---------- Übung yardımcıları ---------- */
function normalize(s = "") {
  return s.toLowerCase().replaceAll("’", "'").replace(/\s+/g, " ").trim();
}

/* ---------- Quick Practice (DE A1) ---------- */
const PRACTICE_ITEMS_DE = [
  {
    id: "sein-ich",
    promptBefore: "Ergänze: Ich ",
    promptAfter: " Student.",
    answers: ["bin"],
    distractors: ["bin", "ist", "bist"],
  },
  {
    id: "sein-sie",
    promptBefore: "Ergänze: Sie (o) ",
    promptAfter: " müde.",
    answers: ["ist"],
    distractors: ["ist", "sind", "bist"],
  },
  {
    id: "artikel-ein",
    promptBefore: "Artikel: Das ist ",
    promptAfter: " Auto.",
    answers: ["ein"],
    distractors: ["eine", "ein", "der"],
  },
  {
    id: "artikel-eine",
    promptBefore: "Artikel: Ich habe ",
    promptAfter: " Frage.",
    answers: ["eine"],
    distractors: ["ein", "eine", "die"],
  },
  {
    id: "wordorder",
    promptBefore: "Stellung: Heute ",
    promptAfter: " ich zu Hause.",
    answers: ["bin"],
    distractors: ["bin", "ich bin", "bin ich"],
  },
  {
    id: "frage-ja-nein",
    promptBefore: "Frage: ",
    promptAfter: " du aus der Türkei?",
    answers: ["Kommst"],
    distractors: ["Kommst", "Kommst du", "Kommst du?"],
  },
  {
    id: "nicht-kein",
    promptBefore: "Negation: Ich habe ",
    promptAfter: " Zeit.",
    answers: ["keine"],
    distractors: ["nicht", "kein", "keine"],
  },
  {
    id: "modal-konnen",
    promptBefore: "Modal: Wir ",
    promptAfter: " Deutsch sprechen.",
    answers: ["können"],
    distractors: ["kann", "können", "könnt"],
  },
];

function QuickPracticeDE_A1() {
  const [values, setValues] = useState(() =>
    Object.fromEntries(PRACTICE_ITEMS_DE.map((i) => [i.id, ""]))
  );
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const r = {};
    PRACTICE_ITEMS_DE.forEach((it) => {
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
    setValues(Object.fromEntries(PRACTICE_ITEMS_DE.map((i) => [i.id, ""])));
    setSubmitted(false);
  };
  const hint = (opts = []) => (opts.length ? `(${opts.join(" / ")})` : "");

  return (
    <div className="qp">
      <div className="qp-list">
        {PRACTICE_ITEMS_DE.map((it, idx) => {
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
              {correctCount} / {PRACTICE_ITEMS_DE.length} doğru
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

/* ---------- Mini-MC (DE) ---------- */
const MC_ITEMS_DE = [
  {
    q: "Ja/Nein-Frage nasıl kurulur?",
    choices: ["Özne + Verb + ...", "Verb + Özne + ...", "Wort am Ende hoch"],
    correctIndex: 1,
    tr: "Verb başa: Kommst du aus Berlin?",
  },
  {
    q: "Hauptsatzta fiilin yeri?",
    choices: ["Her zaman 2. pozisyon", "Sonda", "Başta"],
    correctIndex: 0,
    tr: "V2 kuralı: Ich komme aus Izmir. Heute komme ich spät.",
  },
  {
    q: "‘kein/keine’ ne zaman?",
    choices: ["isim + artikel yok", "sıfat için", "fiilden önce"],
    correctIndex: 0,
    tr: "kein = artikelin olumsuzu (ein/eine). nicht = fiil/sıfat/tümce.",
  },
];

function MiniMC_DE() {
  const [answers, setAnswers] = useState({});
  return (
    <div className="mini-mc">
      {MC_ITEMS_DE.map((it, i) => {
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
export default function GrammarGerA1() {
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
        <b>A1 Almanca</b>: kısa kurallar, net örnekler ve{" "}
        <strong>Türk kulağına göre telaffuz</strong>. <Key>Kalın vurgular</Key>{" "}
        kritik noktaları öne çıkarır.
      </p>

      <div className="conversation-invite">
        <b>Gerçek konuşmalarla pratik ister misin?</b>{" "}
        <Link to="/a1-conversations-de" className="invite-link">
          Buraya tıkla →
        </Link>
      </div>

      {/* 1) Telaffuz */}
      <PronunciationBasicsDE />

      {/* 2) Zamirler */}
      <Section title="2) Personalpronomen" tr="Özne Zamirleri">
        <Rule>
          <Term>ich, du, er, sie, es, wir, ihr, sie/Sie</Term>. <Key>Sie</Key>{" "}
          (büyük) = resmî “siz”.
        </Rule>

        <MiniTable
          head={["DE", "TR telaffuz", "Türkçe"]}
          rows={[
            ["ich", "ih", "ben"],
            ["du", "du", "sen"],
            ["er / sie / es", "ea / zi / es", "o (e/k/nesne)"],
            ["wir", "viir", "biz"],
            ["ihr", "iir", "siz"],
            ["sie / Sie", "zi", "onlar / Siz (resmî)"],
          ]}
        />

        <Examples
          items={[
            { de: "Ich bin Ali.", tr: "Ben Ali’yim.", pron: "ih bin ali" },
            {
              de: "Sie ist müde.",
              tr: "O (kadın) yorgun.",
              pron: "zi ist myüde",
            },
          ]}
        />
      </Section>

      {/* 3) sein */}
      <Section title="3) Verb 'sein' (to be)" tr="Olmak fiili: sein">
        <Rule>
          <Formula
            rows={[
              ["çekim", "bin, bist, ist, sind, seid, sind", ""],
              ["olumsuz", "nicht", "Ich bin nicht müde."],
              ["soru", "Verb + Özne", "Bist du müde? Ja/Nein."],
            ]}
          />
        </Rule>

        <Examples
          items={[
            {
              de: "Ich bin Lehrer.",
              tr: "Ben öğretmenim.",
              pron: "ih bin leera",
            },
            {
              de: "Wir sind hier.",
              tr: "Biz buradayız.",
              pron: "viir zint hiir",
            },
          ]}
        />
      </Section>

      {/* 4) Artikeller */}
      <Section title="4) Artikel" tr="Artikel: der/die/das — ein/eine">
        <Rule>
          <MiniTable
            head={["Tür", "Belirli", "Belirtisiz", "Örnek"]}
            rows={[
              ["Mask.", "der", "ein", "der Mann / ein Mann"],
              ["Fem.", "die", "eine", "die Frau / eine Frau"],
              ["Neutr.", "das", "ein", "das Kind / ein Kind"],
              ["Çoğul", "die", "—", "die Bücher"],
            ]}
          />
          <p className="note">
            <Key>kein/keine</Key> = <em>ein/eine</em>’nin olumsuzu: Ich habe{" "}
            <strong>kein</strong> Auto.
          </p>
        </Rule>
      </Section>

      {/* 5) Wortstellung & Präsens */}
      <Section title="5) Wortstellung + Präsens" tr="Dizilim & Geniş Zaman">
        <Rule>
          <Formula
            rows={[
              ["Hauptsatz", "Özne + Verb(2) + ...", "Ich lerne Deutsch."],
              [
                "Zaman/yer başta",
                "T/Ort + Verb + Özne + ...",
                "Heute lerne ich zu Hause.",
              ],
              ["Ja/Nein-Frage", "Verb + Özne + ... ?", "Kommst du aus Izmir?"],
            ]}
          />
        </Rule>

        <Examples
          items={[
            {
              de: "Ich arbeite in Ankara.",
              tr: "Ankara’da çalışıyorum.",
              pron: "ih arbaayte in ankəra",
            },
            {
              de: "Heute gehe ich nicht.",
              tr: "Bugün gitmiyorum.",
              pron: "hoyte gee ih niht",
            },
          ]}
        />
      </Section>

      {/* 6) Possessivartikel */}
      <Section title="6) Possessivartikel" tr="İyelik Artikelleri">
        <Rule>
          <MiniTable
            head={["Sahip", "Biçim (Nom.)", "Örnek"]}
            rows={[
              ["ich", "mein(e)", "mein Auto / meine Frage"],
              ["du", "dein(e)", "dein Freund"],
              ["er/sie/es", "sein(e)/ihr(e)/sein(e)", "sein Buch / ihr Kind"],
              ["wir", "unser(e)", "unsere Schule"],
              ["ihr", "euer(e)", "euer Lehrer / eure Lehrerin"],
              ["sie/Sie", "ihr(e)/Ihr(e)", "ihr Haus / Ihre Frage"],
            ]}
          />
        </Rule>
      </Section>

      {/* 7) Modal: können */}
      <Section title="7) Modalverben: können" tr="Yetenek: können">
        <Rule>
          <Formula
            rows={[
              [
                "kuruluş",
                "Özne + können + ... (V sonda)",
                "Ich kann Deutsch sprechen.",
              ],
              ["çekim", "kann, kannst, kann, können, könnt, können", ""],
            ]}
          />
        </Rule>

        <Examples
          items={[
            {
              de: "Kannst du langsam sprechen?",
              tr: "Yavaş konuşabilir misin?",
              pron: "kanst du langsam şprehen",
            },
            {
              de: "Wir können heute nicht.",
              tr: "Bugün yapamayız.",
              pron: "viir könen hoyte niht",
            },
          ]}
        />
      </Section>

      {/* 8) W-Fragen */}
      <Section title="8) W-Fragen" tr="Soru sözcükleri">
        <Rule>
          <ul className="compact-list">
            <li>
              <Term>Wer / Was / Wo / Wann / Warum / Wie</Term>
            </li>
            <li>
              <Key>W-Wort + Verb + Özne + ... ?</Key> — Wo wohnst du?
            </li>
          </ul>
        </Rule>
        <Examples
          items={[
            {
              de: "Wo arbeitest du?",
              tr: "Nerede çalışıyorsun?",
              pron: "vo arbaaytest du",
            },
            { de: "Wie heißt du?", tr: "Adın ne?", pron: "vi hayst du" },
          ]}
        />
      </Section>

      {/* 9) Hızlı Alıştırma */}
      <Section title="9) Quick Practice" tr="Hızlı Alıştırma">
        <QuickPracticeDE_A1 />
        <MiniMC_DE />
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

import React, { useMemo, useState, useEffect, useRef } from "react";
import "../Grammar.scss";
import { Link } from "react-router-dom";
import SectionNav from "../../../components/SectionNav/SectionNav";
import JumpRow from "../../../components/JumpRow/JumpRow";

/* ---------- Kleine UI-Helfer für Hervorhebungen ---------- */
const Key = ({ children }) => <mark className="key">{children}</mark>;
const Term = ({ children }) => <strong className="term">{children}</strong>;

/* ---------- Hilfs-Hook: Vor/Zurück-Abschnitt aus DOM ermitteln ---------- */
function useSectionMeta(sectionId) {
  const [meta, setMeta] = useState({ prev: null, next: null });

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".g-section")).map(
      (el, i) => {
        const h = el.querySelector("h2");
        const raw = h?.textContent?.trim() || `Abschnitt ${i + 1}`;
        const noParen = raw.replace(/\s*\([^)]*\)\s*$/, "");
        const clean = noParen.replace(/^\s*\d+\)\s*/, "").trim();
        return { id: el.id, idx: i + 1, raw, title: clean };
      }
    );
    const idx = sections.findIndex((s) => s.id === sectionId);
    setMeta({
      prev: sections[idx - 1] || null,
      next: sections[idx + 1] || null,
    });
  }, [sectionId]);

  return meta;
}

/* ---------- Bausteine ---------- */
const Section = ({ title, tr, children }) => {
  const isStringTitle = typeof title === "string";
  const match = isStringTitle ? title.match(/^\s*(\d+)\)\s*/) : null;
  const num = match ? `${match[1]}) ` : "";
  const cleanTitle = match ? title.replace(/^\s*\d+\)\s*/, "") : title;

  const sectionId = cleanTitle
    ?.toString()
    .toLowerCase()
    .replace(/[^\w]+/g, "-");
  const meta = useSectionMeta(sectionId);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const cssVal = getComputedStyle(document.documentElement)
      .getPropertyValue("--header-h")
      .trim();
    const headerH = Number.isFinite(parseFloat(cssVal))
      ? parseFloat(cssVal)
      : 0;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 6;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="g-section" id={sectionId}>
      <h2>
        {num}
        {tr} <span className="en-tag">({cleanTitle})</span>
      </h2>
      {children}

      <div className="section-foot">
        {meta.prev ? (
          <button
            className="sec-nav ghost"
            onClick={() => scrollToId(meta.prev.id)}
          >
            ← Abschnitt {meta.prev.idx} – {meta.prev.title}
          </button>
        ) : (
          <span />
        )}
        {meta.next && (
          <button
            className="sec-nav primary"
            onClick={() => scrollToId(meta.next.id)}
          >
            Weiter mit Abschnitt {meta.next.idx} – {meta.next.title} →
          </button>
        )}
      </div>
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

/* ---------- Callouts, Formeln, Mini-Tabellen ---------- */
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
/*   Minimalistische Accordion-Zeile (pb2)                             */
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

/* ---------- Aussprache (minimal) ---------- */
const PronunciationBasics = () => {
  const ids = ["th", "i", "w", "r", "o-ou", "schwa"];
  const [openMap, setOpenMap] = useState(
    Object.fromEntries(ids.map((id) => [id, false]))
  );
  const toggle = (id) => setOpenMap((m) => ({ ...m, [id]: !m[id] }));

  return (
    <Section title="1) Pronunciation" tr="Telaffuz Kuralları (Hızlı ve Net)">
      <p className="intro" style={{ marginBottom: 8 }}>
        Türkçe konuşanlar için sadeleştirilmiş kısa kurallar. Kısayı gör,
        ayrıntıyı açmak için tıkla.
      </p>

      <div className="pb2-list">
        <Pb2Item
          id="th"
          open={openMap["th"]}
          onToggle={toggle}
          title={
            <>
              <code>th</code> — iki ses
            </>
          }
          bullet="this/that → d; think/thanks → t"
        >
          <div className="howto">
            <strong>Yumuşak th → d:</strong> Dil ucu ön dişlere hafifçe değsin.
            <div className="ex">
              this → <code>dıs</code> · the → <code>dı</code> · that →{" "}
              <code>det</code>
            </div>
            <div className="dont">
              Yanlış: <code>dis</code>, <code>zıs</code>
            </div>
          </div>
          <div className="howto mt-6">
            <strong>Sert th → t:</strong> Aynı pozisyon, Türkçe <u>t</u>.
            <div className="ex">
              think → <code>tink</code> · thanks → <code>tenks</code> · three →{" "}
              <code>trii</code>
            </div>
            <div className="dont">
              Yanlış: <code>sink</code>, <code>zrii</code>
            </div>
          </div>
        </Pb2Item>

        <Pb2Item
          id="i"
          open={openMap["i"]}
          onToggle={toggle}
          title="Kısa i & Uzun ii"
          bullet="this → dıs; she → şii"
        >
          <ul className="tight">
            <li>
              <strong>Kısa i</strong> → Türkçe <u>ı</u>: this/is/sit →{" "}
              <code>dıs/ız/sıt</code>
            </li>
            <li>
              <strong>Uzun ii</strong> → <u>ii</u>: she/see/need →{" "}
              <code>şii/sii/niid</code>
            </li>
          </ul>
          <div className="dont">
            Yanlış: <code>this → dis</code>, <code>she → şe</code>
          </div>
        </Pb2Item>

        <Pb2Item
          id="w"
          open={openMap["w"]}
          onToggle={toggle}
          title={
            <>
              <code>w</code> = v
            </>
          }
          bullet="we → vii; work → vörk"
        >
          <div className="howto">
            Dudaklar yuvarlak başlar; ses Türkçe <u>v</u>’ye yakındır.
            <div className="ex">
              we → <code>vii</code> · work → <code>vörk</code> · water →{" "}
              <code>votır</code>
            </div>
          </div>
        </Pb2Item>

        <Pb2Item
          id="r"
          open={openMap["r"]}
          onToggle={toggle}
          title="İngilizce r (yumuşak)"
          bullet="work/word/bird → vörk/vörd/börd"
        >
          <div className="howto">
            Sert, titreşimli r yok. “or/er/ir/ur” heceleri <u>ör/ır</u> rengine
            kayar.
            <div className="ex">
              work → <code>vörk</code> · word → <code>vörd</code> · bird →{" "}
              <code>börd</code>
            </div>
            <div className="dont">
              Yanlış: <code>vork</code>, <code>verrk</code>
            </div>
          </div>
        </Pb2Item>

        <Pb2Item
          id="o-ou"
          open={openMap["o-ou"]}
          onToggle={toggle}
          title="o vs. ou"
          bullet="go → gou; hot → hat"
        >
          <ul className="tight">
            <li>
              <strong>ou</strong>: go/no → <code>gou/nou</code>
            </li>
            <li>
              <strong>o</strong> kısa: hot/not → <code>hat/nat</code>
            </li>
          </ul>
          <div className="ex">
            coffee → <code>kofi</code> (ilk hece kısa)
          </div>
        </Pb2Item>

        <Pb2Item
          id="schwa"
          open={openMap["schwa"]}
          onToggle={toggle}
          title="Zayıf hece = kısa ı"
          bullet="teacher → tiiçır; about → ıbaut"
        >
          <div className="howto">
            Vurgu almayan a/e/o/u çoğu zaman kısa <u>ı</u> olur.
            <div className="ex">
              teacher → <code>tiiçır</code> · banana → <code>bınana</code> ·
              problem → <code>problım</code> · about → <code>ıbaut</code>
            </div>
          </div>
        </Pb2Item>
      </div>

      <div className="pb-table-wrap">
        <table className="g-table">
          <thead>
            <tr>
              <th>Kelime</th>
              <th>Doğru Yazım (TR)</th>
              <th>Türkçe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>this</td>
              <td>dıs</td>
              <td>bu</td>
            </tr>
            <tr>
              <td>work</td>
              <td>vörk</td>
              <td>çalışmak</td>
            </tr>
            <tr>
              <td>water</td>
              <td>votır</td>
              <td>su</td>
            </tr>
            <tr>
              <td>teacher</td>
              <td>tiiçır</td>
              <td>öğretmen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

/* ---------- Übung (TR yönergeler) ---------- */
function normalize(s = "") {
  return s.toLowerCase().replaceAll("’", "'").replace(/\s+/g, " ").trim();
}

const PRACTICE_ITEMS = [
  {
    id: "be-am",
    promptBefore: "Doldur: I ",
    promptAfter: " a student.",
    answers: ["am"],
    distractors: ["is", "am", "are"],
  },
  {
    id: "3sg-s",
    promptBefore: "Seç: She ",
    promptAfter: " at a bank.",
    answers: ["works"],
    distractors: ["work", "works", "is work"],
  },
  {
    id: "be-neg",
    promptBefore: "Olumsuz yap: They are happy. → They ",
    promptAfter: " happy.",
    answers: ["aren't", "are not"],
    distractors: ["isn't", "aren't", "am not"],
  },
  {
    id: "do-q",
    promptBefore: "Soru sor: You like coffee. → ",
    promptAfter: " you like coffee?",
    answers: ["do"],
    distractors: ["does", "do", "are"],
  },
  {
    id: "an-article",
    promptBefore: "Artikel seç: I have ",
    promptAfter: " umbrella.",
    answers: ["an"],
    distractors: ["a", "the", "an"],
  },
  {
    id: "doesnt",
    promptBefore: "Tamamla: He ",
    promptAfter: " like tea.",
    answers: ["doesn't"],
    distractors: ["don't", "doesn't", "isn't"],
  },
  {
    id: "has",
    promptBefore: "Doldur: She ",
    promptAfter: " two brothers.",
    answers: ["has"],
    distractors: ["have", "has", "haves"],
  },
  {
    id: "there-are",
    promptBefore: "Doldur: ",
    promptAfter: " many cars in the street.",
    answers: ["There are"],
    distractors: ["There is", "There are"],
  },
  {
    id: "can",
    promptBefore: "Doldur: I ",
    promptAfter: " swim.",
    answers: ["can"],
    distractors: ["can", "am", "do"],
  },
  {
    id: "freq",
    promptBefore: "Doldur: She ",
    promptAfter: " always cooks.",
    answers: [""],
    distractors: ["is", "(boş)", "does"],
  },
];

function QuickPracticeEN_A1() {
  const [values, setValues] = useState(() =>
    Object.fromEntries(PRACTICE_ITEMS.map((i) => [i.id, ""]))
  );
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const r = {};
    PRACTICE_ITEMS.forEach((it) => {
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
    setValues(Object.fromEntries(PRACTICE_ITEMS.map((i) => [i.id, ""])));
    setSubmitted(false);
  };
  const hint = (opts = []) => (opts.length ? `(${opts.join(" / ")})` : "");

  return (
    <div className="qp">
      <div className="qp-list">
        {PRACTICE_ITEMS.map((it, idx) => {
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
              {correctCount} / {PRACTICE_ITEMS.length} doğru
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

/* ---------- Mini-Choice ---------- */
const MC_ITEMS = [
  {
    q: "Simple Present için işaret sözcükleri hangileri?",
    choices: [
      "yesterday, last week",
      "every day, usually, always",
      "now, at the moment",
    ],
    correctIndex: 1,
    tr: "Geniş zaman sinyalleri: every day, usually, always…",
  },
  {
    q: "3. tekil kişi kuralı (He/She/It) nedir?",
    choices: ["fiil + s/es/ies", "değişmez", "fiil + ing"],
    correctIndex: 0,
    tr: "He/She/It → fiile -s/-es/-ies eklenir.",
  },
  {
    q: "Be fiilinde soru kurarken ne olur?",
    choices: [
      "Özne başa gelir",
      "Be başa gelir (Am/Is/Are)",
      "Do/Does başa gelir",
    ],
    correctIndex: 1,
    tr: "Be-questions: Am/Is/Are + Özne…",
  },
];

function MiniMC() {
  const [answers, setAnswers] = useState({});
  return (
    <div className="mini-mc">
      {MC_ITEMS.map((it, i) => {
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

/* ---------- Seite ---------- */
export default function GrammarEnA1() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="g-doc grammar-page">
      <SectionNav />
      <JumpRow />

      <p className="intro">
        <b>A1 İngilizce</b> kısa kurallar, net örnekler, doğru telaffuz ve{" "}
        <strong>hata uyarıları</strong>. <Key>Kalın/renkli vurgular</Key> kritik
        noktaları akılda kalıcı yapar.
        <br />
      </p>

      <div className="conversation-invite">
        <b>Gerçek konuşmalarla pratik yapmak ister misin? </b>
        <Link to="/a1-conversations" className="invite-link">
          Buraya tıkla →
        </Link>
      </div>

      <PronunciationBasics />

      {/* 1) Özne Zamirleri */}
      <Section title="2) Subject Pronouns" tr="Özne Zamirleri">
        <Rule>
          İngilizce özneler: <Term>I, you, he, she, it, we, you, they</Term>.
          Türkçedeki “o” İngilizcede <Term>he/she/it</Term> olarak ayrılır.
          <br />
          <Term>you</Term> tekil & çoğul olabilir; <Term>it</Term> nesne/hayvan
          ve bazen “görünen özne” (hava, saat).
        </Rule>

        <table className="g-table">
          <thead>
            <tr>
              <th>İngilizce</th>
              <th>Telaffuz (TR)</th>
              <th>Türkçe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>ay</td>
              <td>ben</td>
            </tr>
            <tr>
              <td>you</td>
              <td>yu</td>
              <td>sen / siz</td>
            </tr>
            <tr>
              <td>he</td>
              <td>hii</td>
              <td>o (erkek)</td>
            </tr>
            <tr>
              <td>she</td>
              <td>şii</td>
              <td>o (kadın)</td>
            </tr>
            <tr>
              <td>it</td>
              <td>ıt</td>
              <td>o (nesne/hayvan)</td>
            </tr>
            <tr>
              <td>we</td>
              <td>vii</td>
              <td>biz</td>
            </tr>
            <tr>
              <td>they</td>
              <td>dey</td>
              <td>onlar</td>
            </tr>
          </tbody>
        </table>

        <Examples
          items={[
            { en: "It is cold.", tr: "Hava soğuk.", pron: "ıt ız kould" },
            { en: "They are here.", tr: "Onlar burada.", pron: "dey ar hir" },
          ]}
        />
      </Section>

      {/* 2) To be */}
      <Section
        title='3) Verb "to be": am / is / are'
        tr="“to be” fiili: am / is / are"
      >
        <Rule>
          <Term>Kuruluş</Term>
          <Formula
            rows={[
              [
                "Olumlu",
                "Özne + am/is/are + ...",
                "I am / You are / He is ...",
              ],
              ["Olumsuz", "Özne + am not / isn’t / aren’t + ...", ""],
              [
                "Soru",
                "Am/Is/Are + Özne + ... ?",
                "Kısa cevaplar: Yes, I am. / No, he isn’t.",
              ],
            ]}
          />
        </Rule>

        <MiniTable
          head={["Özne", "Form", "TR İpucu"]}
          rows={[
            ["I", <Key>am</Key>, "Sadece I → am"],
            ["you/we/they", <Key>are</Key>, "çoğul/you → are"],
            ["he/she/it", <Key>is</Key>, "tekil üçüncü şahıs → is"],
          ]}
        />

        <Examples
          items={[
            { en: "I am tired.", tr: "Yorgunum.", pron: "ay em tayırd" },
            { en: "He is at home.", tr: "O evde.", pron: "hii ız et houm" },
            {
              en: "We are friends.",
              tr: "Biz arkadaşız.",
              pron: "vii ar frendz",
            },
            {
              en: "She isn’t busy.",
              tr: "O meşgul değil.",
              pron: "şii ızınt bızi",
            },
            {
              en: "Are they teachers?",
              tr: "Onlar öğretmen mi?",
              pron: "ar dey tiiçırz",
            },
          ]}
        />

        <Callout type="tip" title="Kısa cevaplar">
          <Term>Yes, I am / No, I’m not</Term> ·{" "}
          <Term>Yes, he is / No, he isn’t</Term> ·{" "}
          <Term>Yes, they are / No, they aren’t</Term>
        </Callout>
      </Section>

      {/* 3) İyelik Sıfatları */}
      <Section title="4) Possessive Adjectives" tr="İyelik Sıfatları">
        <Rule>
          Sahiplik: <Term>my, your, his, her, its, our, your, their</Term> —{" "}
          <Key>isimden önce</Key> gelir.
        </Rule>

        <MiniTable
          head={["Sahip", "Biçim", "Türkçe"]}
          rows={[
            ["I", "my", "benim"],
            ["you", "your", "senin/sizin"],
            ["he", "his", "onun (erkek)"],
            ["she", "her", "onun (kadın)"],
            ["it", "its", "onun (nesne/hayvan)"],
            ["we", "our", "bizim"],
            ["you", "your", "sizlerin"],
            ["they", "their", "onların"],
          ]}
        />

        <Examples
          items={[
            {
              en: "This is my car.",
              tr: "Bu benim arabam.",
              pron: "dıs ız may kar",
            },
            {
              en: "Her name is Ayşe.",
              tr: "Onun adı Ayşe.",
              pron: "hır neym ız ayşe",
            },
            {
              en: "Their house is big.",
              tr: "Onların evi büyük.",
              pron: "der haus ız bıg",
            },
          ]}
        />

        <Callout type="error" title="Hata: its ≠ it’s">
          <Term>its</Term> = onun (iyelik). <Term>it’s</Term> = it is / it has
          (kısaltma).
        </Callout>
      </Section>

      {/* 4) Artikeller */}
      <Section
        title="5) Articles: a / an / the"
        tr="Belirtisiz/Belirli Artikeller"
      >
        <Rule>
          <Formula
            rows={[
              [
                "Belirtisiz",
                <>
                  <Term>a</Term> + ünsüz sesi / <Term>an</Term> + ünlü sesi
                </>,
                "a book, a dog / an apple, an hour",
              ],
              [
                "Belirli",
                <>
                  <Term>the</Term> + bilinen/özgül şey
                </>,
                "the book on the table",
              ],
              [
                "Sıfır artikel",
                "çoğul & sayılamayan genel",
                "Milk is healthy. Books are expensive.",
              ],
            ]}
          />
        </Rule>

        <Examples
          items={[
            {
              en: "I have a brother.",
              tr: "Bir erkek kardeşim var.",
              pron: "ay hev ı bradır",
            },
            {
              en: "She eats an apple.",
              tr: "O bir elma yer.",
              pron: "şii iits en epıl",
            },
            {
              en: "Open the door, please.",
              tr: "Lütfen kapıyı aç.",
              pron: "oupın dı dor pliiz",
            },
            {
              en: "Sugar is sweet.",
              tr: "Şeker tatlıdır.",
              pron: "şugır iz sviit",
            },
          ]}
        />
      </Section>

      {/* 5) Simple Present + Dizilim */}
      <Section
        title="6) Basic Word Order & Simple Present"
        tr="Temel Dizilim & Geniş Zaman"
      >
        <Rule>
          <Formula
            rows={[
              [
                "Dizilim",
                <>
                  <Term>Özne + Fiil + Nesne</Term>
                </>,
                "I play football.",
              ],
              [
                "Olumsuz",
                <>
                  <Term>Özne + do/does + not + Fiil1</Term>
                </>,
                "She doesn’t like tea.",
              ],
              [
                "Soru",
                <>
                  <Term>Do/Does + Özne + Fiil1 ?</Term>
                </>,
                "Does he live in Izmir?",
              ],
            ]}
          />
        </Rule>

        <Callout type="tip" title="He/She/It kural paketi">
          <ul className="compact-list">
            <li>
              Fiile <Term>-s</Term> gelir: play → plays
            </li>
            <li>
              <Term>-es</Term>: -ch/-sh/-o/-x/-ss → go → goes, watch → watches
            </li>
            <li>
              <Term>-ies</Term>: <em>ünsüz + y</em> → study → studies
            </li>
            <li>
              <Term>have → has</Term>
            </li>
            <li>
              <Key>does/doesn’t varsa fiil temel kalır</Key>:{" "}
              <em>doesn’t go</em> ✅ <em>doesn’t goes</em> ❌
            </li>
          </ul>
        </Callout>

        <Examples
          items={[
            {
              en: "I work every day.",
              tr: "Her gün çalışırım.",
              pron: "ay vörk evri dey",
            },
            {
              en: "He plays football.",
              tr: "O futbol oynar.",
              pron: "hii pleyz futbol",
            },
            {
              en: "She doesn’t like tea.",
              tr: "O çayı sevmez.",
              pron: "şii dazınt layk tii",
            },
            {
              en: "Do you live in Ankara?",
              tr: "Ankara’da mı yaşıyorsun?",
              pron: "du yu lıv ın Ankara",
            },
          ]}
        />

        <Callout type="tip" title="Sinyal sözcükler (genelde Simple Present)">
          <Term>
            every day / usually / always / never / often / sometimes / on
            Mondays
          </Term>
        </Callout>

        <Callout type="error" title="Yaygın hatalar">
          <ul className="compact-list">
            <li>
              <em>He don’t like…</em> ❌ → <Term>He doesn’t like…</Term> ✅
            </li>
            <li>
              <em>She doesn’t likes…</em> ❌ → <Term>She doesn’t like…</Term> ✅
            </li>
            <li>
              <em>He have…</em> ❌ → <Term>He has…</Term> ✅
            </li>
          </ul>
        </Callout>
      </Section>

      {/* 6) Objektpronomen */}
      <Section title="7) Object Pronouns" tr="Nesne Zamirleri">
        <Rule>
          Özne → Nesne dönüşümü: <Key>I → me</Key>, <Key>you → you</Key>,{" "}
          <Key>he → him</Key>, <Key>she → her</Key>, <Key>it → it</Key>,{" "}
          <Key>we → us</Key>, <Key>they → them</Key>.
        </Rule>
        <Examples
          items={[
            {
              en: "I know her.",
              tr: "Onu (kadın) tanıyorum.",
              pron: "ay nou hör",
            },
            {
              en: "They help us.",
              tr: "Bize yardım ederler.",
              pron: "dey help as",
            },
          ]}
        />
      </Section>

      {/* 7) Possessive ’s */}
      <Section title="8) Possessive - ’s / of" tr="İyelik: ’s / of">
        <Rule>
          <Term>’s</Term> genelde insanlar/tekil isimler: <Key>Ayşe’s book</Key>
          . <Term>of</Term> genelde uzun/nesne:{" "}
          <Key>the name of the street</Key>.
        </Rule>
        <Examples
          items={[
            {
              en: "Ali’s car is new.",
              tr: "Ali’nin arabası yeni.",
              pron: "aliz kar iz nüu",
            },
            {
              en: "The roof of the house is old.",
              tr: "Evin çatısı eski.",
              pron: "dı ruuf ov dı haus iz old",
            },
          ]}
        />
      </Section>

      {/* 8) There is/are + some/any */}
      <Section title="9) There is / There are" tr="Var/Yok yapısı + some/any">
        <Rule>
          <Formula
            rows={[
              [
                "Olumlu",
                <>
                  <Term>There is</Term> (tekil) / <Term>There are</Term> (çoğul)
                </>,
                "There is a cat. / There are two cats.",
              ],
              ["Olumsuz", "There isn’t / There aren’t", ""],
              [
                "Soru",
                "Is there…? / Are there…?",
                "Yes, there is/are. / No, there isn’t/aren’t.",
              ],
            ]}
          />
          <p className="note">
            <Key>some</Key> (olumlu) · <Key>any</Key> (olumsuz/soru) ·{" "}
            <Key>a lot of</Key> (çok).
          </p>
        </Rule>
        <Examples
          items={[
            {
              en: "There is a book on the table.",
              tr: "Masada bir kitap var.",
              pron: "der iz ı buk on dı teybıl",
            },
            {
              en: "Are there any chairs?",
              tr: "Hiç sandalye var mı?",
              pron: "ar der eni çerz",
            },
          ]}
        />
      </Section>

      {/* 9) Demonstratives */}
      <Section
        title="10) Demonstratives"
        tr="İşaret Zamirleri: this/that/these/those"
      >
        <Rule>
          Yakın/uzak ve tekil/çoğul: <Key>this (bu)</Key>,{" "}
          <Key>that (şu/o)</Key>, <Key>these (bunlar)</Key>,{" "}
          <Key>those (şunlar/onlar)</Key>.
        </Rule>
        <Examples
          items={[
            {
              en: "This is my phone.",
              tr: "Bu benim telefonum.",
              pron: "dis iz may foun",
            },
            { en: "Those are new.", tr: "Şunlar yeni.", pron: "dooz ar nüu" },
          ]}
        />
      </Section>

      {/* 10) Prepositions of place */}
      <Section title="11) Prepositions of Place" tr="Yer Edatları">
        <Rule>
          Temel eşleşmeler: <Key>in (içinde)</Key>, <Key>on (üstünde)</Key>,{" "}
          <Key>under (altında)</Key>, <Key>next to (yanında)</Key>,{" "}
          <Key>behind (arkasında)</Key>, <Key>in front of (önünde)</Key>,{" "}
          <Key>between (arasında)</Key>.
        </Rule>
        <Examples
          items={[
            {
              en: "The keys are on the table.",
              tr: "Anahtarlar masanın üstünde.",
              pron: "dı kiiz ar on dı teybıl",
            },
            {
              en: "The cat is under the chair.",
              tr: "Kedi sandalyenin altında.",
              pron: "dı ket iz andır dı çer",
            },
          ]}
        />
      </Section>

      {/* 11) can / can’t */}
      <Section title="12) Can / Can’t" tr="Yetenek ve rica">
        <Rule>
          <Formula
            rows={[
              [
                "Olumlu",
                <>
                  <Term>Özne + can + Fiil1</Term>
                </>,
                "I can swim.",
              ],
              [
                "Olumsuz",
                <>
                  <Term>Özne + can’t + Fiil1</Term>
                </>,
                "She can’t drive.",
              ],
              [
                "Soru",
                <>
                  <Term>Can + Özne + Fiil1 ?</Term>
                </>,
                "Can you help me?",
              ],
            ]}
          />
          <p className="note">
            <Key>can</Key> kısalmaz; üçüncü şahısta da değişmez (he/she/it{" "}
            <Key>can</Key>).
          </p>
        </Rule>
        <Examples
          items={[
            {
              en: "Can you speak English?",
              tr: "İngilizce konuşabiliyor musun?",
              pron: "ken yu spiik ingliş",
            },
            {
              en: "He can’t come today.",
              tr: "O bugün gelemez.",
              pron: "hi kent kam tüdey",
            },
          ]}
        />
      </Section>

      {/* 12) Adverbs of frequency */}
      <Section title="13) Adverbs of Frequency" tr="Sıklık Zarfları (yerleşim)">
        <Rule>
          <p>
            <Key>always, usually, often, sometimes, rarely, never</Key>
          </p>
          <ul className="compact-list">
            <li>
              <Term>Be</Term> ile: <Key>Önce zarf, sonra tamamlayıcı</Key> —{" "}
              <em>She is always late.</em>
            </li>
            <li>
              <Term>Diğer fiiller</Term>: <Key>Özne + zarf + fiil</Key> —{" "}
              <em>I often read.</em>
            </li>
          </ul>
        </Rule>
        <Examples
          items={[
            {
              en: "She is usually happy.",
              tr: "Genellikle mutludur.",
              pron: "şii iz yujıli hepi",
            },
            {
              en: "They often play tennis.",
              tr: "Sık sık tenis oynarlar.",
              pron: "dey ofın pley tenis",
            },
          ]}
        />
      </Section>

      {/* 13) Present Continuous + fark */}
      <Section title="14) Present Continuous" tr="Şimdiki Zaman & Farkı">
        <Rule>
          <Formula
            rows={[
              [
                "Kuruluş",
                <>
                  <Term>am/is/are + V-ing</Term>
                </>,
                "I am working.",
              ],
              ["Olumsuz", "am/is/are + not + V-ing", "He isn’t studying."],
              ["Soru", "Am/Is/Are + Özne + V-ing ?", "Are they coming?"],
            ]}
          />
          <Callout type="tip" title="Simple Present vs Present Continuous">
            <ul className="compact-list">
              <li>
                <Term>Simple Present</Term> = <Key>rutin/alışkanlık</Key>{" "}
                (usually, always…)
              </li>
              <li>
                <Term>Present Continuous</Term> = <Key>şu an</Key> (now, at the
                moment…)
              </li>
            </ul>
          </Callout>
        </Rule>
        <Examples
          items={[
            {
              en: "I’m reading now.",
              tr: "Şu an okuyorum.",
              pron: "aym riiding nau",
            },
            {
              en: "She usually reads in the evening.",
              tr: "Genelde akşamları okur.",
              pron: "şii yujuıli riidz in dı ivning",
            },
          ]}
        />
      </Section>

      {/* 14) Wh-Questions */}
      <Section title="15) Wh-Questions" tr="W-Soruları (Ne/Nerede/Neden…)">
        <Rule>
          <ul className="compact-list">
            <li>
              <Term>What / Where / When / Who / Why / How</Term>
            </li>
            <li>
              <Key>Be</Key> ile: <Term>Wh + am/is/are + Özne…?</Term> —{" "}
              <em>Where is he?</em>
            </li>
            <li>
              <Key>Diğer fiiller</Key>:{" "}
              <Term>Wh + do/does + Özne + Fiil1…?</Term> —{" "}
              <em>What do you do?</em>
            </li>
          </ul>
        </Rule>
        <Examples
          items={[
            {
              en: "Where are you from?",
              tr: "Nerelisin?",
              pron: "ver ar yu from",
            },
            {
              en: "Why does she study English?",
              tr: "Neden İngilizce çalışıyor?",
              pron: "vay daz şii stadi ingliş",
            },
          ]}
        />
      </Section>

      {/* 15) Alıştırmalar */}
      <Section title="16) Quick Practice" tr="Hızlı Alıştırma">
        <QuickPracticeEN_A1 />
        <MiniMC />
      </Section>

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

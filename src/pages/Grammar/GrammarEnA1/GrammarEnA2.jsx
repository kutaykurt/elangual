// src/pages/Grammar/GrammarEnA2.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import "../Grammar.scss";
import { Link } from "react-router-dom";
import SectionNav from "../../../components/SectionNav/SectionNav";

/* ---------- helpers ---------- */
const Key = ({ children }) => <mark className="key">{children}</mark>;
const Term = ({ children }) => <strong className="term">{children}</strong>;

/* ---------- section shell ---------- */
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

/* ---------- callouts / formula / mini-table ---------- */
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

/* ---------- minimalist accordion (pb2) ---------- */
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

/* ---------- 1) Pronunciation (A2 focus) ---------- */
const PronunciationA2 = () => {
  const ids = ["ed", "was-were", "weak", "stress", "linking"];
  const [openMap, setOpenMap] = useState(
    Object.fromEntries(ids.map((id) => [id, false]))
  );
  const toggle = (id) => setOpenMap((m) => ({ ...m, [id]: !m[id] }));

  return (
    <Section title="1) Pronunciation A2" tr="Telaffuz (A2 odaklı)">
      <p className="intro">
        A2’de sık çıkan telaffuz: <Term>-ed sonları</Term>,{" "}
        <Term>zayıf formlar</Term>,<Term>vurgu & bağlama</Term>.
      </p>

      <div className="pb2-list">
        <Pb2Item
          id="ed"
          open={openMap["ed"]}
          onToggle={toggle}
          title="Past -ed üç ses"
          bullet="worked → vörkt; played → pley(d); wanted → vontıd"
        >
          <ul className="tight">
            <li>
              <Key>/t/</Key> (kısık): work<strong>ed</strong> →{" "}
              <code>
                vörk<strong>t</strong>
              </code>
            </li>
            <li>
              <Key>/d/</Key>: play<strong>ed</strong> →{" "}
              <code>
                pley<strong>d</strong>
              </code>
            </li>
            <li>
              <Key>/ɪd/</Key>: want<strong>ed</strong> →{" "}
              <code>
                vont<strong>ıd</strong>
              </code>{" "}
              (t/d’den sonra)
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="was-were"
          open={openMap["was-were"]}
          onToggle={toggle}
          title="was / were (zayıf okunuş)"
          bullet="was → wız; were → wır"
        >
          <div className="howto">
            Hızlı konuşmada <code>was</code> ≈ <code>wız</code>,{" "}
            <code>were</code> ≈ <code>wır</code>.
          </div>
        </Pb2Item>

        <Pb2Item
          id="weak"
          open={openMap["weak"]}
          onToggle={toggle}
          title="Zayıf formlar"
          bullet="to → tı; for → fır; and → ən(d)"
        >
          <ul className="tight">
            <li>
              to → <code>tı</code> (<em>tə</em>): <code>tə go</code>
            </li>
            <li>
              for → <code>fır</code> (zayıf), <code>for</code> (vurgulu)
            </li>
            <li>
              and → <code>ən</code> / <code>n</code>: <code>fish n chips</code>
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="stress"
          open={openMap["stress"]}
          onToggle={toggle}
          title="Kelime vurgusu"
          bullet="de-VE-lop-ment; im-POR-tant"
        >
          <div className="howto">
            Uzun kelimelerde vurgu genelde sondan bir önceki hece:{" "}
            <code>
              im<strong>POR</strong>tant
            </code>
            .
          </div>
        </Pb2Item>

        <Pb2Item
          id="linking"
          open={openMap["linking"]}
          onToggle={toggle}
          title="Bağlama (linking)"
          bullet="go_on → go-won; want to → wanna (hızlı)"
        >
          <div className="howto">
            Kelimeler arası sesler kayar: <code>go on</code> →{" "}
            <code>go-won</code>,<code>want to</code> → <code>wonna/wanna</code>{" "}
            (resmî yazıda kullanma).
          </div>
        </Pb2Item>
      </div>
    </Section>
  );
};

/* ---------- practice helpers ---------- */
function normalize(s = "") {
  return s.toLowerCase().replaceAll("’", "'").replace(/\s+/g, " ").trim();
}

/* ---------- Quick Practice (A2) ---------- */
const PRACTICE_ITEMS = [
  {
    id: "past-neg",
    promptBefore: "Negatif yap: She visited us. → She ",
    promptAfter: " us.",
    answers: ["didn't visit"],
    distractors: ["didn't visit", "doesn't visit", "didn't visited"],
  },
  {
    id: "past-q",
    promptBefore: "Soru: You saw him. → ",
    promptAfter: " you see him?",
    answers: ["Did"],
    distractors: ["Did", "Do", "Have"],
  },
  {
    id: "pp-since",
    promptBefore: "Doldur: I have lived here ",
    promptAfter: " 2019.",
    answers: ["since"],
    distractors: ["for", "since", "from"],
  },
  {
    id: "pp-for",
    promptBefore: "Doldur: She has worked for ",
    promptAfter: " years.",
    answers: ["two", "2"],
    distractors: ["two", "2", "a"],
  },
  {
    id: "comp",
    promptBefore: "Karşılaştır: long → ",
    promptAfter: " than",
    answers: ["longer"],
    distractors: ["more long", "longer", "longest"],
  },
  {
    id: "super",
    promptBefore: "Üstünlük: fast → the ",
    promptAfter: "",
    answers: ["fastest"],
    distractors: ["most fast", "faster", "fastest"],
  },
  {
    id: "too",
    promptBefore: "Doldur: It's ",
    promptAfter: " cold to swim.",
    answers: ["too"],
    distractors: ["too", "very", "enough"],
  },
  {
    id: "enough",
    promptBefore: "Doldur: He isn't old ",
    promptAfter: " to drive.",
    answers: ["enough"],
    distractors: ["too", "enough", "so"],
  },
  {
    id: "goingto",
    promptBefore: "Seç: We ",
    promptAfter: " visit Ankara next week. (plan)",
    answers: ["are going to"],
    distractors: ["will", "are going to", "go"],
  },
  {
    id: "modals",
    promptBefore: "Seç: You ",
    promptAfter: " smoke here. (yasak)",
    answers: ["mustn't"],
    distractors: ["don't have to", "mustn't", "shouldn't"],
  },
];

function QuickPracticeEN_A2() {
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

/* ---------- Mini multiple choice ---------- */
const MC_ITEMS = [
  {
    q: "Present Perfect neyle kurulur?",
    choices: ["have/has + V3", "was/were + V-ing", "did + V1"],
    correctIndex: 0,
    tr: "have/has + V3: I have seen, She has gone...",
  },
  {
    q: "Planlı gelecek için en doğal yapı?",
    choices: ["will", "be going to", "Present Simple"],
    correctIndex: 1,
    tr: "Plan: be going to. Anlık karar/teklif: will.",
  },
  {
    q: "Karşılaştırmada doğru kalıp?",
    choices: ["more fast than", "faster than", "the most fast"],
    correctIndex: 1,
    tr: "short adj: adj+er than → faster than.",
  },
];

function MiniMC_A2() {
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

/* ---------- page ---------- */
export default function GrammarEnA2() {
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
        <b>A2 İngilizce</b>: geçmiş zaman, karşılaştırmalar, gelecek planları ve{" "}
        <strong>Present Perfect’e giriş</strong>. Örnekler TR telaffuz
        ipuçlarıyla.
      </p>

      <div className="conversation-invite">
        <b>Gerçek konuşmalarla pratik ister misin?</b>{" "}
        <Link to="/a2-conversations" className="invite-link">
          Buraya tıkla →
        </Link>
      </div>

      {/* 1) Pronunciation (A2) */}
      <PronunciationA2 />

      {/* 2) Past Simple */}
      <Section title="2) Past Simple" tr="Geçmiş Zaman (Past Simple)">
        <Rule>
          <Formula
            rows={[
              ["Olumlu", "Özne + V2 / V-ed", "She visited / He saw"],
              ["Olumsuz", "Özne + did not + V1", "They didn't go."],
              ["Soru", "Did + Özne + V1 ?", "Did you see it?"],
            ]}
          />
          <MiniTable
            head={["Düzenli -ed", "Kural", "Örnek"]}
            rows={[
              ["-e + d", "love → loved", "use → used"],
              ["sessiz + y → ied", "study → studied", ""],
              ["diğer → ed", "work → worked", ""],
            ]}
          />
          <MiniTable
            head={["Düzensiz", "V2", "TR ipucu"]}
            rows={[
              ["go", "went", "went"],
              ["have", "had", "hed"],
              ["see", "saw", "soo"],
              ["make", "made", "meyd"],
              ["be", "was/were", "wız / wır"],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              en: "I visited my parents yesterday.",
              tr: "Dün ailemi ziyaret ettim.",
              pron: "ay vizitıd may perınts yestırdey",
            },
            {
              en: "He didn't go to work.",
              tr: "İşe gitmedi.",
              pron: "hi didınt gou tu work",
            },
          ]}
        />
      </Section>

      {/* 3) Past Continuous */}
      <Section
        title="3) Past Continuous"
        tr="Şimdiki Geçmiş (was/were + V-ing)"
      >
        <Rule>
          <Formula
            rows={[
              ["Kuruluş", "was/were + V-ing", "I was studying."],
              [
                "Kullanım",
                "geçmişte devam eden eylem",
                "When/while ile: I was cooking when he arrived.",
              ],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              en: "They were sleeping at 11.",
              tr: "Saat 11'de uyuyorlardı.",
              pron: "dey vör sliiping et ilevın",
            },
            {
              en: "While I was walking, it started to rain.",
              tr: "Yürürken yağmur başladı.",
              pron: "vayl ay woz volking, it startıd tu reyn",
            },
          ]}
        />
      </Section>

      {/* 4) Comparatives & Superlatives */}
      <Section
        title="4) Comparatives & Superlatives"
        tr="Karşılaştırma & Üstünlük"
      >
        <Rule>
          <Formula
            rows={[
              [
                "Kısa sıfat",
                "adj + er / the + adj + est",
                "taller / the tallest",
              ],
              [
                "Uzun sıfat",
                "more / the most + adj",
                "more interesting / the most interesting",
              ],
              ["Eşitlik", "as + adj + as", "as big as"],
            ]}
          />
          <MiniTable
            head={["Düzensiz", "Cmp", "Spr"]}
            rows={[
              ["good", "better", "the best"],
              ["bad", "worse", "the worst"],
              ["far", "farther/further", "the farthest/furthest"],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              en: "This book is more interesting than that one.",
              tr: "Bu kitap şundan daha ilginç.",
              pron: "dis buk iz mor intrısting den det wan",
            },
            {
              en: "Mount Everest is the highest mountain.",
              tr: "Everest en yüksek dağdır.",
              pron: "maunt evrıst iz dı hayıst mauntın",
            },
          ]}
        />
      </Section>

      {/* 5) Countable / Uncountable + Quantifiers */}
      <Section
        title="5) Quantifiers"
        tr="Sayılan/Sayılamayan + Miktar Sözcükleri"
      >
        <Rule>
          <MiniTable
            head={["Tür", "Örnek", "Miktar"]}
            rows={[
              ["Sayılan", "apple(s), chair(s)", "many, a few, few"],
              ["Sayılamayan", "water, sugar, money", "much, a little, little"],
              ["Her ikisi", "a lot of / lots of", "both"],
            ]}
          />
          <p className="note">
            <Key>too many/much</Key> (fazla) · <Key>enough</Key> (yeter) ·{" "}
            soru/olumsuzda <Key>any</Key>, olumlu <Key>some</Key>.
          </p>
        </Rule>
        <Examples
          items={[
            {
              en: "There isn't much time.",
              tr: "Çok zaman yok.",
              pron: "der izınt maç taym",
            },
            {
              en: "I have a few questions.",
              tr: "Birkaç sorum var.",
              pron: "ay hev ı fiyu kuesçınz",
            },
          ]}
        />
      </Section>

      {/* 6) Future: will / be going to / Present Continuous */}
      <Section title="6) Future" tr="Gelecek: will / going to / present cont.">
        <Rule>
          <MiniTable
            head={["Durum", "Yapı", "Örnek"]}
            rows={[
              ["anlık karar/teklif", <Key>will</Key>, "I'll help you."],
              ["plan/niyet", <Key>be going to</Key>, "We're going to move."],
              [
                "kesin randevu",
                <Key>Present Continuous</Key>,
                "I'm meeting Ali at 6.",
              ],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              en: "I'm going to visit my aunt.",
              tr: "Halamı ziyaret etmeyi planlıyorum.",
              pron: "aym gouing tu vizit may aant",
            },
            {
              en: "I'll call you later.",
              tr: "Seni sonra arayacağım.",
              pron: "ayl kol yu leytr",
            },
          ]}
        />
      </Section>

      {/* 7) Modals: should / must / have to */}
      <Section title="7) Modals" tr="should / must / have to">
        <Rule>
          <MiniTable
            head={["Anlam", "Yapı", "Örnek"]}
            rows={[
              ["tavsiye", "should / shouldn't + V1", "You should rest."],
              [
                "zorunluluk (iç/dış)",
                "must / have to",
                "You must wear a mask. / I have to work.",
              ],
              ["yasak", "mustn't + V1", "You mustn't smoke here."],
              ["gerek yok", "don't have to + V1", "You don't have to come."],
            ]}
          />
        </Rule>
      </Section>

      {/* 8) Present Perfect (intro) */}
      <Section title="8) Present Perfect" tr="have/has + V3 (giriş)">
        <Rule>
          <Formula
            rows={[
              ["Kuruluş", "have/has + V3", "I have finished."],
              [
                "Zaman işaretleri",
                "since/for, ever/never, just/already/yet",
                "",
              ],
              [
                "Fark",
                "PP: deneyim/sonuç · PS: belirli zaman (yesterday...)",
                "",
              ],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              en: "I have never been to London.",
              tr: "Hiç Londra'ya gitmedim.",
              pron: "ay hev nevır biin tu london",
            },
            {
              en: "She has already eaten.",
              tr: "O çoktan yedi.",
              pron: "şii hez olredi iitın",
            },
          ]}
        />
      </Section>

      {/* 9) Adverbs (manner & degree) */}
      <Section title="9) Adverbs" tr="Biçim & Derece Zarfları">
        <Rule>
          <ul className="compact-list">
            <li>
              <Term>careful → carefully</Term> (sıfat → zarf)
            </li>
            <li>
              <Term>good → well</Term> (düzensiz)
            </li>
            <li>
              <Key>Derece</Key>: very, really, quite, too, enough
            </li>
            <li>
              <Key>Yer</Key>: genelde fiilden sonra / tümceden önce;{" "}
              <em>really</em> çoğu zaman fiilden önce
            </li>
          </ul>
        </Rule>
        <Examples
          items={[
            {
              en: "She speaks English very well.",
              tr: "İyi İngilizce konuşur.",
              pron: "şi spiiks ingliş veri vel",
            },
            {
              en: "It's quite easy.",
              tr: "Oldukça kolay.",
              pron: "its kuayt iizi",
            },
          ]}
        />
      </Section>

      {/* 10) Prepositions of time */}
      <Section
        title="10) Time Prepositions"
        tr="Zaman Edatları: in/on/at; since/for/ago"
      >
        <Rule>
          <MiniTable
            head={["Edat", "Kullanım", "Örnek"]}
            rows={[
              ["in", "ay, yıl, mevsim", "in May, in 2024, in summer"],
              ["on", "gün/tarih", "on Monday, on 1st May"],
              ["at", "saat/özel", "at 7, at night, at the weekend (UK)"],
              ["since/for", "başlangıç / süre", "since 2019 / for two years"],
              ["ago", "geçmişte ... önce", "two days ago"],
            ]}
          />
        </Rule>
      </Section>

      {/* 11) Gerund / Infinitive (basic) */}
      <Section title="11) Gerund & Infinitive" tr="V-ing / to V (temel)">
        <Rule>
          <MiniTable
            head={["Tip", "Yapı", "Örnek"]}
            rows={[
              ["sevgi/nefret", "like/love/hate + V-ing", "I like swimming."],
              ["istek/plan", "want/need/plan + to V", "I want to go."],
              ["başla/bitir", "start/finish + V-ing", "They finished eating."],
            ]}
          />
        </Rule>
      </Section>

      {/* 12) Relative clauses (who/which/that) */}
      <Section
        title="12) Relative Clauses"
        tr="Bağlaç Zamirleri (who/which/that)"
      >
        <Rule>
          <ul className="compact-list">
            <li>
              <Key>who</Key> insanlar, <Key>which</Key> nesneler,{" "}
              <Key>that</Key> her ikisi (sade)
            </li>
            <li>Nesne ise zamir çoğu zaman düşer: The book (that) I bought</li>
          </ul>
        </Rule>
        <Examples
          items={[
            {
              en: "She's the person who helps me.",
              tr: "Bana yardım eden kişi.",
              pron: "şiiz dı pörsın hu helps mi",
            },
            {
              en: "This is the car that I want.",
              tr: "Bu istediğim araba.",
              pron: "dis iz dı kar det ay vont",
            },
          ]}
        />
      </Section>

      {/* 13) Quick Practice */}
      <Section title="13) Quick Practice" tr="Hızlı Alıştırma">
        <QuickPracticeEN_A2 />
        <MiniMC_A2 />
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

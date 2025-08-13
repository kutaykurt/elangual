// src/pages/Grammar/GrammarGerA2.jsx
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
        <strong>{ex.de}</strong> — {ex.tr}{" "}
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

/* ---------- 1) Aussprache (A2) ---------- */
const PronunciationA2DE = () => {
  const ids = ["auslaut", "en", "ig", "bindung", "wortakzent"];
  const [openMap, setOpenMap] = useState(
    Object.fromEntries(ids.map((id) => [id, false]))
  );
  const toggle = (id) => setOpenMap((m) => ({ ...m, [id]: !m[id] }));

  return (
    <Section title="1) Pronunciation A2" tr="Telaffuz (A2 odaklı)">
      <p className="intro">
        A2’de kulağı rahatlatan noktalar: <Term>Auslautverhärtung</Term> (kelime
        sonunda sertleşme), zayıf <Term>-en</Term>, <Term>-ig</Term> ve cümle
        akışı (bağlama).
      </p>

      <div className="pb2-list">
        <Pb2Item
          id="auslaut"
          open={openMap["auslaut"]}
          onToggle={toggle}
          title="Auslautverhärtung: b/d/g → p/t/k"
          bullet="Tag → tak; Hund → hunt"
        >
          <div className="howto">
            Kelime sonunda ses yumuşamaz: <code>Tag</code> → <code>tak</code>,{" "}
            <code>Abend</code> → <code>abınt</code>. Cümle içinde yumuşar:{" "}
            <code>Tage</code> → <code>tage</code>.
          </div>
        </Pb2Item>

        <Pb2Item
          id="en"
          open={openMap["en"]}
          onToggle={toggle}
          title="-en zayıf: ən"
          bullet="machen → mahən; laufen → laufən"
        >
          <ul className="tight">
            <li>
              <code>-en</code> sonu çoğu zaman kısa <u>ı</u> gibi:{" "}
              <code>machen</code> →{" "}
              <code>
                mah<span>ən</span>
              </code>
            </li>
            <li>
              Çok hızlı konuşmada <code>-n</code> kalır: <code>gehen</code> →{" "}
              <code>
                gee<span>n</span>
              </code>
            </li>
          </ul>
        </Pb2Item>

        <Pb2Item
          id="ig"
          open={openMap["ig"]}
          onToggle={toggle}
          title="…ig (sonda) → ‘ih’"
          bullet="könig → könih; ruhig → ruhih"
        >
          <div className="howto">
            Son hecede <code>-ig</code> genelde <em>ich</em> sesine yaklaşır.
          </div>
        </Pb2Item>

        <Pb2Item
          id="bindung"
          open={openMap["bindung"]}
          onToggle={toggle}
          title="Bağlama (Liaison)"
          bullet="ich_arbeite → i-char-bay-te"
        >
          <div className="howto">
            Sonundaki sessiz, sonraki sesliyle birleşir:{" "}
            <code>ich arbeite</code> → <code>i-charbayte</code>. Akış doğal
            olur.
          </div>
        </Pb2Item>

        <Pb2Item
          id="wortakzent"
          open={openMap["wortakzent"]}
          onToggle={toggle}
          title="Wortakzent"
          bullet="MEI-stens erste Silbe: AR-beit, LEH-rer"
        >
          <div className="howto">
            Yerli Almanca kelimelerde vurgu genelde ilk hece; alıntı kelimelerde
            değişebilir: Ho-te<span>L</span>.
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

/* ---------- Quick Practice (DE A2) ---------- */
const PRACTICE_ITEMS_DE_A2 = [
  {
    id: "perfekt-haben",
    promptBefore: "Perfekt: Ich ",
    promptAfter: " die Hausaufgaben gemacht.",
    answers: ["habe"],
    distractors: ["habe", "bin", "hat"],
  },
  {
    id: "perfekt-sein",
    promptBefore: "Perfekt: Wir ",
    promptAfter: " ins Kino gegangen.",
    answers: ["sind"],
    distractors: ["sind", "waren", "haben"],
  },
  {
    id: "trennbar",
    promptBefore: "Trennbar: Ich ",
    promptAfter: " dich morgen ",
    answers: [
      "rufe an",
      "rufe  an",
      "rufe  dich  morgen  an".replace(/\s+/g, " "),
    ],
    distractors: ["rufe an", "anrufe", "rufe"],
  },
  {
    id: "weil-ende",
    promptBefore: "Nebensatz: Ich bleibe zu Hause, weil ich ",
    promptAfter: ".",
    answers: ["krank bin"],
    distractors: ["bin krank", "krank bin", "krank"],
  },
  {
    id: "wohin-akk",
    promptBefore: "Wohin? Ich stelle die Tasse ",
    promptAfter: " Tisch.",
    answers: ["auf den"],
    distractors: ["auf dem", "auf den", "auf die"],
  },
  {
    id: "wo-dat",
    promptBefore: "Wo? Die Tasse steht ",
    promptAfter: " Tisch.",
    answers: ["auf dem"],
    distractors: ["auf dem", "auf den"],
  },
  {
    id: "relativ-akk",
    promptBefore: "Relativ: Das ist der Mann, ",
    promptAfter: " ich kenne.",
    answers: ["den"],
    distractors: ["der", "den", "dem"],
  },
  {
    id: "komp",
    promptBefore: "Komparativ: billig → ",
    promptAfter: " als",
    answers: ["billiger"],
    distractors: ["mehr billig", "billiger", "am billigsten"],
  },
  {
    id: "modal-prat",
    promptBefore: "Präteritum: Früher ",
    promptAfter: " ich nicht schwimmen. (können)",
    answers: ["konnte"],
    distractors: ["konnte", "kann", "könnte"],
  },
  {
    id: "seit",
    promptBefore: "Zeit: Ich wohne hier ",
    promptAfter: " 2019.",
    answers: ["seit"],
    distractors: ["seit", "vor", "ab"],
  },
];

function QuickPracticeDE_A2() {
  const [values, setValues] = useState(() =>
    Object.fromEntries(PRACTICE_ITEMS_DE_A2.map((i) => [i.id, ""]))
  );
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const r = {};
    PRACTICE_ITEMS_DE_A2.forEach((it) => {
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
    setValues(Object.fromEntries(PRACTICE_ITEMS_DE_A2.map((i) => [i.id, ""])));
    setSubmitted(false);
  };
  const hint = (opts = []) => (opts.length ? `(${opts.join(" / ")})` : "");

  return (
    <div className="qp">
      <div className="qp-list">
        {PRACTICE_ITEMS_DE_A2.map((it, idx) => {
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
                  ❌ Doğru cevap: <em>{it.answers[0]}</em>
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
              {correctCount} / {PRACTICE_ITEMS_DE_A2.length} doğru
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

/* ---------- Mini-MC (DE A2) ---------- */
const MC_ITEMS_DE_A2 = [
  {
    q: "Wechselpräpositionen: Hangi kural doğru?",
    choices: [
      "Wo? → Akkusativ",
      "Wohin? → Dativ",
      "Wo? → Dativ, Wohin? → Akkusativ",
    ],
    correctIndex: 2,
    tr: "Yer (Wo?) = Dativ · Yön (Wohin?) = Akkusativ.",
  },
  {
    q: "Nebensatzta fiilin yeri?",
    choices: ["Sonda", "2. pozisyon", "Başa"],
    correctIndex: 0,
    tr: "weil/dass/wenn … → fiil EN SONDA.",
  },
  {
    q: "Hangi fiiller Perfekt'te çoğunlukla 'sein' alır?",
    choices: [
      "Hareket/değişim fiilleri",
      "Sahiplik fiilleri",
      "Düşünce fiilleri",
    ],
    correctIndex: 0,
    tr: "gehen, kommen, fahren, bleiben (istisna), sterben…",
  },
];

function MiniMC_DE_A2() {
  const [answers, setAnswers] = useState({});
  return (
    <div className="mini-mc">
      {MC_ITEMS_DE_A2.map((it, i) => {
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
export default function GrammarGerA2() {
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
        <b>A2 Almanca</b>: <Term>Perfekt</Term>,{" "}
        <Term>trennbare/untrennbare Verben</Term>,{" "}
        <Term>Nebensätze (weil/dass/wenn)</Term>,{" "}
        <Term>Wechselpräpositionen</Term>, Komparativ/Superlativ ve daha
        fazlası.
      </p>

      <div className="conversation-invite">
        <b>Gerçek konuşmalarla pratik ister misin?</b>{" "}
        <Link to="/a2-conversations-de" className="invite-link">
          Buraya tıkla →
        </Link>
      </div>

      {/* 1) Pronunciation A2 */}
      <PronunciationA2DE />

      {/* 2) Perfekt */}
      <Section
        title="2) Perfekt"
        tr="Geçmiş: Perfekt (haben/sein + Partizip II)"
      >
        <Rule>
          <Formula
            rows={[
              [
                "Kuruluş",
                "haben/sein + Partizip II",
                "Ich habe gearbeitet. / Wir sind gefahren.",
              ],
              [
                "ge- kuralı",
                "ge + Stamm + t(en) / (V3)",
                "machen → gemacht; sehen → gesehen",
              ],
              [
                "sein alanlar",
                "hareket/değişim",
                "gehen, kommen, fahren, sterben… (+ bleiben)",
              ],
            ]}
          />
          <MiniTable
            head={["Fiil", "Partizip II", "Yardımcı"]}
            rows={[
              ["machen", "gemacht", "haben"],
              ["kaufen", "gekauft", "haben"],
              ["gehen", "gegangen", "sein"],
              ["kommen", "gekommen", "sein"],
              ["bleiben", "geblieben", "sein"],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              de: "Ich habe Deutsch gelernt.",
              tr: "Almanca öğrendim.",
              pron: "ih habe doyç gelernt",
            },
            {
              de: "Wir sind spät angekommen.",
              tr: "Geç geldik (vardık).",
              pron: "viir zint şpeet an-gekomən",
            },
          ]}
        />
      </Section>

      {/* 3) Trennbare / Untrennbare */}
      <Section
        title="3) Trennbare / Untrennbare Verben"
        tr="Ayrılabilen / Ayrılamayan fiiller"
      >
        <Rule>
          <MiniTable
            head={["Tür", "Kalıp", "Örnek"]}
            rows={[
              [
                "Trennbar",
                "Verb 2. / Partizip: ge + … + t (ayraç arasında)",
                "anrufen → Ich rufe dich an. / Ich habe <Key>angerufen</Key>.",
              ],
              [
                "Untrennbar",
                "ge- gelmez",
                "verstehen → Ich habe <Key>verstanden</Key>.",
              ],
            ]}
          />
          <p className="note">
            Trennbar örnekler:{" "}
            <Key>aufstehen, einkaufen, mitkommen, zurückrufen</Key>.
          </p>
        </Rule>
        <Examples
          items={[
            {
              de: "Ich stehe um 7 Uhr auf.",
              tr: "Saat 7’de kalkarım.",
              pron: "ih ştee um ziiben ua auf",
            },
            {
              de: "Sie hat viel eingekauft.",
              tr: "O çok alışveriş yaptı.",
              pron: "zi hat fiil ayn-gekauft",
            },
          ]}
        />
      </Section>

      {/* 4) Modalverben – Präteritum */}
      <Section title="4) Modalverben (Präteritum)" tr="Modal fiillerin geçmişi">
        <Rule>
          <Formula
            rows={[
              [
                "können",
                "konnte, konntest, konnte, konnten, konntet, konnten",
                "",
              ],
              ["müssen", "musste, …", ""],
              [
                "dürfen/sollen/wollen/mögen",
                "durfte/sollte/wollte/mochte",
                "çoğu zaman yalın: Ich wollte gehen.",
              ],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              de: "Ich konnte gestern nicht kommen.",
              tr: "Dün gelemedim.",
              pron: "ih konte gestırn niht komen",
            },
            {
              de: "Wir mussten lange warten.",
              tr: "Uzun süre beklemek zorunda kaldık.",
              pron: "viir mustın lange varten",
            },
          ]}
        />
      </Section>

      {/* 5) Nebensätze: weil / dass / wenn */}
      <Section title="5) Nebensätze" tr="weil / dass / wenn (fiil sonda)">
        <Rule>
          <Formula
            rows={[
              [
                "weil",
                "… , weil Özne + … + Verb.",
                "Ich bleibe zu Hause, weil ich krank bin.",
              ],
              [
                "dass",
                "… , dass Özne + … + Verb.",
                "Ich glaube, dass er kommt.",
              ],
              ["wenn", "koşul/tekrarlı", "Wenn ich Zeit habe, lerne ich."],
            ]}
          />
          <p className="note">
            <Key>Hauptsatz + Nebensatz</Key> veya{" "}
            <Key>Nebensatz, Hauptsatz</Key>. Nebensatztan sonra ana cümlede fiil
            yine 2. pozisyon.
          </p>
        </Rule>
      </Section>

      {/* 6) Relativsätze (A1–A2 seviye) */}
      <Section
        title="6) Relativsätze (Nom./Akk.)"
        tr="İlgi cümleleri (Der/Die/Das; Den)"
      >
        <Rule>
          <MiniTable
            head={["Tür", "Mask.", "Fem.", "Neutr.", "Plural"]}
            rows={[
              ["Nominativ", "der", "die", "das", "die"],
              ["Akkusativ", "den", "die", "das", "die"],
            ]}
          />
          <p className="note">
            İpucu: Nesne ise çoğu zaman <Key>den</Key> gelir: „der Mann,{" "}
            <Key>den</Key> ich kenne“.
          </p>
        </Rule>
      </Section>

      {/* 7) Wechselpräpositionen */}
      <Section
        title="7) Wechselpräpositionen"
        tr="in, an, auf, unter, über, vor, hinter, neben, zwischen"
      >
        <Rule>
          <MiniTable
            head={["Soru", "Hâl", "Örnek"]}
            rows={[
              [
                "Wo? (yer)",
                <Key>Dativ</Key>,
                "Die Lampe hängt <Key>an der</Key> Wand.",
              ],
              [
                "Wohin? (yön)",
                <Key>Akkusativ</Key>,
                "Ich hänge die Lampe <Key>an die</Key> Wand.",
              ],
            ]}
          />
        </Rule>
        <Examples
          items={[
            {
              de: "Das Buch liegt auf dem Tisch.",
              tr: "Kitap masanın üstünde.",
              pron: "das buh lihgt auf dem tiş",
            },
            {
              de: "Ich lege das Buch auf den Tisch.",
              tr: "Kitabı masanın üstüne koyuyorum.",
              pron: "ih lege das buh auf den tiş",
            },
          ]}
        />
      </Section>

      {/* 8) Dativverben & Pronomen (mini) */}
      <Section
        title="8) Dativverben & Pronomen"
        tr="Dativ fiilleri ve zamirler"
      >
        <Rule>
          <MiniTable
            head={["Fiil", "Örnek", "TR"]}
            rows={[
              [
                "helfen (Dat.)",
                "Ich helfe <Key>dir</Key>.",
                "sana yardım ediyorum",
              ],
              [
                "danken (Dat.)",
                "Ich danke <Key>ihnen</Key>.",
                "onlara teşekkür ederim",
              ],
              ["gehören (Dat.)", "Das gehört <Key>mir</Key>.", "bu benim"],
            ]}
          />
        </Rule>
      </Section>

      {/* 9) Komparativ & Superlativ */}
      <Section title="9) Komparativ & Superlativ" tr="Karşılaştırma & Üstünlük">
        <Rule>
          <Formula
            rows={[
              [
                "Kısa kural",
                "adj + er / am + adj + sten",
                "schnell → schneller / am schnellsten",
              ],
              ["Umlaut", "a/o/u sıklıkla ä/ö/ü", "alt → älter"],
              ["düzensiz", "gut → besser → am besten", ""],
            ]}
          />
        </Rule>
      </Section>

      {/* 10) Zukunft */}
      <Section title="10) Zukunft" tr="Gelecek: werden + Inf. / Präsens + Zeit">
        <Rule>
          <MiniTable
            head={["Durum", "Yapı", "Örnek"]}
            rows={[
              [
                "Plan/niyet",
                "Präsens + Zeit",
                "Morgen <Key>fahre</Key> ich nach Berlin.",
              ],
              [
                "Nötr gelecek",
                "werden + Inf.",
                "Wir <Key>werden</Key> später anrufen.",
              ],
            ]}
          />
        </Rule>
      </Section>

      {/* 11) Zeitpräpositionen */}
      <Section title="11) Zeitangaben" tr="seit, vor, bis, ab">
        <Rule>
          <MiniTable
            head={["Edat", "Anlam", "Örnek"]}
            rows={[
              [
                "seit",
                "başlangıçtan beri",
                "Ich wohne <Key>seit</Key> 2019 hier.",
              ],
              ["vor", "… önce", "Das war <Key>vor</Key> zwei Jahren."],
              ["bis", "… e kadar", "Ich bleibe <Key>bis</Key> 18 Uhr."],
              ["ab", "… den itibaren", "Der Kurs <Key>ab</Key> Montag."],
            ]}
          />
        </Rule>
      </Section>

      {/* 12) Quick Practice */}
      <Section title="12) Quick Practice" tr="Hızlı Alıştırma">
        <QuickPracticeDE_A2 />
        <MiniMC_DE_A2 />
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

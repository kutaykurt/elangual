import React, { useMemo, useState } from "react";
import "./Grammar.scss";

/* ---------- Küçük Yapı Taşları ---------- */
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

/* ---------- Yeni: Uyarı Kutuları & Formüller & Mini Tablo ---------- */
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

/* ---------- Telaffuz Kartları ---------- */
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

const PronunciationBasics = () => {
  const ids = ["th", "i", "w", "r", "o-ou", "schwa"];
  const [openMap, setOpenMap] = useState(
    Object.fromEntries(ids.map((id) => [id, false]))
  );
  const toggle = (id) => setOpenMap((m) => ({ ...m, [id]: !m[id] }));

  return (
    <Section title="0) Pronunciation" tr="Telaffuz Kuralları (Hızlı ve Net)">
      <p className="explanation">
        Aşağıdaki kurallar Türkçe konuşanlar için sadeleştirildi. Kısayolu gör,
        ayrıntıyı <strong>Aç/Kapat</strong> butonuyla göster.
      </p>

      <div className="pb-grid">
        <RuleCard
          id="th"
          isOpen={openMap["th"]}
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
        </RuleCard>

        <RuleCard
          id="i"
          isOpen={openMap["i"]}
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
        </RuleCard>

        <RuleCard
          id="w"
          isOpen={openMap["w"]}
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
        </RuleCard>

        <RuleCard
          id="r"
          isOpen={openMap["r"]}
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
        </RuleCard>

        <RuleCard
          id="o-ou"
          isOpen={openMap["o-ou"]}
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
        </RuleCard>

        <RuleCard
          id="schwa"
          isOpen={openMap["schwa"]}
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
        </RuleCard>
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

/* ---------- Hızlı Alıştırma (tamamen TR yönergeler) ---------- */
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

/* ---------- Mini Çoktan Seçmeli (TR) ---------- */
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

/* ---------- Ana Sayfa ---------- */
export default function GrammarEnA1() {
  return (
    <div className="g-doc grammar-page">
      <p className="intro">
        Türkçe konuşanlar için A1 İngilizce: kısa kurallar, net örnekler, doğru
        telaffuz ve <strong>hata uyarıları</strong>.
        <br />
        English A1 for Turkish speakers: clear rules, examples, pronunciation
        tips.
      </p>

      {/* 0) Telaffuz */}
      {/* <PronunciationBasics /> */}

      {/* 1) Özne Zamirleri */}
      <Section title="1) Subject Pronouns" tr="Özne Zamirleri">
        <Rule>
          İngilizce özneler: <em>I, you, he, she, it, we, you, they</em>.
          Türkçedeki “o” İngilizcede <em>he/she/it</em> olarak ayrılır.
          <br />
          <strong>you</strong> tekil & çoğul olabilir; <strong>it</strong>{" "}
          nesne/hayvan ve bazen “görünen özne” (hava, saat).
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

      {/* 2) To be: am/is/are */}
      <Section
        title='2) Verb "to be": am / is / are'
        tr="“to be” fiili: am / is / are"
      >
        <Rule>
          <strong>Kuruluş</strong>
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
            ["I", "am", "Sadece I → am"],
            ["you/we/they", "are", "çoğul/you → are"],
            ["he/she/it", "is", "tekil üçüncü şahıs → is"],
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
          <strong>Yes, I am / No, I’m not</strong> ·{" "}
          <strong>Yes, he is / No, he isn’t</strong> ·{" "}
          <strong>Yes, they are / No, they aren’t</strong>
        </Callout>
      </Section>

      {/* 3) İyelik Sıfatları */}
      <Section title="3) Possessive Adjectives" tr="İyelik Sıfatları">
        <Rule>
          Sahiplik: <em>my, your, his, her, its, our, your, their</em> — isimden
          önce gelir.
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
          <strong>its</strong> = onun (iyelik). <strong>it’s</strong> = it is /
          it has (kısaltma).
        </Callout>
      </Section>

      {/* 4) Artikeller */}
      <Section
        title="4) Articles: a / an / the"
        tr="Belirtisiz/Belirli Artikeller"
      >
        <Rule>
          <Formula
            rows={[
              [
                "Belirtisiz",
                "a + ünsüz sesi / an + ünlü sesi",
                "a book, a dog / an apple, an hour",
              ],
              ["Belirli", "the + bilinen/özgül şey", "the book on the table"],
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

      {/* 5) Simple Present */}
      <Section
        title="5) Basic Word Order & Simple Present"
        tr="Temel Dizilim & Geniş Zaman"
      >
        <Rule>
          <Formula
            rows={[
              ["Dizilim", "Özne + Fiil + Nesne", "I play football."],
              [
                "Olumsuz",
                "Özne + do/does + not + Fiil1",
                "She doesn’t like tea.",
              ],
              ["Soru", "Do/Does + Özne + Fiil1 ?", "Does he live in Izmir?"],
            ]}
          />
        </Rule>

        <Callout type="tip" title="He/She/It kural paketi">
          <ul className="compact-list">
            <li>
              Fiile <strong>-s</strong> gelir: play → plays
            </li>
            <li>
              <strong>-es</strong>: -ch/-sh/-o/-x/-ss → go → goes, watch →
              watches
            </li>
            <li>
              <strong>-ies</strong>: <em>ünsüz + y</em> → study → studies
            </li>
            <li>
              <strong>have → has</strong>
            </li>
            <li>
              <strong>does/doesn’t</strong> varsa fiil <u>temel</u> kalır:{" "}
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
          every day / usually / always / never / often / sometimes / on Mondays
        </Callout>

        <Callout type="error" title="Yaygın hatalar">
          <ul className="compact-list">
            <li>
              <em>He don’t like…</em> ❌ → <strong>He doesn’t like…</strong> ✅
            </li>
            <li>
              <em>She doesn’t likes…</em> ❌ →{" "}
              <strong>She doesn’t like…</strong> ✅
            </li>
            <li>
              <em>He have…</em> ❌ → <strong>He has…</strong> ✅
            </li>
          </ul>
        </Callout>
      </Section>

      {/* 6) Hızlı Alıştırma + Mini MC */}
      <Section title="6) Quick Practice" tr="Hızlı Alıştırma">
        <QuickPracticeEN_A1 />
        <MiniMC />
      </Section>
    </div>
  );
}

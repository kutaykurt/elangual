import React, { useMemo, useState } from "react";
import "./Grammar.scss";

/* ---------- kleine Bausteine ---------- */
const Section = ({ title, tr, children }) => {
  // Zahl "n) " am Anfang des englischen Titels abgreifen (z. B. "1) Something")
  const isStringTitle = typeof title === "string";
  const match = isStringTitle ? title.match(/^\s*(\d+)\)\s*/) : null;
  const num = match ? `${match[1]}) ` : "";
  const cleanTitle = match ? title.replace(/^\s*\d+\)\s*/, "") : title;

  return (
    <section className="g-section">
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

/* ---------- Pronunciation: Karten mit eigenem Toggle ---------- */
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
              <th>Word</th>
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

/* ---------- Quick Practice ---------- */
function normalize(s = "") {
  return s.toLowerCase().replaceAll("’", "'").replace(/\s+/g, " ").trim();
}

/* Klammern: 1 richtige + 2 falsche, direkt gemischt */
const PRACTICE_ITEMS = [
  {
    id: "be-am",
    promptBefore: "Fill in: I ",
    promptAfter: " a student.",
    answers: ["am"],
    distractors: ["is", "am", "are"],
  },
  {
    id: "3sg-s",
    promptBefore: "Choose: She ",
    promptAfter: " at a bank.",
    answers: ["works"],
    distractors: ["work", "works", "is work"],
  },
  {
    id: "be-neg",
    promptBefore: "Make negative: They are happy. → They ",
    promptAfter: " happy.",
    answers: ["aren't", "are not"],
    distractors: ["isn't", "aren't", "am not"],
  },
  {
    id: "do-q",
    promptBefore: "Ask a question: You like coffee. → ",
    promptAfter: " you like coffee?",
    answers: ["do"],
    distractors: ["does", "do", "are"],
  },
  {
    id: "an-article",
    promptBefore: "Pick the article: I have ",
    promptAfter: " umbrella.",
    answers: ["an"],
    distractors: ["a", "the", "an"],
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
                  aria-label={`Antwort zu Aufgabe ${idx + 1}`}
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
                  ❌ Richtig wäre: <em>{it.answers.join(" / ")}</em>
                </div>
              )}
              {submitted && state.ok && (
                <div className="qp-feedback ok">✔️ Richtig</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="qp-actions">
        {!submitted ? (
          <button className="primary-btn" onClick={handleSubmit}>
            Prüfen
          </button>
        ) : (
          <>
            <div className="qp-score">
              {correctCount} / {PRACTICE_ITEMS.length} richtig
            </div>
            <button className="ghost-btn" onClick={handleReset}>
              Neu starten
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Hauptseite ---------- */
export default function GrammarEnA1() {
  return (
    <div className="g-doc grammar-page">
      <p className="intro">
        English A1 for Turkish speakers: short rules, clear examples, Turkish
        explanations and correct pronunciation tips.
        <br />
        Türkçe konuşanlar için A1 İngilizce: kısa kurallar, net örnekler ve
        doğru telaffuz.
      </p>

      <Section title="1) Subject Pronouns" tr="Özne Zamirleri">
        <Rule>
          İngilizce özneler: <em>I, you, he, she, it, we, you, they</em>.
          Türkçedeki “o” İngilizcede <em>he/she/it</em> olarak ayrılır.
        </Rule>

        <table className="g-table">
          <thead>
            <tr>
              <th>English</th>
              <th>Pronunciation (TR)</th>
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
            { en: "I am Ali.", tr: "Ben Ali’yim.", pron: "ay em ali" },
            {
              en: "She is my sister.",
              tr: "O benim kız kardeşim.",
              pron: "şii ız may sıstır",
            },
            {
              en: "They are students.",
              tr: "Onlar öğrenci.",
              pron: "dey ar stüdınts",
            },
          ]}
        />
      </Section>

      <Section
        title='2) Verb "to be": am / is / are'
        tr="“to be” fiili: am / is / are"
      >
        <Rule>
          Sıra: <em>Özne + am/is/are + tamamlayıcı</em>. Negatif:{" "}
          <em>am not / isn’t / aren’t</em>. Soru: <em>Am/Is/Are + subject?</em>
        </Rule>

        <table className="g-table">
          <tbody>
            <tr>
              <td>I am</td>
              <td>ay em</td>
              <td>ben …yim</td>
            </tr>
            <tr>
              <td>you are</td>
              <td>yu ar</td>
              <td>sen/siz …sin/siniz</td>
            </tr>
            <tr>
              <td>he/she/it is</td>
              <td>hii/şii/ıt ız</td>
              <td>o …</td>
            </tr>
            <tr>
              <td>we are</td>
              <td>vii ar</td>
              <td>biz …yiz</td>
            </tr>
            <tr>
              <td>they are</td>
              <td>dey ar</td>
              <td>onlar …</td>
            </tr>
          </tbody>
        </table>

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
      </Section>

      <Section title="3) Possessive Adjectives" tr="İyelik Sıfatları">
        <Rule>
          Sahiplik: <em>my, your, his, her, its, our, your, their</em> — isimden
          önce gelir.
        </Rule>

        <table className="g-table">
          <thead>
            <tr>
              <th>Owner</th>
              <th>Form</th>
              <th>TR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>my</td>
              <td>benim</td>
            </tr>
            <tr>
              <td>you</td>
              <td>your</td>
              <td>senin/sizin</td>
            </tr>
            <tr>
              <td>he</td>
              <td>his</td>
              <td>onun (erkek)</td>
            </tr>
            <tr>
              <td>she</td>
              <td>her</td>
              <td>onun (kadın)</td>
            </tr>
            <tr>
              <td>it</td>
              <td>its</td>
              <td>onun (nesne/hayvan)</td>
            </tr>
            <tr>
              <td>we</td>
              <td>our</td>
              <td>bizim</td>
            </tr>
            <tr>
              <td>you</td>
              <td>your</td>
              <td>sizlerin</td>
            </tr>
            <tr>
              <td>they</td>
              <td>their</td>
              <td>onların</td>
            </tr>
          </tbody>
        </table>

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
      </Section>

      <Section
        title="4) Articles: a / an / the"
        tr="Belirtisiz/Belirli Artikeller"
      >
        <Rule>
          <strong>a/an</strong> belirsiz: <em>a book</em>, <em>an apple</em>.{" "}
          <strong>the</strong> belirli: <em>the book on the table</em>.
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
          ]}
        />
      </Section>

      <Section
        title="5) Basic Word Order & Simple Present"
        tr="Temel Cümle Dizilimi & Geniş Zaman"
      >
        <Rule>
          Sıra: <strong>Subject + Verb + Object</strong>. Simple Present:
          alışkanlıklar/genel doğrular.
          <em> he/she/it</em> → fiile <strong>-s</strong>. Negatif:{" "}
          <em>do/does not</em>. Soru: <em>Do/Does + subject + verb?</em>
        </Rule>

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
      </Section>

      <Section title="6) Hızlı Alıştırma" tr="Hızlı Alıştırma">
        <QuickPracticeEN_A1 />
      </Section>
    </div>
  );
}

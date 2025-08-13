import React from "react";
import "./A1EnConversations.scss";

/** Kleines Markup für Hervorhebung */
const Key = ({ children }) => <mark className="key">{children}</mark>;
const En = ({ children }) => <strong className="en">{children}</strong>;

/** Ein Dialog-Block mit Überschrift, Zeilen und Vokabelliste */
function DialogueBlock({ id, title, lines = [], vocab = [] }) {
  return (
    <section className="g-section" id={id}>
      <h2>
        A1 Conversation — <span className="en-tag">{title}</span>
      </h2>

      <div className="conv">
        <div className="conv-dialog" role="dialog" aria-label={title}>
          {lines.map((l, i) => (
            <p className="conv-line" key={i}>
              <strong className="speaker">{l.speaker}:</strong>{" "}
              <span className="utterance">{l.text}</span>
            </p>
          ))}
        </div>

        <div className="conv-vocab">
          <h3>Important Words</h3>
          <table className="vocab-table">
            <thead>
              <tr>
                <th>English</th>
                <th>Türkçe</th>
                <th>Telaffuz (TR)</th>
              </tr>
            </thead>
            <tbody>
              {vocab.map((v, i) => (
                <tr key={i}>
                  <td>
                    <En>{v.en}</En>
                  </td>
                  <td>{v.tr}</td>
                  <td className="pron">[{v.pron}]</td>
                </tr>
              ))}
            </tbody>
          </table>

          {vocab.length > 0 && (
            <p className="note">
              <Key>Telaffuz ipucu:</Key> <code>th</code> çoğunlukla{" "}
              <code>d</code>/<code>t</code>; vurgu <code>bold</code> kelimelerde
              duyulur. Uzun <code>ii</code> (she → şii), zayıf hece çoğu zaman{" "}
              <code>ı</code> (about → ıbaut).
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/** --- DIALOG 1: Café order --- */
const D1 = {
  id: "a1-cafe",
  title: "At the Café",
  lines: [
    { speaker: "John", text: "Good morning! I’d like a coffee, please." },
    { speaker: "Waiter", text: "Sure. Would you like milk or sugar?" },
    { speaker: "John", text: "Milk, please." },
    { speaker: "Waiter", text: "That’s two euros, please." },
    { speaker: "John", text: "Here you go. Thank you!" },
    { speaker: "Waiter", text: "Thank you! Have a nice day." },
  ],
  vocab: [
    { en: "good morning", tr: "günaydın", pron: "gud mornin" },
    { en: "I’d like", tr: "istiyorum", pron: "ayd layk" },
    { en: "coffee", tr: "kahve", pron: "kofi" },
    { en: "milk", tr: "süt", pron: "milk" },
    { en: "sugar", tr: "şeker", pron: "şugır" },
    { en: "euro(s)", tr: "euro", pron: "yuro(yuz)" },
    { en: "thank you", tr: "teşekkür ederim", pron: "tenk yu" },
    { en: "Have a nice day", tr: "iyi günler", pron: "hev ı nays dey" },
    { en: "Here you go", tr: "buyurun", pron: "hir yu gou" },
  ],
};

/** --- DIALOG 2: Supermarket --- */
const D2 = {
  id: "a1-market",
  title: "At the Supermarket",
  lines: [
    { speaker: "Clerk", text: "Hello! Can I help you?" },
    { speaker: "Maya", text: "Yes, where is the bread?" },
    { speaker: "Clerk", text: "It’s on aisle three." },
    { speaker: "Maya", text: "Thanks. How much is this?" },
    { speaker: "Clerk", text: "It’s one euro fifty." },
    { speaker: "Maya", text: "Okay. That’s all. Thank you!" },
  ],
  vocab: [
    {
      en: "Can I help you?",
      tr: "Yardım edebilir miyim?",
      pron: "ken ay help yu",
    },
    { en: "where", tr: "nerede", pron: "ver" },
    { en: "bread", tr: "ekmek", pron: "bred" },
    { en: "aisle", tr: "koridor (reyon)", pron: "ayl" },
    { en: "How much is this?", tr: "Bu ne kadar?", pron: "hau maç iz dis" },
    { en: "fifty", tr: "elli", pron: "fifti" },
    { en: "That’s all", tr: "bu kadar", pron: "dets ol" },
    { en: "Hello", tr: "merhaba", pron: "helo" },
  ],
};

/** --- DIALOG 3: Directions --- */
const D3 = {
  id: "a1-directions",
  title: "Asking for Directions",
  lines: [
    { speaker: "Tourist", text: "Excuse me. Where is the bank?" },
    { speaker: "Local", text: "It’s next to the bus stop." },
    { speaker: "Tourist", text: "Is it far?" },
    { speaker: "Local", text: "No, it’s near. Go straight and turn left." },
    { speaker: "Tourist", text: "Great. Thank you!" },
  ],
  vocab: [
    { en: "excuse me", tr: "affedersiniz", pron: "ikskyuuz mi" },
    { en: "bank", tr: "banka", pron: "benk" },
    { en: "next to", tr: "yanında", pron: "nekst tu" },
    { en: "bus stop", tr: "otobüs durağı", pron: "bas stop" },
    { en: "far", tr: "uzak", pron: "far" },
    { en: "near", tr: "yakın", pron: "niır" },
    { en: "go straight", tr: "düz git", pron: "gou streyt" },
    { en: "turn left/right", tr: "sola/sağa dön", pron: "törn left / rayt" },
    { en: "Thank you", tr: "teşekkürler", pron: "tenk yu" },
  ],
};

/** --- DIALOG 4: Doctor (very basic) --- */
const D4 = {
  id: "a1-doctor",
  title: "At the Doctor’s",
  lines: [
    { speaker: "Doctor", text: "Hello. How can I help you?" },
    { speaker: "Patient", text: "I have a headache." },
    { speaker: "Doctor", text: "Do you have a fever?" },
    { speaker: "Patient", text: "No, I don’t. I’m just tired." },
    { speaker: "Doctor", text: "Okay. Please drink water and rest." },
  ],
  vocab: [
    { en: "headache", tr: "baş ağrısı", pron: "hedeyk" },
    { en: "fever", tr: "ateş", pron: "fivır" },
    { en: "tired", tr: "yorgun", pron: "tayırd" },
    { en: "rest", tr: "dinlenmek", pron: "rest" },
    {
      en: "How can I help you?",
      tr: "Size nasıl yardımcı olabilirim?",
      pron: "hau ken ay help yu",
    },
    { en: "drink water", tr: "su içmek", pron: "drink votır" },
    { en: "I don’t", tr: "hayır (yapmıyorum)", pron: "ay dont" },
  ],
};

/** --- DIALOG 5: Small talk (school/work) --- */
const D5 = {
  id: "a1-smalltalk",
  title: "Small Talk at School",
  lines: [
    { speaker: "Sara", text: "Hi! What’s your name?" },
    { speaker: "Ali", text: "I’m Ali. Nice to meet you." },
    { speaker: "Sara", text: "Nice to meet you, too. Where are you from?" },
    { speaker: "Ali", text: "I’m from Turkey. And you?" },
    { speaker: "Sara", text: "I’m from Germany." },
  ],
  vocab: [
    { en: "What’s your name?", tr: "Adın ne?", pron: "vats yor neym" },
    {
      en: "Nice to meet you",
      tr: "tanıştığıma memnun oldum",
      pron: "nays tu miit yu",
    },
    { en: "Where are you from?", tr: "Nerelisin?", pron: "ver ar yu from" },
    { en: "I’m from…", tr: "…’liyim", pron: "aym from" },
    { en: "Germany", tr: "Almanya", pron: "cörmani" },
    { en: "Turkey", tr: "Türkiye", pron: "törki" },
    { en: "Hi", tr: "merhaba", pron: "hay" },
  ],
};

export default function A1Conversations() {
  return (
    <div className="g-doc conv-page">
      <p className="intro">
        A1 İngilizce <Key>kısa diyaloglar</Key>: önce konuşmayı oku, sonra{" "}
        <Key>Wichtige Wörter</Key> listesinden anlam ve telaffuzu pekiştir.
      </p>

      <DialogueBlock {...D1} />
      <DialogueBlock {...D2} />
      <DialogueBlock {...D3} />
      <DialogueBlock {...D4} />
      <DialogueBlock {...D5} />
    </div>
  );
}

import React from "react";
import {
  Key,
  Term,
  Formula,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
  MiniTable,
  Sub,
} from "../../../blocks";
import Explain from "../../../../../components/Explain";

export default function PresentTense() {
  return (
    <>
      <div className="rule-box">
        <strong>Präsens</strong> — Şimdi/Genel gerçek & rutinler. Ana cümlede
        fiil <Key>2. pozisyon</Key> (Verb-zweit).
      </div>

      <Explain
        title="Verb-zweit nasıl çalışır?"
        lead="Kısa açıklama: Fiil daima 2. konumda."
      >
        <p>
          Kural: <strong>Fiil daima 2. konumda</strong>. Zaman/yer başa gelirse,
          özne fiilden sonra gelir.
        </p>
        <ul className="compact-list">
          <li>
            Normal: <em>Ich komme heute.</em>
          </li>
          <li>
            Vurgulu: <em>Heute komme ich.</em>
          </li>
        </ul>
      </Explain>

      <Sub title="Düzenli çekim (-en kökü)" />
      <Formula
        rows={[
          ["ich", "stamm + e", "lernen → ich lerne"],
          ["du", "stamm + st", "du lernst"],
          ["er/sie/es", "stamm + t", "er lernt"],
          ["wir", "stamm + en", "wir lernen"],
          ["ihr", "stamm + t", "ihr lernt"],
          ["sie/Sie", "stamm + en", "sie lernen"],
        ]}
      />

      <Sub title="Yazım/Ünlü değişimleri (A1 görünümü)" />
      <MiniTable
        head={["Tür", "Örnek", "Not"]}
        rows={[
          [
            "Umlaut değişimi (du/er)",
            "fahren → du fährst / er fährt",
            "yalnız du & er/sie/es",
          ],
          [
            "-s/-ß/-x/-z + du",
            "reisen → du reist; heißen → du heißt",
            "-st kısalabilir",
          ],
          ["-eln/-ern", "handeln → ich handle", "ich’de e düşebilir"],
          ["ireg. sein/haben", "ich bin/bist/… · ich habe/hast/…", "özel"],
        ]}
      />

      <Sub title="Trennbare Verben (ayrılabilen önek)" />
      <Callout type="tip" title="Konum kuralı">
        Önek sona gider: <em>Ich mache die Tür auf.</em> — Soru:
        <em> Machst du die Tür auf?</em>
      </Callout>
      <MiniTable
        head={["Fiil", "Anlam", "Örnek"]}
        rows={[
          ["aufstehen", "kalkmak", "Ich stehe um 7 Uhr auf."],
          ["anrufen", "telefon etmek", "Ich rufe dich später an."],
          ["einkaufen", "alışveriş yapmak", "Wir kaufen am Samstag ein."],
        ]}
      />

      <Sub title="Zaman/yer başta → fiil yine 2." />
      <Formula
        rows={[
          ["Normal", "Ich komme heute.", "özne + fiil + …"],
          ["Vurgulu başlangıç", "Heute komme ich.", "zaman/yer + fiil + özne"],
        ]}
      />

      <Sub title="5) Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "Ich arbeite in Köln.",
            tr: "Köln’de çalışıyorum.",
            pron: "ih arbayte in köln",
          },
          {
            en: "Er fährt zur Arbeit.",
            tr: "O işe gidiyor.",
            pron: "er färt tsur arbait",
          },
          {
            en: "Wir stehen um 7 Uhr auf.",
            tr: "Saat 7’de kalkıyoruz.",
            pron: "vir ştiin um ziibn u:hr auf",
          },
          {
            en: "Heute komme ich spät.",
            tr: "Bugün geç geliyorum.",
            pron: "hoyte komme ih şpet",
          },
        ]}
      />

      <Sub title="Sıklık zarfları (yeri)" />
      <MiniTable
        head={["Zarf", "Konum", "Örnek"]}
        rows={[
          [
            "immer / oft / manchmal / selten / nie",
            "özne + zarf + fiil",
            "Ich oft lese abends.",
          ],
          ["sein ile", "özne + sein + zarf", "Er ist immer müde."],
        ]}
      />

      <Sub title="Mikro Alıştırma (konum)" />
      <ExerciseFill
        title="Verb-zweit / trennbar"
        items={[
          {
            id: "prM1",
            before: "Heute ___ ich müde.",
            after: "",
            answers: ["bin"],
          },
          {
            id: "prM2",
            before: "Wir ___ um 6 Uhr ___ (auf/stehen).",
            after: "",
            answers: ["stehen, auf"],
          },
          {
            id: "prM3",
            before: "___ du oft Deutsch? (lernen)",
            after: "",
            answers: ["Lernst", "lernst"],
          },
          {
            id: "prM4",
            before: "Er ___ zur Arbeit.",
            after: "",
            answers: ["fährt"],
          },
        ]}
      />

      <Sub title="Mini Test (MC)" />
      <ExerciseMC
        title="Mini Quiz"
        items={[
          {
            q: "Trennbar fiil örneği?",
            choices: ["machen", "aufmachen", "arbeiten"],
            correctIndex: 1,
            explain: "auf + machen ayrılabilir.",
          },
          {
            q: "Fiilin 2. pozisyonu hangi cümlede korunmuş?",
            choices: [
              "Heute ich komme.",
              "Heute komme ich.",
              "Komme ich heute.",
            ],
            correctIndex: 1,
            explain: "Zaman başta → fiil yine 2.",
          },
        ]}
      />
    </>
  );
}

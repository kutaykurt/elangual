import React from "react";
import {
  Key,
  Term,
  Formula,
  Examples,
  Callout,
  ExerciseFill,
  MiniTable,
  Sub,
} from "../../../blocks";

export default function Pronunciation() {
  return (
    <>
      <Sub title="Hızlı Özet (Quick Summary)" />
      <MiniTable
        head={[
          "Konu",
          "Nasıl söylenir? (TR ipucu)",
          "Örnekler (yaklaşık TR yazımı)",
        ]}
        rows={[
          [
            "th (iki çeşit)",
            "yumuşak th → d   ·   sert th → t",
            "this → dıs · that → det · think → tink",
          ],
          [
            "i / ee",
            "kısa i = ı   ·   uzun ii = ii",
            "this/is → dıs/ız · she/see → şii/sii",
          ],
          ["w", "Türkçe v’ye yakın", "we → vii · water → votır"],
          ["r", "yumuşak r (ör/ır rengi)", "work/word/bird → vörk/vörd/börd"],
          [
            "ou / o",
            "ou = gou   ·   o (kısa) = a’ya yakın",
            "go → gou · hot → hat",
          ],
          [
            "zayıf hece (schwa)",
            "vurgu yoksa kısa ı",
            "about → ıbaut · teacher → tiiçır",
          ],
          ["u / oo", "u (kısa u) / uu (uzun u)", "put → put · food → fuud"],
        ]}
      />

      <Callout
        type="tip"
        title="Ağız / Dil Pozisyonu (Mouth/Tongue Position — step by step)"
      >
        <ul className="compact-list">
          <li>
            <Term>Yumuşak th</Term> (this/that/the): Dili üst-ön dişlere{" "}
            <em>hafifçe</em> dokundur; Türkçe <Key>d</Key> çıkar —{" "}
            <em>this → dıs, that → det, the → dı</em>.
          </li>
          <li>
            <Term>Sert th</Term> (think/thanks/three): Aynı pozisyon ama Türkçe{" "}
            <Key>t</Key> çıkar — <em>think → tink, thanks → tenks</em>.
          </li>
          <li>
            <Term>r</Term> sert değil; titreşim yok. “or/er/ir/ur” heceleri{" "}
            <Key>ör/ır</Key> rengine kayar — <em>work → vörk</em>.
          </li>
          <li>
            <Term>Vurgu almayan hece</Term> çoğu zaman kısa <Key>ı</Key> olur —
            <em> about → ıbaut</em>.
          </li>
        </ul>
      </Callout>

      <Sub title="Mini Sözlük (Pronunciation Focus)" />
      <MiniTable
        head={["İngilizce", "Yaklaşık TR okunuşu", "Açıklama"]}
        rows={[
          ["this / that / the", "dıs / det / dı", "yumuşak th → d"],
          ["think / thanks / three", "tink / tenks / trii", "sert th → t"],
          ["work / word / world", "vörk / vörd / vörld", "r → ör/ır rengi"],
          ["we / water / want", "vii / votır / vont", "w ≈ v"],
          [
            "about / banana / teacher",
            "ıbaut / bınana / tiiçır",
            "zayıf hece → ı",
          ],
        ]}
      />

      <Sub title="Örnekler (Examples)" />
      <Examples
        items={[
          {
            en: "This is about work.",
            tr: "Bu, işle ilgili.",
            pron: "dıs iz ıbaut vörk",
          },
          {
            en: "She sees the bird.",
            tr: "O kuşu görüyor.",
            pron: "şii siiz dı börd",
          },
        ]}
      />

      <Callout type="error" title="Yaygın Hatalar (Common Mistakes)">
        <ul className="compact-list">
          <li>
            <em>this → dis / zis</em> ❌ yerine <Term>dıs</Term> ✅
          </li>
          <li>
            <em>she → şe</em> ❌ yerine <Term>şii</Term> ✅
          </li>
          <li>
            <em>work → vork / wörk</em> ❌ yerine <Term>vörk</Term> ✅
          </li>
        </ul>
      </Callout>

      <Sub title="Alıştırma (Exercise): Boşluk Doldurma (Gap-fill)" />
      <ExerciseFill
        title="Boşluk Doldurma (Gap-fill): Telaffuz — TR yazımını doldur"
        items={[
          { id: "p1", before: "TR yaz: this → ", answers: ["dıs"] },
          { id: "p2", before: "TR yaz: water → ", answers: ["votır"] },
          { id: "p3", before: "TR yaz: about → ", answers: ["ıbaut"] },
          { id: "p4", before: "TR yaz: think → ", answers: ["tink"] },
          { id: "p5", before: "TR yaz: work → ", answers: ["vörk"] },
        ]}
      />
    </>
  );
}

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

export default function MixedConditionals() {
  return (
    <>
      <div className="rule-box">
        <strong>Mixed Conditionals</strong>: Koşul (if-clause) ile sonuç (main
        clause) farklı zaman düzlemlerinde. En yaygın iki tip:{" "}
        <Key>Past → Present</Key> ve <Key>Present → Past</Key>.
      </div>

      <Sub title="Past → Present (geçmiş koşulun bugünkü sonucu)" />
      <Formula
        rows={[
          ["Yapı", "If + Past Perfect", "..., would + V1 (şimdi/bugün sonuç)"],
          ["Örnek", "If I had studied hard,", "I would have a better job now."],
        ]}
      />
      <Callout type="info" title="Anlam">
        Geçmişte farklı bir şey olsaydı, <em>bugün</em> durum farklı olurdu.
        Türkçede “eğer o zaman yapsaydım, şimdi … olurdu”.
      </Callout>

      <Sub title="Present → Past (şimdiki durumun geçmişteki sonucu)" />
      <Formula
        rows={[
          [
            "Yapı",
            "If + Past Simple (gerçek-dışı şimdi)",
            "..., would have + V3 (geçmiş sonuç)",
          ],
          [
            "Örnek",
            "If I were taller,",
            "I would have joined the team last year.",
          ],
        ]}
      />
      <Callout type="tip" title="‘were’ tercihi">
        <Key>If I were you</Key> gibi kalıplarda B2’de <strong>were</strong>{" "}
        yaygındır (resmi-yazılı). Konuşmada <em>was</em> de duyulur.
      </Callout>

      <Sub title="Alternatifler: if it weren’t for / but for / Had + S + V3" />
      <MiniTable
        head={["Desen", "Anlam", "Örnek"]}
        rows={[
          [
            "If it weren’t for + isim",
            "… olmasa",
            "If it weren’t for your help, I wouldn’t be here.",
          ],
          [
            "But for + isim",
            "… olmasaydı",
            "But for his advice, I would have failed.",
          ],
          [
            "Had + S + V3, ...",
            "If + Past Perfect (kısa)",
            "Had I known, I would have called.",
          ],
        ]}
      />

      <Sub title="Örnekler & Mini-Diyalog" />
      <Examples
        items={[
          {
            en: "If she had taken the earlier train, she would be here by now.",
            tr: "Daha erken treni binseydi, şimdi burada olurdu.",
            pron: "if şii hed teykın di örliır treyn, şii vud bi hiır bay nau",
          },
          {
            en: "If I knew Spanish, I would have moved to Madrid last year.",
            tr: "İspanyolca bilseydim, geçen yıl Madrid’e taşınmış olurdum.",
            pron: "if ay nyuu speniş, ay vud hev muvd tü meadrid lest yiır",
          },
          {
            en: "Had they informed us, we wouldn’t have made that mistake.",
            tr: "Bizi bilgilendirmiş olsaydılar, o hatayı yapmazdık.",
            pron: "hed dey informd as, vii vudnt hev meyd det misteyk",
          },
          {
            en: "If it weren’t for coffee, I wouldn’t be functional in the morning.",
            tr: "Kahve olmasa, sabahları çalışır halde olmazdım.",
            pron: "if it vörınt for kafi, ay vudnt bi fankşınıl in dı morniŋ",
          },
        ]}
      />
      <Callout type="warn" title="Sık hatalar">
        <ul className="compact-list">
          <li>
            <strong>Karışık zamanlar</strong>:{" "}
            <em>✗ If I had money, I would have bought it now</em> →{" "}
            <strong>şimdi</strong> sonuç için <Key>would + V1</Key>.
          </li>
          <li>
            <strong>Çift ‘would’</strong>: Koşul yan tümcesinde <Key>would</Key>{" "}
            kullanılmaz: <em>✗ If I would have studied</em> → <strong>✓</strong>{" "}
            <Key>If I had studied</Key>.
          </li>
        </ul>
      </Callout>

      <Sub title="Alıştırma — Gap-fill" />
      <ExerciseFill
        title="Karışık Koşullar"
        items={[
          {
            id: "mx1",
            before: "If I ___ (listen) to you then, I ___ (be) happier now.",
            after: "",
            answers: ["had listened, would be"],
          },
          {
            id: "mx2",
            before:
              "If she ___ (be) more confident, she ___ (have + get) the job last month.",
            after: "",
            answers: [
              "were, would have got",
              "was, would have got",
              "were, would have gotten",
            ],
          },
          {
            id: "mx3",
            before: "Had they ___ (tell) me, I ___ (not / make) that mistake.",
            after: "",
            answers: ["told, wouldn’t have made", "told, would not have made"],
          },
          {
            id: "mx4",
            before: "If it ___ (not / be) for your support, we ___ (fail).",
            after: "",
            answers: [
              "weren’t, would have failed",
              "hadn’t been, would have failed",
            ],
          },
          {
            id: "mx5",
            before:
              "If I ___ (know) the rules, I ___ (not / break) them yesterday.",
            after: "",
            answers: ["knew, wouldn’t have broken"],
          },
          {
            id: "mx6",
            before: "But for the rain, the concert ___ (go) ahead.",
            after: "",
            answers: ["would have gone"],
          },
        ]}
      />

      <ExerciseMC
        title="Mini Test"
        items={[
          {
            q: "‘Geçmiş koşul → bugünkü sonuç’ hangi seçenektir?",
            choices: [
              "If + Past Simple → would have + V3",
              "If + Past Perfect → would + V1",
              "If + Present Simple → will + V1",
            ],
            correctIndex: 1,
            explain:
              "Past Perfect + would + V1 = geçmiş koşulun bugünkü sonucu.",
          },
          {
            q: "Doğru kısaltma hangisi?",
            choices: [
              "Had I know, ...",
              "Had I known, ...",
              "If I would know, ...",
            ],
            correctIndex: 1,
            explain: "‘Had + V3’ ters çevrilir: Had I known, ...",
          },
        ]}
      />
    </>
  );
}

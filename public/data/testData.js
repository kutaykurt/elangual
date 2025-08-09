/* export const tests = {
  nomens: [
    {
      sentence: "Das __________ beginnt.",
      answer: "Abenteuer",
    },
    {
      sentence: "Ich treffe eine __________.",
      answer: "Entscheidung",
    },
    {
      sentence: "Er trägt die __________.",
      answer: "Verantwortung",
    },
  ],
  verben: [
    {
      sentence: "Ich __________ ein Buch.",
      answer: "lese",
    },
    {
      sentence: "Du __________ Fußball.",
      answer: "spielst",
    },
  ],
};
 */

export async function getTestData() {
  try {
    const res = await fetch(`${process.env.PUBLIC_URL}/data/testData.json`, {
      cache: "no-store", // immer frische Daten, kein Browser-Cache
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} beim Laden von testData.json`);
    }

    const json = await res.json();
    return json;
  } catch (error) {
    console.error("❌ Fehler beim Laden der Testdaten:", error);
    return null;
  }
}

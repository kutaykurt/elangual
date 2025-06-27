export async function fetchVocabularyData(base, target) {
  const url = `/data/${base}-${target}.json`;
  console.log("Fetching:", url); // <- Hinzufügen!
  const res = await fetch(url, { cache: "no-store" });

  console.log("Lade:", `/data/${base}-${target}.json`);
  if (!res.ok) {
    throw new Error(`HTTP error ${res.status} for ${url}`);
  }

  try {
    const json = await res.json();
    return json.vocabulary;
  } catch (e) {
    console.error("Failed to parse JSON from", url);
    throw e;
  }
}

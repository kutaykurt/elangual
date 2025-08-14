// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical,
  robots = "index,follow",
  jsonLd, // optional: strukturierte Daten
}) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {robots && <meta name="robots" content={robots} />}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

const rutaBackend = "https://backend-company-walter.vercel.app";

export default async function handler(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).send("Falta el ID del artículo");
    }

    const response = await fetch(
      `${rutaBackend}/api/newsPaper/${id}`
    );

    if (!response.ok) {
      return res.status(response.status).send("Artículo no encontrado");
    }

    const data = await response.json();

    // Tu backend devuelve { newPaper: {...} }
    const article = data.newPaper;

    if (!article) {
      return res.status(404).send("Artículo no encontrado");
    }

    const title = article.title1 || "PymesYa";
    const description = article.summary1 || "";
    const image = article.img1 || "";

    const articleUrl =
      `https://www.pymesya.com.ar/detailsNewPaper/${id}`;

    const html = `
<!DOCTYPE html>
<html lang="es">
<head>

  <meta charset="UTF-8">

  <title>${escapeHtml(title)} | PymesYa</title>

  <meta
    name="description"
    content="${escapeHtml(description)}"
  />

  <meta
    property="og:type"
    content="article"
  />

  <meta
    property="og:title"
    content="${escapeHtml(title)}"
  />

  <meta
    property="og:description"
    content="${escapeHtml(description)}"
  />

  <meta
    property="og:image"
    content="${escapeHtml(image)}"
  />

  <meta
    property="og:url"
    content="${escapeHtml(articleUrl)}"
  />

  <meta
    property="og:site_name"
    content="PymesYa"
  />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="${escapeHtml(title)}"
  />

  <meta
    name="twitter:description"
    content="${escapeHtml(description)}"
  />

  <meta
    name="twitter:image"
    content="${escapeHtml(image)}"
  />

</head>

<body>
  <div id="root"></div>
</body>

</html>
`;

    res.setHeader("Content-Type", "text/html");

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=300"
    );

    return res.status(200).send(html);

  } catch (error) {

    console.error("Error generando metadata:", error);

    return res.status(500).send("Error interno");
  }
}


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
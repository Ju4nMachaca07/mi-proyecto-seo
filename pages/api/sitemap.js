export default function handler(req, res) {
  // Datos simulados proveniente de DB o CMS
  const dynamicPages = [
    { slug: "post-1", updatedAt: "2025-01-01" },
    { slug: "post-2", updatedAt: "2025-01-10" },
    { slug: "post-3", updatedAt: "2025-02-01" },
  ];

  const baseUrl = "https://DominioSeo.com"


  const staticPages = [
    "",
    "blog",
    "contacto",
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Páginas estáticas
  staticPages.forEach((page) => {
    sitemap += `
      <url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  // Páginas dinámicas
  dynamicPages.forEach((item) => {
    sitemap += `
      <url>
        <loc>${baseUrl}/blog/${item.slug}</loc>
        <lastmod>${item.updatedAt}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `;
  });

  sitemap += `</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}

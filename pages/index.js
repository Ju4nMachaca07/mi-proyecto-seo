import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Proyecto Next.js Optimizado</title>
        <meta name="description" content="Página principal con contenido optimizado para SEO usando meta tags dinámicos." />

        <meta property="og:title" content="Home | Proyecto Next.js Optimizado" />
        <meta property="og:description" content="Página principal con SEO avanzado y optimización de meta tags." />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido a la página principal</h1>
    </>
  );
}

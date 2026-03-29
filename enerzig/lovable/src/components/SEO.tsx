import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: object | object[];
}

export default function SEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  const image = ogImage ?? "https://enerzig.com/assets/enerzig-og.jpg";

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("geo.region", "FR-33");
    setMeta("geo.placename", "Libourne, Gironde");
    setMeta("geo.position", "44.9219;-0.2419");
    setMeta("ICBM", "44.9219, -0.2419");

    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", image, true);
    setMeta("og:type", "website", true);
    setMeta("og:locale", "fr_FR", true);
    setMeta("og:site_name", "Enerzig", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // Inject JSON-LD schema
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      // Remove existing ld+json scripts injected by this component
      document.querySelectorAll('script[data-seo="enerzig"]').forEach((s) => s.remove());
      schemas.forEach((s) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.seo = "enerzig";
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, image, schema]);

  return null;
}

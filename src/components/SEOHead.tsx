import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description?: string;
  path?: string;
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = "https://avlanche.fr";

const SEOHead = ({ title, description, path = "", jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }

    // Canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${BASE_URL}${path}`);
    }

    // OG tags
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description || "",
      "og:url": `${BASE_URL}${path}`,
    };
    Object.entries(ogTags).forEach(([property, content]) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (el) {
        el.setAttribute("content", content);
      }
    });

    // Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc && description) twitterDesc.setAttribute("content", description);

    // JSON-LD
    const existingScript = document.getElementById("page-jsonld");
    if (jsonLd) {
      if (existingScript) {
        existingScript.textContent = JSON.stringify(jsonLd);
      } else {
        const script = document.createElement("script");
        script.id = "page-jsonld";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      const script = document.getElementById("page-jsonld");
      if (script) script.remove();
    };
  }, [title, description, path, jsonLd]);

  return null;
};

export default SEOHead;

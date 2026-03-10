import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description?: string;
  path?: string;
}

const SEOHead = ({ title, description, path = "" }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://avlanche.fr${path}`);
    }
  }, [title, description, path]);

  return null;
};

export default SEOHead;
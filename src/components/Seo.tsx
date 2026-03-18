import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  type?: string;
};

const setMetaTag = (selector: string, attr: 'content' | 'href', value: string) => {
  const el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (el) {
    el.setAttribute(attr, value);
  } else {
    const isLink = selector.startsWith('link');
    const created = document.createElement(isLink ? 'link' : 'meta');
    if (isLink) {
      const relMatch = selector.match(/rel=\"([^\"]+)\"/);
      if (relMatch) created.setAttribute('rel', relMatch[1]);
    } else {
      const nameMatch = selector.match(/name=\"([^\"]+)\"/);
      const propMatch = selector.match(/property=\"([^\"]+)\"/);
      if (nameMatch) created.setAttribute('name', nameMatch[1]);
      if (propMatch) created.setAttribute('property', propMatch[1]);
    }
    created.setAttribute(attr, value);
    document.head.appendChild(created);
  }
};

const Seo = ({ title, description, image = logo, type = 'website' }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const url = `${window.location.origin}${location.pathname}`;
    document.title = title;
    setMetaTag('meta[name=\"description\"]', 'content', description);
    setMetaTag('meta[property=\"og:title\"]', 'content', title);
    setMetaTag('meta[name=\"twitter:title\"]', 'content', title);
    setMetaTag('meta[property=\"og:description\"]', 'content', description);
    setMetaTag('meta[name=\"twitter:description\"]', 'content', description);
    setMetaTag('meta[property=\"og:image\"]', 'content', image);
    setMetaTag('meta[name=\"twitter:image\"]', 'content', image);
    setMetaTag('meta[property=\"og:type\"]', 'content', type);
    setMetaTag('meta[property=\"og:url\"]', 'content', url);
    setMetaTag('link[rel=\"canonical\"]', 'href', url);
  }, [title, description, image, type, location.pathname]);

  return null;
};

export default Seo;

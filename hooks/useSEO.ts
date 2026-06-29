import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update Title
    const prevTitle = document.title;
    document.title = `${title} | Shaping Metals`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    let prevDescription = '';
    
    if (metaDescription) {
      prevDescription = metaDescription.getAttribute('content') || '';
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Cleanup: Restore original values if needed (optional for SPAs)
    return () => {
      document.title = prevTitle;
      if (metaDescription && prevDescription) {
        metaDescription.setAttribute('content', prevDescription);
      }
    };
  }, [title, description]);
}

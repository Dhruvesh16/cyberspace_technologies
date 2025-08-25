import { ReactNode, useEffect } from 'react';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Add some custom smooth scrolling with CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      * {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      document.documentElement.style.scrollBehavior = 'auto';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return <>{children}</>;
}

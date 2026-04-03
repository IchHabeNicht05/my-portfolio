import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Vypne automatické scrollování prohlížeče při refreshi
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Vynutí scrollování úplně nahoru
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
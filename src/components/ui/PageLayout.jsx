import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // 1. Vypneme automatickou paměť scrollu v prohlížeči
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const root = document.documentElement;

    // 2. Dočasně vypneme CSS scroll-behavior: smooth
    root.style.scrollBehavior = 'auto';

    // 3. Okamžitý reset pozice okna i dokumentu
    window.scrollTo(0, 0);
    root.scrollTop = 0;
    document.body.scrollTop = 0;

    // 4. Po vykreslení obnovíme původní plynulé skrolování pro sekce
    const timer = requestAnimationFrame(() => {
      root.style.scrollBehavior = '';
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  return <div className="page-layout">{children}</div>;
};

export default PageLayout;
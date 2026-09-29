import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });

  // The ONLY place the "light" class is applied.
  // useLayoutEffect runs synchronously on commit, so the DOM is
  // updated before the view transition captures the new snapshot.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore storage errors */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Fallback: no View Transitions API or reduced motion
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    // Circle expands from the top-right corner
    const x = window.innerWidth;
    const y = 0;
    const radius = Math.hypot(x, window.innerHeight);

    const transition = document.startViewTransition(() => {
      // Stop CSS transitions so nothing is captured half-faded
      root.classList.add("theme-switching");
      // Force React to commit the new theme before this callback returns
      flushSync(() => setTheme(nextTheme));
    });

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 350,
            easing: "ease-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {});

    // Re-enable normal CSS transitions once the swap is done
    transition.finished.finally(() => {
      root.classList.remove("theme-switching");
    });
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
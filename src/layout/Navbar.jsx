import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "../sections/ThemeContext";

const navLinks = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);

    const scrollToSection = () => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding] duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <nav className="w-full flex items-center justify-between gap-2 px-2 sm:px-5">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="px-7 sm:px-0 py-1 text-sm sm:text-base font-mono tracking-tight text-muted-foreground hover:text-foreground whitespace-nowrap"
          >
            Shen Sarsale
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 shrink-0">
            <div className="rounded-xl px-2 py-1 flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="font-mono px-2 xl:px-4 py-2 text-xs xl:text-sm whitespace-nowrap text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 xl:gap-4">
              <span className="text-muted-foreground">|</span>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden pr-7 p-2 shrink-0 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mx-10 sm:mx-6 mt-2 bg-background/95 backdrop-blur-md border border-border/40 rounded-2xl max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <div className="w-full py-4 px-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-base text-muted-foreground hover:text-foreground py-2 text-left font-mono"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pb-6 px-6">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
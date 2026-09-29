import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTheme } from "../sections/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      {/* 
        Match this outer container's width/padding exactly to App.jsx or your main layout container.
        px-0 removes inner navbar inset so text lines up with the main content edges.
      */}
      <div className="w-full  max-w-4xl mx-auto px-4 sm:px-6">
        <nav className="w-full flex items-center justify-between gap-2 px-2 sm:px-5">
          {/* Logo - -ml-2 cancels out internal button padding so the text starts right on the edge */}
          <button
            onClick={() => handleNavClick("hero")}
            className=" px-7 sm:px-0 py-1 text-sm sm:text-base font-mono tracking-tight text-muted-foreground hover:text-foreground whitespace-nowrap"
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

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {theme === "dark" ? "☀️ " : "🌙 "}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button - -mr-2 lines up icon right edge with the box corner */}
          <button
            className=" lg:hidden pr-7 p-2 shrink-0 text-foreground cursor-pointer "
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

       {/* Mobile Menu */}
        {isMobileMenuOpen && (
          /* ADJUSTMENT 1: Added mx-10 sm:mx-6 to match logo/icon margins */
          <div className="lg:hidden mx-10 sm:mx-6 mt-2 bg-background/95 backdrop-blur-md border border-border/40 rounded-2xl transition-colors duration-500 max-h-[calc(100dvh-4rem)] overflow-y-auto">
            
            {/* ADJUSTMENT 2: Fixed invalid px-100 to px-6 */}
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
              <button
                onClick={toggleTheme}
                className="cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        )}
      </div >
    </header>
  );
};
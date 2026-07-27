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
      className={`fixed top-0 left-0 right-0 z-50 px-10 md:px-40 transition-[background-color,backdrop-filter,padding] duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3"
          : "bg-transparent py-3"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-8 ">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-md font-mono tracking-tight text-muted-foreground hover:text-foreground "
        >
          Shen Sarsale
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 ">
          <div className="rounded-xl px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="font-mono px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface animate-fade-in animation-delay-100"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">|</span>

            <button
              onClick={toggleTheme}
              className="cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-300 animate-fade-in animation-delay-100"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground cursor-pointer animate-fade-in"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md transition-colors duration-500">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 text-left font-mono"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pl-6 pb-6">
            <button
              onClick={toggleTheme}
              className="cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/logoo_1763745375827.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Process", id: "process" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src={logoImage}
              alt="TekNest Logo"
              style={{ borderRadius: "100%" }}
              className="h-12 w-12 object-contain"
            />

            <span className={`text-xl font-bold font-[Poppins] ${isScrolled ? "text-foreground" : "text-white"}`}>
              TekNest
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors ${isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                  }`}
                data-testid={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-started"
              className={isScrolled ? "" : "bg-white text-foreground hover:bg-white/90"}
            >
              Get Started
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2 text-foreground hover:text-primary font-medium transition-colors"
                data-testid={`mobile-nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
              data-testid="button-mobile-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

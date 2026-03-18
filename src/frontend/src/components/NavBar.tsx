import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Menu", href: "#menu" },
    { label: "Sweets", href: "#sweets" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(243,231,211,0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(215,195,163,0.6)",
        boxShadow: "0 4px 24px rgba(130,90,40,0.10)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2" data-ocid="nav.link">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{
              background: "linear-gradient(135deg, #C79A4A, #A8742E)",
              boxShadow: "2px 3px 10px rgba(130,90,40,0.35)",
            }}
          >
            M
          </div>
          <span
            className="font-display font-700 text-lg"
            style={{ color: "#6B5A45" }}
          >
            Madina <span style={{ color: "#B8873A" }}>Bakery</span>
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                style={{ color: "#6B5A45" }}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:03006072702"
            className="pill-btn pill-btn-primary"
            data-ocid="nav.primary_button"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#B8873A" }}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(242,230,210,0.97)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-sm font-medium border-b"
                  style={{
                    color: "#6B5A45",
                    borderColor: "rgba(215,195,163,0.4)",
                  }}
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:03006072702"
                className="pill-btn pill-btn-primary mt-2 self-start"
                data-ocid="nav.primary_button"
              >
                <Phone size={14} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

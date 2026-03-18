import { Clock, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ background: "#0E3B3E", color: "rgba(255,255,255,0.85)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{
                  background: "linear-gradient(135deg, #C79A4A, #8B5E1A)",
                }}
              >
                M
              </div>
              <div>
                <p
                  className="font-display font-700 text-base leading-tight"
                  style={{ color: "#C79A4A" }}
                >
                  Madina Baker's
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  &amp; Sweets Jauharabad
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Jauharabad's finest bakery and sweet shop. Serving fresh baked
              goods and traditional sweets since decades.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/madinabakery178"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
                data-ocid="footer.link"
              >
                <SiFacebook size={16} />
              </a>
              <a
                href="https://wa.me/923006072702"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.7)",
                }}
                data-ocid="footer.link"
              >
                <SiWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="font-display font-600 text-sm uppercase tracking-wider mb-4"
              style={{ color: "#C79A4A" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li
                className="flex items-start gap-2.5 text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <MapPin
                  size={15}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#C79A4A" }}
                />
                Sarwar Shaheed Chowk, Jauharabad, District Khushab
              </li>
              <li
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Phone size={15} style={{ color: "#C79A4A" }} />
                <a
                  href="tel:03006072702"
                  className="hover:text-white transition-colors"
                  data-ocid="footer.link"
                >
                  0300 6072702
                </a>
              </li>
              <li
                className="flex items-center gap-2.5 text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Clock size={15} style={{ color: "#C79A4A" }} />
                Open daily · Closes 11 PM
              </li>
            </ul>
          </div>

          {/* Links column */}
          <div>
            <h4
              className="font-display font-600 text-sm uppercase tracking-wider mb-4"
              style={{ color: "#C79A4A" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Menu", "Sweets", "Gallery", "Reviews", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      data-ocid="footer.link"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <p>
            © {year} Madina Baker's &amp; Sweets Jauharabad. All rights
            reserved.
          </p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: "rgba(199,154,74,0.7)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

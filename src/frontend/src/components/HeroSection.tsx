import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "64px" }}
      id="gallery"
    >
      {/* Hero image */}
      <div className="relative w-full" style={{ height: "480px" }}>
        <img
          src="/assets/generated/madina-bakery-hero.dim_1400x600.jpg"
          alt="Madina Baker's & Sweets Jauharabad"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(243,231,211,0) 0%, rgba(243,231,211,0.05) 40%, rgba(243,231,211,0.85) 85%, rgba(243,231,211,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(243,231,211,0.6) 0%, transparent 30%, transparent 70%, rgba(243,231,211,0.6) 100%)",
          }}
        />

        {/* Category badge */}
        <motion.div
          className="absolute top-6 left-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
            style={{
              background: "rgba(184,135,58,0.90)",
              color: "white",
              boxShadow: "0 2px 12px rgba(130,90,40,0.35)",
              backdropFilter: "blur(8px)",
            }}
          >
            🥐 Bakery &amp; Sweets
          </span>
        </motion.div>

        {/* Open status badge */}
        <motion.div
          className="absolute top-6 right-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span
            className="px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.85)",
              color: "#166534",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-green-500"
              style={{ boxShadow: "0 0 6px #22c55e" }}
            />
            Open Now · Closes 11 PM
          </span>
        </motion.div>
      </div>
    </section>
  );
}

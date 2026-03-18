import { motion } from "motion/react";
import PopularTimesChart3D from "./PopularTimesChart3D";

export default function PopularTimesCard() {
  return (
    <motion.div
      className="card-3d p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
      data-ocid="popular-times.card"
    >
      <h3
        className="font-display font-700 text-lg mb-1"
        style={{ color: "#6B5A45" }}
      >
        Popular Times
      </h3>
      <p className="text-xs mb-3" style={{ color: "#9A8570" }}>
        Usually busiest on weekends
      </p>

      <PopularTimesChart3D />

      <div className="mt-3 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div
            className="w-3 h-3 rounded-sm"
            style={{ background: "#C79A4A" }}
          />
          <span className="text-xs" style={{ color: "#9A8570" }}>
            Busiest
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="w-3 h-3 rounded-sm"
            style={{ background: "#D4A55A" }}
          />
          <span className="text-xs" style={{ color: "#9A8570" }}>
            Moderate
          </span>
        </div>
      </div>

      {/* Phone */}
      <div
        className="mt-4 pt-4 border-t text-sm flex items-center gap-2"
        style={{ borderColor: "rgba(215,195,163,0.5)", color: "#6B5A45" }}
      >
        <span style={{ color: "#B8873A" }}>📞</span>
        <a
          href="tel:03006072702"
          className="font-medium hover:text-amber-700 transition-colors"
          style={{ color: "#6B5A45" }}
          data-ocid="popular-times.link"
        >
          0300 6072702
        </a>
      </div>
    </motion.div>
  );
}

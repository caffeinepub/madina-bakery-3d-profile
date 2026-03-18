import { motion } from "motion/react";
import { useState } from "react";
import type { Review } from "../backend.d";
import StarRating from "./StarRating";

interface Props {
  review?: Review;
}

export default function ReviewCard({ review }: Props) {
  const [hovered, setHovered] = useState(false);

  const displayReview = review || {
    reviewerName: "Uzair Malik",
    reviewText:
      "Outstanding quality sweets and baked goods! The barfi here is absolutely divine — fresh, rich, and melts in your mouth. Best bakery in Jauharabad by far.",
  };

  return (
    <div className="flex justify-end mb-6" id="reviews">
      <motion.div
        className="card-3d p-6 max-w-sm w-full"
        initial={{ opacity: 0, rotate: 3, y: 30 }}
        animate={{ opacity: 1, rotate: hovered ? 0 : 2, y: hovered ? -6 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
        whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          transformOrigin: "bottom left",
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? "14px 20px 50px rgba(130,90,40,0.28), -4px -4px 18px rgba(255,248,235,0.9)"
            : "8px 12px 32px rgba(130,90,40,0.18), -4px -4px 14px rgba(255,248,235,0.85)",
        }}
        data-ocid="review.card"
      >
        {/* Quote mark */}
        <div
          className="text-6xl font-display leading-none mb-2"
          style={{
            color: "rgba(184,135,58,0.2)",
            lineHeight: 1,
            fontFamily: "Georgia, serif",
          }}
        >
          &ldquo;
        </div>

        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "#4A3B2A" }}
        >
          {displayReview.reviewText}
        </p>

        <div
          className="flex items-center gap-3 pt-3 border-t"
          style={{ borderColor: "rgba(215,195,163,0.5)" }}
        >
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{
              background: "linear-gradient(135deg, #C79A4A, #8B5E1A)",
              boxShadow: "0 2px 10px rgba(130,90,40,0.35)",
            }}
          >
            {displayReview.reviewerName.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: "#4A3B2A" }}>
              {displayReview.reviewerName}
            </p>
            <StarRating rating={4} size={13} />
          </div>
          <div className="ml-auto">
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: "rgba(184,135,58,0.12)", color: "#8B5E1A" }}
            >
              Verified
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { Star } from "lucide-react";

const STAR_POSITIONS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
  showNumber?: boolean;
  reviewCount?: number;
}

export default function StarRating({
  rating,
  maxStars = 5,
  size = 18,
  showNumber = false,
  reviewCount,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      {showNumber && (
        <span
          className="font-display font-800 mr-1"
          style={{ fontSize: "2.5rem", color: "#B8873A", lineHeight: 1 }}
        >
          {rating.toFixed(1)}
        </span>
      )}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, i) => {
          const filled = i < Math.floor(rating);
          const half = !filled && i < rating;
          return (
            <div
              key={STAR_POSITIONS[i]}
              className="relative"
              style={{ width: size, height: size }}
            >
              <Star
                size={size}
                className="star-empty absolute"
                fill="oklch(0.800 0.040 75)"
                strokeWidth={0}
              />
              {(filled || half) && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: half ? "55%" : "100%" }}
                >
                  <Star
                    size={size}
                    className="star-gold"
                    fill="oklch(0.78 0.16 80)"
                    strokeWidth={0}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {reviewCount !== undefined && (
        <span className="text-sm font-medium" style={{ color: "#6B5A45" }}>
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
}

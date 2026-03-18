import {
  Bookmark,
  Clock,
  DollarSign,
  Facebook,
  MapPin,
  Navigation,
  Phone,
  Share2,
} from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";
import type { BakeryProfile } from "../backend.d";
import StarRating from "./StarRating";

interface Props {
  profile?: BakeryProfile;
  isLoading: boolean;
}

export default function BusinessInfoCard({ profile, isLoading }: Props) {
  if (isLoading || !profile) {
    return (
      <div
        className="card-3d p-7 animate-pulse"
        data-ocid="business.loading_state"
      >
        <div className="h-10 bg-amber-200/60 rounded-xl w-3/4 mb-4" />
        <div className="h-5 bg-amber-200/40 rounded-lg w-1/2 mb-3" />
        <div className="h-5 bg-amber-200/40 rounded-lg w-2/3" />
      </div>
    );
  }

  return (
    <motion.div
      className="card-3d p-7 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
      data-ocid="business.card"
    >
      {/* Decorative corner accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-10"
        style={{
          background:
            "radial-gradient(circle at top right, #C79A4A, transparent 70%)",
        }}
      />

      {/* 3D extruded business name */}
      <h1 className="title-3d text-3xl sm:text-4xl mb-1 leading-tight">
        Madina Baker's
      </h1>
      <p
        className="font-display font-600 text-lg mb-4"
        style={{ color: "#9A7540" }}
      >
        &amp; Sweets Jauharabad
      </p>

      {/* Rating */}
      <div className="mb-5">
        <StarRating
          rating={profile.rating}
          showNumber
          size={22}
          reviewCount={Number(profile.reviewCount)}
        />
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap gap-3 mb-5">
        <span
          className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full"
          style={{ background: "rgba(184,135,58,0.12)", color: "#8B5E1A" }}
        >
          🥐 {profile.category}
        </span>
        <span
          className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full"
          style={{ background: "rgba(184,135,58,0.12)", color: "#8B5E1A" }}
        >
          <DollarSign size={13} /> {profile.priceRange}
        </span>
        <span
          className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full"
          style={{ background: "rgba(34,197,94,0.12)", color: "#166534" }}
        >
          <span
            className="w-2 h-2 rounded-full bg-green-500"
            style={{ boxShadow: "0 0 5px #22c55e" }}
          />
          <Clock size={13} /> {profile.hours}
        </span>
      </div>

      {/* Location */}
      <div
        className="flex items-start gap-2 mb-5 text-sm"
        style={{ color: "#6B5A45" }}
      >
        <MapPin
          size={16}
          className="mt-0.5 shrink-0"
          style={{ color: "#B8873A" }}
        />
        <span>{profile.address}</span>
      </div>

      {/* Action buttons row 1 */}
      <div className="flex flex-wrap gap-2 mb-3" data-ocid="business.section">
        <a
          href={`https://www.google.com/maps/search/${encodeURIComponent(profile.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn"
          data-ocid="business.primary_button"
        >
          <Navigation size={14} />
          Directions
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="pill-btn"
          data-ocid="business.secondary_button"
        >
          <Phone size={14} />
          Call
        </a>
        <button type="button" className="pill-btn" data-ocid="business.toggle">
          <Bookmark size={14} />
          Save
        </button>
        <button
          type="button"
          className="pill-btn"
          data-ocid="business.secondary_button"
        >
          <Share2 size={14} />
          Share
        </button>
      </div>

      {/* Social buttons row 2 */}
      <div className="flex flex-wrap gap-2">
        <a
          href={profile.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn-whatsapp"
          data-ocid="business.primary_button"
        >
          <SiWhatsapp size={14} />
          WhatsApp
        </a>
        <a
          href={profile.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn-facebook"
          data-ocid="business.secondary_button"
        >
          <Facebook size={14} />
          Facebook
        </a>
      </div>
    </motion.div>
  );
}

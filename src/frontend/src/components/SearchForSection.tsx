import { motion } from "motion/react";

const TILE_IMAGES = [
  "/assets/generated/bakery-tile-1.dim_400x300.jpg",
  "/assets/generated/bakery-tile-2.dim_400x300.jpg",
  "/assets/generated/bakery-tile-3.dim_400x300.jpg",
  "/assets/generated/bakery-tile-4.dim_400x300.jpg",
  "/assets/generated/bakery-tile-1.dim_400x300.jpg",
  "/assets/generated/bakery-tile-2.dim_400x300.jpg",
];

const DEFAULT_BUSINESSES = [
  "\u0645\u062f\u06cc\u0646\u06c1 \u0628\u06cc\u06a9\u0631\u0632 \u0627\u06cc\u0646\u0688 \u0633\u0648\u06cc\u0679\u0633",
  "Madina Breakfast Hotel",
  "Madina Bakers & Sweets",
  "Bhatti Sweets and Bakers",
  "Al Rahat Bakery",
  "Jauharabad Sweets Corner",
];

const TILE_POSITIONS = [
  "tile-1",
  "tile-2",
  "tile-3",
  "tile-4",
  "tile-5",
  "tile-6",
];

interface Props {
  businesses: string[];
}

export default function SearchForSection({ businesses }: Props) {
  const items = businesses.length > 0 ? businesses : DEFAULT_BUSINESSES;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10" id="menu">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <h2
            className="font-display font-700 text-2xl"
            style={{ color: "#6B5A45" }}
          >
            People Also Search For
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(184,135,58,0.3), transparent)",
            }}
          />
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          data-ocid="search.list"
        >
          {items.slice(0, 6).map((name, i) => (
            <motion.div
              key={TILE_POSITIONS[i]}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                height: "160px",
                boxShadow: "4px 6px 20px rgba(130,90,40,0.18)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.04 }}
              data-ocid={`search.item.${i + 1}`}
            >
              <img
                src={TILE_IMAGES[i % TILE_IMAGES.length]}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,12,0,0.75) 0%, rgba(20,12,0,0.25) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p
                  className="text-xs font-semibold leading-tight text-white"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                >
                  {name}
                </p>
              </div>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: "2px solid rgba(199,154,74,0.6)" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

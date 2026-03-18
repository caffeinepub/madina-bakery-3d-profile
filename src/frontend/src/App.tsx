import { motion, useMotionValue, useTransform } from "motion/react";
import { useCallback, useRef } from "react";
import BusinessInfoCard from "./components/BusinessInfoCard";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import PopularTimesCard from "./components/PopularTimesCard";
import ReviewCard from "./components/ReviewCard";
import SearchForSection from "./components/SearchForSection";
import { useGetProfile, useGetRelatedBusinesses } from "./hooks/useQueries";

export default function App() {
  const { data: profile, isLoading } = useGetProfile();
  const { data: relatedBusinesses } = useGetRelatedBusinesses();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pageRef = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = pageRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY],
  );

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-background font-body"
      onMouseMove={handleMouseMove}
      style={{ overflowX: "hidden" }}
    >
      {/* Bokeh background spots */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div
          className="bokeh-spot"
          style={{
            width: "500px",
            height: "500px",
            top: "-100px",
            left: "-100px",
            background: "rgba(199,154,74,0.18)",
          }}
        />
        <div
          className="bokeh-spot"
          style={{
            width: "400px",
            height: "400px",
            top: "30%",
            right: "-80px",
            background: "rgba(184,135,58,0.12)",
          }}
        />
        <div
          className="bokeh-spot"
          style={{
            width: "300px",
            height: "300px",
            bottom: "20%",
            left: "20%",
            background: "rgba(212,165,90,0.10)",
          }}
        />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <NavBar />

        <main>
          <HeroSection />

          {/* Cards section — overlaps hero */}
          <motion.section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            style={{
              marginTop: "-80px",
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 1200,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-2">
              <div className="lg:col-span-2">
                <BusinessInfoCard profile={profile} isLoading={isLoading} />
              </div>
              <div>
                <PopularTimesCard />
              </div>
            </div>
          </motion.section>

          {/* Review card */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <ReviewCard review={profile?.featuredReview} />
          </section>

          {/* People also search for */}
          <SearchForSection businesses={relatedBusinesses ?? []} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

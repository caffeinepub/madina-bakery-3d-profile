import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Group } from "three";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const DAY_KEYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const BUSY_LEVELS = [0.38, 0.45, 0.42, 0.58, 0.8, 1.0, 0.88];
const MAX_BAR_HEIGHT = 1.8;

function Bar({
  height,
  x,
  delayFrames,
  isBusiest,
}: {
  height: number;
  x: number;
  delayFrames: number;
  isBusiest: boolean;
}) {
  const groupRef = useRef<Group>(null);
  const frameCount = useRef(0);
  const currentScale = useRef(0);
  const barHeight = height * MAX_BAR_HEIGHT;

  useFrame(() => {
    frameCount.current += 1;
    if (frameCount.current < delayFrames) return;
    if (!groupRef.current) return;
    // Spring lerp toward 1
    currentScale.current += (1 - currentScale.current) * 0.08;
    groupRef.current.scale.y = currentScale.current;
  });

  return (
    <group ref={groupRef} position={[x, 0, 0]} scale={[1, 0, 1]}>
      <mesh position={[0, barHeight / 2, 0]}>
        <boxGeometry args={[0.28, barHeight, 0.28]} />
        <meshStandardMaterial
          color={isBusiest ? "#C79A4A" : height > 0.6 ? "#B8873A" : "#D4A55A"}
          roughness={0.35}
          metalness={0.35}
          emissive={isBusiest ? "#C79A4A" : "#000000"}
          emissiveIntensity={isBusiest ? 0.15 : 0}
        />
      </mesh>
      <mesh position={[0, barHeight, 0]}>
        <boxGeometry args={[0.28, 0.04, 0.28]} />
        <meshStandardMaterial color="#E8C070" roughness={0.1} metalness={0.8} />
      </mesh>
    </group>
  );
}

function Scene() {
  const spacing = 0.52;
  const startX = -(DAYS.length - 1) * spacing * 0.5;

  return (
    <>
      <ambientLight intensity={0.7} color="#FFF5E0" />
      <directionalLight
        position={[3, 5, 4]}
        intensity={1.2}
        color="#FFE0A0"
        castShadow
      />
      <pointLight position={[-2, 3, 2]} intensity={0.5} color="#FFD580" />

      <mesh position={[0, -0.02, 0]}>
        <boxGeometry args={[DAYS.length * spacing + 0.5, 0.04, 0.6]} />
        <meshStandardMaterial color="#D7C3A3" roughness={0.8} metalness={0.1} />
      </mesh>

      {BUSY_LEVELS.map((level, i) => (
        <Bar
          key={DAY_KEYS[i]}
          height={level}
          x={startX + i * spacing}
          delayFrames={i * 5}
          isBusiest={level === 1.0}
        />
      ))}
    </>
  );
}

export default function PopularTimesChart3D() {
  const [ready, setReady] = useState(false);

  return (
    <div className="w-full" style={{ height: "160px", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 1.8, 4.5], fov: 42 }}
        gl={{ antialias: true }}
        style={{ background: "transparent" }}
        onCreated={() => setReady(true)}
      >
        {ready && <Scene />}
      </Canvas>
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-around px-4"
        style={{ pointerEvents: "none" }}
      >
        {DAYS.map((d, i) => (
          <span
            key={DAY_KEYS[i]}
            className="text-xs font-semibold text-center"
            style={{
              color: BUSY_LEVELS[i] === 1.0 ? "#B8873A" : "#9A8570",
              minWidth: "18px",
            }}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import ParticleField from "./ParticleField";
import ScrollCamera from "./ScrollCamera";

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <ScrollControls pages={3} damping={0.3}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#C9A227" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#1E2A47" />

          <ParticleField />
          <ScrollCamera />
        </Suspense>
      </ScrollControls>

      <Suspense fallback={null}>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
            intensity={0.6}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.1} darkness={0.8} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

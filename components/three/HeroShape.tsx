"use client";
import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, useScroll } from "@react-three/drei";
import * as THREE from "three";

export default function HeroShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef(new THREE.Euler());
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useScroll();
  const { size } = useThree();

  // Track mouse
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / size.width - 0.5) * 2,
        y: -(e.clientY / size.height - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [size]);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Slow base rotation
    const baseRotX = state.clock.elapsedTime * 0.08;
    const baseRotY = state.clock.elapsedTime * 0.12;

    // Damped mouse lerp
    targetRotation.current.x = THREE.MathUtils.lerp(
      targetRotation.current.x,
      baseRotX + mouse.current.y * 0.25,
      0.05
    );
    targetRotation.current.y = THREE.MathUtils.lerp(
      targetRotation.current.y,
      baseRotY + mouse.current.x * 0.3,
      0.05
    );

    meshRef.current.rotation.x = targetRotation.current.x;
    meshRef.current.rotation.y = targetRotation.current.y;

    // Scroll-linked: rotate more + move up
    const scrollOffset = scroll.offset;
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      -scrollOffset * 4,
      0.05
    );
    meshRef.current.rotation.z = scrollOffset * Math.PI * 0.5;

    // Scale morph on scroll
    const targetScale = 1 - scrollOffset * 0.3;
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05)
    );
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
      {/* Icosahedron — abstract glass shape */}
      <icosahedronGeometry args={[1.4, 2]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.3}
        roughness={0.05}
        transmission={1}
        ior={1.5}
        chromaticAberration={0.05}
        anisotropy={0.3}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        color="#C9A227"
        attenuationDistance={2}
        attenuationColor="#1E2A47"
      />
    </mesh>
  );
}

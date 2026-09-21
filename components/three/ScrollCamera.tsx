"use client";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

export default function ScrollCamera() {
  const scroll = useScroll();
  useFrame(({ camera }) => {
    // Dolly camera back as user scrolls
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      6 + scroll.offset * 4,
      0.05
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      -scroll.offset * 1.5,
      0.05
    );
  });
  return null;
}

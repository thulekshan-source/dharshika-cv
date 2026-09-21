"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface Skill {
  id: string;
  label: string;
  icon: string;
}

// Arc positions: 6 cards laid out in a wide arc
function getArcPositions(count: number): [number, number, number][] {
  const positions: [number, number, number][] = [];
  const spread = Math.PI * 0.8; // arc spread angle
  const radius = 3.8;
  for (let i = 0; i < count; i++) {
    const angle = -spread / 2 + (spread / (count - 1)) * i;
    const x = Math.sin(angle) * radius;
    const y = Math.cos(angle) * 0.6 - 0.6; // slight vertical arc
    const z = Math.cos(angle) * 0.5;
    positions.push([x, y, z]);
  }
  return positions;
}

function SkillCard({
  position,
  label,
  icon,
  index,
}: {
  position: [number, number, number];
  label: string;
  icon: string;
  index: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const targetRotation = useRef(new THREE.Euler());
  const targetScale = useRef(1);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Floating animation
    const floatY =
      Math.sin(state.clock.elapsedTime * 0.8 + index * 1.2) * 0.08;
    groupRef.current.position.y = position[1] + floatY;

    // Hover tilt
    if (hovered) {
      targetRotation.current.x = THREE.MathUtils.lerp(
        targetRotation.current.x,
        -0.15,
        0.1
      );
      targetScale.current = THREE.MathUtils.lerp(targetScale.current, 1.12, 0.1);
    } else {
      targetRotation.current.x = THREE.MathUtils.lerp(
        targetRotation.current.x,
        0,
        0.08
      );
      targetScale.current = THREE.MathUtils.lerp(targetScale.current, 1, 0.08);
    }

    groupRef.current.rotation.x = targetRotation.current.x;
    groupRef.current.scale.setScalar(targetScale.current);
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      {/* Card body */}
      <RoundedBox args={[1.8, 1.1, 0.08]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color={hovered ? "#263354" : "#1E2A47"}
          roughness={0.3}
          metalness={0.4}
          transparent
          opacity={0.95}
        />
      </RoundedBox>

      {/* Gold rim light on hover */}
      {hovered && (
        <RoundedBox args={[1.84, 1.14, 0.06]} radius={0.06} smoothness={4}>
          <meshStandardMaterial
            color="#C9A227"
            emissive="#C9A227"
            emissiveIntensity={0.5}
            transparent
            opacity={0.15}
            side={THREE.BackSide}
          />
        </RoundedBox>
      )}

      {/* Icon */}
      <Text
        position={[0, 0.2, 0.06]}
        fontSize={0.28}
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>

      {/* Label */}
      <Text
        position={[0, -0.2, 0.06]}
        fontSize={0.095}
        color={hovered ? "#C9A227" : "#F5F3EF"}
        anchorX="center"
        anchorY="middle"
        maxWidth={1.5}
        textAlign="center"
      >
        {label}
      </Text>
    </group>
  );
}

function Scene({ skills }: { skills: Skill[] }) {
  const positions = getArcPositions(skills.length);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 5]} intensity={1.2} color="#F5F3EF" />
      <pointLight position={[0, 2, 3]} intensity={0.8} color="#C9A227" />

      {skills.map((skill, i) => (
        <SkillCard
          key={skill.id}
          position={positions[i]}
          label={skill.label}
          icon={skill.icon}
          index={i}
        />
      ))}
    </>
  );
}

export default function SkillsCanvas({ skills }: { skills: Skill[] }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true }}
      aria-hidden="true"
    >
      <Scene skills={skills} />
    </Canvas>
  );
}

'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Ring({ radius, color, tilt }: { radius: number; color: string; tilt: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

export default function OrbitalRings() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
        <Ring radius={2} color="#00d4ff" tilt={[0.3, 0, 0]} />
        <Ring radius={2.8} color="#7c3aed" tilt={[0.8, 0.4, 0]} />
        <Ring radius={3.5} color="#a78bfa" tilt={[0.1, 0.8, 0.3]} />
      </Canvas>
    </div>
  );
}

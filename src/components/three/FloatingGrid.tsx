'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Grid() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = -2 + Math.sin(clock.getElapsedTime() * 0.3) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2, -5]} rotation={[-0.4, 0, 0]}>
      <planeGeometry args={[30, 30, 20, 20]} />
      <meshBasicMaterial wireframe color="#7c3aed" transparent opacity={0.15} />
    </mesh>
  );
}

export default function FloatingGrid() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
        <Grid />
      </Canvas>
    </div>
  );
}

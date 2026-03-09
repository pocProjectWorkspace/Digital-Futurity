'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 1500, color = '#00d4ff', size = 0.02, speed = 0.02 }: {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
}) {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.x += delta * speed * 0.5;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={size} color={color} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function ParticleField({ count, color, size, speed }: {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
}) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]}>
        <Particles count={count} color={color} size={size} speed={speed} />
      </Canvas>
    </div>
  );
}

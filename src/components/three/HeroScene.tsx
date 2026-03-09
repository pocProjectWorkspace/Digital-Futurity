'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGeometry({ geometry, position, speed }: { geometry: 'icosahedron' | 'torusKnot' | 'octahedron'; position: [number, number, number]; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * speed * 0.3;
    meshRef.current.rotation.y += delta * speed * 0.2;
    meshRef.current.rotation.z += delta * speed * 0.1;
    meshRef.current.position.y += Math.sin(Date.now() * 0.001 * speed) * 0.001;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case 'icosahedron': return new THREE.IcosahedronGeometry(1, 1);
      case 'torusKnot': return new THREE.TorusKnotGeometry(0.8, 0.3, 64, 8);
      case 'octahedron': return new THREE.OctahedronGeometry(0.9, 0);
    }
  }, [geometry]);

  return (
    <mesh ref={meshRef} position={position} geometry={geo}>
      <meshBasicMaterial wireframe color="#00d4ff" transparent opacity={0.4} />
    </mesh>
  );
}

function Particles() {
  const { viewport } = useThree();
  const count = viewport.width < 6 ? 1500 : 3000;
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={['#050508', 5, 20]} />
      <ambientLight intensity={0.5} color="#7c3aed" />
      <pointLight position={[2, 2, 2]} color="#00d4ff" intensity={1.5} />
      <FloatingGeometry geometry="icosahedron" position={[1.5, 0.5, -1]} speed={0.8} />
      <FloatingGeometry geometry="torusKnot" position={[-1, -0.3, -2]} speed={0.5} />
      <FloatingGeometry geometry="octahedron" position={[0.5, -1, -1.5]} speed={0.6} />
      <FloatingGeometry geometry="icosahedron" position={[-2, 1, -3]} speed={0.4} />
      <Particles />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
    </div>
  );
}

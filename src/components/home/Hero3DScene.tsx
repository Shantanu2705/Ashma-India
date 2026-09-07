"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment, OrbitControls } from "@react-three/drei";
import { RealisticROPurifier } from "./Service3DModel";

export function ParticleField() {
  const ref = useRef<any>(null);
  const sphere = new Float32Array(5000 * 3);
  
  for (let i = 0; i < 5000; i++) {
    const radius = 1.5;
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);
    const sinPhi = Math.sin(phi);
    const cosPhi = Math.cos(phi);
    sphere[i * 3] = r * sinPhi * cosTheta;
    sphere[i * 3 + 1] = r * sinPhi * sinTheta;
    sphere[i * 3 + 2] = r * cosPhi;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#1698E8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function HeroBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Environment preset="city" />
      <ParticleField />
    </Canvas>
  );
}

export function HeroModel() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
      <directionalLight position={[-5, 5, 5]} intensity={1} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 1.5} 
      />
      <RealisticROPurifier />
      <Environment preset="studio" />
    </Canvas>
  );
}

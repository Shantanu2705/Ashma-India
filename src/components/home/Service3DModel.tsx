"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls, PresentationControls, MeshTransmissionMaterial, RoundedBox, Cylinder, Sphere } from "@react-three/drei";
import * as THREE from "three";

export function RealisticROPurifier() {
  const groupRef = useRef<THREE.Group>(null);
  const bubblesRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
    if (bubblesRef.current) {
      bubblesRef.current.rotation.y += delta * 0.5;
      bubblesRef.current.children.forEach((bubble, i) => {
        bubble.position.y += Math.sin(state.clock.elapsedTime * 2 + i) * 0.005;
      });
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.1} position={[0, -1.3, 0]}>
        
        {/* Main Body - Glossy White Plastic */}
        <RoundedBox args={[2.2, 3, 1.5]} radius={0.1} smoothness={2} position={[0, 1.5, 0]}>
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
        </RoundedBox>

        {/* Front Glass Panel - Black Acrylic */}
        <RoundedBox args={[2, 2.8, 0.1]} radius={0.05} smoothness={2} position={[0, 1.5, 0.76]}>
          <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.6} />
        </RoundedBox>

        {/* LED Screen Area */}
        <RoundedBox args={[1.2, 0.6, 0.05]} radius={0.05} smoothness={2} position={[0, 2.2, 0.8]}>
          <meshStandardMaterial color="#000000" roughness={0.2} />
        </RoundedBox>

        {/* Glowing Indicators */}
        <Sphere args={[0.05, 16, 16]} position={[-0.4, 2.2, 0.83]}>
          <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={2} toneMapped={false} />
        </Sphere>
        <Sphere args={[0.05, 16, 16]} position={[-0.2, 2.2, 0.83]}>
          <meshStandardMaterial color="#00a3ff" emissive="#00a3ff" emissiveIntensity={2} toneMapped={false} />
        </Sphere>

        {/* Transparent Water Storage Tank (Bottom Half) */}
        <RoundedBox args={[2.0, 1.2, 1.2]} radius={0.1} smoothness={2} position={[0, 0.6, 0.1]}>
          <meshStandardMaterial color="#dcf0ff" transparent opacity={0.3} roughness={0.1} metalness={0.1} />
        </RoundedBox>

        {/* Internal Filters (Visible through glass) */}
        <Cylinder args={[0.2, 0.2, 1, 32]} position={[-0.5, 0.6, 0.1]}>
          <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.2} />
        </Cylinder>
        <Cylinder args={[0.2, 0.2, 1, 32]} position={[0.5, 0.6, 0.1]}>
          <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.2} />
        </Cylinder>

        {/* Animated Water Bubbles inside the tank */}
        <group ref={bubblesRef} position={[0, 0.6, 0.1]}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Sphere 
              key={i} 
              args={[Math.random() * 0.03 + 0.01, 8, 8]} 
              position={[(Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8]}
            >
              <meshStandardMaterial color="#ffffff" transparent opacity={0.5} roughness={0.2} />
            </Sphere>
          ))}
        </group>

        {/* Metallic Dispenser Tap Base */}
        <Cylinder args={[0.12, 0.15, 0.3, 32]} position={[0, 0.3, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#e0e0e0" metalness={1} roughness={0.1} envMapIntensity={2} />
        </Cylinder>

        {/* Dispenser Spout */}
        <Cylinder args={[0.06, 0.06, 0.4, 32]} position={[0, 0.1, 1.0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#e0e0e0" metalness={1} roughness={0.1} envMapIntensity={2} />
        </Cylinder>

        {/* Dispenser Lever */}
        <RoundedBox args={[0.4, 0.08, 0.15]} radius={0.02} smoothness={2} position={[0, 0.4, 1.0]}>
          <meshStandardMaterial color="#00a3ff" roughness={0.2} metalness={0.5} />
        </RoundedBox>

      </group>
    </Float>
  );
}

export default function Service3DModel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ashma-blue/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-ashma-blue/10 border border-ashma-blue/20 text-ashma-blue text-sm font-semibold mb-2">
              Interactive 3D Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Next-Gen <span className="text-ashma-blue">RO Purifier</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Explore the anatomy of our premium water purifiers in ultra-realistic 3D. 
              Featuring advanced transparent tanks, multi-stage filtration cylinders, animated water dynamics, and 
              a sleek modern design that fits perfectly in any contemporary kitchen.
            </p>
            <ul className="space-y-4 mt-8">
              {[
                "Modern Transparent Water Tank",
                "Visible Multi-stage Filtration",
                "Sleek LED Indicator Displays",
                "Premium Metallic Dispenser"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-ashma-blue shrink-0 shadow-[0_0_10px_rgba(0,163,255,0.8)]" />
                  <span className="font-medium text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[500px] w-full rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] order-1 lg:order-2 shadow-2xl relative cursor-grab active:cursor-grabbing">
            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-gray-400 border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Drag to Rotate
            </div>
            {mounted && (
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
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

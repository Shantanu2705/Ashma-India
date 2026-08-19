"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

// Helper for 3D particles
function ParticleField() {
  const ref = useRef<any>(null);
  const sphere = new Float32Array(5000 * 3);
  
  // Initialize particles in a sphere
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

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-ashma-grey dark:bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60 dark:opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Environment preset="city" />
          <ParticleField />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-ashma-blue/20 text-ashma-blue text-sm font-semibold tracking-wider uppercase"
          >
            Premium Water Solutions
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-ashma-text dark:text-white leading-tight mb-8">
            Pure Water.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ashma-blue to-ashma-dark">Smart Technology.</span><br />
            Trusted Solutions.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Providing advanced water purification, commercial RO systems, industrial water treatment solutions, chimney services, and maintenance support across India.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-ashma-blue text-white rounded-full font-medium overflow-hidden transition-all hover:bg-ashma-dark shadow-lg shadow-ashma-blue/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-white/10 text-ashma-text dark:text-white rounded-full font-medium border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20 transition-all"
            >
              Request Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Scroll Discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-ashma-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}

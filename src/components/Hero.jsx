import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const ParticleUniverse = ({ count = 3000 }) => {
  const pointsRef = useRef();

  // Generate random positions and colors for particles
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorA = new THREE.Color("#f472b6"); // pink
    const colorB = new THREE.Color("#8b5cf6"); // purple
    const colorMixed = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Create a sphere distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      // Focus particles closer to center, spreading out
      const radius = 2 + Math.random() * 8;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions.set([x, y, z], i * 3);
      
      // Mix colors based on position
      const mixRatio = Math.random();
      colorMixed.lerpColors(colorA, colorB, mixRatio);
      
      // Add some random bright white particles for stars
      if (Math.random() > 0.95) {
        colors.set([1, 1, 1], i * 3);
      } else {
        colors.set([colorMixed.r, colorMixed.g, colorMixed.b], i * 3);
      }
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05;
      pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Immersive 3D Canvas Background */}
      <div className="absolute inset-0 z-0 bg-[#09090b]">
        {/* Dreamy glow behind canvas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <fog attach="fog" args={['#09090b', 5, 15]} />
          <ParticleUniverse count={5000} />
        </Canvas>
      </div>

      {/* Centered Aesthetic Content Overlay */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-[-5%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center"
        >
          
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight text-white"
          >
            Ismat Qasim
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-4xl font-light mb-8 dream-gradient-text tracking-wide"
          >
            Software Engineer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-light"
          >
            Crafting elegant, user-centric, and visually captivating digital experiences where logic meets aesthetic design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <a href="#projects" className="px-10 py-4 rounded-full bg-white text-zinc-950 font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] tracking-wide">
              Discover Work
            </a>
            <a href="#contact" className="px-10 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-all duration-300 tracking-wide border border-white/20">
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Gentle scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase font-light">Scroll Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

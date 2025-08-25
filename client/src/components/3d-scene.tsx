import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

// Simple Animated Box Component
function AnimatedBox() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={hovered ? "#4F46E5" : "#8B5CF6"} 
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Floating Spheres Component
function FloatingSpheres() {
  const sphereRefs = useRef<Mesh[]>([]);

  useFrame((state) => {
    sphereRefs.current.forEach((sphere, index) => {
      if (sphere) {
        sphere.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5;
        sphere.rotation.x += 0.005;
        sphere.rotation.z += 0.005;
      }
    });
  });

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <mesh
          key={index}
          ref={(el) => el && (sphereRefs.current[index] = el)}
          position={[
            (index - 2) * 2,
            0,
            Math.sin(index) * 2
          ]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color={new THREE.Color().setHSL(index * 0.2, 1, 0.6)} 
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </>
  );
}

// Main 3D Scene Component
export default function Scene3D() {
  return (
    <div className="w-full h-64 relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* 3D Objects */}
        <AnimatedBox />
        <FloatingSpheres />
      </Canvas>
    </div>
  );
}

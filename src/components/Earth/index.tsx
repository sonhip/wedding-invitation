import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Earth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/8k_earth_daymap.jpg");

  // Xoay Trái Đất mỗi frame
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        emissive={new THREE.Color(0x222222)} // Màu phát sáng nhẹ
        emissiveIntensity={0.4} // Cường độ phát sáng
      />
    </mesh>
  );
};

const Atmosphere: React.FC = () => {
  const atmosphereRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh ref={atmosphereRef}>
      <sphereGeometry args={[1.05, 64, 64]} />{" "}
      {/* Kích thước lớn hơn Trái Đất */}
      <meshBasicMaterial
        color={new THREE.Color(0x00aaff)} // Màu xanh của ánh sáng
        transparent={true}
        opacity={0.4} // Độ mờ
      />
    </mesh>
  );
};

const Lights: React.FC = () => {
  return (
    <>
      {/* Hemisphere Light */}
      <hemisphereLight args={[0xffffff, 0x444444, 1]} />
      {/* Directional Light */}
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
    </>
  );
};

const EarthBox: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
      {/* Controls */}
      <OrbitControls enableDamping dampingFactor={0.03} />
      {/* Lights */}
      <Lights />
      {/* Atmosphere */}
      <Atmosphere />
      {/* Earth */}
      <Earth />
    </Canvas>
  );
};

export default EarthBox;

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ scale, position, rotation }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <group position={position} rotation={rotation}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} position={[0, 0, 0]} />
      <primitive object={computer.scene} scale={scale} />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Check for mobile and tablet devices
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(min-width: 501px) and (max-width: 1024px)");
    
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);
    

    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
      
    };

    const handleTabletQueryChange = (event) => {
      setIsTablet(event.matches);
      
    };

    mobileQuery.addEventListener("change", handleMobileQueryChange);
    tabletQuery.addEventListener("change", handleTabletQueryChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileQueryChange);
      tabletQuery.removeEventListener("change", handleTabletQueryChange);
    };
  }, []);

  // Define scale, position, and rotation based on device
  let scale, position, rotation;

  const cameraTarget = [0, -0.75, -1.5];

  if (isMobile) {
    // Smaller and more centered on small screens
    scale = 0.28;
    position = [0.38, -0.9, -1.8];
    rotation = [0, -0.1, 0];
  } else if (isTablet) {
    scale = 0.38;
    position = [0.2, -0.85, -1.6];
    rotation = [0, -0.1, 0];
  } else {
    scale = 0.6;
    position = [-0.5, -0.75, -1.5];    // Slightly left for desktop
    rotation = [0, -0.1, 0];           // Angled toward user
  }

  return (
    <div style={{ width: '100%', height: isMobile ? '85vh' : '100vh', position: 'relative' }}>
      <Canvas
        camera={{
          position: [20, 3, 15], // Reverted to original camera position
          fov: 25,
          near: 1,
          far: 100,
        }}
        style={{
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: isMobile ? 'none' : 'auto'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            target={cameraTarget}
            enableZoom={!isMobile}
            enablePan={!isMobile}
            enableRotate={!isMobile}
            maxPolarAngle={Math.PI / 2 + 0.35}
            minPolarAngle={Math.PI / 2 - 0.4}
            maxDistance={35}
            minDistance={4}
            zoomSpeed={0.7}
            rotateSpeed={0.9}
            panSpeed={0.8}
          />
          <Computers scale={scale} position={position} rotation={rotation} />
        </Suspense>
      </Canvas>
      {/* Instruction text moved to Hero.jsx above the scroll indicator */}
    </div>
  );
};

export default ComputersCanvas;

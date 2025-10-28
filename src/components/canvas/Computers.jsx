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

  // Define scale, position, rotation, and camera settings based on device
  let scale, position, rotation, cameraFov, cameraPosition;

  const cameraTarget = [0, -0.75, -1.5];

  if (isMobile) {
    scale = 0.55; // Much larger on mobile for better visibility
    position = [0.9, -0.82, -1.5];   // Shifted right to show left speaker
    rotation = [0, -0.1, 0];   // Angled toward user
    cameraFov = 35; // Wider FOV for mobile to make model appear larger
    cameraPosition = [20, 3, 12]; // Closer camera position
  } else if (isTablet) {
    scale = 0.45;                      // Larger for tablet
    position = [0.25, -0.78, -1.5];   // Nudge a bit more to the right
    rotation = [0, -0.1, 0];           // Angled toward user
    cameraFov = 28; // Slightly wider FOV for tablet
    cameraPosition = [20, 3, 13];
  } else {
    scale = 0.6;
    position = [-0.5, -0.75, -1.5];    // Slightly left for desktop
    rotation = [0, -0.1, 0];           // Angled toward user
    cameraFov = 25; // Standard FOV for desktop
    cameraPosition = [20, 3, 15];
  }

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Canvas
        camera={{
          position: cameraPosition,
          fov: cameraFov,
          near: 1,
          far: 100,
        }}
        style={{
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            target={cameraTarget}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2 + 0.3} // Allow tilting down
            minPolarAngle={Math.PI / 2 - 0.3} // Allow tilting up
            maxDistance={50}
            minDistance={5}
            zoomSpeed={0.5}
          />
          <Computers scale={scale} position={position} rotation={rotation} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;

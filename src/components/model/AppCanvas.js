import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";
import Loader from "./Loader";
import { PerspectiveCamera } from "@react-three/drei";

function AppCanvas(props) {
  const isBrowser = typeof window !== "undefined";
  return (
    <Canvas
      height="100%"
      width="100%"
      gl={{
        antialias: true,
        // physicallyCorrectLights: true,
      }}
      dpr={isBrowser ? Math.max(window.devicePixelRatio, 2) : null}
      shadows
    >
      <PerspectiveCamera makeDefault position={[-3.1, 3.5, 3]} zoom={0.6} />
      <OrbitControls target={[0, 1, 0]} position={[-3.1, 3.5, 3]} />
      <Suspense fallback={<Loader />}>
        <directionalLight
          position={[2.2, -5, 3.8]}
          castShadow
          intensity={1}
          color={0xda94ff}
          // color={0xffffff}
        />
        <directionalLight
          position={[-5.8, 1.9, 4.5]}
          castShadow
          intensity={1}
          color={0xda94ff}
          // color={0xffffff}
        />
        <ambientLight intensity={0.5} />
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default AppCanvas;

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import Model from "./Model";
import AppSpotLight from "./AppSpotLight";
import Loader from "./Loader";

function AppCanvas(props) {
  const isBrowser = typeof window !== "undefined";
  const ref = useRef();

  return (
    // <>
    //   <button onClick={() => console.log(ref.current.object.position)}>
    //     current position
    //   </button>
    <Canvas
      height="100%"
      width="100%"
      gl={{
        antialias: true,
        physicallyCorrectLights: true,
      }}
      dpr={isBrowser ? Math.max(window.devicePixelRatio, 2) : null}
      shadows
    >
      <PerspectiveCamera makeDefault position={[-3.1, 3.5, 3]} zoom={0.6} />
      <OrbitControls target={[0, 1, 0]} position={[-3.1, 3.5, 3]} ref={ref} />
      <Suspense fallback={<Loader />}>
        {/* <ambientLight intensity={0.1} /> */}
        <Model />
      </Suspense>
      <directionalLight
        position={[-3.1, 3.5, 3]}
        castShadow
        intensity={0.5}
        // color={0xdabaff}
        color={0xffffff}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={3}
        shadowBias={-0.0001}
      />
      <directionalLight
        position={[-5.8, 1.9, 4.5]}
        castShadow
        intensity={1}
        color={0xa700ff}
        shadowBias={-0.0001}
        shadow-camera-near={3}
        // color={0xffffff}
      />
      <AppSpotLight
        position={[1.10158753, 1.5345273, -0.11705822]}
        targetPosition={[
          1.2810398303108943, 2.58897611712408, -1.2308860438818423,
        ]}
        props={{ intensity: 0.5, angle: Math.PI / 6, castShadow: true }}
      />
    </Canvas>
    // </>
  );
}

export default AppCanvas;

//[  1.2810398303108943, 2.58897611712408, -1.2308860438818423,]

import React, { useMemo } from "react";
import * as THREE from "three";

function SpotLight({
  position = [0, 0, 0],
  targetPosition = [0, 0, 0],
  props,
}) {
  const light = useMemo(() => new THREE.SpotLight(0xffffff), []);
  return (
    <>
      <primitive object={light} position={position} {...props} />
      <primitive object={light.target} position={targetPosition} />
    </>
  );
}

export default SpotLight;

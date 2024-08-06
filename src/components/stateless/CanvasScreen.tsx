import React from "react";
import { Canvas, useThree } from "@react-three/fiber";

export const CanvasScreen = () => {
  return (
    <Canvas>
      <directionalLight position={[-5, -5, 5]} intensity={1} />
      // add your 3d model
    </Canvas>
  );
};

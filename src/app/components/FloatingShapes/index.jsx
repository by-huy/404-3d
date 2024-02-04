"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";


export default function Index() {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 200], zoom: 300 }}>
      <Suspense fallback={null} >
        <Model />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

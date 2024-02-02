"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./components/Practice/Experience";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between ">
      <Canvas
        camera={{
          fov: 45,
          position: [3, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </main> 
  );
}

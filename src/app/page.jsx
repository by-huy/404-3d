"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between ">
      <Canvas>
        <Experience />
      </Canvas>
    </main>
  );
}

"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { Suspense, useEffect } from "react";

export default function Index() {
  const mouse = {
    y: useMotionValue(0),
    x: useMotionValue(0),
  };

  const spring = {
    type: "spring",
    stiffness: 75,
    damping: 125,
    mass: 1,
  };
  const smoothMouse = {
    x: useSpring(mouse.x, spring),
    y: useSpring(mouse.y, spring),
  };

  //   Tracking the mouse
  const trackMouse = (e) => {
    const { clientY, clientX } = e;
    const { innerWidth, innerHeight } = window;
    mouse.y.set(clientY / innerHeight);
    mouse.x.set(clientX / innerWidth);
  };

  

  useEffect(() => {
    window.addEventListener("mousemove", trackMouse);
    return () => {
      window.removeEventListener("mousemove", trackMouse);
    };
  });

  return (
    <Canvas orthographic camera={{ position: [0, 0, 200], zoom: 500 }}>
      <Suspense fallback={null}>
        <Model mouse={smoothMouse} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}

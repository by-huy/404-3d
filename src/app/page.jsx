"use client";

import Button from "./components/Button";
import FloatingShapes from "./components/FloatingShapes";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-[#0f0f0f]">
      {/* <Canvas
        camera={{
          fov: 45,
          position: [3, 2, 6],
        }}
      > 
      
        <color args={['#ff0000']} attach="background" />
        <Experience />
      </Canvas> */}
      <div className="w-1/2 h-2/3 rounded-full left-72 blur-[128px] animate-blob opacity-20 absolute bg-red-400"></div>
      <div className="w-1/2 h-2/3  rounded-full right-72 animation-delay-1 animate-blob opacity-20 blur-[128px] absolute bg-purple-400"></div>
      <div className="w-1/2 h-2/3 rounded-full opacity-20 animation-delay-2 blur-[128px] bottom-40 absolute bg-orange-300 animate-blob"></div>
      <div className="absolute h-full w-full">
        <FloatingShapes />
      </div>
      <div
        className="absolute top-1/2
       -translate-y-1/2 flex flex-col items-center "
      >
        <h1 className="text-white text-[32vw] mix-blend-difference slashed-zero font-bold font-neuemontrealcondensed leading-none">
          404
        </h1>
        <p className=" text-gray-200 font-neuemontreal text-4xl max-w-[30ch] text-center ">
          Page not found. You have reached to the void of time, wanna head back?
        </p>
        <Button />
      </div>
    </main>
  );
}

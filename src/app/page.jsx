"use client";

import FloatingShapes from "./components/floatingShapes";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between bg-[#131313]">
      {/* <Canvas
        camera={{
          fov: 45,
          position: [3, 2, 6],
        }}
      > 
      
        <color args={['#ff0000']} attach="background" />
        <Experience />
      </Canvas> */}
      <div className="absolute h-full w-full">
        <FloatingShapes />
      </div>
      <div
        className="absolute top-1/2
       -translate-y-1/2 flex flex-col items-center"
      >
        <h1 className="text-white text-[20rem] font-bold mix-blend-exclusion font-neuemontrealcondensed leading-none">
          404 ERROR
        </h1>
        <p className="text-white font-neuemontreal text-4xl">You have reached into the void of time, wanna head back?</p>
      </div>
    </main>
  );
}

import { TransformControls, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


export default function Experience() {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls />


      <directionalLight position={[1,2,2]} intensity={2.8} />
      <ambientLight intensity={0.3} />
      // scale prop is used to scale the mesh on x, y, z axis
      <group>
        <mesh
          ref={cubeRef}
          position-x={2}
          scale={1.5}
          rotation-y={Math.PI * 0.23}
        >
          <boxGeometry scale={1.5} />
          {/* meshBasicMaterial only gets the color */}
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <mesh position-x={-2}>
          <sphereGeometry scale={1.5} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}

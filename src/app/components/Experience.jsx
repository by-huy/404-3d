import { useFrame } from "@react-three/fiber";

export default function Experience() {
    

  return (
    <>
      // scale prop is used to scale the mesh on x, y, z axis
      <mesh position-x={2} scale={1.5} rotation-y={Math.PI * 0.23}>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="mediumpurple"/>
      </mesh>
      <mesh position-x={-2}>
        <sphereGeometry scale={1.5} />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh position-y={-1} rotation-x={- Math.PI * 0.5} scale={10}>
        <planeGeometry   />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}

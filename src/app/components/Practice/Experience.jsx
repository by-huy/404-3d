import {
  TransformControls,
  Html,
  Float,
  PivotControls,
  OrbitControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  const { position, color, visible } = useControls({
    position: {
      value: { x: -2, y: 0, z: 0 },
      step: 0.01,
    },
    color: "#ff0000",
    visible: true,
  });

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 2]} intensity={5.8} />
      <ambientLight intensity={2.3} />
      // scale prop is used to scale the mesh on x, y, z axis
      {/* <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#4dffc9"]}
        scale={100}
        fixed={true}
      > */}
      <mesh
        ref={sphereRef}
        visible={visible}
        position={[position.x, position.y, 0]}
      >
        <sphereGeometry scale={1.5} />
        <meshStandardMaterial color={color} />
        <Html
          className="font-bold"
          center
          position={[1, 1, 0]}
          distanceFactor={8}
          occlude={[sphereRef, cubeRef]}
        >
          <h1 className="text-7xl">HELLO WORLD</h1>
        </Html>
      </mesh>
      {/* </PivotControls> */}
      <Float>
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
      </Float>
      <TransformControls object={cubeRef} mode="translate" />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.75}
        />
      </mesh>
    </>
  );
}

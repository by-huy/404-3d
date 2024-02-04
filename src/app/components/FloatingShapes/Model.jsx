import { Float, useGLTF } from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
// Mesh component
function Mesh({ node, material, mouse, multiplier }) {
  const { geometry, castShadow, receiveShadow, position, rotation,  } = node;
  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - multiplier, rotation.x + multiplier]);
  const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - multiplier, rotation.y + multiplier]);
  // const positionY = useTransform(mouse.y, [0, 1], [position.y - multiplier, position.y + multiplier]);
  // const positionX = useTransform(mouse.x, [0, 1], [position.x - multiplier, position.x + multiplier]);
  return (
    <motion.mesh
      castShadow={castShadow}
      geometry={geometry}
      receiveShadow={receiveShadow}
      material={material}
      position={[position.x, position.y, position.z]}
      rotation-x={rotationX}
      rotation-y={rotationY}
      multiplier={multiplier}
    />
  );
}

export default function Model({ mouse }) {
  const { nodes, materials } = useGLTF("/medias/404.glb");
  return (
    <>
      <ambientLight intensity={0.1} /> {/* Ambient light */}
      {/* Key Light (Directional Light) */}
      <directionalLight
        position={[-40, 50, 0]}
        color="purple"
        castShadow
        intensity={2}
      />
      {/* Fill Light */}
      <directionalLight
        position={[40, -50, 0]}
        color="orange"
        castShadow
        intensity={0.2}
      />
      {/* Backlight or Rim Light */}
      <directionalLight
        position={[0, 10, -20]}
        color="orange"
        castShadow
        intensity={8}
      />
      <Float>
        <group>
          <Mesh mouse={mouse} node={nodes.Torus} material={materials.Metal} multiplier={0.8} />
          <Mesh mouse={mouse} node={nodes.Cylinder} material={materials["Material.006"]} multiplier={1.2}/>
          <Mesh mouse={mouse} node={nodes.Cylinder001} material={materials["Material.007"]} multiplier={0.3}/>
          <Mesh mouse={mouse} node={nodes.Cone} material={materials["Old clay rusty texture"]} multiplier={1.1}/>
          <Mesh mouse={mouse} node={nodes.Icosphere001} material={materials["Material.003"]} multiplier={0.5}/>
          <Mesh mouse={mouse} node={nodes.Icosphere} material={materials["Material.002"]} multiplier={0.4}/>
          <Mesh mouse={mouse} node={nodes.Cube} material={materials.Metal} multiplier={1.6}/>
        </group>
      </Float>
    </>
  );
}

useGLTF.preload("/medias/404.glb");

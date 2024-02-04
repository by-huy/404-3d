import { Float, useGLTF } from "@react-three/drei";
import { Grid } from "@react-three/drei";
// Mesh component
function Mesh({ node, material }) {
  const { geometry, castShadow, receiveShadow, position } = node;
  return (
    <mesh
      castShadow={castShadow}
      geometry={geometry}
      receiveShadow={receiveShadow}
      material={material}
      position={[position.x, position.y, position.z]}
    />
  );
}


export default function Model() {
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
          <Mesh node={nodes.Torus} material={materials.Metal} />
          <Mesh node={nodes.Cylinder} material={materials["Material.006"]} />
          <Mesh node={nodes.Cylinder001} material={materials["Material.007"]} />
          <Mesh
            node={nodes.Cone}
            material={materials["Old clay rusty texture"]}
          />
          <Mesh
            node={nodes.Icosphere001}
            material={materials["Material.003"]}
          />
          <Mesh node={nodes.Icosphere} material={materials["Material.002"]} />
          <Mesh node={nodes.Cube} material={materials.Metal} />
        </group>
      </Float>
    </>
  );
}

useGLTF.preload("/medias/404.glb");

import { Float, useGLTF } from "@react-three/drei";

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
      <directionalLight position={[-50, 30, 0]}  />
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

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Figure(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/figure.glb');
  useFrame(() => (ref.current.rotation.y += 0.01));
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0.08, 1.36, 0.04]}
        rotation={[-3.02, -1.17, 0.04]}
        scale={[0.3, 0.3, 0.38]}
      />
    </group>
  );
}

useGLTF.preload('/figure.glb');

export default Figure;

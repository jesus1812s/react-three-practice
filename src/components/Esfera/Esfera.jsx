function Esfera({ position, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={color} specular={'red'} />
    </mesh>
  );
}

export default Esfera;

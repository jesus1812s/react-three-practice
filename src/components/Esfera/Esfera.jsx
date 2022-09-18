import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Esfera({ position, color }) {
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.rotation.y += -0.01) &&
      (ref.current.rotation.x += -0.01) &&
      (ref.current.rotation.z += -0.01)
  );

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={color} specular={'red'} />
    </mesh>
  );
}

export default Esfera;

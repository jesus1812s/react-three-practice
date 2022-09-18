import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
function Cubo({ position, color }) {
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.rotation.y += -0.01) &&
      (ref.current.rotation.x += -0.01) &&
      (ref.current.rotation.z += -0.01)
  );
  return (
    <>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  );
}

export default Cubo;

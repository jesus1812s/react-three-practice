import { Canvas } from '@react-three/fiber';

function Lienzo({ children }) {
  const cameraProps = {
    fov: 45,
    position: [0, 0, 10],
  };

  return <Canvas camera={cameraProps}>{children}</Canvas>;
}

export default Lienzo;

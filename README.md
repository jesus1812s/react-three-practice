#Links

https://sandbox.babylonjs.com/

https://threejs.org/docs/index.html#manual/en/introduction/Installation

https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

https://github.com/pmndrs/drei

Para construir un cubo se necesita

```
import { OrbitControls } from '@react-three/drei';

function Cubo() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={'blue'} />
      </mesh>
    </>
  );
}

export default Cubo;


```

Transform gltfjsx to components

# https://github.com/pmndrs/gltfjsx

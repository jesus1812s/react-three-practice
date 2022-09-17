import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'three';
import Lienzo from './components/Lienzo/Index';
// import Cubo from './components/Cubo/Cubo';
// import Esfera from './components/Esfera/Esfera';

import Figure from './components/Figure/Figure';

import { OrbitControls } from '@react-three/drei';

// import * as THREE from 'three';

/**
 * [Horizontal, Vertical, Eje Z (profundidad)]
 * [X, Y, Z]
 * [0, 0, 0] = Centro
 * [10, 10, 10] = 10 unidades a la derecha, 10 unidades arriba, 10 unidades hacia adelante
 * @returns array
 */

const App = () => {
  return (
    <div className="App">
      <div>Hola</div>
      {/* <Lienzo> Basic Example
        <pointLight color="white" intensity={0.5} position={[0, 10, 0]} />
        <pointLight color="yellow" intensity={0.5} position={[0, -10, 5]} />
        <OrbitControls />
        <Cubo position={[1, 1, 1]} color={'green'} />
        <Esfera position={[-1, -1, -1]} color={'aquamarine'} />
      </Lienzo> */}
      <Lienzo>
        <pointLight color="white" intensity={0.5} position={[0, 10, 0]} />
        <pointLight color="white" intensity={0.5} position={[10, 0, 0]} />
        <OrbitControls />
        <Suspense fallback={'Loading...'}>
          <Figure />
        </Suspense>
      </Lienzo>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { FunctionComponent, Suspense, useRef } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';

type StlViewProperties = {
    source: string,
    height: string
};

const degToRad = (deg: number) => deg/180 * Math.PI;

export const StlView: FunctionComponent<StlViewProperties> = (props: StlViewProperties) => {
    const canvasStyle = {
        width: '100%',
        height: props.height
    };
    // camera.translateX(-100);
    // camera.translateY(-100);
    // camera.translateZ(-300);
    //camera.rotateZ(degToRad(90));
    //camera.rotateX(degToRad(0));
    //camera.rotateY(degToRad(270));


    const icoMaterial = new THREE.MeshPhongMaterial({
      color       : new THREE.Color("rgb(255,255,255)"),
      emissive    : new THREE.Color("rgb(50,50,50)"),
      specular    : new THREE.Color("rgb(123,123,200)"),
      shininess   : 4,
      opacity     : 1
    });

    // const controls = new OrbitControls( camera, renderer.domElement );
    // controls.target.set( 0, 0.5, 0 );
    // controls.update();
    // controls.enablePan = true;
    // controls.enableDamping = true;
    const geometry = useLoader(STLLoader, props.source);
    geometry.rotateX(degToRad(40));
    geometry.rotateY(degToRad(-50));
    geometry.rotateZ(degToRad(10));

    // const ref = useRef<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>>();
    // <input type="range" min="0" max="360" onChange={e => geometry.rotateX(degToRad(Number(e.target.value)))} />
    // <input type="range" min="0" max="360" onChange={e => geometry.rotateY(degToRad(Number(e.target.value)))} />
    // <input type="range" min="0" max="360" onChange={e => geometry.rotateZ(degToRad(Number(e.target.value)))} />
  
    return (
      <>
      <Canvas style={canvasStyle}>
        <ambientLight/>
        <directionalLight />
        <OrbitControls target={new Vector3(0, 0, -150)}></OrbitControls>
        <group  position={new Vector3(0, 0, -150)}>

          <mesh geometry={geometry} material={icoMaterial}>
            
          </mesh>
        </group>
      </Canvas>
      </>
    )
  }
  
import { FunctionComponent, Suspense, useRef } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Canvas, useLoader } from "@react-three/fiber";
import { Loader, OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

type StlViewProperties = {
    source: string,
    position: Vector3,
    rotation: Vector3,
    cameraPosition: Vector3,
    lightOrigin: Vector3
    showAxes: boolean
};

const degToRad = (deg: number) => deg/180 * Math.PI;

export const StlView: FunctionComponent<StlViewProperties> = (props: StlViewProperties) => {
    const icoMaterial = new THREE.MeshPhongMaterial({
      color       : new THREE.Color("rgb(255,255,255)"),
      emissive    : new THREE.Color("rgb(50,50,50)"),
      specular    : new THREE.Color("rgb(123,123,200)"),
      shininess   : 4,
      opacity     : 1
    });
    const orbitref = useRef<any>();
    const geometry = useLoader(STLLoader, props.source);

    const eul = new THREE.Euler(degToRad(props.rotation.x), degToRad(props.rotation.y), degToRad(props.rotation.z));

    let axes = <></>;
    if (props.showAxes){
      axes = <>
        <mesh position={[0, 25, 0]}>
          <meshStandardMaterial color={"blue"}/>
          <cylinderGeometry args={[1, 1, 50, 100]} />
        </mesh>
        <mesh position={[0, 0, 25]} rotation={[1.5707963268, 0, 0]}>
          <meshStandardMaterial color={"red"}/>
          <cylinderGeometry args={[1, 1, 50, 100]} />
        </mesh>
        <mesh position={[25, 0, 0]} rotation={[0, 0, 1.5707963268]}>
          <meshStandardMaterial color={"green"}/>
          <cylinderGeometry args={[1, 1, 50, 100]} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <meshStandardMaterial color={"white"}/>
          <sphereGeometry args={[5]} />
        </mesh>
      </>
    }

    return (
      <Suspense fallback={<Loader />} >
        <Canvas className='stl-view' camera={{position: props.cameraPosition}}>
          <ambientLight/>
          <directionalLight position={props.lightOrigin}/>
          <OrbitControls ref={orbitref} />
          <mesh rotation={eul} geometry={geometry} material={icoMaterial} position={props.position} />
          {axes}
        </Canvas>
        <div className='reset-view-button' onClick={() => orbitref.current.reset()}>
          <CIcon icon={icon.cilActionUndo} />
        </div>
      </Suspense>
    )
  }
  
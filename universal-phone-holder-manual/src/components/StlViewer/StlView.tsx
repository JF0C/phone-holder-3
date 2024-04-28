import { FunctionComponent, Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Canvas, useLoader } from "@react-three/fiber";
import { Loader, OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, addLoadedMesh } from '../../store/state';
import { Dispatch } from '@reduxjs/toolkit';

type StlViewProperties = {
    source: string,
    height: string,
    position: Vector3,
    rotation: Vector3
};

const degToRad = (deg: number) => deg/180 * Math.PI;

export const StlView: FunctionComponent<StlViewProperties> = (props: StlViewProperties) => {
    const canvasStyle = {
        width: '100%',
        height: props.height
    };
    const [loadedMeshes, setLoadedMeshes] = useState<string[]>([])

    const icoMaterial = new THREE.MeshPhongMaterial({
      color       : new THREE.Color("rgb(255,255,255)"),
      emissive    : new THREE.Color("rgb(50,50,50)"),
      specular    : new THREE.Color("rgb(123,123,200)"),
      shininess   : 4,
      opacity     : 1
    });

    const geometry = useLoader(STLLoader, props.source);

    if (!loadedMeshes.includes(props.source)){
      geometry.rotateX(degToRad(props.rotation.x));
      geometry.rotateY(degToRad(props.rotation.y));
      geometry.rotateZ(degToRad(props.rotation.z));
      loadedMeshes.push(props.source);
      setLoadedMeshes(loadedMeshes);
    }

    return (
      <>
      <Suspense fallback={<Loader/>}>
        <Canvas style={canvasStyle}>
          <ambientLight/>
          <directionalLight />
          <OrbitControls target={props.position}></OrbitControls>
          <group  position={props.position}>

            <mesh geometry={geometry} material={icoMaterial}>
              
            </mesh>
          </group>
        </Canvas>
      </Suspense>
      </>
    )
  }
  
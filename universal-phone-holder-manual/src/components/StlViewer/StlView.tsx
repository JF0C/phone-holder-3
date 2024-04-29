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
    rotation: Vector3,
    cameraPosition: Vector3,
    lightOrigin: Vector3
    showAxes: boolean
};

const degToRad = (deg: number) => deg/360 * Math.PI;

export const StlView: FunctionComponent<StlViewProperties> = (props: StlViewProperties) => {
    const canvasStyle = {
        width: '100%',
        height: props.height
    };
    const loadedMeshes = useSelector((state: AppState) => state.loadedMeshes);
    const dispatch : Dispatch<any> = useDispatch();

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
      setTimeout(() => dispatch(addLoadedMesh(props.source)), 100);
    }

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
      <Suspense fallback={<Loader/>}>
        <Canvas style={canvasStyle} camera={{position: props.cameraPosition}}>
          <ambientLight/>
          <directionalLight position={props.lightOrigin}/>
          <OrbitControls />
          <mesh geometry={geometry} material={icoMaterial} position={props.position} />
          {axes}
        </Canvas>
      </Suspense>
    )
  }
  
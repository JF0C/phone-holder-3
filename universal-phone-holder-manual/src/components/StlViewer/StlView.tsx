import { useEffect, FunctionComponent, useState, Suspense } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

type StlViewProperties = {
    source: string
};

export const StlView: FunctionComponent<StlViewProperties> = (props: StlViewProperties) => {
    const [geometry, setGeometry] = useState<THREE.BufferGeometry>()

    const canvasStyle = {
        width: '100%',
        height: '600px'
    };
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 80, 400);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 300);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    const dirLightPosition = new THREE.Vector3(-100, 100, 0);
    dirLight.position.set(dirLightPosition.x, dirLightPosition.y, dirLightPosition.z);
    camera.add(dirLight);

    scene.add(camera);

    const icoMaterial = new THREE.MeshPhongMaterial({
      color       : new THREE.Color("rgb(123,123,123)"),
      emissive    : new THREE.Color("rgb(50,50,60)"),
      specular    : new THREE.Color("rgb(200,200,200)"),
      shininess   : 4,
      opacity     : 1
  });

    useEffect(() => {
      const stlLoader = new STLLoader()
      stlLoader.load(props.source, geo => {
        setGeometry(geo)
      })
    }, [])
  
    return (
      <Canvas style={canvasStyle} scene={scene}>
          <Suspense fallback={null}>
              <OrbitControls makeDefault></OrbitControls>
              <mesh geometry={geometry} material={icoMaterial}>
              
              </mesh>
              <ambientLight/>
          </Suspense>
      </Canvas>
    )
  }
  
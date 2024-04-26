import { useEffect, FunctionComponent, useState, Suspense } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

type StlViewProperties = {
    source: string,
    height: string
};

const degToRad = (deg: number) => deg/180 * Math.PI;

export const StlView: FunctionComponent<StlViewProperties> = (props: StlViewProperties) => {
    const [geometry, setGeometry] = useState<THREE.BufferGeometry>()

    const canvasStyle = {
        width: '100%',
        height: props.height
    };
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(50, 50, 50)");

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 300);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    const dirLightPosition = new THREE.Vector3(-100, 100, 0);
    dirLight.position.set(dirLightPosition.x, dirLightPosition.y, dirLightPosition.z);
    camera.add(dirLight);
    // camera.translateX(-100);
    // camera.translateY(-100);
    // camera.translateZ(-300);
    //camera.rotateZ(degToRad(90));
    //camera.rotateX(degToRad(0));
    //camera.rotateY(degToRad(270));

    scene.add(camera);

    const icoMaterial = new THREE.MeshPhongMaterial({
      color       : new THREE.Color("rgb(255,255,255)"),
      emissive    : new THREE.Color("rgb(50,50,50)"),
      specular    : new THREE.Color("rgb(123,123,200)"),
      shininess   : 4,
      opacity     : 1
    });

    const posVector = new THREE.Vector3(100, 100, 100);


    useEffect(() => {
      const stlLoader = new STLLoader()
      stlLoader.load(props.source, geo => {
        setGeometry(geo)
        // geo.center();
        geo.rotateZ(degToRad(90))
        geo.rotateY(degToRad(0))
        geo.rotateX(degToRad(120))
        geo.translate(-100, -100, -300)
        //geo.rotateX(degToRad(-90))
      })
    }, [])
  
    return (
      <Canvas style={canvasStyle} scene={scene}>
          <Suspense fallback={null}>
              <OrbitControls makeDefault></OrbitControls>
              <mesh geometry={geometry} material={icoMaterial} position={posVector}>
              
              </mesh>
              <ambientLight/>
          </Suspense>
      </Canvas>
    )
  }
  
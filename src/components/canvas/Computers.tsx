import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const loader = new GLTFLoader();
  // const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/> // react pmndrs.docs for lighting -- search: adding lights
      <pointLight intensity={1}/>
      {/* <primitive object={computer.scene}/> */}
    </mesh>
  )
}
const ComputersCanvas = () => {
  return(
    <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}/>
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default Computers

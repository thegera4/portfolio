import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {LayerMaterial, Depth, Color, Fresnel } from 'lamina'


export default function Animation() {
  const props = { base: '#d3d3da', colorA: '#00ffff', colorB: '#ff00e3' }
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [2, 0, 0], fov: 80 }}>
      <Suspense fallback={null}>
        <Bg {...props} />
        <Flower {...props} />
        <mesh>
          <sphereGeometry args={[0.2, 64, 64]} />
          <meshPhysicalMaterial transmission={1} thickness={10} roughness={0.2} />
        </mesh>
        <OrbitControls />
        <directionalLight intensity={2} castShadow shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
        <ambientLight intensity={0.4} />
      </Suspense>
    </Canvas>
  )
}

function Bg() {
  const mesh = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += delta
  })
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial color="#0e2c0a#eaece" attach="material" side={THREE.BackSide}>
        <Depth colorA="#eaeceb"  alpha={.1} mode="multiply" near={0} far={300} origin={[10, 10, 10]} />
        <Depth colorA="#0e2c0a" alpha={0.5} mode="multiply" near={0} far={300} origin={[100, 100, 100]}/>
      </LayerMaterial>
    </mesh>
  )
}

function Flower() {
  const mesh = useRef()
  const depth = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.z += delta / 2
    depth.current.origin.set(-state.mouse.y, state.mouse.x, 0)
  })
  return (
    <mesh castShadow receiveShadow rotation-y={Math.PI / 2} scale={[2, 2, 2]} ref={mesh}>
      <torusKnotGeometry args={[0.4, 0.05, 400, 8, 3, 7]} />
      <LayerMaterial color="#ff4eb8" name={'Flower'}>
        <Color color={'#257419'} />
        <Depth far={3} origin={[1, 1, 1]} colorA="#eaeceb" colorB="#eaeceb" alpha={0.5} mode={'multiply'} mapping="camera"/>
        <Depth ref={depth} near={0.25} far={2} colorA={'#eaeceb'} alpha={0.5} mode={'lighten'} mapping={'vector'} />
        <Fresnel mode={'softlight'} />
      </LayerMaterial>
    </mesh>
  )
}


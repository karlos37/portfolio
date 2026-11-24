import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function CoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef1 = useRef<THREE.Mesh>(null)
  const ringRef2 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2
      meshRef.current.rotation.y = t * 0.3
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.4
      ringRef1.current.rotation.y = Math.sin(t * 0.2) * 0.5
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = -t * 0.35
      ringRef2.current.rotation.z = Math.cos(t * 0.25) * 0.5
    }
  })

  return (
    <group>
      {/* Central pulsating energy sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere ref={meshRef} args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </Sphere>
      </Float>

      {/* Inner glowing core */}
      <Sphere args={[0.5, 32, 32]}>
        <meshBasicMaterial color="#34d399" />
      </Sphere>

      {/* Orbital Ring 1 */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.02, 16, 100]} />
        <meshStandardMaterial color="#6ee7b7" emissive="#10b981" emissiveIntensity={0.5} />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" emissive="#2563eb" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

function Particles() {
  const count = 75
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 2.5
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [count])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#a7f3d0"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export default function AgentCoreCanvas() {
  return (
    <div className="w-full h-[380px] md:h-[480px] relative rounded-2xl overflow-hidden glass-panel border border-emerald-500/20">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono backdrop-blur-sm pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Interactive 3D Engine · React Three Fiber
      </div>
      <div className="absolute bottom-4 right-4 z-10 text-[11px] font-mono text-zinc-500 pointer-events-none">
        Drag to rotate
      </div>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#34d399" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        <CoreMesh />
        <Particles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}

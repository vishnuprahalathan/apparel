"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    OrbitControls,
    PerspectiveCamera,
    Environment,
    Float,
    PresentationControls,
    ContactShadows,
    useGLTF,
    Center
} from "@react-three/drei";
import * as THREE from "three";

// Preload the shirt model for better performance
const SHIRT_MODEL_URL = "https://raw.githubusercontent.com/adrianhajdin/project_threejs_ai/main/client/public/shirt_baked.glb";
useGLTF.preload(SHIRT_MODEL_URL);

type ShirtGLTF = {
    nodes: {
        T_Shirt_male: THREE.Mesh;
    };
    materials: {
        lambert1: THREE.Material;
    };
};

function ShirtModel() {
    const { nodes, materials } = useGLTF(SHIRT_MODEL_URL) as unknown as ShirtGLTF;
    const meshRef = useRef<THREE.Mesh>(null);

    // Smooth rotation for a "gallery" feel
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <Center top>
            <mesh
                ref={meshRef}
                castShadow
                geometry={nodes.T_Shirt_male.geometry}
                material={materials.lambert1}
                dispose={null}
                scale={1.8}
            >
                {/* We can inject brand colors here if needed */}
                <meshStandardMaterial
                    color="#111111"
                    roughness={0.4}
                    metalness={0.6}
                    emissive="#222222"
                    emissiveIntensity={0.1}
                />
            </mesh>
        </Center>
    );
}

export function ThreeDViewer() {
    return (
        <div className="w-full h-[500px] lg:h-full bg-[#050505] rounded-lg overflow-hidden relative group border border-white/5">
            <div className="absolute top-6 left-6 z-10">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent">
                        SURFACE-SCAN V.03
                    </span>
                    <span className="text-[8px] font-medium tracking-widest uppercase opacity-40">
                        Interactive Product Render
                    </span>
                </div>
            </div>

            <Canvas shadows dpr={[1, 2]}>
                <color attach="background" args={["#050505"]} />
                <fog attach="fog" args={["#050505", 5, 15]} />

                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={45} />

                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                    <pointLight position={[-10, 5, -10]} intensity={1} color="#ff3300" />

                    <PresentationControls
                        global
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                        snap
                    >
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                            <ShirtModel />
                        </Float>
                    </PresentationControls>

                    <ContactShadows
                        position={[0, -1.8, 0]}
                        opacity={0.6}
                        scale={10}
                        blur={2.5}
                        far={4}
                    />

                    <Environment preset="city" />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    makeDefault
                />
            </Canvas>

            <div className="absolute bottom-6 right-6 z-10 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-white/20" />
                <p className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-40">
                    Texture Mapping High-Bandwidth
                </p>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />
        </div>
    );
}

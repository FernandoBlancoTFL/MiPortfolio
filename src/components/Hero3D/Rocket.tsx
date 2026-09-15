import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const rocketModel = "/rocket.glb";

function Flame({ position }: { position: [number, number, number] }) {
    const flameRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!flameRef.current) return;

        const time = state.clock.getElapsedTime();

        flameRef.current.scale.y =
            1 + Math.sin(time * 15) * 0.15;

        flameRef.current.scale.x =
            1 + Math.sin(time * 18) * 0.08;

        flameRef.current.scale.z =
            1 + Math.sin(time * 18) * 0.08;
    });

    return (
        <mesh
            ref={flameRef}
            position={position}
        >
            <coneGeometry args={[0.3, 1.2, 8]} />

            <meshStandardMaterial
                color="#ff6b00"
                emissive="#ff4500"
                emissiveIntensity={2}
            />
        </mesh>
    );
}

function Rocket() {
    const { scene } = useGLTF(rocketModel);

    const rocketRef = useRef<THREE.Group>(null);
    const flamePosition: [number, number, number] = [0.05, -0.1, 0];

    useFrame((state) => {
        if (!rocketRef.current) return;

        const time = state.clock.getElapsedTime();

        rocketRef.current.rotation.y =
            Math.sin(time * 2) * 0.3;
    });

    return (
        <group
            position={[-0.3, -0.5, 0]}
            rotation={[0, 0, -Math.PI / 6]}
        >
            <group ref={rocketRef}>

                <primitive
                    object={scene}
                    scale={0.003}
                />

                <Flame position={flamePosition} />

            </group>
        </group>
    );
}

useGLTF.preload(rocketModel);

export default Rocket;
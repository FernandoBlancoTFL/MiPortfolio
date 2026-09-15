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

    const [flamePosition, setFlamePosition] =
        useState<[number, number, number]>([0, -0.5, 0]);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);

        const center = box.getCenter(new THREE.Vector3());

        scene.position.x -= center.x;
        scene.position.y -= center.y;
        scene.position.z -= center.z;

        const centeredBox = new THREE.Box3().setFromObject(scene);

        const bottom = centeredBox.min.y;

        setFlamePosition([
            0,
            bottom - 0.2,
            0
        ]);
    }, [scene]);

    useFrame((state) => {
        if (!rocketRef.current) return;

        const time = state.clock.getElapsedTime();

        rocketRef.current.rotation.y =
            Math.sin(time * 2) * 0.3;
    });

    return (
        <group
            position={[0.3, 0.2, 0]}
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
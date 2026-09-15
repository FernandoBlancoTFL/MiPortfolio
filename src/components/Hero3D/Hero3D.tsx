import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Rocket from "./Rocket";

import "./Hero3D.css";

function Hero3D() {
    return (
        <section className="hero3D-container" id="hero3D">
            <div className="hero3D">
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 45,
                    }}
                >
                    <ambientLight intensity={2} />

                    <directionalLight
                        position={[5, 5, 5]}
                        intensity={2}
                    />

                    <Suspense fallback={null}>
                        <Rocket />
                    </Suspense>
                </Canvas>
            </div>
            

        </section>
    );
}

export default Hero3D;
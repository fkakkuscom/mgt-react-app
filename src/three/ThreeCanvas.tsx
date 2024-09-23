import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeScene from "./ThreeScene";
import "./Three.css";

const ThreeCanvas = () => {
  return (
    <Canvas
      className="three-canvas"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <ThreeScene />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeCanvas;

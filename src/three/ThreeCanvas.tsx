import { Canvas } from "@react-three/fiber";
import ThreeScene from "./ThreeScene";
import "./Three.css";

function ThreeCanvas() {
  return (
    <Canvas
      eventSource={document.getElementById("root")!}
      className="three-canvas"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      <ThreeScene />
    </Canvas>
  );
}

export default ThreeCanvas;

import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import "./ThreeCanvas.css";

const ThreeScene = lazy(() => import("./ThreeScene"));

function ThreeCanvas() {
  return (
    <Canvas
      eventSource={document.getElementById("root")!}
      camera={{ position: [0, 5, 10] }}
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
      <Suspense fallback={<Text>Loading Scene...</Text>}>
        <ThreeScene />
      </Suspense>
    </Canvas>
  );
}

export default ThreeCanvas;

import { useFrame } from "@react-three/fiber";
import { lazy, useRef, useEffect, useState, Suspense } from "react";
import { Mesh } from "three";
import { useSpring, animated } from "@react-spring/three";
import { CatmullRomLine, Text } from "@react-three/drei";

const PlotWidget = lazy(() => import("./PlotWidget"));

function ThreeScene() {
  const meshRef = useRef<Mesh>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeout: number;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setScrollY(window.scrollY), 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { rotationY } = useSpring({
    rotationY: scrollY * 0.01,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotationY.get();
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <animated.mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </animated.mesh>
      <CatmullRomLine
        points={[
          [0, 0, 0],
          [2, 2, -3],
          [-2, 2, -3],
        ]}
        lineWidth={3}
        color="#ff2060"
      />
      <Suspense fallback={<Text>Loading...</Text>}>
        <PlotWidget position={[0, -2, -3]} />
      </Suspense>
    </>
  );
}

export default ThreeScene;

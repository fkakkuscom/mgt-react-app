import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Mesh } from "three";
import { useSpring, animated } from "@react-spring/three";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  scrollY: 0,
});

function ThreeScene() {
  const meshRef = useRef<Mesh>(null);
  const snap = useSnapshot(state);

  useEffect(() => {
    let timeout: number;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(
        () =>
          (state.scrollY = (window.scrollY / window.innerHeight - 1) * 3.14),
        200
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { rotationY } = useSpring({
    rotationY: snap.scrollY,
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
    </>
  );
}

export default ThreeScene;

import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { Mesh } from "three";

const ThreeScene = () => {
  const meshRef = useRef<Mesh>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollY * 0.01;
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </>
  );
};

export default ThreeScene;

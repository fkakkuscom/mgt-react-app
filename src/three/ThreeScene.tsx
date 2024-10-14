import { useFrame } from "@react-three/fiber";
import { lazy, useRef, useEffect, Suspense } from "react";
import { Mesh } from "three";
import { useSpring, animated } from "@react-spring/three";
import { CatmullRomLine, Text } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

const PlotWidget = lazy(() => import("./PlotWidget"));
const ModelTree = lazy(() => import("./ModelTree"));

const state = proxy({
  scrollY: 0,
  plots: [] as { x: number; y: number }[][],
});

function ThreeScene() {
  const meshRef = useRef<Mesh>(null);
  const snap = useSnapshot(state);

  useEffect(() => {
    const abortController = new AbortController();

    try {
      const loadData = () => {
        fetch("/data1.json", { signal: abortController.signal })
          .then((response) => response.json())
          .then(
            (data: {
              name: string;
              data: { x: number; time: number; ax: number; ay: number }[];
            }) => {
              state.plots = [
                data.data.map((d) => ({ x: d.x, y: d.time })),
                data.data.map((d) => ({ x: d.x, y: d.ax })),
                data.data.map((d) => ({ x: d.x, y: d.ay })),
              ];
            }
          )
          .catch((error) => {
            if (error.name === "AbortError") {
              console.log("Fetch aborted");
            } else {
              console.error("Fetch error:", error);
            }
          });
      };
      loadData();
    } catch (error) {
      console.error(error);
    }

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
      abortController.abort();
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
      <CatmullRomLine
        points={[
          [0, 0, 0],
          [2, 2, -3],
          [-2, 2, -3],
        ]}
        lineWidth={3}
        color="#ff2060"
      />
      <Suspense fallback={<Text>Loading PlotWidget...</Text>}>
        <PlotWidget plots={snap.plots} position={[0, -2, -3]} />
      </Suspense>
      <Suspense fallback={<Text>Loading Tree...</Text>}>
        <ModelTree position={[-3, 0, 0]} />
      </Suspense>
    </>
  );
}

export default ThreeScene;

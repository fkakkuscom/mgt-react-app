import { GroupProps } from "@react-three/fiber";
import { Line } from "@react-three/drei";

const treeVertices = [
  { id: 1, position: [0, 0, 0] },
  { id: 2, position: [0, 1, 0] },
  { id: 3, position: [-0.5, 2, 0] },
  { id: 4, position: [0.5, 2, 0] },
  { id: 5, position: [-0.75, 3, 0] },
  { id: 6, position: [-0.25, 3, 0] },
  { id: 7, position: [0.25, 3, 0] },
  { id: 8, position: [0.75, 3, 0] },
];

const treeEdges = [
  { start: 1, end: 2 },
  { start: 2, end: 3 },
  { start: 2, end: 4 },
  { start: 3, end: 5 },
  { start: 3, end: 6 },
  { start: 4, end: 7 },
  { start: 4, end: 8 },
];

function Tree({ ...props }: GroupProps) {
  return (
    <group {...props}>
      {treeEdges.map((edge, index) => {
        const startVertex = treeVertices.find((v) => v.id === edge.start);
        const endVertex = treeVertices.find((v) => v.id === edge.end);
        return (
          <Line
            key={index}
            points={[startVertex.position, endVertex.position]}
            color="green"
            lineWidth={2}
          />
        );
      })}
    </group>
  );
}

export default Tree;

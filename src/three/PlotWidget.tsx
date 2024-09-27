import { Line } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

interface LineProps {
  start: [number, number, number];
  end: [number, number, number];
}

interface PlotWidgetProps extends GroupProps {
  lines?: LineProps[];
}

function PlotWidget({ lines, ...rest }: PlotWidgetProps) {
  return (
    <group {...rest}>
      {lines?.map((line, index) => (
        <Line
          key={index}
          points={[line.start, line.end]}
          color="black"
          lineWidth={2}
        />
      ))}
    </group>
  );
}

export default PlotWidget;

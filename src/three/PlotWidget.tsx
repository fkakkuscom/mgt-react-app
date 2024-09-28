import { CatmullRomLine, Line } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

interface PlotProps {
  x: number;
  y: number;
}

interface PlotWidgetProps extends GroupProps {
  plots?: PlotProps[][];
}

function PlotWidget({ plots, ...rest }: PlotWidgetProps) {
  return (
    <group {...rest}>
      {plots?.map((plot, index) => (
        <Line
          key={index}
          points={plot.map(({ x, y }) => [x, y, 0])}
          color="#666666"
          lineWidth={2}
        />
      ))}
      {plots?.map((plot, index) => {
        return (
          <CatmullRomLine
            points={plot.map(({ x, y }) => [x, y, 0])}
            color="orange"
            lineWidth={3}
            // @ts-expect-error segments is not in the types
            segments={plot.length * 10}
            key={index}
          />
        );
      })}
    </group>
  );
}

export default PlotWidget;

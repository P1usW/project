import { FC, useEffect, useRef, useId } from 'react';
import {
  Chart,
  Colors,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  ChartType,
  Title,
  Tooltip,
  ChartData
} from 'chart.js';

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Colors,
  Legend,
  Title,
  Tooltip
)

interface Graph {
  type: ChartType,
  data: ChartData,
  title?: string
  className?: string,
}

const Graph: FC<Graph> = ({
  type,
  data,
  title='',
  className,
}) => {
  const id = useId();
  const cnv = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!cnv.current) return;

    const ctx = cnv.current.getContext('2d') as CanvasRenderingContext2D;
    const graph = new Chart(ctx, {
      type: type,
      data: data,
      options: {
        // responsive: false,
        maintainAspectRatio: false,
        resizeDelay: 25,
        animation: false,
        plugins: {
          title: {
            display: true,
            text: title
          }
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            grid: {
              color: 'rgb(127, 127, 127)'
            }
          },
          x: {
            grid: {
              color: 'rgb(127, 127, 127)'
            }
          }
        }
      }
    })

    return () => {
      graph.destroy();
    }
  })


  return (
    <div 
      className={className}
    >
      <canvas
        id={id}
        ref={cnv}
    />
    </div>
    
  );
};

export default Graph;
export type {
  Graph
}
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { theme } from '../../utils/theme';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, TimeScale);

const RealTimeChart: React.FC = () => {
  const { fountainBlue } = theme.colors;

  const chartRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const chart = chartRef.current;
      if (chart) {
        const now = new Date();
        chart.data.labels.push(now);
        chart.data.datasets[0].data.push(Math.floor(Math.random() * 100));
        if (chart.data.labels.length > 20) {
          chart.data.labels.shift();
          chart.data.datasets[0].data.shift();
        }
        chart.update('none');
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: [] as Date[],
    datasets: [
      {
        label: 'Random Data',
        data: [] as number[],
        borderColor: fountainBlue,
        backgroundColor: `${fountainBlue}50`,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Real Time Chart',
      },
    },
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'second' as const,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default RealTimeChart;

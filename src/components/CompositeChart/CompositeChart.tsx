import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { theme } from '../../utils/theme';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const CompositeChart: React.FC = () => {
  const { wildWatermelon, pictionBlue } = theme.colors;
  const mockedData = [10, 20, 30, 40, 50, 60];

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        type: 'bar' as const,
        label: 'Bar Dataset',
        data: mockedData,
        backgroundColor: `${wildWatermelon}50`,
        borderColor: wildWatermelon,
        borderWidth: 1,
      },
      {
        type: 'line' as const,
        label: 'Line Dataset',
        data: mockedData.map((data: any, index: number) => data + 10),
        borderColor: pictionBlue,
        backgroundColor: `${pictionBlue}50`,
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
        text: 'Composite Chart',
      },
    },
  };

  return <Chart type='bar' data={data} options={options} />;
};

export default CompositeChart;

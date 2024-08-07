import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import zoomPlugin from 'chartjs-plugin-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setData } from '../../store/chartSlice';
import { theme } from '../../utils/theme';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, annotationPlugin, zoomPlugin);

const CustomChart: React.FC = () => {
  const dispatch = useDispatch();
  const chartData = useSelector((state: RootState) => state.chart.data);

  const { wildWatermelon, pictionBlue, goldenTainoi, fountainBlue, heliotrope, yellowOrange } = theme.colors;

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: chartData,
        backgroundColor: [
          `${wildWatermelon}50`,
          `${pictionBlue}50`,
          `${goldenTainoi}50`,
          `${fountainBlue}50`,
          `${heliotrope}50`,
          `${yellowOrange}50`,
        ],
        borderColor: [
          wildWatermelon,
          pictionBlue,
          goldenTainoi,
          fountainBlue,
          heliotrope,
          yellowOrange,
        ],
        borderWidth: 1,
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
        text: 'Custom Chart',
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line' as const,
            yMin: 20,
            yMax: 40,
            borderColor: wildWatermelon,
            borderWidth: 2,
          },
        },
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'x' as const,
        },
        pan: {
          enabled: true,
          mode: 'x' as const,
        },
      },
    },
    onHover: (event: any, elements: any) => {
      if (elements.length) {
        const { index } = elements[0];
        console.log(`Hovered over ${data.labels[index]}`);
      }
    },
    onClick: (event: any, elements: any) => {
      if (elements.length) {
        const { index } = elements[0];
        console.log(`Clicked on ${data.labels[index]}`);
        dispatch(setData(chartData.map((item, position) => (position === index ? item + 1 : item))));
      }
    },
  };

  return <Chart type='bar' data={data} options={options} />;
};

export default CustomChart;

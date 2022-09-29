import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { useIntl } from 'react-intl';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        boxWidth: 8,
        boxHeight: 12,
        font: {
          size: 10,
          weight: '400',
        },
      },
    },
    title: {
      display: false,
      text: 'Statistic',
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: { size: 12, weight: '500' },
      },
    },
  },
};

const labels = ['02-08.05', '09-15.05', '16-22.05'];

const VerticalBar: FC = () => {
  const { formatMessage } = useIntl();

  const data = {
    labels,
    datasets: [
      {
        label: formatMessage({ defaultMessage: 'відкриті', description: 'vertical chart open' }),
        data: labels.map(() => Math.ceil(Math.random() * 100)),
        backgroundColor: '#F5DF4D',
        maxBarThickness: 8,
        categoryPercentage: 0.5,
        barPercentage: 1,
      },
      {
        label: formatMessage({ defaultMessage: 'відкриті', description: 'vertical chart close' }),
        data: labels.map(() => Math.ceil(Math.random() * 100)),
        backgroundColor: '#93A9D2',
        maxBarThickness: 8,
        categoryPercentage: 0.5,
        barPercentage: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default VerticalBar;

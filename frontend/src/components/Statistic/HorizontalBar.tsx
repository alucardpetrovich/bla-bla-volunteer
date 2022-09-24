import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { useIntl } from 'react-intl';

import { values } from './chartData/chartData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2,
  indexAxis: 'y' as const,
  layout: {
    padding: 0,
  },
  plugins: {
    tooltip: { enabled: false },
    legend: {
      position: 'bottom' as const,
      labels: {
        boxWidth: 0,
        boxHeight: 0,
        padding: 0,
        font: {
          size: 10,
          weight: '400',
        },
      },
    },
    labels: {
      boxWidth: 8,
      boxHeight: 12,
      font: {
        size: 10,
        weight: '400',
      },
    },
    title: {
      display: false,
      text: 'products',
    },
  },
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
        mirror: true,
        align: 'end' as const,
        crossAlign: 'near' as const,
        font: { size: 12, weight: '500' },
        z: 10,
      },
    },
  },
};

const HorizontalBar: FC = () => {
  const { formatMessage } = useIntl();

  const labels = [
    formatMessage({ defaultMessage: 'Вода', description: 'horizontal chart category name' }),
    formatMessage({ defaultMessage: 'Медикаменти', description: 'horizontal chart category name' }),
    formatMessage({ defaultMessage: 'Продукти харчування', description: 'horizontal chart category name' }),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: formatMessage({ defaultMessage: 'використано', description: 'horizontal chart used' }),
        data: values,
        backgroundColor: '#F5DF4D',
        stack: 'Stack 0',
        maxBarThickness: 16,
        categoryPercentage: 0.5,
        barPercentage: 1,
      },
      {
        label: formatMessage({ defaultMessage: 'залишок', description: 'horizontal chart remainder' }),
        data: values.map(item => 100 - item),
        backgroundColor: '#93A9D2',
        stack: 'Stack 0',
        maxBarThickness: 16,
        categoryPercentage: 0.5,
        barPercentage: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default HorizontalBar;

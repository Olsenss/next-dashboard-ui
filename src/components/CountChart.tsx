'use client';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'total',
    amount: 100,
    percentage: 100,
    fill: 'white',
  },
  {
    name: 'Boys',
    amount: 55,
    percentage: 55,
    fill: '#FAE27C',
  },
  {
    name: 'Girls',
    amount: 45,
    percentage: 45,
    fill: '#C3EBFA',
  },
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 w-full h-full'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt='more' width={20} height={20} />
      </div>
      {/* CHART */}
      <div className='relative w-full h-[75%]'>
        <ResponsiveContainer width='100%' height='100%'>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey='amount' />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src='/maleFemale.png'
          alt=''
          width={50}
          height={50}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      {/* BOTTOM */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-hugoSky rounded-full' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-hugoYellow rounded-full' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;

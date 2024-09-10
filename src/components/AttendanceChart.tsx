'use client';
import Image from 'next/image';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 30,
    absent: 5,
  },
  {
    name: 'Tue',
    present: 32,
    absent: 3,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 15,
  },
  {
    name: 'Thur',
    present: 35,
    absent: 0,
  },
  {
    name: 'Fri',
    present: 33,
    absent: 2,
  },
];
const AttendanceChart = () => {
  return (
    <div className='bg-white h-full rounded-lg p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src='/moreDark.png' alt='more-dark' width={20} height={20} />
      </div>
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart data={data} width={500} height={300} barSize={20}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />
          <XAxis
            dataKey='name'
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />
          <Legend
            align='left'
            verticalAlign='top'
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
          />
          <Bar
            dataKey='present'
            fill='#34d058'
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey='absent'
            fill='#ff6f61'
            legendType='circle'
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;

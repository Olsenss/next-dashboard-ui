import UserCard from '@/components/UserCard';
import CountChart from '@/components/CountChart';

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='admin' />
          <UserCard type='admin' />
          <UserCard type='admin' />
        </div>
        {/* MIDDLE CHARTS */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* SOME OTHER CHART */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            {/* https://youtu.be/myYlGLFxZas?si=wx40aU5Z8w48I_ys&t=3143 */}
          </div>
        </div>
        {/* BOTTOM CHARTS  */}
        <div className=''></div>
      </div>
      <div className='w-full lg:w-1/3'></div>
    </div>
  );
};

// https://youtu.be/myYlGLFxZas?si=h00g_eBFEboiqKzT&t=2478
export default AdminPage;

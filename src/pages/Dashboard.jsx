
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import { CardStatistic } from '../components/CardStatistic/CardStatistic'

export const Dashboard = () => {
  const statisticData = [
    {
      number: 56,
      text: 'Application Sent',
      icon: 'icon-airplane',
      bg: 'bg-[#FEE5A4]'
    },
    {
      number: 29,
      text: 'Interview Schedule',
      icon: 'icon-calendar-circle',
      bg: 'bg-[#A7D2B8]'
    }, 
    {
      number: 75,
      text: 'Profile Visited',
      icon: 'icon-connection',
      bg: 'bg-[#B6D3ED]'
    }


  ]

  
  return (
    <>
      <div className="flex mx-[-10px] mb-11 ">
        {statisticData.map((card) => <CardStatistic {...card} key={card.number} />)}
      </div>
      <Banner/>
      <section >
        <div className="flex justify-between gap-2 mb-6 ">
          <h2 className='text-xl font-bold  text-blackColor'>Recommended for you</h2>       
          <a href="#" className="btn-block btn-block_gray">Change preferences</a>
        </div>
        <div className="flex flex-wrap  gap-5">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>  
    </>
  )
}

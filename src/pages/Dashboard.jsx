

import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import { CardStatistic } from '../components/CardStatistic/CardStatistic'
import CardJob from '../components/CardJob/CardJob'
import { fetchAddItem, setForUdateData } from '../redux/slices/profileSlice'
import { setPopUp } from '../redux/slices/jobsSlice'

import l1 from '../assets/img/cadidats/01.png'
import l2 from '../assets/img/cadidats/02.png'
import l3 from '../assets/img/cadidats/03.png'
import l4 from '../assets/img/cadidats/04.png'
import l5 from '../assets/img/cadidats/05.png'


export const Dashboard = () => {
  const dispatch = useDispatch();
  const {jobsData} = useSelector(state => state.jobs)
  const {user} = useSelector(state => state.auth)
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
  const preferenceData =   user?.profileData[6] ;


  const onRecommend = () => {
    dispatch(setForUdateData([6,preferenceData]))
    dispatch(setPopUp('preference'))  
  }
  
  return (
    <>
    
      <div className="flex mx-[-10px] mb-11 ">
        {statisticData.map((card,i) => <CardStatistic {...card} key={`${card.number}${i}`} />)}
      </div>
      <Banner/>
      <section >
        <div className="flex justify-between gap-2 mb-6 ">
          <h2 className='text-xl font-bold  text-blackColor'>Recommended for you</h2>       
          <button  onClick={onRecommend} className="btn-block btn-block_gray">Change preferences</button>
        </div>
        <div className="flex flex-wrap  gap-5">
          {
            
            jobsData?.filter((item) => item.category === preferenceData?.category)
            .slice(0,4)
            .map((item) => <CardJob {...item} key={item.id} recommended={true}/>)
          }
          
        </div>
      </section> 
    
    </>
  )
}

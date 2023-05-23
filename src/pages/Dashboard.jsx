import React from 'react'
import { CardStatistic } from '../components/CardStatistic/CardStatistic'

export const Dashboard = () => {
  const statisticData = [
    {
      number: 56,
      text: 'Application Sent',
      icon: 'icon-airplane',
      color: '#FEE5A4'
    },
    {
      number: 29,
      text: 'Interview Schedule',
      icon: 'icon-calendar-circle',
      color: '#A7D2B8'
    }, 
    {
      number: 75,
      text: 'Profile Visited',
      icon: 'icon-connection',
      color: '#B6D3ED'
    }


  ]
  return (
    <>
      <div className="flex mx-[-10px] ">
        {statisticData.map((card) => <CardStatistic {...card} key={card.number} />)}
      </div>

    </>
  )
}

import React from 'react'

export const ProfileItem = ({ label, text }) => {


   const renderArrItems = () => {
      return (
         <div className="" >
            {
               text?.map((t) =>
                  <a href={t.url} className="flex gap-2 items-center mb-4 group">
                     <span className={`${t.icon} text-green w-3`}></span>
                     <p className='text-gray group-hover:text-green group-hover:underline '>{t.name}</p>
                  </a>

               )
            }
         </div>
      )
   }
   return (
      <div className='flex mb-5 last:mb-0'>
         <span className='block text-gray max-w-[150px] w-full first-letter:uppercase'>{label}</span>
         {
            typeof text === 'string' ? <span className='text-blackColor'>{text}</span> : renderArrItems()
              
         }

      </div>
   )
}

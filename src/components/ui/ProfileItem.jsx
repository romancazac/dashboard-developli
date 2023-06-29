import React from 'react'

export const ProfileItem = ({ label, text, aside }) => {


   const renderArrItems = () => {
      return (
         <div className="" >
            {
              
               text?.map((t, i) =>
                  <a href={t.url} key={i} target="_blank" className="flex gap-2 items-center mb-4 group">
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
         {
            label !== "id" &&
            <span className={`block text-gray   first-letter:uppercase ${!aside ? 'w-full max-w-[150px]' :'' }`}>{label}</span>
         }
         {
          (label !== "id") &&  (typeof text === 'string'  ? <span className='text-blackColor ml-1'>{text}</span> : renderArrItems())
           
            
         }

      </div>
   )
}

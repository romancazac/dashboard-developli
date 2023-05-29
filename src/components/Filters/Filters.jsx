import {useEffect, useState} from 'react'
import Spollers from '../Spollers/Spollers'

export const Filters = () => {
  const asideData = [
    {
       id: 1,
       title: 'Experience Level',
       label: 'experience',
       items: [
          {
             title: '0-2 years',
             id: 1,
             count: 28
          },
          {
             title: '3-5 years',
             id: 2,
             count: 713
          },
          {
             title: '6-9 years',
             id: 3,
             count: 188
          },
          {
             title: '10 years',
             id: 4,
             count: 188
          },
       ]


    },
    {
       id: 2,
       title: 'Category',
       label: 'category',
       items: [
          {
             title: 'Develope',
             id: 1,
             count: 28
          },
          {
             title: 'Design',
             id: 2,
             count: 713
          },
          {
             title: 'SMM Content',
             id: 3,
             count: 188
          },
          {
             title: 'Marketing',
             id: 4,
             count: 188
          },
       ]


    },
    {
       id: 3,
       title: 'Type of employment',
       label: 'types',
       items: [
          {
             title: 'Fulltime',
             id: 1,
             count: 28
          },
          {
             title: 'Part-Time',
             id: 2,
             count: 713
          },
          {
             title: 'Remote',
             id: 3,
             count: 188
          },
          {
             title: 'Internship/Trainee',
             id: 4,
             count: 188
          },
          {
             title: 'Hourly',
             id: 5,
             count: 188
          },
       ]


    },
    {
       id: 4,
       title: 'Salary Range',
       label: 'salary',
       items: [
          {
             title: '2000',
             id: 1,
             count: 28
          },
          {
             title: '3000',
             id: 2,
             count: 713
          },
          {
             title: '4000',
             id: 3,
             count: 188
          },
          {
             title: '7000',
             id: 4,
             count: 188
          },
          {
             title: '8000',
             id: 5,
             count: 188
          }
       ]


    },
    {
       id: 5,
       title: 'Location',
       label: 'country',
       items: [
          {
             title: 'Saudi Arabia',
             id: 1,
             count: 28
          },
          {
             title: 'United States',
             id: 2,
             count: 713
          },
          {
             title: 'Germany',
             id: 3,
             count: 188
          },
          {
             title: 'Australia',
             id: 4,
             count: 188
          },
          {
             title: 'Moldova',
             id: 5,
             count: 188
          }
       ]


    }


 ]
 const [open, setOpen] = useState(1);

 const handleOpenSpoller = (value) => {
    setOpen(open === value ? 0 : value);
 };
//  const onReset = () => {
//     dispatch(setReset());
//     setMount(!mount)
//  }



//  const renderTopMob = () => {
//     return (
//        <>
//           {
//              openFilter &&
//              <div className="flex justify-between items-center mb-8 mt-10">
//                 <button className="text-[#1B2124] font-bold">Filters</button>
//                 <button onClick={onReset} className="text-[#EE5566]">Clear</button>
//              </div>
//           }
//        </>

//     )
//  }
 const resizeW = () => {

   //  if (window.innerWidth < 767) {
   //     dispatch(setIsMob(true));

   //  } else {
   //     dispatch(setIsMob(false));
   //  }

 };
//  useEffect(() => {     
//     getJobsFromCompare().then((data) => setUpdatedAsideData(data))
    
//  }, []);

 useEffect(() => {
    window.addEventListener("resize", resizeW);

    return () => {
       window.removeEventListener("resize", resizeW);
    };
 }, []);

 useEffect(() => {
    resizeW()
 }, [])
 

 return (
    

       < >
          <div className={`max-w-[316px] h-full w-full bg-white rounded-xl px-[20px] py-[25px] md:h-full md:flex md:flex-col`}>
             {/* {renderTopMob()} */}
             {
                asideData.map((item) =>
                   <Spollers key={item.id} item={item} handleOpen={handleOpenSpoller } open={open}/>
                )
             }
            

          </div>
       </>

)
}

import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'






export default function Select({onDispatch, data, className=null}) {

   const [selected, setSelected] = useState(data[0])
   function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
   }
   
    
   useEffect(() => {
     
      onDispatch(selected)

   },[selected])
 
  
   return (
      <Listbox value={selected} onChange={setSelected}>
         
         {({ open }) => (
            <>
               <div className="relative w-[100%]">
                  
                  <Listbox.Button className={`relative w-[100%] cursor-pointer rounded-md  py-1.5 pl-3 pr-10 text-left text-gray-900   focus:outline-none  sm:text-sm sm:leading-6 ${className}`}>
                     <span className="flex items-center">
                        <span className=" block truncate">{selected?.name}</span>
                     </span>
                     <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                   
                        <ChevronDownIcon className='w-5'/>
                     </span>
                  </Listbox.Button>

                  <Transition
                     show={open}
                     as={Fragment}
                     leave="transition ease-in duration-100"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-[100%] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {data.map((item) => (
                           <Listbox.Option
                              key={item.id}
                              className={({ active }) =>
                                 classNames(
                                    active ? 'bg-green text-white' : 'text-gray-900',
                                    'relative cursor-default select-none py-2  pr-2'
                                 )
                              }
                              value={item}
                           >
                              {({ selected, active }) => (
                                 <>
                                    <div className="flex items-center">
                                       <span
                                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                       >
                                          {item?.name}
                                       </span>
                                    </div>

                                    {selected ? (
                                       <span
                                          className={classNames(
                                             active ? 'text-green' : 'text-indigo-600',
                                             'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                       >
                                          <CheckIcon className="h-3 w-3 text-blackColor" aria-hidden="true" />

                                       </span>
                                    ) : null}
                                 </>
                              )}
                           </Listbox.Option>
                        ))}
                     </Listbox.Options>
                  </Transition>
               </div>
            </>
         )}
      </Listbox>
   )
}

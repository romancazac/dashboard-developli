
import { UserChat } from '../components/UserChat/UserChat'
import { ChatMessages } from '../components/ChatMessages/ChatMessages'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/slices/chatSlice'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { setOpenUsers } from '../redux/slices/uiSlice'


export const Messages = () => {
   const dispatch = useDispatch();
   const { users } = useSelector(state => state.chat);
   const { user } = useSelector(state => state.auth);
   const { usersChat } = useSelector(state => state.ui)
   useEffect(() => {
      dispatch(fetchUsers())
   }, [])

   return (
      <div className='relative flex items-start gap-[2px]  h-[100%]'>

         <div className={` flex-[0_1_35%] min-w-[400px] bg-white rounded-tl-xl py-9 lg:min-w-[280px] md:absolute h-full md:z-10 ${usersChat ? 'md:block' : 'md:hidden'}`}>
            <div className="px-5 mb-7 ">
               <div className="flex items-center justify-between  mb-8">
                  <h3 className='text-[27px] font-bold'>Messages</h3>
                  <button className='w-6 hidden md:block' onClick={() => dispatch(setOpenUsers(false))} ><XMarkIcon  /></button>
               </div>
               <div className="flex items-center  bg-[#F3F3F3] rounded-xl py-3 pl-5 pr-1">
                  <div className="flex items-center gap-3 mr-1">
                     <span className='icon-search text-2xl text-[#7F879E]'></span>
                     <input type="text" placeholder='Search ' className='p-1 outline-0 bg-transparent' />
                  </div>
               </div>
            </div>
            <div className='overflow-auto h-[71%]'>
               {users?.filter((item) => item?.id !== user?.id)
                  .map((u) =>
                     <UserChat
                        key={u.id}
                        name={u.fullName}
                        text='Haha thats terrifying 😂'
                        time='5: 30 am'
                        online={true}
                        open={false}
                        id={u.id}
                        idUser={user?.id}
                     />
                  )}
            </div>

         </div>
         <div className="flex-auto  ">
            <ChatMessages />

         </div>
      </div>
   )
}

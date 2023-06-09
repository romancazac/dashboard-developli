

import { useSelector } from 'react-redux'
import ButtonIcon from '../ui/ButtonIcon'
import avatar from '../../assets/img/avatar.png'

import { ProfileSections } from '../ProfileSections/ProfileSections'
import { Link } from 'react-router-dom'




export const Profile = () => {
  const { user } = useSelector(state => state.auth)

  const { asideProfileOpen } = useSelector(state => state.ui)


  return (


    <div
      className={`max-w-[368px] min-w-[300px] w-full h-full px-5 py-[30px] bg-white rounded-xl sticky top-0 xl:fixed xl:right-0 xl:top-20 xl:overflow-y-auto
      xl:h-[calc(100%-80px)] xl:ease-in-out xl:duration-100  z-[5]  ${asideProfileOpen ? 'xl:translate-x-0' : 'xl:translate-x-full'}`}
     
    >
      <div className='border-b pb-3 mb-3'>
        <div className="relative flex justify-center items-center flex-col">
          <Link to='resume'>
            <ButtonIcon
              icon="icon-pencil"
              className="absolute top-0 right-0 w-[28px] h-[28px]"
              onClick={() => console.log('resume')}
            />
          </Link>

          <span className="flex items-center justify-center w-[110px] h-[110px] mb-5 rounded-full overflow-hidden border ">
            <img src={avatar} alt="avatar" className='w-[80%] h-[80%] object-cover ' />
          </span>
          <span className='inline-block text-lg font-bold text-blackColor mb-1'>{user?.profileData[0].fullName}</span>
          <span className='font-semibold'>{user?.profileData[0].speciality}</span>
        </div>


      </div>
      <div className="mb-5">
        <div className="flex justify-between items-center gab-1 mb-7">
          <span className='font-bold'>Availability</span>

        </div>
        <span className="btn-block btn-block_green"><span>{user?.profileData[6]?.available ? `Available For Work` : 'Not Available For Work'}</span></span>


      </div>


      <ProfileSections aside={true} />

    </div>

  )
}

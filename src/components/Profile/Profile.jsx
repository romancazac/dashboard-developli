
import avatar from '../../assets/img/avatar.png'
import ButtonIcon from '../ui/ButtonIcon'
export const Profile = () => {
  return (
    <div className='max-w-[368px] min-w-[300px] w-full h-full px-5 py-[30px] bg-white rounded-xl sticky top-0'>
      <div className='border-b pb-3 mb-3'>
          <div className="relative flex justify-center items-center flex-col">
            <ButtonIcon
              icon="icon-pencil"
              className="absolute top-0 right-0 w-[28px] h-[28px]"
              onClick={() => console.log("click")}
            />
            <span className="flex items-center justify-center w-[110px] h-[110px] mb-5 rounded-full overflow-hidden border ">
              <img src={avatar} alt="avatar" className='w-[80%] h-[80%] object-cover '/>
            </span>
            <span className='inline-block text-lg font-bold text-blackColor mb-1'>Mawiyah Sawaya</span>
            <span className='font-semibold'>Java Engeneer</span>
          </div>

       
      </div>
      <div className="mb-5">
            <div className="flex justify-between items-center gab-1 mb-7">
              <span className='font-bold'>Availability</span>
              <ButtonIcon
                icon="icon-pencil"
                className="w-[28px] h-[28px]"
                onClick={() => console.log("click")}
              />
            </div>
            <span className="btn-block btn-block_green"><span>Available For Work</span></span>
      </div>
      <div className="mb-5">
            <div className="flex justify-between items-center gab-1 mb-7">
              <span className='font-bold'>Experience</span>
              <ButtonIcon
                icon="icon-pencil"
                className="w-[28px] h-[28px]"
                onClick={() => console.log("click")}
              />
            </div>
            <div className="flex gap-3 mb-3">
              <ButtonIcon
                icon="icon-job"
                className="w-[54px] h-[54px] flex-[0_0_54px] bg-[#F15A25] text-white"
              />
              <div>
                <h4 className="font-bold mb-1">Java Engeneer</h4>
                <span className="block font-bold text-gray text-xs mb-1">Developli Team - Remote</span>
                <span className="block font-bold  text-gray text-xs mb-1">Feb 2018 - Present 5 Years</span>
              </div>
              
            </div>
            <div className="flex gap-3 mb-3">
              <ButtonIcon
                icon="icon-job"
                className="w-[54px] h-[54px] flex-[0_0_54px] bg-[#74A8F5] text-white"
              />
              <div>
                <h4 className="font-bold mb-1">UI Designer</h4>
                <span className="block font-bold text-gray text-xs mb-1">Developli Team - Remote</span>
                <span className="block font-bold  text-gray text-xs mb-1">Feb 2018 - Present 5 Years</span>
              </div>              
            </div>
            
      </div>
      <div className="mb-5">
            <div className="flex justify-between items-center gab-1 mb-7">
              <span className='font-bold'>Education</span>
              <ButtonIcon
                icon="icon-pencil"
                className="w-[28px] h-[28px]"
                onClick={() => console.log("click")}
              />
            </div>
            <div className="flex gap-3 mb-3">
              <ButtonIcon
                icon="icon-job"
                className="w-[54px] h-[54px] flex-[0_0_54px] bg-[#F5F7FF] text-white"
              />
              <div>
                <h4 className="font-bold mb-1">University</h4>
                <span className="block font-bold text-gray text-xs mb-1">Student - Software Engienering</span>
                <span className="block font-bold  text-gray text-xs mb-1">2018 - 2021 - Present 3 Years</span>
              </div>             
            </div>            
      </div>
      <div className="mb-5">
            <div className="flex justify-between items-center gab-1 mb-7">
              <span className='font-bold'>Skills</span>
              <ButtonIcon
                icon="icon-pencil"
                className="w-[28px] h-[28px]"
                onClick={() => console.log("click")}
              />
            </div>
            <span>Add your skills</span>          
      </div>
    </div>
  )
}

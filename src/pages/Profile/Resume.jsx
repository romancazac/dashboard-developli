import { useEffect, useState } from 'react'
import { ProfileSection } from '../../components/ProfileSection/ProfileSection'
import { ProfileItem } from '../../components/ui/ProfileItem'

import { UploadFile } from '../../components/UploadFile/UploadFile'
import { File } from '../../components/ui/File'
import { AcademicCapIcon } from '@heroicons/react/20/solid'
import { ProfileItemIcon } from '../../components/ProfileItemIcon/ProfileItemIcon'
import { useDispatch, useSelector } from 'react-redux'
import UpdatePopup from '../../components/updatePopup/updatePopup'
import { setPopUp } from '../../redux/slices/jobsSlice'
import UpdatePopupAdd from '../../components/UpdatePopupAdd/UpdatePopupAdd'


export const Resume = () => {
  const dispatch = useDispatch()


  const { profileData } = useSelector(state => state.profile)
  const { popUp } = useSelector(state => state.jobs)

  // cv upload function
  const [selectedFiles, setSelectedFiles] = useState([])
  const onRemoveFile = (name) => {
    const files = selectedFiles.filter((obj) => obj.name !== name)
    setSelectedFiles(files)

  }

 

  return (
    <>

      <ProfileSection
        title='Personal information'
        editArray={'personalInfo'}
        data={profileData[0]?.personalInfo[0]}
     
        id={0}
      >

        {profileData[0]?.personalInfo?.map((info) =>
          Object.entries(info).map(([label, text]) =>
            <ProfileItem label={label} text={text} />
          )
        )}
      </ProfileSection>

      <ProfileSection
        title='Contacts'
        editArray={'contacts'}
        data={profileData[1]?.contacts[0]}
  
        id={1}
      >

        {
          profileData[1]?.contacts?.map((contact) =>
            Object.entries(contact).map(([hrf, arr]) =>
              <ProfileItem label={hrf} text={arr} />

            )
          )
        }
      </ProfileSection>

      <ProfileSection title='Upload cv or project*' NoRedact={true} >
        <div className='flex flex-wrap gap-3 mb-3'>
          {
            selectedFiles.map((file) =>
              <File name={file.name} size={file.size} key={file.name} onClick={() => onRemoveFile(file.name)} />

            )
          }
        </div>
        <UploadFile setSelectedFiles={setSelectedFiles} />
      </ProfileSection>

      <ProfileSection
        title='Experience'
        addItem={true}
        editArray={'experience'}
        data={profileData[2]?.experience}
   
        id={2}
      >

        {
          profileData[2]?.experience?.map((exp, i) =>

            <ProfileItemIcon
              key={exp.id}
              icon={<AcademicCapIcon className='w-5' />}
              name={exp.position}
              position={exp.agency}
              term={exp.perioad}
              employment={exp.employment}
              editArray={'experience'}
              idItem={exp.id}
              id={2}
            />
          )
        }


      </ProfileSection>

      <ProfileSection
        title='Education'
        editArray={'education'}
        id={3}
        data={profileData[3]?.education}
 
      >

        {
          profileData[3]?.education?.map((exp, i) =>

            <ProfileItemIcon
              key={i}
              icon={<AcademicCapIcon className='w-5' />}
              name={exp.position}
              position={exp.agency}
              term={exp.perioad}
              employment={exp.employment}
              idItem={exp.id}
              editArray={'education'}
              id={3}
            />
          )
        }

      </ProfileSection>
      <ProfileSection title='Languages' addItem={true} editArray={'languages'}>


      </ProfileSection>

      {
        (popUp === 'personalInfo' || popUp === 'contacts') && <UpdatePopup open={popUp === 'personalInfo' || popUp === 'contacts'} handleOpen={() => dispatch(setPopUp(''))} />
      }

      {(popUp === 'experience' || popUp === 'education') && <UpdatePopupAdd open={popUp === 'experience' || popUp === 'education'} handleOpen={() => dispatch(setPopUp(''))} />}
    </>


  )
}

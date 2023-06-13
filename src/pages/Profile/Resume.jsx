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

export const Resume = () => {
  const dispatch = useDispatch()
  const [selectedFiles, setSelectedFiles] = useState([])

  const { profileData } = useSelector(state => state.profile)
  const { popUp } = useSelector(state => state.jobs)

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

      <ProfileSection title='Experience' addItem={true} editArray={'experience'} data={profileData[2]?.experience} >

        {
          profileData[2]?.experience?.map((exp, i) =>

            <ProfileItemIcon
              key={i}
              icon={<AcademicCapIcon className='w-5' />}
              name={exp.position}
              position={exp.agency}
              term={exp.perioad}
            />
          )
        }


      </ProfileSection>

      <ProfileSection title='Education' editArray={'education'}>
        {
          profileData[3]?.education?.map((exp, i) =>

            <ProfileItemIcon
              key={i}
              icon={<AcademicCapIcon className='w-5' />}
              name={exp.position}
              position={exp.agency}
              term={exp.perioad}
            />
          )
        }

      </ProfileSection>
      <ProfileSection title='Languages' addItem={true} editArray={'languages'}>


      </ProfileSection>


      <UpdatePopup open={popUp === 'personalInfo' || popUp === 'contacts'} handleOpen={() => dispatch(setPopUp(''))}  />
 
    </>


  )
}

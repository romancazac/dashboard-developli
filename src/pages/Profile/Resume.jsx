import { useEffect, useState } from 'react'
import { ProfileSection } from '../../components/ProfileSection/ProfileSection'
import { ProfileItem } from '../../components/ui/ProfileItem'

import { UploadFile } from '../../components/UploadFile/UploadFile'
import { File } from '../../components/ui/File'
import { AcademicCapIcon } from '@heroicons/react/20/solid'
import { ProfileItemIcon } from '../../components/ProfileItemIcon/ProfileItemIcon'
import { useSelector } from 'react-redux'

export const Resume = () => {
  const [selectedFiles, setSelectedFiles] = useState([])
  const { profileData } = useSelector(state => state.profile)

  const onRemoveFile = (name) => {
    const files = selectedFiles.filter((obj) => obj.name !== name)
    setSelectedFiles(files)
  }

  const onAddItem = () => {
    console.log('add item')
  }

 
  return (
    <>

      <ProfileSection title='Personal information' editArray={'personalInfo'}>

        {profileData[0]?.personalInfo?.map((info) =>
          Object.entries(info).map(([label, text]) =>
            <ProfileItem label={label} text={text} />
          )
        )}
      </ProfileSection>

      <ProfileSection title='Contacts' editArray={'contacts'}>

        {
          profileData[1]?.contacts?.map((contact) =>
            Object.entries(contact).map(([hrf, arr]) =>
              <ProfileItem label={hrf} text={arr} />

            )
          )
        }
      </ProfileSection>

      <ProfileSection title='Upload cv or project*' NoRedact={true}>
        <div className='flex flex-wrap gap-3 mb-3'>
          {
            selectedFiles.map((file) =>
              <File name={file.name} size={file.size} key={file.name} onClick={() => onRemoveFile(file.name)} />

            )
          }
        </div>
        <UploadFile setSelectedFiles={setSelectedFiles} />
      </ProfileSection>

      <ProfileSection title='Experience' addItem={true} onClick={onAddItem} editArray={'experience'}>
   
        {
          profileData[2]?.experience?.map((exp,i) =>
   
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
          profileData[3]?.education?.map((exp,i) =>
   
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
    </>


  )
}

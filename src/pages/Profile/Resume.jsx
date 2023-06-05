import { useState } from 'react'
import { ProfileSection } from '../../components/ProfileSection/ProfileSection'
import { ProfileItem } from '../../components/ui/ProfileItem'

import { UploadFile } from '../../components/UploadFile/UploadFile'
import { File } from '../../components/ui/File'
import { AcademicCapIcon } from '@heroicons/react/20/solid'
import { ProfileItemIcon } from '../../components/ProfileItemIcon/ProfileItemIcon'

export const Resume = () => {
  const [selectedFiles, setSelectedFiles] = useState([])
  const dataLinks = [
    {
      name: 'Website',
      icon: 'icon-dribbble',
      link: '#'
    },
    {
      name: 'Instagram',
      icon: 'icon-instagram',
      link: '#'
    },
    {
      name: 'Facebook',
      icon: 'icon-facebook',
      link: '#'
    },
  ]

  const onRemoveFile = (name) => {
    const files = selectedFiles.filter((obj) => obj.name !== name)
    setSelectedFiles(files)
  }

  const onAddItem = () => {
    console.log('add item')
  }
  return (
    <>

      <ProfileSection title='Personal information'>
        <ProfileItem label='Full Name:' text='Mawiyah Sawaya' />
        <ProfileItem label='Speciality' text='Java Engeneer' />
        <ProfileItem label='Date of birth:' text='September 11, 1993' />
        <ProfileItem label='Gender:' text='Female' />
        <ProfileItem label='About:' text='I’m UI Designer with 2 years experience. I have good communication skills and  can collaborate with team & developers. So if you interested with me, please feel free to hire me' />
      </ProfileSection>

      <ProfileSection title='Contacts'>
        <ProfileItem label='Phone:' text='123 456 67 89' />
        <ProfileItem label='Email:' text='email' />
        <ProfileItem label='Links' text={dataLinks} />

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

      <ProfileSection title='Experience' addItem={true} onClick={onAddItem}>
        <ProfileItemIcon
          icon={<AcademicCapIcon className='w-5' />}
          name='UI / UX Designer'
          position='Ideologist Team - Freelance'
          term='Jan 2022 - Present - 8 Mos'
        />
        <ProfileItemIcon
          icon={<AcademicCapIcon className='w-5' />}
          name='UI Designer'
          position='Tigabatang - Fulltime'
          term='Jan 2022 - Present - 8 Mos'
        />



      </ProfileSection>

      <ProfileSection title='Education'>
        <ProfileItemIcon
          icon={<AcademicCapIcon className='w-5' />}
          name='University'
          position='Student - Software Engienering'
          term='2018 - 2021 - 3 Yrs'
        />

      </ProfileSection>
      <ProfileSection title='Languages' addItem={true}>


      </ProfileSection>
    </>


  )
}

import React from 'react'
import { ProfileSection } from '../../components/ProfileSection/ProfileSection'
import { ProfileItem } from '../../components/ui/ProfileItem'
import { GlobeAltIcon } from '@heroicons/react/24/solid'

export const Resume = () => {
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
      <ProfileSection title='Upload cv or project*'>


      </ProfileSection>
      <ProfileSection title='Experience'>


      </ProfileSection>

      <ProfileSection title='Education'>


      </ProfileSection>
      <ProfileSection title='Languages'>


      </ProfileSection>
    </>


  )
}

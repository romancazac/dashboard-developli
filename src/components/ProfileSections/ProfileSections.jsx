import React from 'react'
import { ProfileSection } from '../ProfileSection/ProfileSection'
import { useSelector } from 'react-redux'
import { ProfileItemIcon } from '../ProfileItemIcon/ProfileItemIcon'

import { AcademicCapIcon, BriefcaseIcon, LanguageIcon } from '@heroicons/react/20/solid'
import { ProfileItem } from '../ui/ProfileItem'
export const ProfileSections = ({ aside }) => {
   const { profileData } = useSelector(state => state.profile)


   return (
      <>


         <ProfileSection
            title='Experience'
            addItem={profileData[2]?.experience?.length > 0 ? false : true}
            editArray={'experience'}
            data={profileData[2]?.experience}
            aside={aside}
            id={2}
         >

            {
               profileData[2]?.experience?.map((exp, i) =>

                  <ProfileItemIcon
                     key={exp.id}
                     icon={<BriefcaseIcon className='w-5' />}
                     name={exp.position}
                     position={exp.agency}
                     term={exp.perioad}
                     employment={exp.employment}
                     editArray={'experience'}
                     idItem={exp.id}
                     id={2}
                     aside={aside}
                  />
               )
            }


         </ProfileSection>

         <ProfileSection
            aside={aside}
            title='Education'
            editArray={'education'}
            id={3}
            data={profileData[3]?.education}
            addItem={profileData[3]?.education?.length > 0 ? false : true}
         >

            {

               profileData[3]?.education?.map((exp) =>

                  <ProfileItemIcon
                     key={exp.id}
                     icon={<AcademicCapIcon className='w-5' />}
                     name={exp.position}
                     position={exp.agency}
                     term={exp.perioad}
                     employment={exp.employment}
                     idItem={exp.id}
                     editArray={'education'}
                     id={3}
                     aside={aside}
                  />

               )
            }

         </ProfileSection>

         <ProfileSection
            aside={aside}
            title='Languages'
            addItem={profileData[4]?.languages.length > 0 ? false : true}
            editArray={'languages'}
            data={profileData[4]?.languages}
            id={4}
         >
            {
               profileData[4]?.languages?.map((exp) =>

                  <ProfileItemIcon
                     key={exp.id}
                     icon={<LanguageIcon className='w-5' />}
                     name={exp.position}
                     position={exp.agency}
                     term={exp.perioad}
                     employment={exp.employment}
                     idItem={exp.id}
                     editArray={'languages'}
                     id={4}
                     aside={aside}
                  />

               )
            }

         
         </ProfileSection>
         
         <ProfileSection
            title='Skils'
            editArray={'skilss'}
            data={profileData[5]?.skilss[0]}
            aside={aside}
            id={5}
         >
            {profileData[5]?.skilss?.map((info) =>
               Object.entries(info).map(([label, text]) =>
                  <ProfileItem label={label} text={text} aside={aside} />

               )
            )}


         
         </ProfileSection>
      </>
   )
}

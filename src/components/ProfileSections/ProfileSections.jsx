import React from 'react'
import { ProfileSection } from '../ProfileSection/ProfileSection'
import { useSelector } from 'react-redux'
import { ProfileItemIcon } from '../ProfileItemIcon/ProfileItemIcon'

import { AcademicCapIcon, BriefcaseIcon, LanguageIcon } from '@heroicons/react/20/solid'
import { ProfileItem } from '../ui/ProfileItem'
export const ProfileSections = ({ aside }) => {
   const { user } = useSelector(state => state.auth)
   

   return (
      <>


         <ProfileSection
            title='Experience'
            addItem={user?.profileData[2]?.data?.length > 0 ? false : true}
            editArray={'experience'}
            data={ user?.profileData[2]}
            aside={aside}
            id={2}
         >

            {
              user?.profileData[2]?.data?.map((exp) =>

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
            data={user?.profileData[3]}
            addItem={user?.profileData[3]?.data?.length > 0 ? false : true}
         >

            {

               user?.profileData[3]?.data?.map((exp) =>

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
            addItem={ user?.profileData[4]?.data?.length > 0 ? false : true}
            editArray={'languages'}
            data={ user?.profileData[4]?.data}
            id={4}
         >
            {
              user?.profileData[4]?.data?.map((exp) =>

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
            data={  user?.profileData[5]}
            aside={aside}
            id={5}
         >
            {
             user?.profileData?.length > 0 &&
               Object.entries(user?.profileData[5])?.map(([label, text]) =>
                  <ProfileItem label={label} text={text} aside={aside} key={label} />

               )
            }



         </ProfileSection>
      </>
   )
}

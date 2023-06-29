import { useState } from 'react'
import { ProfileSection } from '../../components/ProfileSection/ProfileSection'
import { ProfileItem } from '../../components/ui/ProfileItem'

import { UploadFile } from '../../components/UploadFile/UploadFile'
import { File } from '../../components/ui/File'

import { useDispatch, useSelector } from 'react-redux'

import { setPopUp } from '../../redux/slices/jobsSlice'

import { ProfileSections } from '../../components/ProfileSections/ProfileSections'
import VideoCvPopup from '../../components/VideoCvPopup/VideoCvPopup'


export const Resume = () => {
  const dispatch = useDispatch()


  const { user } = useSelector(state => state.auth)
  // const { profileData } = useSelector(state => state.auth)
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
        data={user?.profileData[0]}

        id={0}
      >

        {

          Object.entries(user?.profileData[0] || []).map(([label, text]) =>

            <ProfileItem label={label} text={text} />

          )
        }
      </ProfileSection>

      <ProfileSection
        title='Contacts'
        editArray={'contacts'}
        data={user?.profileData[1]}

        id={1}
      >



        {


          Object.entries(user?.profileData[1] || []).map(([label, text]) =>
            <ProfileItem label={label} text={text} />

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
      <ProfileSection title='Video cv' editArray={'videoCv'}>
      </ProfileSection>

      <ProfileSections aside={false} />


      <VideoCvPopup open={popUp === 'videoCv'} handleOpen={() => dispatch(setPopUp(''))} />

    </>


  )
}

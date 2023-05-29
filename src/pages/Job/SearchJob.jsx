import React from 'react'

import CardJob from '../../components/CardJob/CardJob'
import { BtnLoader } from '../../components/ui/BtnLoader'
import { TopCandidats } from '../../components/TopCandidats/TopCandidats'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export const SearchJob = () => {
  return (
    <>
      
      <SearchBar />
      <TopCandidats />
      
      <CardJob />
      <CardJob />
      <CardJob />

      <BtnLoader>Load More</BtnLoader>
    </>
  )
}

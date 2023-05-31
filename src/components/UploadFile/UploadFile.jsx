import React, { useState } from 'react'

export const UploadFile = ({setSelectedFiles}) => {



   const handleFileInput = (e) => {

      setSelectedFiles(prev => [...prev, e.target.files[0]])
   }

   const handleDrop = (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles(prev => [...prev, files[0]] )
      
   }

   const handleDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
   }
   return (
      <div className=" text-gray rounded-xl border border-dashed  border-green ">
         <label htmlFor="files" className='block py-[18px] text-center cursor-pointer'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
         >Drag or <span className='text-green '>upload</span> project files</label>
         <input type="file" name="files" id="files" className='hidden'
            onChange={handleFileInput}

         />
      </div>
   )
}

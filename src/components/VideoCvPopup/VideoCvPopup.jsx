import { Fragment, useEffect, useRef, useState } from "react";
import Webcam from 'react-webcam';
import {
   Dialog,
   DialogHeader,
   DialogBody,
   DialogFooter,

} from "@material-tailwind/react";
import ButtonIcon from "../ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/20/solid";


export default function VideoCvPopup({ open, handleOpen }) {
   const webcamRef = useRef(null);

   const startRecording = () => {
      // Logic pentru începerea înregistrării
      const videoConstraints = {
         facingMode: 'user', // Alege camera frontală
      };

      // Accesarea camerei utilizatorului
      navigator.mediaDevices.getUserMedia({ video: videoConstraints })
         .then((mediaStream) => {
            webcamRef.current.video.srcObject = mediaStream;
         })
         .catch((error) => {
            console.error('Eroare la accesarea camerei:', error);
         });
   };

   const stopRecording = () => {
      // Logic pentru oprirea înregistrării
      const videoStream = webcamRef.current.video.srcObject;
      const tracks = videoStream.getTracks();
      tracks.forEach((track) => track.stop());
   };

   const saveVideo = () => {
      // Logic pentru salvarea video-ului
      const videoBlob = new Blob(
         [webcamRef.current.video.srcObject],
         { type: 'video/webm' }
      );
      console.log(videoBlob)
 
   };




   return (
      <Fragment >
         <Dialog size="xl" open={open} handler={handleOpen} className="max-w-[700px!important] min-w-[auto] max-h-[99%] overflow-auto  md:min-w-[90%] p-5">
            <DialogHeader className="flex items-start justify-between gap-1 p-0 mb-3">
               <h3 className="first-letter:uppercase">Record your virtual CV</h3>
               <ButtonIcon className={"w-8 h-8 ml-auto"} onClick={handleOpen}><XMarkIcon className="w-4" /></ButtonIcon>
            </DialogHeader>
            <DialogBody className="overflow-y-auto p-0 ">


               <Webcam ref={webcamRef} className="mb-5 rounded-xl" />
               <div className="flex justify-center gap-2">
                  <button onClick={startRecording} className="btn-block btn-block_green">Începe </button>
                  <button onClick={stopRecording} className="btn-block btn-block_green">Oprește </button>
                  <button onClick={saveVideo} className="btn-block btn-block_green">Salvează </button>
               </div>

            </DialogBody>


         </Dialog>

      </Fragment>
   );
}
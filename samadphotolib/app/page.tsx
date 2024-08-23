"use client"; 

import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";

import { CldImage } from "next-cloudinary";

type uploadResult = {
  info : {
    public_id: string;
  }
  events: "success"
}

export default function Home() {

const []

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <CldUploadButton 
       onUpload={(result: uploadResult) => {
         console.log(result.info.public_id);
       }}
       uploadPreset="la9hjhns" 
       /> 

      <CldImage
      width="960"
      height="600"
      src="<Public ID>"
      sizes="100vw"
      alt="Description of my image"
      />




       </main>
  );
}

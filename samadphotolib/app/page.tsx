"use client"; 

import Image from "next/image";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

type uploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageid, setImageid] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton 
        onUpload={(result: uploadResult) => {
          setImageid(result.info.public_id);
          console.log(result.info.public_id);
        }}
        uploadPreset="la9hjhns" 
      /> 
      {imageid && (
        <CldImage
          width="400"
          height="400"
          src={imageid}
          sizes="100vw"
          alt="Uploaded image"
        />
      )}
    </main>
  );
}

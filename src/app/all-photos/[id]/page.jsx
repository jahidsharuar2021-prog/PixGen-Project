import React from 'react';
import Image from "next/image";

const PhotoDetailsPage =async ({params}) => {
    const {id}=await params;

    const res = await fetch("https://pix-gen-project-tau.vercel.app/data.json");
    const photos = await res.json();
    // console.log(photos);

    const photo=photos.find(p => p.id==id)
    
    return (
      <div>
        <div >
          <Image
            src={photo.imageUrl}
            width={200}
            height={200}
            alt={photo.title}
            className="w-[200px] h-[200px] object-cover rounded-xl"
          />
          <h1 className="font-bold text-2xl">{photo?.title}</h1>
          <p className="font-medium text-1xl"> {photo.prompt} </p>
          <p className="text-1xl">
            resolution = {photo.resolution}{" "}
          </p>
        </div>
      </div>
    );
};

export default PhotoDetailsPage;
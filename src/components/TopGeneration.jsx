import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async() => {
     const res = await fetch(
       "https://pix-gen-project-tau.vercel.app/data.json"
     )
     const photos = await res.json ()
     const topPhoto=photos.slice(0,8)
    // console.log(topPhoto);
    return (
      <div>
        <h1 className="text-2xl font-bold my-5">Top Genteration</h1>
        <div className='grid grid-cols-4 gap-5'>
          {topPhoto.map((photo) => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
        </div>
      </div>
    );
};

export default TopGeneration;
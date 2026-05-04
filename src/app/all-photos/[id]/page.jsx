import Image from 'next/image';
import React from 'react';

const PhotoDetailsPage =async  ({params}) => {
    const {id} = await params;
   
   const res = await fetch ('https://pixgen-weld.vercel.app/data.json')
    const photos = await res.json()

    const photo = photos.find(p => p.id == id)
    console.log(photo)

    return (
        <div className='mt-6 border border-gray-200 shadow-2xl p-8'>
           <Image
                 src={photo.imageUrl}
                width={200}
                height={200}
                  alt={photo.title}
                  className='rounded-xl'
                         />

<div className='mt-4'>
            <h1 >Title: {photo?.title}</h1>
         <p>Category: {photo?.category}</p>
         </div>
          
        </div>
    );
};

export default PhotoDetailsPage;
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({ photo }) => {
  

   
       
  

    return (
        <Card className='border rounded-xl '>
            <div className='relative w-full aspect-square'>
                <Image
                    src={photo.imageUrl}
                 fill
                    alt={photo.title}
                    className='object-cover rounded-xl'
                />
            

             <Chip className='absolute right-2 top-2' color="danger">{photo.category}</Chip>

            </div>

            <div>
                <h2 className='font-medium'>{photo.title}</h2>
            </div>

           <div className='flex gap-6'>

 <div className='flex items-center gap-2'>
                <p><FaHeart /></p>
                <p>{photo.likes}</p>
            </div>

            <div className='flex items-center gap-2'>
                <p><BiDownload/></p>
                <p>{photo.downloads}</p>
            </div>



           </div>
       <Link href={`/all-photos/${photo.id}`}><Button variant='outline' className={'w-full'}>View Details</Button></Link>
           
        </Card>
    );
};

export default PhotoCard;
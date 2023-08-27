import React from 'react'
import Image from 'next/image';
import PostContent from './PostContent';
import Link from 'next/link';

interface Data{
    id: number,
    title: string,
    description: string,
    banner_image: string,
    date_time: string,
    organiser_name: string,
    organiser_icon:string,
    venue_name: string,
    venue_city: string,
    venue_country: string,
    };

const Card = ({data}: {data: Data}) => {
  return (
    <div className="space-y-10 my-2 p-4 min-h-[575px] " >
        {/* Post Image */}
        <Image alt={data.title} src={data.banner_image} width={600} height={300} className="rounded-md w-full object-cover object-center h-full max-h-[300px]"/>
        {/* Post Content */}
        <div><PostContent data={data}/></div>
    </div>
  )
}

export default Card
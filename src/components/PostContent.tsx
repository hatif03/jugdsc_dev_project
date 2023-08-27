
import { BookmarkPlus } from "lucide-react/dist/esm/lucide-react";

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


const PostContent = ({data}:{data: Data}) => {
  return (
    <div className=" py-2 my-3">
        {/* Tags */}
        <div className={` flex items-center flex-wrap gap-2 text-neutral-400 text-xs @md:text-sm `}>
            <div className={` font-medium `}>
                {data.title}
            </div>
            <div className=" w-2 h-2 rounded-full bg-neutral-200"/>
            <div>{`${data.date_time.split("T")[0]}`}</div>
            <div className=" w-2 h-2 rounded-full bg-neutral-200"/>
             <div>{`${data.date_time.split("T")[1]}`}</div>
            <div className=" w-2 h-2 rounded-full bg-neutral-200"/>
            {/* <div>{getReadingTime(post.body)}</div>
            <div className=" w-2 h-2 rounded-full bg-neutral-200"/>
            <div>{getRelativeDate(post.date_created)}</div> */}
        </div>
        {/* Title */}
        <h2 className="@lg:text-3xl @md:text-2xl text-xl font-medium">{data.title}</h2>
        {/* Description */}
        <p className=" leading-snug text-neutral-600 text-md @lg:text-lg line-clamp-2">{data.description}</p>
        {/* Read More */}
        <button className=" text-white bg-red-500 rounded-lg hover:bg-red-700 mt-5">
            <div className=" flex items-center gap-2 p-3">
                Add to WatchList <BookmarkPlus size="12"/>
            </div>
        </button>
    </div>
  );
};

export default PostContent;
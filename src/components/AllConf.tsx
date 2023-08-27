import Card from "./Card";
import { ArrowRight } from "lucide-react/dist/esm/lucide-react";

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

const AllConf = ({datas}: {datas: Data[]}) => {
  return (

    <div>
        <h3 className=" flex font-bold">All Events <ArrowRight/> </h3>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {datas.map((data:Data) => <Card data={data} key={data.id}/>)}
        </div>
    </div>
  )
};

export default AllConf;
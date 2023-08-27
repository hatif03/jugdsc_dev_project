import {getFirestore} from "firebase/firestore";
import firebase_app from "./config";
import { addDoc } from "firebase/firestore";

const firestore = getFirestore(firebase_app);

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

// const addToList = async (data: Data) => {
//     await addDoc("saved", data)
// };



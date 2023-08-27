"use client"
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AllConf from "@/components/AllConf";
import MyConf from "@/components/MyConf";
import { notFound } from "next/navigation";
import PaddingContainer from "../Layout/PaddingContainer";


function Home() {
    const { user } = useAuthContext();
    const router = useRouter();

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        if (user === null) router.push("/")
    }, [user]);

    useEffect(() => {
        const getAllData = async () => {
            try {
                const response = await fetch("https://gdscdev.vercel.app/api").then(res => res.json());
                console.log(response);
                setDatas(response.content.data);
              } catch (error) {
                console.error(error);
                throw new Error("Error fetching posts");
              }
        };
        getAllData();
        
    }, []);
    if (!datas){ notFound(); }

    return (
        <PaddingContainer>
            <div className=" h-auto min-h-screen space-y-10">
                <Navbar/>
                <AllConf datas={datas}/>
            </div>
        </PaddingContainer>
    );
}

export default Home;
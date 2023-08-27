"use client"
import React, { useState, useEffect } from 'react'
import { signIn, signInWithGoogle } from '@/firebase/auth/auth';
import Link from 'next/link';
import Image from 'next/image';
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user != null) router.push("/home")
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn(email, password);
        console.log(result);
        
    }


  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60)'}}>
    <div className="hero-content flex-col justify-center">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-red-500">Login now!</h1>
        <p className="py-6 text-slate-200 font-bold">Welcome back. We've missed you!</p>
        </div>
        <button className="btn bg-red-500 text-white" onClick={signInWithGoogle}>
            <Image src="/google.png" alt="me" width="16" height="16"/> Log in with Google
        </button>
        <form action="" onSubmit={handleSubmit}>
            <div className="card flex-shrink-0 w-[full] max-w-sm shadow-2xl bg-white justify-center">
                <div className="card-body p-[20px] sm:p-[36px]">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" value={email} placeholder="Enter email" className="input input-bordered" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" value={password} className="input input-bordered" onChange={(e) => setPassword(e.target.value)}/>
                    {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-red-500 hover:bg-red-600 text-white" type='submit'>Login</button>
                    <Link href="/signup"><p className=' text-red-500 text-xs font-bold flex-wrap mt-2'>Don't have an account?</p></Link>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login;
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-red-500">Conferenz</h1>
          <p className="mb-5 text-white">Looking for dev-meetups nearby? Join us to grow with the largest community of developers.</p>
          <div className=' flex gap-2 items-center justify-center'>
            <Link href="/login"><button className="btn bg-red-500 text-white rounded-2xl w-">Log In</button></Link>
            <Link href="/signup"><button className="btn bg-white text-red-600 rounded-2xl">Sign Up</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

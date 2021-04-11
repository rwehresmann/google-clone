import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

import Image from "next/image";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          <Avatar url="/avatar.jpeg"/>
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="/google-logo.png"
          width="auto"
          height="100"
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg 
        max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 mt-8 justify-center 
        sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google Search</button>

          <button className="btn">I'm feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}

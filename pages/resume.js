import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Constance Ingram</title>
        <meta name="description" content="Constance Ingram || Denver dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen bg-bg1 bg-cover bg-right lg:bg-bottom font-fell">
        <div className="min-h-screen bg-black bg-opacity-70 text-white flex flex-col justify-center text-center items-center">
          <h1 className="font-fell-sc italic text-lg lg:text-4xl p-2">Resume</h1>
          <h2 className="text-md lg:text-lg italic"> last updated September 5, 2022</h2>
          <p className="p-2">❦</p>
          <div className="flex flex-col justify-center items-center">
            <iframe className="w-screen lg:w-1/2 min-h-1/2" src="https://drive.google.com/file/d/1qbx2Ar6QulfK7lV9TRxg2kjfBXQzIQqE/preview" allow="autoplay"></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}

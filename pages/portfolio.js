import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'

export default function Portfolio() {
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
          <h1 className="font-fell-sc italic text-lg lg:text-4xl p-2">Constance Ingram </h1>
          <h2 className="text-md lg:text-lg"> Denver, Colorado (Remote)</h2>
          <p className="text-sm lg:text-md">UT Austin 2015 </p>
          <p className="p-2">❦</p>
          <button className="bg-black text-white text-lg lg:text-2xl max-w-sm p-4 m-2 rounded-md italic">Portfolio</button>
        </div>
      </main>
    </div>
  )
}

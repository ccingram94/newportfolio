import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/header'
import dulac from '../public/dulac.png'
import dulac2 from '../public/dulac2.png'
import dulac3 from '../public/dulac3.png'
import wendel from '../public/wendel.png'
import wendel2 from '../public/wendel2.png'
import wendel3 from '../public/wendel3.png'
import blurb from '../public/blurb.png'
import blurb2 from '../public/blurb2.png'
import blurb3 from '../public/blurb3.png'

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
        <h1 className="font-fell-sc italic text-lg lg:text-4xl p-2">Portfolio</h1>
          <p className="p-2">❦</p>
          <div className="flex flex-row flex-wrap justify-center m-2 p-2">
            <div className="bg-black text-white  max-w-sm p-4 m-2 rounded-md ">
              <h1 className="text-xl lg:text-3xl italic p-2">Dulac Tarot</h1>
              <Link href="https://www.dulactarot.com/">
                <button className="bg-white text-black rounded-xl p-2 m-2">Visit Online</button>
              </Link>
              <p className="p-2">A tarot card app with AI generated artwork</p>
              <div>
                <Image src={dulac} />
                <Image src={dulac2} />
                <Image src={dulac3} />
              </div>
              <p className="italic">Next.js (React), GPT-3, AWS S3, AWS CloudFront CDN, Redux, Redux-Toolkit, PostgreSQL (hosted by Heroku), Prisma ORM, Next-Auth</p>
            </div>
            <div className="bg-black text-white max-w-sm p-4 m-2 rounded-md ">
              <h1 className="text-xl lg:text-3xl italic p-2">Wendelful Life Ranch</h1>
              <Link href="https://www.wendelfullife.com/">
                <button className="bg-white text-black rounded-xl p-2 m-2">Visit Online</button>
              </Link>
              <p className="p-2">A reservation booking site for a Texas tourist ranch</p>
              <div>
                <Image src={wendel} />
                <Image src={wendel2} />
                <Image src={wendel3} />
              </div>
              <p className="italic">Next.js (React), Stripe, PostgreSQL (hosted by Heroku), Prisma ORM, Next-Auth, Material-UI, Redux, Redux-Toolkit</p>

            </div>
            <div className="bg-black text-white max-w-sm p-4 m-2 rounded-md ">
              <h1 className="text-xl lg:text-3xl italic p-2">Blurb Buddy</h1>
              <Link href="https://blurbbuddy.vercel.app/">
                <button className="bg-white text-black rounded-xl p-2 m-2">Visit Online</button>
              </Link>
              <p className="p-2">AI powered idea generation for writers</p>
              <div>
                <Image src={blurb} />
                <Image src={blurb3} />
                <Image src={blurb2} />
              </div>
              <p className="italic">Next.js (React), GPT-3, Next-Auth, AWS DynamoDB, Prisma, TailwindCSS</p>
              <p className="p-2">*Will not function publicly until review and approval of GPT-3 API use by OpenAI</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

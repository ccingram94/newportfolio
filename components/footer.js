import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="w-screen bg-black text-white flex flex-row justify-center p-2">
        <Link href="/">
            <button className="p-2">Home</button>
        </Link>
        <Link href="/">
            <button className="p-2">Resume</button>
        </Link>
        <Link href="/">
            <button className="p-2">Portfolio</button>
        </Link>
        <Link href="/">
            <button className="p-2">Contact</button>
        </Link>
    </div>
  )
}

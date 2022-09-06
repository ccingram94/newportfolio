import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-screen bg-black text-white flex flex-row justify-center p-2 font-fell-sc">
        <Link href="/">
            <button className="p-2">Home</button>
        </Link>
        <p className="p-4 text-xs">❦</p>
        <Link href="/resume">
            <button className="p-2">Resume</button>
        </Link>
        <p className="p-4 text-xs">❦</p>
        <Link href="/portfolio">
            <button className="p-2">Portfolio</button>
        </Link>
    </div>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFile, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import LetsConnect from '@/components/LetsConnect'
import Links from '@/components/Links'
import Profile from '@/components/Profile'
import Switch from '@/components/Switch'
import FloatDescription from '@/components/FloatDescription'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`w-full min-h-screen grid place-content-center bg-white dark:bg-[#101010] duration-100 ${inter.className}`}
    >
      <Switch/>
      <FloatDescription/>
      <div className='py-20 md:py-0 w-[50vh] md:w-[43vh] lg:w-[40vh] p-5 flex flex-col justify-center item-center'>
        <Profile/>
        <Links/>
        <LetsConnect/>
      </div>
    </main>
  )
}

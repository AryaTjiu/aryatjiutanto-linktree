import { useHover } from '@/context/HoverContext'
import { discord, email, github, instagram, youtube } from '@/data/dataLink'
import { faDiscord, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function LetsConnect() {
    const { setHovered } = useHover();

    return (
        <div className='flex flex-col items-center my-10 text-lg space-y-3'>
          <span className='dark:text-neutral-200 duration-200'>Let's get connected</span>
          <div className='flex space-x-4 text-3xl'>
            <Link href={github} onMouseEnter={() => setHovered("Github")} onMouseLeave={() => setHovered(false)}>
                <FontAwesomeIcon icon={faGithub} className='text-[#24292F] hover:text-neutral-400 dark:text-neutral-200 dark:hover:text-neutral-500 duration-200'/>
            </Link>
            <Link href={youtube} onMouseEnter={() => setHovered("Youtube")} onMouseLeave={() => setHovered(false)}>
                <FontAwesomeIcon icon={faYoutube} className='text-[#CC0000] hover:text-red-500 duration-200'/>
            </Link>
            <Link href={instagram} onMouseEnter={() => setHovered("Instagram")} onMouseLeave={() => setHovered(false)}>
                <FontAwesomeIcon icon={faInstagram} className='text-[#181818]'/>
            </Link>
            <Link href={discord} onMouseEnter={() => setHovered("Discord")} onMouseLeave={() => setHovered(false)}>
                <FontAwesomeIcon icon={faDiscord} className='text-[#5964F2] hover:text-blue-300 duration-200'/>
            </Link>
            <Link href={email} onMouseEnter={() => setHovered("Email")} onMouseLeave={() => setHovered(false)}>
                <FontAwesomeIcon icon={faEnvelope} className='text-[#181818] dark:text-neutral-200 dark:hover:text-neutral-500 hover:text-neutral-500 duration-200'/>
            </Link>
          </div>
        </div>
    )
}
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'


const Navbar = () => {

    const { theme, setTheme } = useTheme()    

    return (
        <div className="flex justify-center items-center space-x-4 pb-16">
            <Link href='/'><a className="hover:text-blue-400">Home</a></Link>
            <Link href='/portfolio'><a className="hover:text-blue-400">Resume</a></Link>
            <Link href='/about'><a className="hover:text-blue-400">About</a></Link>
            <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                { theme === 'dark' ?   <Link href='#'><a><Image src="/light.svg" width={24} height={24} /></a></Link> : <Link href="#"><a><Image src="/dark.svg" width={24} height={24} /></a></Link> }
            </span>
        </div>
    )
}


export default Navbar
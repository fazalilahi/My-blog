import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'


const Navbar = () => {

    const { theme, setTheme } = useTheme()    

    return (
        <div className="flex justify-center items-center space-x-4 pb-16">
            <Link href='/' className="hover:text-blue-400">Home</Link>
            <Link href='/portfolio' className="hover:text-blue-400">Resume</Link>
            <Link href='/about' className="hover:text-blue-400">About</Link>
            <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                { theme === 'dark' ?   <Link href='#'><Image src="/light.svg" width={24} height={24} /></Link> : <Link href="#"><Image src="/dark.svg" width={24} height={24} /></Link> }
            </span>
        </div>
    );
}


export default Navbar
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'


const Navbar = () => {

    const { theme, setTheme } = useTheme()    

    return (
        <div className="flex justify-center items-center space-x-4 pb-16">
            <Link href='/'><a>Home</a></Link>
            <Link href='/portfolio'><a>Resume</a></Link>
            <Link href='/about'><a>About</a></Link>
            <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                { theme === 'dark' ?  <Image src="/light.svg" width={24} height={24} /> : <Image src="/dark.svg" width={24} height={24} /> }
            </span>
        </div>
    )
}


export default Navbar
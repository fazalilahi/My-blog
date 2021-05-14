import Link from 'next/link'
import { useTheme } from 'next-themes'


const Navbar = () => {

    const { theme, setTheme } = useTheme()

    return (
        <div className="flex justify-center space-x-4 pb-6">
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme}</button>

        </div>
    )
}


export default Navbar
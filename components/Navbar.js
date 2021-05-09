import Link from 'next/link'

import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-center space-x-4">
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
        </div>
    )
}

export default Navbar

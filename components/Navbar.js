import Link from 'next/link'

import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/blog'><a>Blog</a></Link>
            <Link href='/about'><a>About</a></Link>
        </div>
    )
}

export default Navbar

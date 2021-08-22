import '../styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="mx-auto my-8 w-11/12 md:9/12 lg:w-7/12">
      <ThemeProvider attribute="class">
        <Layout>
        {isMounted && <Component {...pageProps} />}
        </Layout>
      </ThemeProvider>
    </div>
    )
}

export default MyApp

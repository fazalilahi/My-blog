import '../styles/globals.css'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-11/12 md:9/12 lg:w-7/12 text-gray-600">
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </div>
    )
}

export default MyApp

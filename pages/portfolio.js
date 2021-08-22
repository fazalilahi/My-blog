import Head from "next/head";
import PortfolioIntro from '../components/PortfolioIntro'
import PortfolioEnd from '../components/PortfolioEnd'

const portfolio = () => {
    return (
        <div className="grid md:grid-cols-2"> 
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/fazal.png" />
           </Head>
            <div className=" md:order-last md:pl-4"><PortfolioIntro /></div>
            <div className=" md:order-first md:pr-4"><PortfolioEnd /></div>
        </div>
    )
}

export default portfolio

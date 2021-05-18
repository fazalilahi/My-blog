import PortfolioIntro from '../components/PortfolioIntro'
import PortfolioEnd from '../components/PortfolioEnd'

const portfolio = () => {
    return (
        <div className="grid md:grid-cols-2"> 
            <div className=" md:order-last md:pl-4"><PortfolioIntro /></div>
            <div className=" md:order-first md:pr-4"><PortfolioEnd /></div>
        </div>
    )
}

export default portfolio

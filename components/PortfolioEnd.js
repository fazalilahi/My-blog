import Link from 'next/link'

const PortfolioEnd = () => {
    return (
        <div>
            <h1 className="text-md font-semibold pt-4 dark:text-blue-300">EXPERIENCE & PROJECTS</h1>
            <div className="pt-4">
                2021 <br />

                <Link href="https://fazalilahi.me/">
                    <a><div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Personal Website</h1> 
                    Tech blog & porfolio website using nextjs.
                    </div></a>
                </Link> 


                <Link href="https://github.com/fazalilahi/colormyworld">
                    <a><div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Color my world</h1> 
                    AR project on interior designing. Mobile using java and web using flask.
                    </div></a>
                </Link> 



                <Link href="https://webwand.herokuapp.com/">
                    <a><div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Webwand</h1> 
                    Screensharing and video chat application through WebRTC. Screen recording using electronjs.
                    </div></a>
                </Link> 
                <br />

                <br /> 2020 <br />

                <Link href="https://shielded-shore-55921.herokuapp.com/">
                    <a><div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Contact Keeper</h1> 
                    A react Contact book with all CRUD functions on MongoDB. FullStack webapp using MERN (MongoDB, Express, React, Nodejs) running on heroku.
                    </div></a>
                </Link> 



                <Link href="https://vast-shelf-51797.herokuapp.com/">
                    <a><div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Restful API’s</h1> 
                    API for saving contacts, register user, login, update, delete you can follow the documentation to test on postman (Create Read Update API).
                    </div></a>
                </Link> 



                <Link href="https://ramzana.com/">
                    <a><div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Ramzana Jewellers</h1> 
                    Created a complete e-commerce webstore.
                    <br />
                    </div></a>
                </Link> 

                <br /> 2019 <br />

                <Link href="https://blueskyletters.com/">
                    <a><div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Blueskyletters</h1> 
                    Started a book blogging site.
                    </div></a>
                </Link> 
                   


                <Link href="https://getglimpses.com/">
                    <a><div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Glimpses Journal</h1> 
                    Designer and developer at Glimpses.
                    </div></a>
                </Link> 

            </div>
            
        </div>
    )
}

export default PortfolioEnd

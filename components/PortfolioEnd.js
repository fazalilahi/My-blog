import Link from 'next/link'

const PortfolioEnd = () => {
    return (
        <div>
            <h1 className="text-md font-semibold pt-4 dark:text-blue-300">EXPERIENCE & PROJECTS</h1>
            <div className="pt-4">
                2021 - (Present) <br />
                <Link href="https://tickertape.in/">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Tickertape/Smallcase</h1> 
                    Software Development Engineer (Frontend) at Tickertape in Bangalore.
                    </div>
                </Link>
                <br />

                2021 <br />

                <Link href="https://fazalilahi.me/">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Personal Website</h1> 
                    Tech blog & portfolio website using nextjs.
                    </div>
                </Link> 


                <Link href="https://github.com/fazalilahi/colormyworld">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Color my world</h1> 
                    AR project on interior designing. Mobile using java and web using flask.
                    </div>
                </Link> 



                <Link href="https://webwand.herokuapp.com/">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Webwand</h1> 
                    Screensharing and video chat application through WebRTC. Screen recording using electronjs.
                    </div>
                </Link> 
                {/* <br /> */}

                <br /> 2020 <br />
{/* 
                <Link href="https://shielded-shore-55921.herokuapp.com/">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Contact Keeper</h1> 
                    A react Contact book with all CRUD functions on MongoDB. FullStack webapp using MERN (MongoDB, Express, React, Nodejs) running on heroku.
                    </div>
                </Link>  */}



                {/* <Link href="https://vast-shelf-51797.herokuapp.com/">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Restful API’s</h1> 
                    API for saving contacts, register user, login, update, delete you can follow the documentation to test on postman (Create Read Update API).
                    </div>
                </Link>  */}



                <Link href="https://ramzana.com/">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Ramzana Jewellers</h1> 
                    Created a complete e-commerce webstore.
                    <br />
                    </div>
                </Link> 

                <br /> 2019 <br />

                <Link href="https://blueskyletters.com/">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Blueskyletters</h1> 
                    Started a book blogging site.
                    </div>
                </Link> 
                   


                <Link href="https://getglimpses.com/">
                    <div className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-3">
                    <h1 className="font-medium">Glimpses Journal</h1> 
                    Designer and developer at Glimpses.
                    </div>
                </Link> 

            </div>
            
        </div>
    );
}

export default PortfolioEnd

import Head from "next/head";

const errorpage = () => {
    return (
        <div className="flex justify-center">
          <Head>
                <title>Page not found</title>
                <link rel="icon" href="/fazal.png" />
           </Head>
          <div className="text-center">
          <p className="font-bold text-center">Page Not Found</p><br />  
          Sorry we couldn't find this page for you</div>    
        </div>
    )
}

export default errorpage

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const about = () => {
    return (
        <div>
           <Head>
                <title>About</title>
                <link rel="icon" href="/fazal.png" />
           </Head>
           <h1 className="pb-4 font-bold text-3xl">About me</h1>
           <figure className="float-right"><Image src="/fazal.png" width={100} height={100} /></figure>
            <p>
               Hi there! 👋🏼 <br />
               My name is Fazal Ilahi, I am  a web developer and a nerd!
               Loves css & javascript.
               If you’ve made it this far, feel free to reach out to me <Link href="mailto:fazalchemmengath@gmail.com"><a className="font-medium">@fazalilahi</a></Link> :)
            </p>
           <div className="pt-5 flex items-center">
           <Link href="/portfolio"><a className="text-md font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-500 bg-gray-200 dark:bg-gray-700 rounded-md px-3 py-2">Resume</a></Link> &nbsp;&nbsp;&nbsp;
           <Link href="https://github.com/fazalilahi"><a><Image src="/github.svg" width={20} height={20}></Image></a></Link> &nbsp;&nbsp;
           <Link href="https://www.linkedin.com/in/fazalilahi/"><a><Image src="/linkedin.svg" width={20} height={20}></Image></a></Link> &nbsp;&nbsp;
           <Link href="https://twitter.com/ifazalcg"><a><Image src="/twitter.svg" width={20} height={20}></Image></a></Link> &nbsp;&nbsp;
           <Link href="mailto:fazalchemmengath@gmail.com"><a><Image src="/mail.svg" width={20} height={20}></Image></a></Link>
           </div>
        </div>
    )
}

export default about

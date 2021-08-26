import Image from "next/image";
import Link from "next/link";

//skills data and rating
const PortfolioIntro = () => {
    const skills = [
        {id: 1, known: 'REACT', rating: 90 },
        {id: 2, known: 'NODEJS', rating: 80 },
        {id: 3, known: 'FIGMA & ADOBE', rating: 90 },
        {id: 4, known: 'JAVA', rating: 70 },
        {id: 5, known: 'D3js', rating: 80 },
    ]
   
        const listSkills = skills.map((skill) => 
        <div key={skill.id}>
            <span className="text-sm">{skill.known}</span>
            <span className="flex items-center relative rounded-full border border-blue-200 bg-blue-100 dark:bg-blue-200 h-2.5 px-1">
                <div id="myBar" className="relative overflow-hidden rounded-full bg-blue-500 dark:bg-blue-800 h-1"></div>
                <style jsx>{`
                      #myBar {
                        width: ${skill.rating}%;
                      }
                `}</style>
            </span>
        </div>)

    return (
        <div>
            <span className="float-right"><a href="/resume.pdf" download><Image src="/download.svg" width={20} height={20} /></a></span>
            <Link href="https://github.com/fazalilahi"><a><Image src="/github.svg" width={20} height={20}></Image></a></Link> &nbsp;&nbsp;
            <Link href="https://www.linkedin.com/in/fazalilahi/"><a><Image src="/linkedin.svg" width={20} height={20}></Image></a></Link> &nbsp;&nbsp;
            <Link href="https://twitter.com/ifazalcg"><a><Image src="/twitter.svg" width={20} height={20}></Image></a></Link> &nbsp;&nbsp;
            <Link href="mailto:fazalchemmengath@gmail.com"><a><Image src="/mail.svg" width={20} height={20}></Image></a></Link> <br />
            <h1 className="font-thin text-6xl">FAZAL</h1>
            <h1 className="font-bold text-6xl dark:text-blue-500 pb-3">ILAHI</h1>
            <span className="font-semibold text-sm bg-white border dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 shadow-inner rounded-bl-2xl rounded-tr-2xl px-3 py-2">WEB DESIGNER & DEVELOPER</span>
            <br />
            <h1 className="text-md font-semibold dark:text-blue-300 pt-8">SKILLS</h1>
            <div className="sm:pr-20">{ listSkills }</div>
            <br />
            <h1 className="text-md font-semibold dark:text-blue-300">EDUCATION</h1>
            <div className="py-2"> 
            <p className="pb-2">
                <h1 className="font-medium">2018-2021</h1>
                College of Applied Science IHRD <br />
                Bsc Computer Science <br />
                University of Calicut <br />
            </p>

                <h1 className="font-medium">2016-2018</h1>
                Higher Secondary Education <br />
                IOHSS Edavanna <br />
            </div>
            <h1 className="text-md font-semibold pt-4 dark:text-blue-300">EXPERTISE</h1>

            <ul className="list-disc list-inside py-2">
                <li>Full Stack Web Development (MERN) <br /></li>
                <li> UI/UX <br /> </li>
                <li> Unit Testing <br /> </li>
                <li> Data visualization <br /> </li>
            </ul>

            <h1 className="text-md font-semibold pt-4 dark:text-blue-300">REFERENCE</h1>
            <div className="py-2">
            Developer & Maker of Glimpses <br />
            <h1 className="font-medium">Mr. Anees Ahammed</h1>
            <Link href="https://twitter.com/AneesAhammed"><a><Image src="/twitter.svg" width={20} height={20} /></a></Link> <br />
            </div>
        </div>
    )
}

export default PortfolioIntro

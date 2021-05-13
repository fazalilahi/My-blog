import Image from "next/image";

const about = () => {
    return (
        <div>
           <h1 className="p-0.5 pt-5 font-bold text-3xl align-bottom">About me</h1>
           <figure className="float-right"><Image src="/fazal.png" width={100} height={100} /></figure>
        </div>
    )
}

export default about

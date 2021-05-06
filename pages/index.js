import Link from "next/link";
import fs from "fs";


const Home = ({ slugs, data }) => (
  <div>
    <h1>Articles </h1>
    {slugs.map(slug => {
      const capitalize =  slug.replace(slug[0], slug[0].toUpperCase() )
      return (
      <>
          <div key={ slug }>
            <Link href={"/blog/" + slug}>
              <a>{ capitalize.replace("-", " " )}</a>
            </Link>
          </div>
        </>
      );
    })}
  </div>
);

export const getStaticProps = async () => {
  const files = await fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;

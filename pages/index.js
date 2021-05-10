import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../lib/data';


export default function Home({ posts }) {
  return (
    
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <h1 className="p-0.5 pt-5 font-bold text-3xl align-bottom">My Articles</h1>

      <div className="space-y-4">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })).sort((post1, post2) => (post1.date > post2.date ? -1 : 1)),
      revalidate: 1
    },
  };
}

function BlogListItem({ slug, title, date, meta, tag }) {

  return (
   <Link href={`/blog/${slug}`}>
    <a className="p-0.5 text-align-left">
      <div className="border rounded-md p-4 hover:shadow-inner transition duration-200 ease-in ">    
            <div className="pb-2 font-bold text-xl text-blue-600 hover:text-blue-500">{title}</div>
            <span className="text-sm float-right">
              {format(parseISO(date), 'MMM d')}
            </span>
            {tag ? <span className="border rounded-md p-1">{tag}</span> : ''}
            <div className="pt-2 text-md">{meta}</div>
      </div>
   </a>
   </Link>
      

  );
}

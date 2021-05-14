import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../lib/data';



export default function Home({ posts }) {
  return (

    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/fazal.png" />
      </Head>
     
      <h1 className="p-0.5 pt-5 font-bold text-3xl align-bottom">My Articles</h1>
     

      <article className="space-y-4">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </article>
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
      <div className="rounded-md border border-white hover:border-gray-200 dark:border-gray-600 dark:hover:border-gray-700">
      <div className="rounded-md p-4 transition duration-100 ease-in  shadow hover:shadow-inner bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900">    
            <div className="pb-2 font-bold text-xl text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-500">{title}</div>
            <span className="text-sm float-right">
              {format(parseISO(date), 'MMM d')}
            </span>
            {tag ? <span className="border border-gray-500 rounded-md p-1">{tag}</span> : ''}
            <div className="pt-2 text-md">{meta}</div>
      </div>
      </div>
   </a>
   </Link>
      

  );
}

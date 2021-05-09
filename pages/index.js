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
      })),
      revalidate: 1
    },
  };
}

function BlogListItem({ slug, title, date, meta, img }) {
  return (
   <Link href={`/blog/${slug}`}>
    <a className="p-0.5">
      <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in">    
            <div className="font-bold">{title}</div>
            <div className="text-gray-600 text-xs">
              {format(parseISO(date), 'MMMM do, uuu')}
            </div>
            <div className="text-base">{meta}</div>
      </div>
   </a>
   </Link>
      

  );
}

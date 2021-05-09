import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import { getAllPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
  const hydratedContent = hydrate(content);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="pb-4 border-b-2 border-gray-200 mb-4">
          <h2 className="text-3xl font-bold text-gray-800 ">{title}</h2>
          <div className="text-gray-600 text-sm">
            {format(parseISO(date), 'MMMM do, uuu')}
          </div>
        </div>
        <div className="pt-1 prose">{hydratedContent}</div>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { data, content } = getAllPosts().find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
      revalidate: 1
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPosts().map((post) => {
    return{
      params: { slug: post.slug }
    }
  })
  return {
    paths,
    fallback: false
    }

}

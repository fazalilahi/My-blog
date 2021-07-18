import Head from 'next/head';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';


import { getAllPosts } from '../../lib/data';

export default function BlogPage({ title, date, content, tag }) {
  const hydratedContent = hydrate(content);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/fazal.png" />
      </Head>

      <main>
        <div className="pb-4 pt-5 border-b-2 mb-4 border-gray-500">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="py-2 text-sm">
            {date}
          </div>
          {tag ? <span className="bg-gray-200 dark:bg-gray-700 rounded-md p-1">{tag}</span> : ''}
        </div>
        <article className="pt-1 prose prose-blue text-gray-600 dark:text-gray-300 dark:prose-dark">
        {hydratedContent}
        </article>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { data, content } = getAllPosts().find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return {
    props: {
      ...data,
      date: data.date.toLocaleDateString("en-US", options),
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

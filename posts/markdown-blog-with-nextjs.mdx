---
title: 'How to Make a Markdown Blog With Next.js! 🖥 '
meta: 'This post will try to create a simple blog with Next.js 🚀.'
tag: 'Learn'
date: 2021-07-16
---

This post will try to create a simple blog with Next.js 🚀.

# Creating a Next.js project 📐

We will create a Next.js app using its terminal. Run one of these commands. This will create a basic layout where we will start developing our blog.

```
npm init next-app
```

Now, run

```
  cd [YOUR_PROJECT_NAME] && npm run dev
```

We have created our next app layout.

## Installing dependencies

Let's add all necessary dependencies:
We will be using [gray-matter](https://www.npmjs.com/package/gray-matter) to parse our frontmatter and markdown, [react-markdown](https://www.npmjs.com/package/react-markdown) for converting it to HTML and displaying it.

```
  npm install --save-dev gray-matter react-markdown && npm install react-markdown

```

Nice! Now we can start working on our blog directly.

## 📝 Creating Our Posts

We will be using markdown to write our posts. This will help us maintain our posts in a clean and easy to use format.
All our posts will be located in `posts`, so proceed to create this route and add our first post called `first-post.md`.

```markdown
---
title: First post
description: The first post is the most memorable one.
date: 2020-04-16
---

# h1

## h2

### h3

Normal text
```

Now let's create a second one called `second-post.md`.

```markdown
---
title: Second post
description: The second post is the least memorable.
date: 2020-04-17
---

# h1

## h2

### h3

Normal text
```

## 📩 Fetching our posts

Having our initial posts, we can begin to work on our index page. Let's delete whatever we had previously, and start it fresh:

```jsx
export default function Home() {
  return <div></div>;
}
```

We will use [getSaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation). This method will fetch all our posts and feed them as props to our page.

The main benefit of `getStaticProps` is its static generation which means the content will be generated at build time and will not be fetched every time our user visits our blog.

```jsx
import fs from 'fs';
import matter from 'gray-matter';

export default function Home({ posts }) {
  return (
    <div>
      {posts.map(({ frontmatter: { title, description, date } }) => (
        <article key={title}>
          <header>
            <h3>{title}</h3>
            <span>{date}</span>
          </header>
          <section>
            <p>{description}</p>
          </section>
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = data.date.toLocaleDateString('en-US', options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
```

Now you should see this:

![Initial posts screen](https://res.cloudinary.com/dmq9pzw0o/image/upload/v1587361691/how-to-make-static-blog/Clipboard_2020-04-17-21-17-12_dsyd9n.png)

Awesome! ✌🏼 We can see all our posts.

## 🧩 Adding Layout component

Before we start working on `index.js` styles. Let's first add a layout component that will wrap our pages. Create a `components/Layout.js` and add this:

```jsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === '/';

  const header = isRoot ? (
    <h1>
      <Link href="/">
        <a>Next.Js Starter Blog</a>
      </Link>
    </h1>
  ) : (
    <h1>
      <Link href="/">
        <a>Next.Js Starter Blog</a>
      </Link>
    </h1>
  );

  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://nextjs.org/">Next.js</a> &#128293;
      </footer>
    </div>
  );
}
```

## 🗓 Creating Post Page

However, what is the point of a blog if we can't read our posts? So let's get started at creating our post page. Go ahead and Create `pages/post/[slug].js`, and add this:

```jsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Post({ content, frontmatter }) {
  return (
    <Layout>
      <article></article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('posts', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = data.date.toLocaleDateString('en-US', options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter,
    },
  };
}
```

We created a blueprint of how our posts should look like. That `[slug].js` format indicates a dynamic route within Next.js, and based on the slug; we will render the post we need. Read more on [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes).

Here we used both `getStaticProps` and `getStaticPaths` to create our post's dynamic route. The method [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) allows us to render dynamic routes based on the parameters we provide, in this case, a slug. You may have noticed that we are receiving a `params.slug` parameter in `getStaticProps`. This is because `getStaticPaths` passes the current slug to fetch the post we need.

We are providing our Post component with both the content and frontmatter of our post. Now, all that is left is to render the markdown with React Markdown. React Markdown's job is to convert our markdown to HTML so we can display it on our site. Add the following to your `[slug].js`:

```jsx
// ...

import ReactMarkdown from 'react-markdown';

// ...

export default function Post({ content, frontmatter }) {
  return (
    <Layout>
      <article>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </Layout>
  );
}

// ...
```

## 🔄 Connecting Our Index with Post

Our post template is done, but we have to access it through a link on our page. Let's wrap our post's title with a (Link)[[https://nextjs.org/docs/api-reference/next/link](https://nextjs.org/docs/api-reference/next/link)] component provided by Next.js on `index.js`.

```jsx
// ...
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <Layout>
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header>
            <h3>
              <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <span>{date}</span>
          </header>
          <section>
            <p>{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  );
}

// ...
```

Click any of the posts.

Isn't it beautiful? 🖼
Well, not quite since our blog is not yet styled. I am leaving styling part to your choice. Now, you have the skeleton structure for a markdown blog.

## 📜 Summary

Next.js is a really powerful and flexible library. There are many alternatives to how to create a blog. Regardless, I hope this has helped you create your own and notice it is not as hard as it seems.

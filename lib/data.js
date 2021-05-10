import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const contentDirectory = join(process.cwd(), 'posts');

export const getAllPosts = () => {
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const fileContents = fs.readFileSync(
      join(contentDirectory, fileName),
      'utf8'
    );
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
}


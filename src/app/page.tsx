import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getData() {
  const files = fs.readdirSync('src/posts');
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/posts/${filename}`)
      .toString();
    const { data: posts } = matter(markdownWithMetadata);
    return {
      posts,
    };
  });
  return posts;
}

export default async function Page() {
  const data = await getData();
  return data.map((blog) => (
    <Link
      href={`/blog/${blog.posts.title.split(' ').join('-').toLowerCase()}`}
      key={blog.posts.title}
    >
      <h1>{blog.posts.title}</h1>
      <p>{blog.posts.date}</p>
    </Link>
  ));
}

import Link from 'next/link';
import GetPosts from '@utils/getPosts';

export default async function Page() {
  const data = await GetPosts();
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

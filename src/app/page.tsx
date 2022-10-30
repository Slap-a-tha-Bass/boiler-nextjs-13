import Link from 'next/link';
import Image from 'next/image';
import GetPosts from '@utils/getPosts';

export default async function Page() {
  const data = await GetPosts();
  return (
    <div className="container-grid">
      {data.map((blog) => (
        <div className="card-primary" key={blog.posts.title}>
          <Link
            href={`/blog/${blog.posts.title
              .split(' ')
              .join('-')
              .toLowerCase()}`}
          >
            <h2>{blog.posts.title}</h2>
          </Link>
          <Image
            alt={blog.posts.metaTitle}
            src={`/${blog.posts.socialImage}`}
            height={100}
            width={100}
          />
          <p>{blog.posts.date}</p>
        </div>
      ))}
    </div>
  );
}

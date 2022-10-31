import GetPosts from '@utils/getPosts';
import BlogCard from '@components/cards/blogCard';

export default async function Page() {
  const data = await GetPosts();
  return (
    <div className="container-grid">
      {data.map((blog) => (
        <BlogCard
          key={blog.posts.title}
          slug={blog.posts.slug}
          title={blog.posts.title}
          date={blog.posts.date}
          metaTitle={blog.posts.metaTitle}
          imageURL={blog.posts.socialImage}
          height={blog.posts.socialImageHeight}
          width={blog.posts.socialImageWidth}
        />
      ))}
    </div>
  );
}

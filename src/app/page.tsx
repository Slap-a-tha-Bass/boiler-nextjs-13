import GetPosts from '@utils/getPosts';
import BlogCard from '@components/cards/blogCard';

export default async function Page() {
  const data = await GetPosts();
  return (
    <div className="container-grid">
      {data.map((blog) => (
        <BlogCard
          key={blog.posts.title}
          title={blog.posts.title}
          slug={blog.posts.slug}
          date={blog.posts.date}
          metaTitle={blog.posts.metaTitle}
          imageURL={blog.posts.socialImage}
        />
      ))}
    </div>
  );
}

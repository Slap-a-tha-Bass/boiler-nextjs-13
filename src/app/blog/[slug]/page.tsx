import fs from 'fs';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import GetPosts from '@utils/getPosts';

async function getOnePost({ slug }: any) {
  const files = fs.readdirSync(`src/posts`);
  const post = files.find((filename) => filename === `${slug}.md`);
  if (post) {
    const markdownWithMetadata = fs
      .readFileSync(`src/posts/${post}`)
      .toString();
    const { data: blogPost, content } = matter(markdownWithMetadata);
    return { blogPost, content };
  }
}

export async function generateStaticParams() {
  const posts = await GetPosts();
  return posts.map((blog) => ({
    slug: blog.posts.slug,
  }));
}

export default async function Page({ params }: any) {
  const { slug } = params;
  const post: any = await getOnePost({ slug: slug });
  const md = new MarkdownIt();
  const result = md.render(post ? post.content : '');
  return (
    <div className='container-flex'>
      <h1>{post?.blogPost.title}</h1>
      {<div dangerouslySetInnerHTML={{ __html: result }} />}
    </div>
  );
}

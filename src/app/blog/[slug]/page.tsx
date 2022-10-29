import fs from 'fs';
import matter from 'gray-matter';
import { getData } from '@app/page';
import MarkdownIt from 'markdown-it';
import Link from 'next/link';

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
  const posts = await getData();
  return posts.map((blog) => ({
    slug: blog.posts.title.split('.').join('-').toLowerCase(),
  }));
}

export default async function Page({ params }: any) {
  const { slug } = params;
  const post: any = await getOnePost({ slug: slug });
  const md = new MarkdownIt();
  const result = md.render(post?.content);
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{post?.blogPost.title}</h1>
      {<div dangerouslySetInnerHTML={{ __html: result }} />}
    </div>
  );
}

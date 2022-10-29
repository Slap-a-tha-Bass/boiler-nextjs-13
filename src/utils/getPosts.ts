import fs from 'fs';
import matter from 'gray-matter';

export default async function GetPosts() {
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

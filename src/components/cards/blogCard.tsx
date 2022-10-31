import Image from 'next/image';
import Link from 'next/link';

interface IBlogCard {
  title: string;
  date: string;
  metaTitle: string;
  imageURL: string;
}

export default function BlogCard({
  title,
  date,
  metaTitle,
  imageURL,
}: IBlogCard) {
  return (
    <div className="card-primary">
      <p style={{ textAlign: 'center' }}>
        <Image alt={metaTitle} src={`/${imageURL}`} height={100} width={100} />
      </p>
      <Link href={`/blog/${title.split(' ').join('-').toLowerCase()}`}>
        <h2>{title}</h2>
      </Link>
      <p>{date}</p>
    </div>
  );
}

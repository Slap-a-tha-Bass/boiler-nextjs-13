import Image from 'next/image';
import Link from 'next/link';

interface IBlogCard {
  title: string;
  date: string;
  metaTitle: string;
  imageURL: string;
  slug: string;
}

export default function BlogCard({
  title,
  date,
  metaTitle,
  imageURL,
  slug,
}: IBlogCard) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="card-primary">
        <p style={{ textAlign: 'center' }}>
          <Image
            alt={metaTitle}
            src={`/${imageURL}`}
            height={100}
            width={100}
          />
        </p>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </Link>
  );
}

import DateChanger from '@utils/dateChanger';
import Image from 'next/image';
import Link from 'next/link';

interface IBlogCard {
  title: string;
  date: string;
  metaTitle: string;
  imageURL: string;
  slug: string;
  height: number;
  width: number;
}

export default function BlogCard({
  title,
  date,
  metaTitle,
  imageURL,
  slug,
  height,
  width,
}: IBlogCard) {

  return (
    <Link href={`/blog/${slug}`}>
      <div className="card-primary">
        <p style={{ textAlign: 'center' }}>
          <Image
            alt={metaTitle}
            src={`/${imageURL}`}
            height={height}
            width={width}
          />
        </p>
        <h3>{title}</h3>
        <p>{DateChanger(date)}</p>
      </div>
    </Link>
  );
}

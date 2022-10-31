import Image from 'next/image';
import Link from 'next/link';
import BlogTitle from './blogTitle';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="/logo.png" width={75} height={75} alt="Logo" />
      </Link>
      <BlogTitle />
    </header>
  );
}

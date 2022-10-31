import '@styles/css/styles.css';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import Header from '@components/nav/header';

const inter = Inter();

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Next.js</title>
      </head>
      <Header />
      <body className="container">{children}</body>
    </html>
  );
}

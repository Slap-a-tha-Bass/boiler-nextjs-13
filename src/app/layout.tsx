import '@styles/css/styles.css';
import { Inter } from '@next/font/google';
import Image from 'next/image';

const inter = Inter();

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <h2>Albatross Family</h2>
        <Image src="/logo-title.png" width={250} height={250} alt="Logo Title" />
        <Image src="/logo.png" width={250} height={250} alt="Logo" />
        {children}
      </body>
    </html>
  );
}

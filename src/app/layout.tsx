import '@styles/css/styles.css';
import { Inter } from '@next/font/google';

const inter = Inter();

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <h2>Albatross Family</h2>
        {children}
      </body>
    </html>
  );
}

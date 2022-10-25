import '@styles/css/styles.css';

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

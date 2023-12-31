import { Katibeh } from 'next/font/google';
import { Hanuman }from 'next/font/google';
 
const katibeh = Katibeh({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-header',
  display: 'swap',
});
 
const hanuman = Hanuman({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${katibeh.variable} ${hanuman.variable}`}>
      <body>{children}</body>
    </html>
  );
}

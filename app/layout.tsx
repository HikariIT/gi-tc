import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import Footer from "../components/footer";
import '../styles/layout/_content.sass';

const questrial_init = Questrial({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-questrial-sans',
});

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "A Next.js web application on GitHub Pages",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${questrial_init.variable}`}>
        <main className='questrial-sans'>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}

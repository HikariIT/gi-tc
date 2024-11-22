import type { Metadata } from "next";
import { Questrial, Young_Serif } from "next/font/google";
import { Footer, Header } from "../components/layout";
import '../styles/layout/_content.sass';

const questrial_init = Questrial({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-questrial-sans',
});

const serif_init = Young_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-young-serif',
});

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "A Next.js web application on GitHub Pages",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${questrial_init.variable} ${serif_init.variable}`}>
        <main>
          <Header/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}

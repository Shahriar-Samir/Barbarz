import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Prata } from 'next/font/google';
import Head from "next/head";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});
const prata = Prata({
  weight: [ '400',],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "BARBERZ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <body
        className={`${poppins} ${prata} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

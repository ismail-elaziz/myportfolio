import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ismail Elaziz - Data Scientist & Fullstack Developer",
  description: "Data Scientist & Fullstack Developer providing the best project experience. Building high-performance web solutions with creativity and technology.",
  keywords: ["Ismail Elaziz", "Data Scientist", "Fullstack Developer", "Portfolio", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Ismail Elaziz" }],
  openGraph: {
    title: "Ismail Elaziz - Data Scientist & Fullstack Developer",
    description: "Providing the best project experience",
    type: "website",
    locale: "en_US",
    siteName: "Ismail Elaziz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Elaziz - Portfolio",
    description: "Providing the best project experience",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

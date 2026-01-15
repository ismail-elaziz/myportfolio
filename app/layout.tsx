import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ismail Elaziz - Software Developer",
  description: "Software Developer providing the best project experience. Building high-performance web solutions with creativity and technology.",
  keywords: ["Ismail Elaziz", "Software Developer", "Fullstack Developer", "Portfolio", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Ismail Elaziz" }],
  openGraph: {
    title: "Ismail Elaziz - Software Developer",
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
  icons: {
    icon: '/favicon.svg',
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

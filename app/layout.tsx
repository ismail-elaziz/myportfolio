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
  title: "Ismail Elaziz - Ingénieur Informatique Full-Stack",
  description: "Ingénieur Informatique Full-Stack spécialisé en Java, Spring Boot, SAP Hybris, .NET, Angular et React.",
  keywords: ["Ismail Elaziz", "Ingénieur Informatique", "Full Stack Developer", "SAP Hybris", "Java", "Spring Boot", "Angular", "React", "Portfolio"],
  authors: [{ name: "Ismail Elaziz" }],
  openGraph: {
    title: "Ismail Elaziz - Ingénieur Informatique Full-Stack",
    description: "Consultant technique SAP Hybris et développeur Full Stack",
    type: "website",
    locale: "fr_FR",
    siteName: "Ismail Elaziz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Elaziz - Portfolio",
    description: "Consultant technique SAP Hybris et développeur Full Stack",
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

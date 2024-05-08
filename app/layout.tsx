import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"], variable:'--font-inter' });
const ibmplexsariff = IBM_Plex_Serif({
  subsets:['latin'],
  weight:['400', '700']
})

export const metadata: Metadata = {
  title: "Chimoney-test App",
  description: "A test app",
  icons:{
    icon:"/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmplexsariff}`} >
        {children}
       </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";
import Sidebar from "@/components/sidebar";
import ThemeProvider from "@/context/themectx";
import Navbar from "@/components/Navbar";
import SkeletonNavbar from "@/components/skeltonav";
import { Suspense } from "react";

const plusJ = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${plusJ.className} dark:!bg-navy-800 bg-slate-100 sm:max-w-375`}>
          <section className="w-full relative">
            <Sidebar />
            <div className="flex w-full md:pl-[80px] flex-col h-full relative max-container pt-12 md:pt-0 ">
              <Suspense fallback={<SkeletonNavbar />}>
                <Navbar />
              </Suspense>
              {children}
            </div>
          </section>
        </body>
      </ThemeProvider>
    </html>
  );
}

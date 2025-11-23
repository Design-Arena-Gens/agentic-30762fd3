import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["arabic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DesignArena - بحث أكاديمي: التسويق الرقمي مقابل التسويق التقليدي",
  description: "بحث أكاديمي شامل حول الفرق بين التسويق الرقمي والتسويق التقليدي مع مصادر موثوقة وأمثلة عملية",
  keywords: "التسويق الرقمي, التسويق التقليدي, بحث أكاديمي, Digital Marketing, Traditional Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}

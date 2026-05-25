import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دعوة زفاف زيد ونور 💍",
  description: "يسعدنا دعوتكم لحضور حفل زفاف زيد ونور — الخميس ٢٨ مايو ٢٠٢٦",
  openGraph: {
    title: "دعوة زفاف زيد ونور 💍",
    description: "يسعدنا دعوتكم لحضور حفل زفاف زيد ونور",
    type: "website",
    locale: "ar_JO",
  },
  twitter: {
    card: "summary_large_image",
    title: "دعوة زفاف زيد ونور 💍",
    description: "يسعدنا دعوتكم لحضور حفل زفاف زيد ونور",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

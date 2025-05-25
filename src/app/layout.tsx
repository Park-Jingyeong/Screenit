import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`h-full ${pretendard.variable}`}>
      <body className="font-pretendard box-border h-full">
        <div className="pb-[60px] h-auto min-h-full">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

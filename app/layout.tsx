import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";

const notoSans = localFont({
  src: [
    {
      path: "./assets/fonts/static/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/static/NotoSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/static/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Browser Extension Manager",
  description: "Manage your browser extensions easily with this beautiful UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} font-noto antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



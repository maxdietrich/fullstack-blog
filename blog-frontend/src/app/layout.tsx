import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Great articles!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="p-8"><h1 className="text-2xl mb-4">My Blog</h1>
        {children}
        </div>
      </body>
    </html>
  );
}

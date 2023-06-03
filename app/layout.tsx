import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="antialiased h-full" lang="en">
      <body className={`${inter.className} h-full`}>
        <header className="flex space-x-4 items-center bg-gray-100 px-6 py-3 border-b border-gray-300">
          <Link className="text-gray-500 font-medium text-sm" href="/">
            Home
          </Link>
          <Link className="text-gray-500 font-medium text-sm" href="/new">
            New
          </Link>
        </header>

        <div className="p-6">{children}</div>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigator from "./_Component/navigation";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden h-screen dark:bg-black">
        <Theme className="h-full flex flex-col">
          <div className="flex-grow overflow-auto">{children}</div>
          <Navigator />
        </Theme>
      </body>
    </html>
  );
}

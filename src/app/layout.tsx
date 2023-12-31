/** @format */

import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Container from "./Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section className="relative w-screen h-screen overflow-clip bg-dark text-soft-white ">
          <Navbar />
          <Container>
            <Sidebar />
            <section className="relative flex flex-col justify-between w-full h-full pt-6 pb-16 overflow-y-auto border-2 px-9">
              {/* <div className="w-full pt-6 pb-16 px-9"> */}
              {children}
              {/* </div> */}
            </section>
          </Container>
        </section>
      </body>
    </html>
  );
}

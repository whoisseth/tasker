/** @format */

"use client";
import React from "react";
import { useAtom } from "jotai";
import { navHeightAtom } from "./components/Navbar";

type Props = {};

export default function Container({ children }: { children: React.ReactNode }) {
  const [height] = useAtom(navHeightAtom);
  const containerHeight = "calc(100vh - " + height + "px - 1px)";

  return (
    <div
      style={{ height: containerHeight ?? "100vh" }}
      className="relative flex max-h-screen max-w-screen "
    >
      {children}
    </div>
  );
}

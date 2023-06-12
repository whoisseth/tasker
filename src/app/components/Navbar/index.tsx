/** @format */

"use client";
import React, { useEffect, useRef } from "react";
import Logo from "../Logo";
import { BsThreeDotsVertical } from "react-icons/bs";
import { atom, useAtom } from "jotai";

type Props = {};
export const navHeightAtom = atom(null);

export default function Navbar({}: Props) {
  const [height, setHeight] = useAtom(navHeightAtom);
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    setHeight(ref?.current?.clientHeight);
  }, [height]);
  return (
    <header
      ref={ref}
      className="flex justify-between w-full py-5 pr-5 shadow-md"
    >
      <section className="flex items-center ">
        <div className="w-[250px]  px-2">
          <Logo />
        </div>
        <p className="font-serif text-2xl ml-9">Platform Launch</p>
      </section>
      <section className="flex items-center gap-3">
        <button className="flex rounded-full bg-[linear-gradient(90deg,#404040_0%,#463434_50%)] px-5 py-2 text-xl gap-2  items-center hover-effect ">
          <span className="text-2xl">+</span>
          <span>Add new Task </span>
        </button>
        <button className="rounded-full hover-effect">
          <BsThreeDotsVertical className="text-2xl" />
        </button>
      </section>
    </header>
  );
}

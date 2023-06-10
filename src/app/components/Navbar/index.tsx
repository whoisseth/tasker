/** @format */

import React from "react";
import Logo from "../Logo";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="bg-dark w-full text-soft-white py-5 px-5 flex justify-between ">
      <section className="flex gap-10 items-center">
        <Logo />
        <p className="text-2xl font-serif">Platform Launch</p>
      </section>
      <section className="flex gap-3 items-center">
        <button className="flex rounded-full bg-[linear-gradient(90deg,#404040_0%,#463434_50%)] px-5 py-2 text-xl gap-2  items-center hover-effect ">
          <span className="text-2xl">+</span>
          <span>Add new Task </span>
        </button>
        <button className="hover-effect rounded-full">
          <BsThreeDotsVertical className="text-2xl" />
        </button>
      </section>
    </header>
  );
}

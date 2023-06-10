/** @format */

import React from "react";
import clsx from "clsx";
type Props = {
  className?: string;
};

export default function Logo(props: Props) {
  return (
    <svg
      width="163"
      height="49"
      viewBox="0 0 163 49"
      //   fill="none"
      className={clsx("fill-soft-white", props.className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.48 11.88H15.18V48.12H9.24V11.88H0V6.66H24.48V11.88Z" />
      <path d="M49.6922 48.12H43.7522V43.68L39.3122 48.12H33.3722L28.2122 42.9V32.58L33.3722 27.36H43.1522L38.2322 32.52H34.0922V42.9H43.7522V22.2H27.4322L31.8722 16.98H44.5322L49.6922 22.2V48.12Z" />
      <path d="M77.2922 22.2H62.4722V27.36H70.6322L75.8522 32.58V42.9L70.6322 48.12H56.5322V42.9H69.9122V32.58H61.7522L56.5322 27.36V22.2L61.7522 16.98H72.0122L77.2922 22.2Z" />
      <path d="M89.4483 30.18L104.268 15.54V21.9L99.0483 27.06L104.268 32.34V48.12H98.3883V31.08H89.4483V48.12H83.5083V5.94L89.4483 0V30.18Z" />
      <path d="M133.618 48.12H117.358L112.198 42.9V22.2L117.358 16.98H128.458L133.618 22.2V32.58L128.458 37.74H118.858L124.138 32.58H127.738V22.2H118.138V42.9H133.618V48.12Z" />
      <path d="M162.736 27.36L156.796 33.3V22.2H147.976V48.12H142.036V16.98H147.976V21.48L152.296 16.98H157.576L162.736 22.2V27.36Z" />
    </svg>
  );
}
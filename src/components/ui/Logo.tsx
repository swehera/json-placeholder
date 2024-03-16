import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: String }) => {
  return (
    <Link
      href={"/"}
      className={clsx(`${className} text-base font-bold text-gray-800`)}
    >
      JSONPlaceholder
    </Link>
  );
};

export default Logo;

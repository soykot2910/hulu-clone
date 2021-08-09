import React from "react";
import { useRouter } from "next/router";

const HeaderItem = ({ title, Icon, path }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`${path}`)}
      className="group flex flex-col items-center cursor-pointer  w-12 sm:w-20 hover:text-white"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;

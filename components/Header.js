import React from "react";
import Image from "next/image";

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-4">
        <HeaderItem title="HOME" path="/" Icon={HomeIcon} />
        <HeaderItem
          title="TRENDING"
          path="?genre=genre=fetchTrending"
          Icon={LightningBoltIcon}
        />
        <HeaderItem title="VERIFIED" path="/" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" path="/" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" path="/" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" path="/" Icon={UserIcon} />
      </div>
      <Image src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  );
};

export default Header;

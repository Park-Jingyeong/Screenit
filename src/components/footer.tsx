"use client";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import movie from "@/../public/movie.svg";
import tv from "@/../public/tv.svg";
import search from "@/../public/search.svg";
import profile from "@/../public/profile.svg";
export default function Footer() {
  const isPC = useMediaQuery({ minWidth: 768 });
  const [pc, setPc] = useState<boolean>(false);
  useEffect(() => {
    setPc(isPC);
  }, [isPC]);

  if (isPC) return null;

  return (
    <footer className=" bg-main-blue/10 h-[60px] -translate-y-full relative border-[1px] border-main-blue/15 py-2 px-10 content-center">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <Link href={"/movie"}>
              <Image src={movie} alt="movie" width={36} />
            </Link>
          </li>
          <li>
            <Link href={"/series"}>
              <Image src={tv} alt="series" width={36} />
            </Link>
          </li>
          <li>
            <Link href={"/search"}>
              <Image src={search} alt="search" width={36} />
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <Image src={profile} alt="profile" width={36} />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

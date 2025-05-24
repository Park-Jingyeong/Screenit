"use client";
import Link from "next/link";
import Image from "next/image";
import logo_header from "@/../public/logo_header.svg";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import search from "@/../public/search.svg";

// @TODO - Header 위치 고정 적용
export default function Header() {
  const isPC = useMediaQuery({ minWidth: 768 });
  const [pc, setPc] = useState<boolean>(false);

  useEffect(() => {
    setPc(isPC);
  }, [isPC]);

  return (
    <header className="px-8 border-[1px] border-main-blue/15">
      <div className="mx-auto max-w-[1200px] h-[70px] flex items-center">
        <Link href={"/"}>
          <Image src={logo_header} alt="screenit" />
        </Link>
        {/* 조건부 렌더링 */}
        {pc ? (
          <div className="w-full flex justify-between">
            <div className="ml-8">
              <ul className="font-semibold text-xl flex gap-6 whitespace-nowrap">
                <li>
                  <Link href={"/"}> 홈 </Link>
                </li>
                <li>
                  <Link href={"/movie"}> 영화 </Link>
                </li>
                <li>
                  <Link href={"/series"}> 시리즈 </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <div className="md:mr-4">
                <Link href={"/search"}>
                  <Image src={search} alt={"search"} />
                </Link>
              </div>
              <div className="font-semibold text-xl flex gap-4">
                <Link href={"/login"}>Login</Link>
                <Link href={"/join"} className="text-main-blue cursor-pointer">
                  Join
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}

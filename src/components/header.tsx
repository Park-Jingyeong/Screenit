"use client";
import Link from "next/link";
import Image from "next/image";
import logo_header from "@/../public/logo_header.svg";
import { useMediaQuery } from "react-responsive";
import search from "@/../public/search.svg";
// @TODO 반응형 - 카테고리 padding 조절, md(768px) 이하 searchbar 이동
// @TODO 반응형 - md(768px)이하 searchbar 대신에 search 아이콘만 / 아이콘 클릭하면 카테고리 없애고 searchbar / searchbar 외부 클릭하면 다시 카테고리 보임
export default function Header() {
  const overMd = useMediaQuery({ minWidth: 768 });

  return (
    <header className="px-8 border-[1px] border-main-blue/15">
      <div className="mx-auto max-w-[1200px] h-[70px] flex items-center">
        {overMd ? (
          <Link href={"/"}>
            <Image src={logo_header} alt="screenit" />
          </Link>
        ) : (
          <></>
        )}

        <div className="md:ml-8">
          <ul className="text-2xl font-semibold md:text-xl flex gap-3 sm:gap-10 md:gap-6 whitespace-nowrap">
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

        <div className="ml-auto flex mr-3 md:mr-4">
          <button>
            <Image src={search} alt={"search"} />
          </button>
        </div>

        <div className="font-semibold text-xl flex gap-3 md:gap-4">
          <button className="cursor-pointer">Login</button>
          <button className="text-main-blue cursor-pointer">Join</button>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import logo_header from "@/../public/logo_header.svg";

// @TODO 반응형 - 카테고리 padding 조절, md(768px) 이하 searchbar 이동
// @TODO 반응형 - md(768px)이하 searchbar 대신에 search 아이콘만 / 아이콘 클릭하면 카테고리 없애고 searchbar / searchbar 외부 클릭하면 다시 카테고리 보임
export default function Header() {
  return (
    <header>
      <div className="mx-auto px-4 h-[70px] max-w-[1200px] flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logo_header} alt="screenit" />
        </Link>
        <div className="font-semibold text-xl w-[160px] md:w-[300px]">
          <div className="max-w-40 flex justify-between">
            <Link href={"/"}> 홈 </Link>
            <Link href={"/movie"}> 영화 </Link>
            <Link href={"/series"}> 시리즈 </Link>
          </div>
        </div>
        {}
        <div>searchbarsearchbarsearchbar</div>
        <div className="font-semibold text-xl w-32 flex justify-between">
          <button className="cursor-pointer">Login</button>
          <button className="text-main-blue cursor-pointer">Join</button>
        </div>
      </div>
    </header>
  );
}

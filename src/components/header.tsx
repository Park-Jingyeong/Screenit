import Link from "next/link";

export default function Header() {
  return (
    <>
      <div>Header</div>

      <div>
        <Link href={"/"}> 홈 </Link>
        <Link href={"/movie"}> 영화 </Link>
        <Link href={"/series"}> 시리즈 </Link>
      </div>
    </>
  );
}

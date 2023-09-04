import Link from "next/link";

export default function LiNavbar({ onClick, title }) {
  return (
    <li className="text-l text-terciary pb-6 py-2 md:px-6 md:pb-0 md:pt-0 text-center border-b-2 md:border-b-0 border-primary hover:text-white hover:bg-primary md:hover:bg-transparent md:hover:text-primary transition-all ease-in delay-75">
      <Link href="/" onClick={onClick}>
        {title}
      </Link>
    </li>
  );
}

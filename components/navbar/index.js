import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="flex justify-center gap-x-7 gap-y-3 lg:gap-0 lg:space-x-7 -space-x-5 mb-5 ">
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : "deActive"}>
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className={router.pathname == "/projects" ? "active" : "deActive"}>
            Projects
          </a>
        </Link>
        <Link href="/skills">
          <a className={router.pathname == "/skills" ? "active" : "deActive"}>
            Skills
          </a>
        </Link>
        <Link href="/about">
          <a className={router.pathname == "/about" ? "active" : "deActive"}>
            About
          </a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

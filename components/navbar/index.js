import Link from "next/link";


const Navbar = ({ data }) => {
  return (
    <>
      <nav className="flex justify-center gap-x-7 gap-y-3 lg:gap-0 lg:space-x-7 -space-x-5 ">
        {data.items.map(({ title, link }, index) => (
          <Link href={link} key={index}>
            <a className="text-blue-500 rounded-xl p-2 border border-red-300 text-base lg:text-xl lg:leading-9 no-underline font-normal focus:bg-yellow-300 focus:rounded-xl">
              {title}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;

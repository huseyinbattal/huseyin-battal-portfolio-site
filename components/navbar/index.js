import Link from "next/link";


const Navbar = ({ data }) => {
  return (
    <>
      <nav className="flex justify-center gap-x-7 gap-y-3 lg:gap-0 lg:space-x-7 -space-x-5 ">
        {data.items.map(({ title, link }, index) => (
          <Link href={link} key={index}>
            <a className="text-blue-400 rounded-xl p-2 border border-green-500 text-base lg:text-xl lg:leading-9 no-underline font-normal hover:bg-green-100 hover:rounded-xl hover:text-red-400 focus:bg-red-400 focus:rounded-xl focus:text-white hover:border-red-300 focus:border-blue-300">
              {title}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;

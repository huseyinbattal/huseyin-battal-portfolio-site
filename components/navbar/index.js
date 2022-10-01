import Link from "next/link";


const Navbar = ({ data }) => {
  return (
    <>
      <nav className="flex justify-center gap-x-7 gap-y-3 lg:gap-0 lg:space-x-7 -space-x-5 mb-5 ">
        {data.items.map(({ title, link }, index) => (
          <Link href={link} key={index}>
            <a className="text-blue-400 rounded-xl p-2 border border-blue-900 shadow-sm shadow-slate-900 text-base lg:text-xl lg:leading-9 no-underline hover:bg-white hover:rounded-xl hover:text-red-400 focus:bg-red-400 focus:rounded-xl focus:text-white hover:border-red-300 focus:border-blue-300 w-24 text-center font-semibold">
              {title}
            </a>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;

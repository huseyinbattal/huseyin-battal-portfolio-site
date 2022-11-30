import Image from "next/image";
import Link from "next/link";
// const logo = "https://reactdeveloper.site/giphy.gif";
import reactLogo from "../../public/images/giphy.gif"
import hbLogo from "../../public/images/logobg.png"


const Brand = () => {
  return (
    <>
      <div className="flex justify-center items-center mb-4 xl:ml-5">
        <Link href="/" aria-label="Home Page">
          <figure className="p-1 cursor-pointer transition hover:scale-125  duration-300">
            <Image
              width={50}
              height={50}
              src={hbLogo}
              alt="HB Logo"
            />
          </figure>
        </Link>
        <div className="flex flex-col justify-between gap-1">
        
          <span className="text-2xl font-serif leading-none flex gap-2 font-bold text-blue-400">
            React.JS Developer{" "}
            <span style={{ color: "rgb(47,196,99)" }}>{"<"}</span>
            <a
              className="rounded-xl hover:bg-blue-500"
              href="https://reactjs.org/"
              target="_blank"
            >
              <Image className="text-white" width={30} height={30} src={reactLogo} alt="logo" />
            </a>
            <span style={{ color: "rgb(47,196,99)" }}>{"/>"}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Brand;

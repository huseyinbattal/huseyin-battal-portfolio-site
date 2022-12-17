import Image from "next/image";
import Link from "next/link";
// const logo = "https://reactdeveloper.site/giphy.gif";
//import reactLogo from "../../public/images/giphy.gif"
import hbLogo from "../../public/images/logobg.png"
//import js from "../../public/svg/skills/javascript.svg"


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
            Full Stack Web Developer{" "}
            <div className="bg-black rounded-sm">
              {/* <span style={{ color: "gold" }}>{"< JS"}</span>
            <span style={{ color: "gold" }}>{"/>"}</span> */}
              {/* <Image  width={30}
              height={20}
              src={js}
              alt="js"/> */}
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Brand;

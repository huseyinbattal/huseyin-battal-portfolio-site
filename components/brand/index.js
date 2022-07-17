import Link from "next/link";
const logo="https://reactdeveloper.site/logo.svg"

const Brand = () => {
  return (
    <>
      <div className="hidden xl:flex items-center items-stretch">
        <Link href="/" aria-label="Home Page">
          <figure className="p-1 mr-2 cursor-pointer transition hover:scale-150 duration-500">
            <img
              width="40px"
              src="https://reactdeveloper.site/logobg.png"
              alt="HB Logo"
            />
          </figure>
        </Link>

        <div className="flex flex-col justify-between gap-1">
          <strong className="text-bold text-2xl leading-6 font-medium text-red-400">
            Hüseyin BATTAL
          </strong>
          <span className="text-2xl font-light leading-none flex gap-2 text-blue-400" >
            React Developer <span style={{color:"rgb(47,196,99)"}}>{"<"}</span><img width="25px"  src={logo} alt="logo" /><span style={{color:"rgb(47,196,99)"}}>{"/>"}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Brand;

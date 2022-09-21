import Link from "next/link";
const logo="https://reactdeveloper.site/logo.svg"

const Brand = () => {
  return (
    <>
      <div className="hidden xl:flex items-center">
        <Link href="/" aria-label="Home Page">
          <figure className="p-1 mr-2 cursor-pointer transition hover:scale-150 duration-500">
            <img
              width="50px"
              src="https://reactdeveloper.site/logobg.png"
              alt="HB Logo"
            />
          </figure>
        </Link>

        <div className="flex flex-col justify-between gap-1">
        
          <span className="text-2xl font-light leading-none flex gap-2 text-blue-400" >
            React.JS Developer <span style={{color:"rgb(47,196,99)"}}>{"<"}</span><img width="30px"  src={logo} alt="logo" /><span style={{color:"rgb(47,196,99)"}}>{"/>"}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Brand;

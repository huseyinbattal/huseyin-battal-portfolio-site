import Link from "next/link";
const logo="https://reactdeveloper.site/giphy.gif"

const Brand = () => {
  return (
    <>
      
      <div className="flex justify-center items-center mb-4">
        <Link href="/" aria-label="Home Page">
          <figure className="p-1 cursor-pointer transition hover:scale-125  duration-300">
            <img
              width="60px"
              src="https://reactdeveloper.site/logobg.png"
              alt="HB Logo"
            />
          </figure>
        </Link>
        <div className="flex flex-col justify-between gap-1">
        
          <span className="text-2xl font-serif leading-none flex gap-2 font-bold text-blue-400" >
            React.JS Developer <span style={{color:"rgb(47,196,99)"}}>{"<"}</span><span className="cursor-pointer hover:scale-150 duration-500"><img  width="30px"  src={logo} alt="logo" /></span><span style={{color:"rgb(47,196,99)"}}>{"/>"}</span>
          </span>
        </div>
      </div>
    
    </>
  );
};

export default Brand;

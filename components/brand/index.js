import Link from "next/link";

const Brand = () => {
  return (
    <>
      <div className="hidden xl:flex items-center items-stretch">
        <Link href="/" aria-label="Home Page">
          <figure className="p-1 mr-2 cursor-pointer transition hover:scale-150 duration-500" >
          <img width="40px" src="https://reactdeveloper.site/logobg.png" alt="HB Logo"/>
          </figure>
        </Link>

        <div className="flex flex-col justify-between gap-1">
          <strong className="text-xl leading-6 font-medium">
            Hüseyin BATTAL
          </strong>
          <span className="text-xl font-light leading-none">
            Full Stack Developer
          </span>
        </div>
      </div>
    </>
  );
};

export default Brand;

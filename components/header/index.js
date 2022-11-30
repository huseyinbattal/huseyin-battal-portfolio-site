import Brand from "@/components/brand"
import Navbar from "@/components/navbar"
import data from "@/public/data/header.json"

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-slate-100 w-full p-3 z-10 mt-4 ">
        <div className="lg:flex items-center justify-center xl:justify-between mt-4">
          <Brand />
          <Navbar data={data} />
        </div>
      </header>
    </>
  )
}

export default Header

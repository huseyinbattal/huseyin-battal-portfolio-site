import Brand from "@/components/brand"
import Navbar from "@/components/navbar"
import data from "@/public/data/header.json"

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-slate-200 w-full p-3 z-10 mt-4 ">
        <div className="lg:flex items-center justify-between mx-12 xl:justify-between mt-4">
          <Brand />
          <Navbar data={data} />
        </div>
      </header>
    </>
  )
}

export default Header

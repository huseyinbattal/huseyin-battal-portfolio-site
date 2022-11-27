import Brand from "@/components/brand"
import Navbar from "@/components/navbar"
import data from "@/public/data/header.json"

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-slate-100 border-4 border-green-500 border-dashed  p-1 z-10 mt-4 ">
        <div className="lg:flex items-center justify-center xl:justify-between mt-4">
          <Brand />
          <Navbar data={data} />
        </div>
      </header>
    </>
  )
}

export default Header

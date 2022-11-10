import Brand from "@/components/brand"
import Navbar from "@/components/navbar"
import data from "@/public/data/header.json"

const Header = () => {
  return (
    <>
      <header className="sticky top-0 bg-gray-200 w-full p-1 z-10">
        <div className="lg:flex items-center justify-center xl:justify-between mt-4">
          <Brand />
          <Navbar data={data} />
        </div>
      </header>
    </>
  )
}

export default Header

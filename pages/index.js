import Hero from "@/components/hero"
import Social from "@/components/social"
import hero from "../public/images/hero.png"
import Image from "next/image"

function Home() {
  return (
    <>
      <section className= "xl:mt-24 md:flex md:gap-12 md:justify-center">
        <figure className="flex justify-center mb-16 rounded-xl border-2 bg-slate-100 border-blue-200 hover:border-red-300 hover:bg-red-100 hover:scale-105 duration-500">
          <Image style={{borderRadius:"10px"}}
            // src="https://reactdeveloper.site/pixlr-bg-result.png"
            src={hero}
            alt="Hüseyin BATTAL"
            width={320}
            height={400}
            // className="rounded-xl border-2 border-blue-200 ml-16"
          />
        </figure>

        <div>
          <Hero />
          <Social />
        </div>
      </section>
    </>
  )
}

export default Home

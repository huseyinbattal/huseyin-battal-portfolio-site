import Hero from "@/components/hero"
import Social from "@/components/social"

function Home() {
  return (
    <>
      <section className= "xl:mt-24 md:flex md:gap-12 md:justify-center">
        <figure className="mb-16">
          <img 
            src="https://reactdeveloper.site/pixlr-bg-result.png"
            alt="Hüseyin BATTAL"
            width={200}
            className="rounded-xl border-2 border-blue-200 ml-16"
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

import Hero from "@/components/hero"
import Social from "@/components/social"

function Home() {
  return (
    <>
      <section className= "xl:mt-24 md:flex md:gap-12 md:justify-center">
        <figure className="mb-16 xl:block">
          <img 
            src="https://reactdeveloper.site/IMG_taevaw.jpg"
            alt="Hüseyin BATTAL"
            width={450}
            className="rounded-xl border border-green-300"
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

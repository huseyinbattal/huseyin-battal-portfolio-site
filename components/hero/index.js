import { useEffect, useRef } from "react"
import Typed from "typed.js"

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React.JS Developer","Html - Css - JavaScript - React.JS","Node.JS - Express.js","MongoDB - PostgreSQL"],
      startDelay: 200,
      typeSpeed: 60,
      backDelay: 1000,
      backSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <h1 className="text-3xl lg:text-5xl font-semibold my-5 text-red-500 text-center md:text-left">Hüseyin BATTAL</h1>
      <h2 className="text-xl lg:text-2xl md:ml-1 font-normal mb-5 h-16 md:h-auto text-red-500 text-center md:text-left">
        <span className="text-green-500" ref={el}></span>
      </h2>
    </>
  )
}

export default Hero

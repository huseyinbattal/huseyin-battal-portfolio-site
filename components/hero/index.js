import { useEffect, useRef } from "react"
import Typed from "typed.js"



const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Web Developer","Html - Css - JavaScript","TypeScript - Next.JS","React.JS - Redux","Tailwind CSS - Bootstrap","Webpack - Storybook","Testing Library - Jest", "Node.JS - Express.JS","MongoDB"],
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
      <h1 className=" text-3xl lg:text-5xl font-semibold my-5 text-red-500 text-center md:text-left">
        {/* <img className="float-right" width="30px" src="https://reactdeveloper.site/logobg.png" alt="hblogo" /> */}
        Hüseyin BATTAL</h1>
      
      <h2 className="text-xl lg:text-2xl md:ml-1 font-normal mb-5 h-16 md:h-auto text-pink-400 text-center">
        <span className="text-blue-600 italic font-mono" ref={el}></span>
      </h2>
    </>
  )
}

export default Hero

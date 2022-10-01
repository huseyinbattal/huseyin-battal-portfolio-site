import { useEffect } from "react"
import Title from "@/components/title"
import Subtitle from "@/components/subtitle"

const hbsearch="https://reactdeveloper.site/345.jpg"

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section>
        <Title>About Me</Title>

        <div className="bg-green-500 p-20 mt-10 mb-20 h-96" hidden></div>
      </section>
      <section className="mb-16 lg:mb-32">
        <div className="flex flex-col lg:flex-row">


          <div className="lg:ml-10">
            <h1 className="font-serif text-center text-yellow-500">
              <strong>Hello everyone, I'm Hüseyin 👋</strong><br /><br /></h1>
              <div className="rounded-xl border-1  bg-gray-800 border-gray-800 shadow-gray-800 shadow-xl float-left sm:mr-12 md:mr-12 lg:mr-12 mb-8 ">
              <img className="rounded-xl border-1 border-gray-800" width="500px" src={hbsearch} />
              </div>
              <h3 className="text-center font-serif text-gray-500 md:text-2xl">I'm a software developer. I have been focusing on frontend technologies for the last few years. I'm developing frontend projects with react. I also have knowledge and experience about backend technologies. I love doing hobby projects and learning new technologies.</h3>
              <br/>
              <h3 className="italic text-blue-600 text-sm lg:text-xl">You can contact me at the e-mail address below.👇</h3>
            
            <p className="italic text-sm lg:text-xl">
              <a 
                href="mailto:huseyinbattal42@gmail.com"
                className="underline underline-offset-2 transition e-mail"
              >
                huseyinbattal42@gmail.com
              </a>{" "}
             
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts

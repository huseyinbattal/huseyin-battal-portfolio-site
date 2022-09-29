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
        <Title>Contact</Title>

        <div className="bg-green-500 p-20 mt-10 mb-20 h-96" hidden></div>
      </section>
      <section className="mb-16 lg:mb-32">
        <div className="flex flex-col lg:flex-row">


          <div className="lg:ml-10">
            <h1 className="font-serif text-center text-yellow-500">
              <strong>Hello everyone, I'm Hüseyin 👋</strong><br /><br /></h1>
              <div className="float-left mt-1 mr-6 mb-1 ">
              <img className="rounded-xl border-4 border-red-900" width="400px" src={hbsearch} />
              </div>
              <h3 className="text-left font-serif text-gray-500 md:text-4xl">I'm a software developer. I have been focusing on frontend technologies for the last few years. I'm developing frontend projects with react. I also have knowledge and experience about backend technologies. I love doing hobby projects and learning new technologies.</h3>
              <br/>
              <h3 className="italic text-blue-600 text-sm lg:text-xl">You can contact me at the e-mail address below.👇</h3>
            
            <p className="italic text-sm lg:text-xl">
              <a
                href="mailto:hsynbattal@icloud.com,"
                className="underline underline-offset-2 transition"
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

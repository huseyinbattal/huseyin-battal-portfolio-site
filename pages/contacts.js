import { useEffect } from "react"
import Title from "@/components/title"
import Subtitle from "@/components/subtitle"

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
            <h2>
              <strong>Hello, I'm Hüseyin 👋</strong><br/><br/><h3>You can contact me at the e-mail address below.</h3>
            </h2>
            <p>
              E-mail:{" "}
              <a
                href="mailto:hsynbattal@icloud.com,"
                className="underline underline-offset-2 transition"
              >
                hsynbattal@icloud.com
              </a>{" "}
             
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts

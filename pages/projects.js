import { useEffect } from "react"
import Title from "@/components/title"
import Tilt from "react-parallax-tilt"
import data from "@/public/data/projects.json"

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section>
        <Title>My Projects</Title>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 mt-20">
          {data.items.map(({ title, description, link, category }, index) => (
            <Tilt
              key={index}
              className="flex gap-5 border-2 border-pink-700 rounded-2xl p-4"
              tiltEnable={
                typeof window !== "undefined" && window.innerWidth >= 1024
                  ? true
                  : false
              }
            >
              <span className="text-yellow-600  font-mono rounded-xl border-2 border-pink-700 font-bold hidden md:flex items-center justify-center text-5xl tabular-nums w-24">
                {index !== data.items.length - 1 ? index + 1 : "..."}
              </span>

              <div className="flex flex-col items-start">
                <span className="text-sm lg:text-base text-gray-600 lowercase mb-1 md:mb-2">
                  {category}
                </span>

                <h2 className="text-2xl text-cyan-500 font-serif font-bold mb-2">{title}</h2>

                <p className="mb-2">{description}</p>

                <a
                  href={link}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-100 text-green-700 rounded p-3 no-underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                  <span>code review</span>
                  

                  <svg width="14" height="10" className="transition">
                    <g stroke="currentColor" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects

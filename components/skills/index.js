const Skills = () => {
  const arr = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "React-Router",
    "Redux",
    "Nextjs",
    "Jest",
    "Tailwind CSS",
    "Webpack",
    "Storybook",
    "Styled-Comp",
    "Prettier",
    "Nodejs",
    "MongoDB",
    "PostgreSQL",
    "Git",
  ]

  return (
    <>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-x-5 gap-y-12 mt-5">
          {arr.map((name, i) => (
            <figure
              className="flex flex-col items-center justify-center h-28 hover:shadow-red-500 hover:shadow-xl cursor-pointer rounded-2xl shadow-green-200 shadow-sm active:shadow-red-500 active:shadow-xl hover:scale-125 duration-500"
              key={i}
            >
              <img
                src={`/svg/skills/${name
                  .replace("-", "")
                  .replace(" ", "")
                  .toLocaleLowerCase()}.svg`}
                alt={name}
                className="w-20 h-16"
              />
              <figcaption className="mt-4">{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills

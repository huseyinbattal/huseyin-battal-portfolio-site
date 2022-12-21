const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row items-center text-center md:justify-between gap-5">
        <span>© {new Date().getFullYear()} / Hüseyin BATTAL</span>
        <p className="mb-0">
          <a
            className="e-mail"
            href="https://www.huseyinbattal.online/"
            rel="noopener noreferrer"
          >
            www.huseyinbattal.online
          </a>
        </p>
      </footer>
    </>
  )
}

export default Footer

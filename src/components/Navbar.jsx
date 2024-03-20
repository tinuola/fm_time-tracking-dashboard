import { FaMoon, FaSun } from 'react-icons/fa'

function Navbar() {
  const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)')

  const handleThemeSwitch = (e) => {
    e.target.classList.toggle('toggle')
    console.log(e.target.classList)

    // If the OS is set to dark mode...
    if (prefersLightScheme.matches) {
      // ...then apply the .light-theme class to override those styles
      document.body.classList.toggle('theme-dark')
      // Otherwise...
    } else {
      // ...apply the .dark-theme class to override the default light styles
      document.body.classList.toggle('theme-light')
    }
  }

  return (
    <nav>
      <header>
        {/* <a
          href='#main'
          className='skip'
        >
          Skip to main content
        </a> */}
        <h1 className='sr-only'>Project Name - A Frontend Mentor Project</h1>
      </header>
      <div className='theme-toggle'>
        <FaSun className='light' />
        <FaMoon className='dark' />
        <button
          onClick={handleThemeSwitch}
          className='toggle-control'
        ></button>
      </div>
    </nav>
  )
}

export default Navbar

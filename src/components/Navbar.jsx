import { FaMoon, FaSun } from 'react-icons/fa'

function Navbar() {
  // Theme switching:
  // https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-a-body-class

  const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)')

  const handleThemeSwitch = (e) => {
    e.target.classList.toggle('toggle')

    const themeToggle = document.querySelector('.theme-toggle')
    themeToggle.classList.toggle('dark-bg')

    const element = document.querySelectorAll('.stat-card')

    // Hack for pseudo element
    element.forEach((ele) => {
      let val = ele.style.getPropertyValue('--opacity')
      if (val === '' || val === '1') {
        ele.style.setProperty('--opacity', 0.75)
      } else {
        ele.style.setProperty('--opacity', 1)
      }

      // console.log(ele.style.getPropertyValue('--opacity'))
    })

    // If the OS is set to light mode...
    if (prefersLightScheme.matches) {
      // ...then apply the dark theme to override those styles
      document.body.classList.toggle('theme-dark')
      // Otherwise...
    } else {
      // ...apply the light theme to override default (dark) styles
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
      <div className='toggle-wrapper'>
        <div className='theme-toggle'>
          <FaSun className='light' />
          <FaMoon className='dark' />
          <button
            onClick={handleThemeSwitch}
            className='toggle-control'
          ></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { FaMoon, FaSun } from 'react-icons/fa'

function Navbar() {
  // Theme Switching:
  // https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-a-body-class

  const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)')

  const handleThemeSwitch = (e) => {
    e.target.classList.toggle('toggle-action')

    const themeToggle = document.querySelector('.toggle')

    themeToggle.classList.toggle('toggle-bg')

    // Hack for pseudo element

    const element = document.querySelectorAll('.stat-card')

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
        <div className='toggle'>
          <FaSun className='toggle-icon-light' />
          <FaMoon className='toggle-icon-dark' />
          <button
            onClick={handleThemeSwitch}
            className='toggle-btn'
          ></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { FaMoon, FaSun } from 'react-icons/fa'
import { changePseudoElementOpacity } from '../utils/uiElemHelpers'

function Navbar() {
  const handleThemeSwitch = (e) => {
    e.target.classList.toggle('toggle-btn-position')

    const themeToggle = document.querySelector('.toggle')

    themeToggle.classList.toggle('toggle-bg')

    document.body.classList.toggle('theme-light')

    // Change opacity of accented/colorful headers
    changePseudoElementOpacity()
  }

  return (
    <nav>
      <header>
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

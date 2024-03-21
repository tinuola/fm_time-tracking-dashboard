// Functions that handle various UI actions

// When theme is toggled, change opacity of stat-cards decorative headings / backgrounds
function changePseudoElementOpacity() {
  const cards = document.querySelectorAll('.stat-card')

  cards.forEach((card) => {
    let opacityValue = card.style.getPropertyValue('--opacity')
    if (opacityValue === '' || opacityValue === '1') {
      card.style.setProperty('--opacity', 0.75)
    } else {
      card.style.setProperty('--opacity', 1)
    }
  })
}

// Display form to update Daily stats values
const showEditForm = (idx) => {
  let forms = document.querySelectorAll('form')
  let wrap = document.querySelectorAll('.stat-card-inner-wrapper')

  forms[idx].classList.toggle('form-visible')
  wrap[idx].classList.toggle('expand')

  forms[idx].lastElementChild.innerText = ``

  let inputFields = document.querySelectorAll('input')
  let dailyField = inputFields[idx]
  dailyField.value = ''
}

export { changePseudoElementOpacity, showEditForm }

// Functions to handle various UI behaviors

function getUIElements() {
  const inputFields = document.querySelectorAll('input')
  const forms = document.querySelectorAll('form')
  const wrappers = document.querySelectorAll('.stat-card-inner-wrapper')
  const cards = document.querySelectorAll('.stat-card')
  const labels = document.querySelectorAll('.freq-labels')

  return { cards, inputFields, labels, forms, wrappers }
}

// When theme is toggled, change opacity of stat-cards decorative headings / backgrounds
function changePseudoElementOpacity() {
  const { cards } = getUIElements()

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
function showEditForm(idx) {
  const { inputFields, forms, wrappers } = getUIElements()

  forms[idx].classList.toggle('form-visible')

  wrappers[idx].classList.toggle('expand')

  forms[idx].lastElementChild.innerText = ``

  let dailyField = inputFields[idx]

  dailyField.value = ''
}

// Remove form visibility if frequency is not 'Daily'
function toggleFormVisibility(idx) {
  const { forms } = getUIElements()
  if (idx !== 0) {
    forms.forEach((form) => form.classList.remove('form-visible'))
  }
}

// Remove expand class on form if frequency is not 'Daily'
function toggleFormExpand(idx) {
  const { wrappers } = getUIElements()
  if (idx !== 0) {
    wrappers.forEach((wrapper) => wrapper.classList.remove('expand'))
  }
}

// Apply bolded style to selected frequency
function applyActiveClass(num) {
  const { labels } = getUIElements()

  labels.forEach((label, idx) => {
    let hasActive = label.classList.contains('active')
    if (idx !== num && hasActive) {
      label.classList.remove('active')
    } else if (idx === num && !hasActive) {
      label.classList.add('active')
    }
  })
}

export {
  applyActiveClass,
  changePseudoElementOpacity,
  getUIElements,
  showEditForm,
  toggleFormExpand,
  toggleFormVisibility,
}

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
function showEditForm(categoryIdx) {
  const { inputFields, forms, wrappers } = getUIElements()

  forms[categoryIdx].classList.toggle('form-visible')

  wrappers[categoryIdx].classList.toggle('expand')

  forms[categoryIdx].lastElementChild.innerText = ``

  let dailyField = inputFields[categoryIdx]

  dailyField.value = ''
}

// Remove form visibility if frequency is not 'Daily'
function toggleFormVisibility(freqIdx) {
  const { forms } = getUIElements()
  if (freqIdx !== 0) {
    forms.forEach((form) => form.classList.remove('form-visible'))
  }
}

// Remove expand class on form if frequency is not 'Daily'
function toggleFormExpand(freqIdx) {
  const { wrappers } = getUIElements()
  if (freqIdx !== 0) {
    wrappers.forEach((wrapper) => wrapper.classList.remove('expand'))
  }
}

// Apply bolded style to selected frequency
function applyActiveClass(freqIdx) {
  const { labels } = getUIElements()

  labels.forEach((label, idx) => {
    let hasActive = label.classList.contains('active')
    if (idx !== freqIdx && hasActive) {
      label.classList.remove('active')
    } else if (idx === freqIdx && !hasActive) {
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

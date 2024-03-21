// Functions to handle various UI behaviors

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
function showEditForm(idx) {
  let forms = document.querySelectorAll('form')
  let wrap = document.querySelectorAll('.stat-card-inner-wrapper')

  forms[idx].classList.toggle('form-visible')
  wrap[idx].classList.toggle('expand')

  forms[idx].lastElementChild.innerText = ``

  let inputFields = document.querySelectorAll('input')
  let dailyField = inputFields[idx]
  dailyField.value = ''
}

// Remove form visibility if frequency is not 'Daily'
function toggleFormVisibility(idx) {
  let forms = document.querySelectorAll('form')
  if (idx !== 0) {
    forms.forEach((form) => form.classList.remove('form-visible'))
  }
}

// Remove expand class on form if frequency is not 'Daily'
function toggleFormExpand(idx) {
  let wrappers = document.querySelectorAll('.stat-card-inner-wrapper')
  if (idx !== 0) {
    wrappers.forEach((wrapper) => wrapper.classList.remove('expand'))
  }
}

// Apply bolded style to selected frequency
function applyActiveClass(num) {
  let labels = document.querySelectorAll('.freq-labels')

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
  showEditForm,
  toggleFormExpand,
  toggleFormVisibility,
}

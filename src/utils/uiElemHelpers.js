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

export { changePseudoElementOpacity }

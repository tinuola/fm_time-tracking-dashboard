// Functions to handle UI behaviors

function getUIElements() {
  const labels = document.querySelectorAll('.freq-labels')
  return labels
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

export { applyActiveClass, getUIElements }

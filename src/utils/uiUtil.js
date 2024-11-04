// Handle UI behavior
// Apply bolded style to selected frequency
function applyActiveClass(rangeIndex) {
  const labels = document.querySelectorAll('.freq-labels')

  labels.forEach((label, idx) => {
    let hasActive = label.classList.contains('active')
    if (rangeIndex !== idx && hasActive) {
      label.classList.remove('active')
    } else if (rangeIndex === idx && !hasActive) {
      label.classList.add('active')
    }
  })
}

export { applyActiveClass }

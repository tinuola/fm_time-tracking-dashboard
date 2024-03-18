export default function applyActiveClass(num) {
  let labels = document.querySelectorAll('.period-labels')

  labels.forEach((label, idx) => {
    let hasActive = label.classList.contains('active')
    if (idx !== num && hasActive) {
      label.classList.remove('active')
    } else if (idx === num && !hasActive) {
      label.classList.add('active')
    }
  })
}

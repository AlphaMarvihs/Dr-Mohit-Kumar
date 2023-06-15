// SCRIPT FOR CHANGING OF TABS WITH THE HELP OF ADDITION OF ACTIVE CLASS

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('actives')
    })
    tabs.forEach(tab => {
      tab.classList.remove('actives')
    })
    tab.classList.add('actives')
    target.classList.add('actives')
  })
})
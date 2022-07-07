import './style.css'
import businessList from './storage/businessList.json'

const businessListElement = document.querySelector<HTMLDivElement>('#businessList')!

const bizListText = businessList.join('／')
businessListElement.innerHTML = `
  <p>${bizListText}</p>
`

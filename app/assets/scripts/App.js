import '../styles/styles.css'
import Validate from './modules/Validate'
import MobileMenu from './modules/MobileMenu'

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept()
}


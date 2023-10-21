import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"

import "./topbar.scss"

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__wrapper container-xl">
        <h1 className="topbar__title">Where in the world?</h1>
        <span className="topbar__color-mode">
          <FontAwesomeIcon icon={faMoon} transform={{ rotate: 320, size: 20 }} />
          <span className="topbar__color-text">
            Dark Mode
          </span>
        </span>
      </div>
    </div>
  )
}

export default TopBar
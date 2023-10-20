import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"

type TopBarProps = {}

function TopBar({ }: TopBarProps) {
  return (
    <div className="topbar">
      <h1 className="topbar__title">Where in the world?</h1>
      <span className="topbar__color-mode">
        <FontAwesomeIcon icon={faMoon} transform={{rotate: 320, size: 20}} />
        Dark Mode
      </span>
    </div>
  )
}

export default TopBar
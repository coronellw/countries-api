import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons"
import { useTheme } from "context/theme-context"

import "./topbar.scss"

function TopBar() {
  const { mode, setMode } = useTheme()
  return (
    <div className="topbar">
      <div className="topbar__wrapper container-xl">
        <h1 className="topbar__title">Where in the world?</h1>
        <span
          className="topbar__color-mode"
          onClick={() => {
            const newMode = mode === "dark" ? "light" : "dark"
            setMode(newMode)
          }}
        >
          <FontAwesomeIcon
            icon={mode === "light" ? faMoon : faMoonSolid}
            transform={{ rotate: 320, size: 20 }}
          />
          <span className="topbar__color-text">Dark Mode</span>
        </span>
      </div>
    </div>
  )
}

export default TopBar

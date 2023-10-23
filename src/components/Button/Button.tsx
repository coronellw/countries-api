import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import './Button.scss'
import React from "react"

function Button({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <NavLink to="/" className={`back-button ${className}`}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Back</span>
    </NavLink>
  )
}

export default Button
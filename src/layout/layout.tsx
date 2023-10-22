import React from "react"
import { useTheme } from "context/theme-context"
import TopBar from "./topbar"

import "./layout.scss"

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children, ...otherProps }: LayoutProps) {
  const { mode } = useTheme()
  return (
    <div className="layout" data-theme={mode} {...otherProps}>
      <TopBar />
      <main className="content">{children}</main>
    </div>
  )
}

export default Layout

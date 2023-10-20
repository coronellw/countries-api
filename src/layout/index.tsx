import React from "react"
import SearchBar from "./searchbar"
import TopBar from "./topbar"

import './layout.scss'


type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <TopBar />
      <SearchBar />
      <main className="content">
        {children}
      </main>
    </div>
  )
}

export default Layout
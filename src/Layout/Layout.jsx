import React from 'react'
import { Footer } from './footer/footer'
import { MYHeaderr } from './header/headerr'

export const Layout = ({ children }) => {
  return (
    <>
      <MYHeaderr />
      {children}
      < Footer />
    </>
  )
}

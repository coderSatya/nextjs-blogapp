import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemeProviders = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div>ThemeProviders</div>
  )
}

export default ThemeProviders
import React, { createContext, useContext, useLayoutEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={`relative inline-flex h-5 w-8 shrink-0 cursor-pointer items-center rounded-full ring-1 ring-white/10 transition-all duration-300 active:scale-90 ${
        isDark ? 'bg-slate-700' : 'bg-yellow-400'
      }`}
    >
      <span
        className={`absolute left-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow transition-transform duration-300 ${
          isDark ? 'translate-x-3' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon key="moon" size={14} className="animate-spin-once text-slate-700" />
        ) : (
          <Sun key="sun" size={14} className="animate-spin-once text-yellow-500" />
        )}
      </span>
    </button>
  )
}
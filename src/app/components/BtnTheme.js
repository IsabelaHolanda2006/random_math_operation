'use client'

import { useEffect, useState } from 'react'
import Themes from '../hooks/Themes.js'

export default function BtnTheme() {
    const [theme, setTheme] = useState('light')
    const BtnLight = '/light_mode.svg#btnLight'
    const BtnDark = '/dark_mode.svg#btnDark'

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(storedTheme)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const newTheme = Themes.find(t => theme === t.name)
        if (newTheme) {
            for (let i = 0; i < newTheme.array.length; i++) {
                const variable = newTheme.array[i].variable
                const value = newTheme.array[i].value

                document.documentElement.style.setProperty(variable, value)
            }
        }
    }, [theme])

    return (
        <div className='flex gap-5'>
            <button
                onClick={() => {
                    // TODO: add system default theme button
                    const newTheme = theme === 'light' ? 'dark' : 'light'
                    setTheme(newTheme)
                }} >
                <svg className='fill-[--color-text]' width='24' height='24'><use href={theme === 'light' ? BtnDark : BtnLight}/></svg>
            </button>
        </div>
    )
}

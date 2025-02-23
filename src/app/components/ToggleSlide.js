'use client'

import { useEffect, useState } from "react"

export default function ToggleSlide(props) {
    const [check, setCheck] = useState(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedToggle = localStorage.getItem(props.id)
            setCheck(storedToggle === 'true')
        }
    }, [])

    useEffect(() => {
        if (check !== null) {
            localStorage.setItem(props.id, check.toString())
        }
    }, [check])

    if (check === null) return null

    return (
        <div className="flex justify-center items-center flex-col text-[--color-text]">
            <label htmlFor='toggle' className='flex justify-center items-center bg-[--color-bg] relative w-16 h-8 rounded-full'>
                <input type='checkbox' onChange={() => setCheck(!check)} checked={check} id='toggle' className='sr-only peer' />
                <span className='w-[--toggle-size] h-3/5 flex justify-center items-center bg-blue-300 rounded-full left-1 absolute
                     before:content-["off"] peer-checked:bg-blue-600 peer-checked:left-[calc(100%-var(--toggle-size)-0.25rem)]
                     peer-checked:before:content-["on"] transition-all duration-400 text-xs' />
            </label>
            <div className='text-sm'>{props.labelName} {props.needsRefresh && 'is necessary restart to apply'}</div>
        </div>
    )
}
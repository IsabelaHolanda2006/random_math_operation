'use client'

import { useEffect, useState } from "react"

export default function CheckBoxLabel(props) {
    const [check, setCheck] = useState(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCheck = localStorage.getItem(props.id)
            setCheck(storedCheck === 'true')
        }
    }, [])

    useEffect(() => {
        if (check !== null) {
            localStorage.setItem(props.id, check.toString())
        }
    }, [check])

    if (check === null) return null

    return (
        <abbr className='no-underline' title={props.description}>
            <label>
                <input checked={check} onChange={() => setCheck(!check)} className='w-7 h-7 mt-4 accent-[--color-bg]' type='checkbox' ></input>
                <div>{props.label}</div>
            </label>
        </abbr>
    )
}
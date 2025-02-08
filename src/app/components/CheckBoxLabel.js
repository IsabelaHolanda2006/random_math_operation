'use client'

import { useEffect, useState } from "react"

export default function CheckBoxLabel(props) {
    const [check, setCheck] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCheck = localStorage.getItem(props.id)
            setCheck(storedCheck === 'true')
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(props.id, check.toString())
        }
    }, [check])

    return (
        <abbr className='no-underline' title={props.description}>
            <label>
                <input id={props.id} checked={check} onChange={() => setCheck(!check)} className='w-7 h-7 mt-4 accent-[--color-bg]' type='checkbox' ></input>
                <div>{props.label}</div>
            </label>
        </abbr>
    )
}
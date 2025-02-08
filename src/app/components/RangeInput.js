'use client'

import { useEffect, useState } from "react"

export default function RangeInput(props) {
    const [range, setRange] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localRange = localStorage.getItem(props.id)

            setRange(localRange ? localRange : props.id === 'minRange' ? '2' : '10')
            if (!localRange) props.id === 'minRange' ? localStorage.setItem(props.id, '2') : localStorage.setItem(props.id, '10')
        }
    }, [])

    function onInputChange(e) {
        const inputValue = e.target.value

        // \.? \d* (TODO: decimals numbers option)

        if (!/^\-?\d*$/.test(inputValue)) {
            return
        }

        localStorage.setItem(props.id, inputValue)
        setRange(inputValue)
    }

    function inputMaxLenght() {
        if (range.includes('.') && !range.includes('-') || !range.includes('.') && range.includes('-')) {
            return 7
        }

        if (range.includes('.') && range.includes('-')) {
            return 8
        }

        return 5
    }

    return (
        <div>
            <label>
                <div>
                <input value={range} onChange={(e) => onInputChange(e)} maxLength={inputMaxLenght()} className='w-28 rounded-lg text-center bg-[--color-bg] text-[--color-text]' type='text' />
                </div>
                <span>{props.label}</span>
            </label>
        </div>
    )
}
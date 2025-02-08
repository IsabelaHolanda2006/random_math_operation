'use client'

import { useState } from "react"
import { useEffect } from "react"

export default function NumberInput() {
    const [count, setCount] = useState(2)
    
    useEffect(() => {        
        if (typeof window !== 'undefined') {
            const counter = localStorage.getItem('counter')
            setCount(counter ? +counter : 2)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('counter', count.toString())
        }
    }, [count])

    return (
        <div>
            <abbr>
                <label title='specifies the quantity of numbers in the operation (2-10)'>
                    <div className='flex justify-center items-center'>
                        <button className='w-8 h-8 rounded-tl-lg rounded-bl-lg bg-[--color-btn]' onClick={() => count > 2 ? setCount(count - 1) : count} type='button'>-</button>
                        <input id='numberInput' className='w-16 h-8 text-center bg-[--color-bg]' type='text' value={count} readOnly />
                        <button className='w-8 h-8 rounded-tr-lg rounded-br-lg bg-[--color-btn]' onClick={() => count < 10 ? setCount(count + 1) : count} type='button'>+</button>
                    </div>
                    <span>Amount of numbers</span>
                </label>
            </abbr>
        </div>
    )
}
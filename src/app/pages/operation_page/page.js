'use client'

import { number, randomInt } from "mathjs"
import { useEffect, useRef, useState } from "react"
import RandomizedOperation from "@/app/hooks/RandomizedOperation"

export default function OperationPage() {
    const [pageOperation, setPageOperation] = useState(null)
    const inputText = useRef()
    const youWinLose = useRef()
    const btnRefresh = useRef()

    useEffect(() => {
        if (typeof window !== 'undefined' && !sessionStorage.getItem('operation')) {
            const startOperation = onStartClick()
            const numbers = startOperation.getNumbers
            const operators = startOperation.getOperators
            const fullOperation = startOperation.getFullOperation
            const result = startOperation.getResult

            if (numbers && operators && fullOperation && result) {
                const getOperation = operationString(numbers(), operators(), fullOperation(), result())
                const operation = getOperation.getOperation()
                const xValue = getOperation.getXValue()
                sessionStorage.setItem('operation', operation)
                sessionStorage.setItem('xValue', xValue)
            }

        }
        setPageOperation(sessionStorage.getItem('operation'))
    }, [])

    function onStartClick() {
        const operation = []
        const counter = localStorage.getItem('counter')
        const minRange = localStorage.getItem('minRange')
        const maxRange = localStorage.getItem('maxRange')

        let i = 1
        while (i <= counter) {
            const randomInteger = randomInt(number(minRange), number(maxRange) + 1)
            operation.push(randomInteger)
            i++
        }

        const randomized = RandomizedOperation(...operation)

        return randomized
    }

    function operationString(numbers, operators, fullOperation, result) {
        const xPosition = randomInt(0, numbers.length)
        const xValue = numbers[xPosition]
        const xValueString = xValue.toString()
        const operation = `${fullOperation.replace(new RegExp(`(?<!\d)(-?${xValueString})(?!\d)`), 'X')} = ${result}`

        const getValues = {
            'getXValue': () => { return xValue },
            'getOperation': () => { return operation },
        }

        return getValues
    }

    function checkAnswer(e) {
        const answer = sessionStorage.getItem('xValue')
        const userAnswer = inputText.current.value

        youWinLose.current.style.display = 'block'

        if (isNaN(userAnswer) || userAnswer.trim() === '') {
            youWinLose.current.textContent = 'Please insert a valid number'
            e.target.style.borderColor = 'orange'
        } else {
            btnRefresh.current.style.display = 'block'
            if (number(userAnswer) === number(answer)) {
                e.target.style.borderColor = 'green'
                youWinLose.current.textContent = 'You Win!'
            } else {
                e.target.style.borderColor = 'red'
                youWinLose.current.textContent = `You Lose! (The answer was ${sessionStorage.getItem('xValue')})`
            }
            e.target.disabled = true
            inputText.current.disabled = true
        }
    }

    return (
        <main className='flex flex-col items-center'>
            <div className='text-2xl text-center'>
                <p className='hidden mb-2' ref={youWinLose}></p>
                <h2>{pageOperation ? pageOperation : 'Loading...'}</h2>
            </div>
            <input ref={inputText} className='rounded-lg p-2 bg-[--color-obj] text-[--color-text] text-center' type='text' maxLength={5} placeholder='Type the answer...' />
            <button onClick={(e) => checkAnswer(e)} className='mt-2 w-36 p-1 bg-[--color-btn] border-4 rounded-lg border-transparent'>Confirm</button>
            <button ref={btnRefresh} onClick={() => { sessionStorage.clear(); window.location.reload() }} className='hidden mt-4 w-24 p-1 bg-[--color-btn] rounded-lg '>
                Next
            </button>
        </main>

    )
}
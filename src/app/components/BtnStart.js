'use client'

import Link from "next/link"
import RandomizedOperation from "../hooks/RandomizedOperation"
import { useState } from "react"
import { number } from "mathjs"

export default function BtnStart() {
    const [linkRef, setlinkRef] = useState('#')

    function onMouseOver() {
        const verifyOperation = RandomizedOperation(0, 0)
        const minRange = localStorage.getItem('minRange')
        const maxRange = localStorage.getItem('maxRange')

        if (!verifyOperation || number(minRange) > number(maxRange) || number(minRange) === 0 || number(minRange) === 0) {
            setlinkRef('#')
        } else {
            setlinkRef('pages/operation_page')
        }
    }

    function callAlert() {
        if (typeof window !== 'undefined') {
            const minRange = localStorage.getItem('minRange')
            const maxRange = localStorage.getItem('maxRange')
            if (RandomizedOperation(0, 0) === false) alert('error: no boxes checked.\nplease select at least one box.')
            if (number(minRange) > number(maxRange)) alert('error: min range is greater than max range.\nthe min range must be less than max range.')
            if (number(minRange) === 0 || number(maxRange) === 0) alert('warning: the min or max range is set to 0, this may cause a division by 0 error.')
        }
    }

    return (
        <div className='text-center mt-2 mb-3'>
            <Link onClick={callAlert} onMouseEnter={onMouseOver} href={linkRef}>
                <button className='bg-[--color-obj] w-16 h-16 mt-5 rounded-lg'>
                    Start
                </button>
            </Link>
        </div>
    )
}
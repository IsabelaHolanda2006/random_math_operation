'use client'

import { useEffect, useRef, useState } from "react"
import ToggleSlide from "./ToggleSlide"

export default function BtnSettings() {
    const settingsDialog = useRef()
    const settings = '/images/settings.svg#settings'
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    function openDialog() {
        settingsDialog.current.showModal()
    }

    function closeDialog() {
        settingsDialog.current.close()
    }

    return (
        <div>
            <button onClick={openDialog}>
                {isMounted && <svg className='fill-[--color-text] hover:animate-spin' width={24} height={24}><use href={settings} /></svg>}
            </button>

            {
                isMounted &&
                <dialog className='bg-[--color-btn] text-center rounded-lg shadow-lg shadow-[--color-shadow] w-48' ref={settingsDialog}>
                    <div className='flex justify-end items-start'>
                        <button onClick={closeDialog} className='flex justify-center items-center bg-[--color-text] text-[--color-bg] rounded-bl-md h-7 w-7'>X</button>
                    </div>
                    <div className='flex flex-col flex-1 justify-center items-center overflow-y-auto overflow-x-hidden h-36'>
                        <ToggleSlide labelName='decimal point as ",".' id='decimalPoint' needsRefresh={true} />
                    </div>
                </dialog>
            }
        </div>
    )
}
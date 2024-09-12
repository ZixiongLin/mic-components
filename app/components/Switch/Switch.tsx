"use client"
import { useState } from "react"
import { SwitchProps } from "./Props"

export const Switch = ({
    leftLabel,
    rightLabel,
    ...props
}:SwitchProps) => {
    const [isChecked, setIsChecked] = useState(false)
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }
  
    return (
        <>
          <label className='relative inline-flex cursor-pointer select-none items-center'
          >
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='sr-only'
              {...props}
            />
            {
                leftLabel && 
                    <span className='label flex items-center text-sm font-medium text-black'>
                        {leftLabel}
                    </span>
            }
            <span
              className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                isChecked ? 'bg-black' : 'bg-neutrals-300'
              }`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  isChecked ? 'translate-x-[28px]' : ''
                }`}
              ></span>
            </span>
            {
                rightLabel && 
                    <span className='label flex items-center text-sm font-medium text-black'>
                        {rightLabel}
                    </span>
            }

          </label>
        </>
      )
  }
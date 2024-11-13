'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function MinionCalculator() {
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState(null)
  const [prevValue, setPrevValue] = useState(null)

  const handleNumberClick = (num) => {
    setDisplay(display === '0' ? num : display + num)
  }

  const handleOperationClick = (op) => {
    setOperation(op)
    setPrevValue(parseFloat(display))
    setDisplay('0')
  }

  const handleEqualsClick = () => {
    const currentValue = parseFloat(display)
    let result = 0
    switch (operation) {
      case '+':
        result = prevValue + currentValue
        break
      case '-':
        result = prevValue - currentValue
        break
      case '*':
        result = prevValue * currentValue
        break
      case '/':
        result = prevValue / currentValue
        break
      default:
        return
    }
    setDisplay(result.toString())
    setOperation(null)
    setPrevValue(null)
  }

  const handleClear = () => {
    setDisplay('0')
    setOperation(null)
    setPrevValue(null)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-yellow-400 rounded-full p-8 shadow-xl w-72 flex flex-col items-center">
        {/* Minion Eyes */}
        <div className="flex justify-center mb-4 space-x-4">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center border-4 border-gray-800">
            <Button className="rounded-full w-8 h-8 bg-gray-800 text-white" onClick={() => handleOperationClick('*')}>*</Button>
          </div>
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center border-4 border-gray-800">
            <Button className="rounded-full w-8 h-8 bg-gray-800 text-white" onClick={() => handleOperationClick('/')}>/</Button>
          </div>
        </div>
        
        {/* Calculator Display */}
        <div className="bg-white w-full mb-4 p-2 rounded text-right text-2xl font-bold border-2 border-gray-800">
          {display}
        </div>
        
        {/* Minion Mouth (Calculator Buttons) */}
        <div className="grid grid-cols-3 gap-2 bg-blue-500 p-4 rounded-3xl">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
            <Button key={num} className="bg-yellow-300 text-gray-800 rounded-full w-12 h-12" onClick={() => handleNumberClick(num.toString())}>
              {num}
            </Button>
          ))}
          <Button className="bg-yellow-300 text-gray-800 rounded-full w-12 h-12" onClick={() => handleOperationClick('-')}>-</Button>
          <Button className="bg-yellow-300 text-gray-800 rounded-full w-12 h-12" onClick={() => handleNumberClick('0')}>0</Button>
          <Button className="bg-yellow-300 text-gray-800 rounded-full w-12 h-12" onClick={() => handleOperationClick('+')}>+</Button>
        </div>
        
        {/* Bottom Buttons */}
        <div className="flex justify-between w-full mt-4">
          <Button className="bg-red-500 text-white rounded-full w-20 h-12" onClick={handleClear}>C</Button>
          <Button className="bg-green-500 text-white rounded-full w-20 h-12" onClick={handleEqualsClick}>=</Button>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from "react"
import arrowDown from "../images/icon-arrow-down.svg"

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="border-b-2 w-full flex flex-col justify-center">
      <div className="flex flex-row py-4 hover:cursor-pointer" onClick={() => handleToggle()}>
        <div
          className={`w-4/5 text-text-blue hover:text-text-red ${isActive ? "font-extrabold" : ""}`}
        >
          {question}
        </div>
        <div className="w-1/5 flex flex-row justify-end items-center">
          <img
            className={`w-3 ${isActive ? "scale-y-[-1]" : ""}`}
            src={arrowDown}
            alt="arrow down"
          />
        </div>
      </div>
      {isActive && <div className="w-full mb-4 text-text-blue">{answer}</div>}
    </div>
  )
}

export default AccordionItem

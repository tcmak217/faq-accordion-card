import React from "react"
import arrowDown from "../images/icon-arrow-down.svg"

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b-2 w-full flex flex-row justify-between">
      <div className="w-3/4">{question}</div>
      <button>
        <img src={arrowDown} alt="arrow down" />
      </button>
    </div>
  )
}

export default AccordionItem

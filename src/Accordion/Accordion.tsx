import React from "react"
import womanImage from "../images/illustration-woman-online-mobile.svg"
import backgroudPattern from "../images/bg-pattern-mobile.svg"
import AccordionItem from "../AccordionItem/AccordionItem"

function Accordion({ accordionData }: { accordionData: { question: string; answer: string }[] }) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-bg-violet to-bg-blue">
      <div className="w-5/6 flex flex-col items-center bg-white rounded-3xl p-8 shadow-2xl relative">
        <img className="absolute -top-[5.8rem] w-52" src={womanImage} alt="woman image" />
        <img className="absolute -top-1 w-52" src={backgroudPattern} alt="background pattern" />
        <div className="flex flex-col items-center mt-20">
          <div className="text-4xl font-bold">FAQ</div>
          <div className="flex flex-col items-start mt-8">
            {accordionData.map((item, index) => (
              <AccordionItem question={item.question} answer={item.answer}></AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion

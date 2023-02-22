import React from "react"
import womanImageMobile from "../images/illustration-woman-online-mobile.svg"
import womanImageDesktop from "../images/illustration-woman-online-desktop.svg"
import backgroundPatternMobile from "../images/bg-pattern-mobile.svg"
import backgroundPatternDesktop from "../images/bg-pattern-desktop.svg"
import AccordionItem from "../AccordionItem/AccordionItem"
import boxImage from "../images/illustration-box-desktop.svg"

function Accordion({ accordionData }: { accordionData: { question: string; answer: string }[] }) {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-bg-violet to-bg-blue">
      <div className="max-w-screen-lg w-full pt-44 px-8 mx-auto">
        <div className="sm:min-h-[60%] w-full sm:w-full flex flex-col sm:flex-row max-sm:items-center bg-white rounded-3xl max-sm:p-8 max-sm:pb-16 shadow-2xl">
          <div className="min-h-full w-full sm:flex sm:flex-row sm:justify-between">
            <div className="flex justify-center relative sm:hidden">
              <img
                className="absolute -top-[10.5rem] w-5/6"
                src={womanImageMobile}
                alt="woman image"
              />
              <img
                className="absolute -top-[2rem] w-5/6"
                src={backgroundPatternMobile}
                alt="background pattern"
              />
            </div>
            <div className="max-sm:hidden w-1/2 relative">
              <div className="w-full h-full overflow-hidden relative">
                <img
                  className="absolute w-full -left-24 top-20 z-20"
                  src={womanImageDesktop}
                  alt="woman image"
                />
                <img
                  className="absolute w-full scale-150 -left-64 -top-4 z-10"
                  src={backgroundPatternDesktop}
                  alt="background pattern"
                />
              </div>
              <img className="absolute w-2/5 -left-40 top-64 z-20" src={boxImage} alt="box image" />
            </div>
            <div className="flex flex-col w-full max-sm:items-center max-sm:mt-36 sm:w-1/2 sm:justify-center sm:p-24">
              <div className="text-4xl font-bold text-text-blue">FAQ</div>
              <div className="flex flex-col items-start mt-8 w-full">
                {accordionData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  ></AccordionItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
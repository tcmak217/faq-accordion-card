import React from "react"
import womanImage from "./images/illustration-woman-online-mobile.svg"
import backgroudPattern from "./images/bg-pattern-mobile.svg"

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-bg-violet to-bg-blue">
        <div className="w-4/5 flex flex-col items-center bg-white rounded-3xl p-8 shadow-2xl relative">
          <img className="absolute -top-[5.8rem] w-52" src={womanImage} alt="woman image" />
          <img className="absolute -top-1 w-52" src={backgroudPattern} alt="background pattern" />
          <div>FAQ</div>
          <div>How many team members can I invite?</div>
          <button></button>
          <div>---</div>
          <div>What is the maximum file upload size?</div>
          <button></button>
          <div>---</div>
          <div>
            No more than 2GB. All files in your account must fit your allotted storage space.
          </div>
          <div>How do I reset my password?</div>
          <button></button>
          <div>---</div>
          <div>Can I cancel my subscription?</div>
          <button></button>
          <div>---</div>
          <div>Do you provide additional support?</div>
          <button></button>
          <div>---</div>
        </div>
      </div>
    </>
  )
}

export default App

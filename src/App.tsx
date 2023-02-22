import React from "react"
import Accordion from "./Accordion/Accordion"

function App() {
  const accordionData = [
    {
      question: "How many team members can I invite?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint labore repudiandae corrupti et aperiam possimus, ea, inventore quibusdam id saepe molestias, tempora minima dolore sapiente beatae. Porro, quas soluta?",
    },

    {
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint labore repudiandae corrupti et aperiam possimus, ea, inventore quibusdam id saepe molestias, tempora minima dolore sapiente beatae. Porro, quas soluta?",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint labore repudiandae corrupti et aperiam possimus, ea, inventore quibusdam id saepe molestias, tempora minima dolore sapiente beatae. Porro, quas soluta?",
    },
    {
      question: "Do you provide additional support?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint labore repudiandae corrupti et aperiam possimus, ea, inventore quibusdam id saepe molestias, tempora minima dolore sapiente beatae. Porro, quas soluta?",
    },
  ]
  return (
    <>
      <Accordion accordionData={accordionData}></Accordion>
    </>
  )
}

export default App

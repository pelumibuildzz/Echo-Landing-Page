'use client'

import { useState } from "react"
import FaqDropdown from "./faq-dropdown"

const FaqAcordion = ({faqs}) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-4 w-full relative z-20">
      {faqs.map((faq, index) => (
        <FaqDropdown
          key={index}
          question={faq.question}
          answer={faq.answer}
          isDown={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}

export default FaqAcordion
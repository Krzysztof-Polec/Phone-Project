import { useState } from "react"

const CalculatorButtons = ({ click, operator }) => {
  const [clickedButton, setClickedButton] = useState(null)

  const handleButtonClick = (value) => {
    setClickedButton(value)
    click(value)

    setTimeout(() => {
      setClickedButton(null)
    }, 100)
  }

  const buttonClass = (value) => {
    if(["÷", "x", "-", "+", "="].includes(value)){
      return `orange-button ${operator === value ? "active-button" : ""}`
    }else if(["AC", "+/-", "%"].includes(value)){
      return `grey-button ${clickedButton === value ? " clicked" : ""}`
    }else if(value === "0"){
      return `special-button ${clickedButton === value ? " clicked" : ""}`
    }else{
      return `${clickedButton === value ? " clicked" : ""}`
    }
  }

  const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=",
  ]

  return(
    <div className="calculator-buttons">
      {buttonValues.map(value => (
        <button
          key={value}
          content={value}
          className={buttonClass(value)}
          onClick={() => {
            click(value)
            handleButtonClick(value)
          }}
        >
          {value}
        </button>
      ))}
    </div>
  )
}

export default CalculatorButtons
import { useState } from "react"
import Header from "../../components/Header/Header"
import ReversingBar from "../../components/ReversingBar/ReversingBar"
import "./CalculatorApp.scss"
import CalculatorButtons from "./CalculatorButtons/CalculatorButtons"
import SmoothAppTransition from "../../components/SmoothScreenTransition/SmoothScreenTransition"

const CalculatorApp = () => {
  const [value, setValue] = useState("0")
  const [memory, setMemory] = useState(null)
  const [operator, setOperator] = useState(null)

  const handleButtonPress = content => {
    const num = parseFloat(value)

    if(content === "AC"){
      setValue("0")
      setMemory(null)
      setOperator(null)
      return
    }

    if(content === "+/-"){
      setValue((num * -1).toString())
      return
    }

    if(content === "%"){
      setValue((num / 100).toString())
      setMemory(null)
      setOperator(null)
      return
    }

    if(content === "."){
      if(value.includes(".")) return
      setValue(value + ".")
      return
    }

    if(content >= "0" && content <= "9"){
      if(value.length < 9){
        setValue(value === "0" ? content : value + content)
      }
      return
    }

    if(content === "+"){
      performOperation("+");
    }else if(content === "-"){
      performOperation("-")
    }else if(content === "x"){
      performOperation("x")
    }else if(content === "÷"){
      performOperation("÷")
    }else if(content === "="){
      calculateResult()
    }

    if(content === "."){
      if (value.includes(".")) return
      setValue(value + ".")
      return
    }

    if(content === "+/-"){
      setValue((num * -1).toString())
      return
    }

    if(content === "%"){
      setValue((num / 100).toString())
      setMemory(null)
      setOperator(null)
      return
    }
  }

  const performOperation = nextOperator => {
    if(operator !== null){
      if(operator === "+"){
        setMemory(memory + parseFloat(value))
      }else if(operator === "-"){
        setMemory(memory - parseFloat(value))
      }else if(operator === "x"){
        setMemory(memory * parseFloat(value))
      }else if(operator === "÷"){
        setMemory(memory / parseFloat(value))
      }
    }else{
      setMemory(parseFloat(value))
    }

    setValue("0")
    setOperator(nextOperator)
  }

  const calculateResult = () => {
    if (!operator) return
  
    let result
    if(operator === "+"){
      result = (memory + parseFloat(value)).toString()
    }else if(operator === "-"){
      result = (memory - parseFloat(value)).toString()
    }else if(operator === "x"){
      result = (memory * parseFloat(value)).toString()
    }else if(operator === "÷"){
      result = (memory / parseFloat(value)).toString()
    }
  
    if(result.length > 9){
      result = "ERROR"
    }
  
    setValue(result)
    setMemory(null)
    setOperator(null)
  }

  return(
    <SmoothAppTransition className="calculator-app app">
      <Header></Header>
      <div className="calculator-app-content">
        <div className="calculator-screen">{value}</div>
        <CalculatorButtons click={handleButtonPress} operator={operator}></CalculatorButtons>
      </div>
      <ReversingBar></ReversingBar>
    </SmoothAppTransition>
  )
}

export default CalculatorApp
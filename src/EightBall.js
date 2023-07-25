import React, { useState } from 'react'

import "./EightBall.css";
import defaultAnswers from "./answers.json"


const EightBall = ({answers = defaultAnswers}) =>{
    const baseAnswer = {
        msg: "Think of a question",
        color: "black"
    }
    const [answer, setAnswer] = useState(baseAnswer)


    const getNewMsg = () => {
        let idx = Math.floor(Math.random()* answers.length)
        setAnswer(answers[idx]) 
    }
    const resetBall = () =>setAnswer(baseAnswer)
    
    return (
        <>
            <div
                className={`EightBall`}
                onClick={getNewMsg}
                style={{backgroundColor:answer.color}}
                >
                <p>{ answer.msg }</p>
            </div>
            <button onClick={resetBall}>RESET</button>
        </>
    )
}

export default EightBall
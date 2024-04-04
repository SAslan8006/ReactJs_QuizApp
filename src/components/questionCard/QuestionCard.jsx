import React, { useEffect, useState } from 'react'
import './QuestionCard.css'

const QuestionCard = ({ quizData, score, setScore, count, setCount, modal, setModal }) => {
    const [timer, setTimer] = useState(30)
    const approvedChoice = (e) => {
        const checkAnswer = e.currentTarget.value == quizData[count]?.correct_answer;
        if (checkAnswer) {
            setScore(score + 10)
        }
        setCount(count + 1);
        if (count == 9) setModal(true)
        setTimer(30);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            }
            if (timer === 0 && count < 10) {
                setCount(count + 1)
                setTimer(30)
            } else if (count >= 10) {
                setModal(true)
            }
        }, 1000)

        return () => { clearInterval(interval) }
    }, [timer])
    return (
        <div className='question-card'>
            <div className='timer'>{timer}</div>
            <div className='question-title'>{count + 1}/10 {quizData[count]?.question}</div>
            {
                quizData[count]?.answers.map((answer, index) => (
                    <button
                        key={index}
                        value={answer}
                        onClick={approvedChoice}>{answer}
                    </button>
                ))
            }
        </div>
    )
}

export default QuestionCard

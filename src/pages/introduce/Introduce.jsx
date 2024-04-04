import React, { useState } from 'react'
import './Introduce.css';
import Dropdown from '../../components/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

export const Introduce = () => {
    const diffuculty = ["easy", "medium", "hard"];
    const [difficultyChange, setDifficultyChange] = useState("");
    const navigate = useNavigate();
    const total_qustions = 10;
    const startQuiz = () => {
        if (difficultyChange) {
            navigate(`/quiz/${difficultyChange}/${total_qustions}`);
            return;
        }

    }
    return (
        <div className='introduce'>
            <div className="introduce-container">
                <img src="https://media.istockphoto.com/id/1141313493/tr/foto%C4%9Fraf/trivia-gece-%C5%9Fekilli-neon-%C4%B1%C5%9F%C4%B1k-%C3%BCzerinde-siyah-duvar.jpg?s=612x612&w=0&k=20&c=_FP6r9GwhpXuE16pIUhY6D9AK0HI_ihq-BkJaQ5dsgg=" alt="" />
                <Dropdown data={diffuculty} setDifficultyChange={setDifficultyChange} />
                <div onClick={startQuiz} className='introduce-btn'>Quize Başla</div>
            </div>
        </div>
    )
}

export default Introduce
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/username.slice'

import pokedex from "../assets/img/pokedex.png"

const Home = () => {
    const navigate = useNavigate();
    const username = useSelector(state => state.username)
    const [inputName, setImputName] = useState("")

    const dispatch = useDispatch();

    const getPokedex = () => {
            dispatch(getUsername(inputName));
            navigate('/pokedex')
    }

    return (
        <div className='home'>
            <img className='title_home' src={pokedex} alt="pokedex" />
            <div className='input__container'>
                <div className='screen'>
                    
                    <div className='input'>
                        <input placeholder='Nombre' type="text" value={inputName} onChange={e => setImputName(e.target.value)} />
                        <button onClick={getPokedex}><i className='bx bx-right-arrow-alt' ></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
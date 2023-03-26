import {useState} from 'react'
const Square = ({value, position, handlePlay,isGameEnd}) => {

    const squareHandlePlay = () => {
        if (!value && !isGameEnd) {
            handlePlay(position)
        }
    }

    return <>
        <button
            onClick={squareHandlePlay}
            className="w-[70px] h-[70px] bg-[#14bdac] text-3xl text-white">
            {value}
        </button>
    </>
}

export default Square
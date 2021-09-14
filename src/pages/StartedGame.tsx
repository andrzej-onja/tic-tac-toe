import React, {useEffect, useState} from "react";
import {useAppSelector, useAppDispatch} from '../app/hooks';
import {newPlayer} from '../features/addPlayer'
import { newSecondPlayer} from '../features/addSecondPlayer'
import {gameTimer} from '../features/timer'
import {start} from '../features/startScreenSlice'
import { next, isNext } from "../features/nextPlayer";
import cross from '../images/cross.svg'
import circle from '../images/circle.svg'

// Possibility to win
//[0, 1, 2]
//[3, 4, 5]
//[6, 7, 8]

//[0, 3, 6]
//[3, 4, 5]
//[6, 7, 8]

//[6, 4, 2]
//[0, 4, 8]

export default function StartedGame(){
    const dispatch = useAppDispatch();

    const firstPlayer = useAppSelector(newPlayer);
    const secondPlayer = useAppSelector(newSecondPlayer);
    const timer = useAppSelector(gameTimer)
    const nextPlayer = useAppSelector(next)
    const [countDown, setCountDown] = useState(timer)
    
    const circlePiece = <img src={circle} alt='circle'/>
    const crossPiece = <img src={cross} alt='cross'/>
    const [squares, setSquares] = React.useState(Array(9).fill(null))

    function calculateNextValue(squares:any) {
        return squares.filter(Boolean).length % 2 === 0 ? crossPiece : circlePiece
      }
  
    const nextValue = calculateNextValue(squares)
    function selectSquare(square:any) {
      const squaresCopy = [...squares]
      squaresCopy[square] = nextValue
      setSquares(squaresCopy)
    }

    function renderSquare(i:any) {
      return (
        <button className='cell' onClick={() => {
          dispatch(isNext())
          return selectSquare(i)
        }}>
          {squares[i]}
        </button>
      )
    }

   useEffect(()=>{
    let myInterval = setInterval(() => {
            countDown > 0 && setCountDown(countDown - 1)
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };

    },[countDown]);

    return(
<div className='started-wrapper'>
    <p className='player-to-play'>{nextPlayer ? secondPlayer : firstPlayer}’s turn</p>
<div className='board-container'>
            <div className="vertical-border left"></div>
            <div className="horizontal-border top"></div>
            <div className="horizontal-border down"></div>
            <div className="vertical-border right"></div>
            {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
        {countDown > 0 ? <p className='remaining-time'>time left: {countDown}s</p> : <button onClick={() => dispatch(start())} className='start-button'>Restart</button>}
</div>
    )
}
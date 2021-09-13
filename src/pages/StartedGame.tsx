import React from "react";

// 0 | 1 | 2
// ---+---+---
//  3 | 4 | 5
// ---+---+---
//  6 | 7 | 8 

export default function StartedGame(){
    return(
<div className='started-wrapper'>
    <p className='player-to-play'>Johnny’s turn</p>
<div className='board-container'>
            <div className="vertical-border left"></div>
            <div data-cell-index="0" className="cell 0"></div>
            <div data-cell-index="1" className="cell 1"></div>
            <div data-cell-index="2" className="cell 2"></div>
            <div className="horizontal-border top"></div>
            <div data-cell-index="3" className="cell 3"></div>
            <div data-cell-index="4" className="cell 4"></div>
            <div data-cell-index="5" className="cell 5"></div>
            <div className="horizontal-border down"></div>
            <div data-cell-index="6" className="cell 6"></div>
            <div data-cell-index="7" className="cell 7"></div>
            <div data-cell-index="8" className="cell 8"></div>
            <div className="vertical-border right"></div>
        </div>
        <p className='remaining-time'>time left: 2s</p>
</div>
    )
}
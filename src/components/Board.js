import React from 'react';
import BoardTitle from './BoardTitle';
import "../sass/Board.scss"
import menu from "../assets/menu.png"
import Card from './Card';

const Board = ({datas}) => {
    return(
        <div className='board'>
            <div className='board__title'>
                <BoardTitle id={datas.id} btl={datas.title}/>
                <div className='menu'>
                  <img src={menu} alt="menu"  />
                </div>
            </div>
            <div>
                {datas.cards.map((card) => 
                    <Card key={card.id} item={card} id={datas.id} />
                )}
            </div>
            <button>add</button>
        </div>
    )
}

export default Board
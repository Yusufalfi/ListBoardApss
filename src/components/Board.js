import React from 'react';
import BoardTitle from './BoardTitle';
import "../sass/Board.scss"
import menu from "../assets/menu.png"
import Card from './Card';
import Button from './Button';

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
                {datas.cards.map((card, index) => 
                    <Card key={card.id}
                          item={card} 
                          id={datas.id}
                          indexs={index} />
                )}
                <Button/>
            </div>
           
        </div>
    )
}

export default Board
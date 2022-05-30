import React, { useState, useContext } from 'react';
import { DataContex } from '../context/store';
import "../sass/Card.scss"
import iconDel from "../assets/delete.png"

const Card = ({item, id, indexs}) => {
    const {cardDelete, cardEdit} = useContext(DataContex)
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(item.title)
    // fungsi tampil inpiut
    const isEdit = () => setEdit(true)
    // fungsi close input
    const closeInput = () => {
        cardEdit(id, item.id, indexs, text )
        setEdit(false)
    }
    // fungsi delete card 
    const deleteCard = () => {
        // console.log(id, item.id)
        cardDelete(id, item.id)
    }
    // handleChange input
    const handleChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div className='card-list'>
       { edit ? ( // jika true tampil form jika false tampil title
            <form onSubmit={closeInput}>
                <input 
                 autoFocus
                 type="text"
                 onBlur={closeInput}
                 value={text} 
                 onChange={handleChange}
                 />
            </form>

       ) : (
           <div className='card-list__text'>
               <p onClick={isEdit}>{item.title}</p>
               <img src={iconDel} alt='iconDel'onClick={deleteCard} />
           </div>
       )}
       
       
    </div>
  )
}

export default Card
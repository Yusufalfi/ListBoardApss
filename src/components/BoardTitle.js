import React, { useContext, useState } from 'react';
import { DataContex } from '../context/store';
import "../sass/BoardTitle.scss"

const BoardTitle = ({id,btl}) => {
    const {changeTitle} = useContext(DataContex)
    const [text, SetText] = useState(btl)
    const [open, SetOpen] = useState(false)

    // fungsi open input
    const openInput = () => {
        SetOpen(true)
    }
    // funsi close input
    const closeInput = () => {
        SetOpen(false)
        changeTitle(id, text)
    }

    // fungsi perubahan nilai input
    const handleChange = e => {
        SetText(e.target.value)
    }
    
    
    return(
        <div className='board-title'>
        {open ? ( //jika true tampil from jika false tampil h3
            <form onSubmit={closeInput}>
                <input
                    autoFocus
                    type="text"
                    value={text}
                    onBlur={closeInput}
                    onChange={handleChange} />
            </form>
        ) : (
            <h3 onClick={openInput}>{btl}</h3>
        )}
       
            
        </div>
    )
}

export default BoardTitle
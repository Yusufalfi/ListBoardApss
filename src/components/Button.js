import React, { useState } from 'react'
import "../sass/Button.scss"
import close from "../assets/close.png"
import Textarea from "react-textarea-autosize"

const Button = ({list}) => {
    // state tampil form 
    const [show, setShow] = useState(false);
    const openForm = () => setShow(true);
    const closeForm = () => setShow(false);
    // 
    const textsBtnForm = list ? "add list" : "add card" 
     // fungsi tampil form
     const showForm = () => {
         //dinamic placeholder
         const placeholder = list ? "enter list title" : "enter card title"

        return(
            <div className='form-box'>
                <Textarea 
                    autoFocus 
                    placeholder={placeholder} 
                    className='text-area'/>
                <button className='add'>
                    {textsBtnForm}
                </button>
                <button className='closes'>
                    <img src={close} onClick={closeForm} alt="close" />
                </button>
            </div>
        )
     }
    // fungsi tampil button
    const showBtn = () => {
        // klo list akan menampilkan text anotherList
        const textBtn = list ? "add another list" : "add new card"
        const opacityBtn = list ? 1 : 0.5
        const colorBtn = list ? "#eaeaea" : "inherit"
        const bgBtn = list ? "rgba(60,172,0.25)" : "inherit"
        return(
            <div onClick={openForm} className='btn' style={{
                opacity:opacityBtn,
                color:colorBtn,
                background: bgBtn 
            }}>
               + {textBtn}
            </div>
        )
    }
    // if true tampil showForm if false showBtn
  return show ? showForm() : showBtn()
}

export default Button
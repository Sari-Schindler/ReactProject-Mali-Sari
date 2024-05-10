import React, { useState } from 'react'
import style from '../Color/Color.module.css'

let colorsArr=['red','green','blue','black','pink','lightblue','yellow','greenyellow'];

const Color=(props)=>{

    const { setColor} = props;


  
    function changeColor()
    {
        return colorsArr.map(element =>
            <button key={element} className={style.colorButton} onClick={() =>changeColorState(element)}> {element} </button>
        );
    }
    function changeColorState(color){
       setColor(color);
    }


    return(
        <>
        <p className={style.changeColor}>Choose font color</p>
        <div className={style.colorDiv}>
          {changeColor()}  
        </div>
        </>
    )
}

export default Color;


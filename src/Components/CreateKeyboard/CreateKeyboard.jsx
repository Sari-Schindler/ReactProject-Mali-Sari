import React, { useState } from 'react'
import style from './CreateKeyboard.module.css'


let numbersArr=['1','2','3','4','5','6','7','8','9','0','/',"'",'.'];
let allKeyboard={

    hebrew:["ק","ר","א","ט","ו","ן","ם","פ",
    "ש","ד","ג","כ","ע","י","ח","ל","ך","ף"
    ,"ס","ב","ה","נ","מ","צ","ת","ץ",'*','@','!','%','english',"😀"],

    english:['q','e','w','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l',
    'z','x','c','v','b','n','m','@','!','%','עברית','UPPER-CASE',"😀"],
    
    upperCase:['Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L','!','%',
    'Z','X','C','V','B','N','M','עברית','lower-case',"😀"],

    emojies:["😃","😄","😁","😆","😅","😀","😂","🤣",
    "😭","😉","😗","😙","😚","😘","🥰","😍","🤩","🥳",
    "🫠","🙃","🙂","🥲","🥹","😊","☺️","😌","😏","😋",
    "😴","😪","🤤",'עברית','UPPER-CASE',"english"]

};


const CreateKeyboard = (props)=>
{
    const { letter, setLetter,allActivities,setAllActivities} = props;

    function changeLanguageMode(key){
    props.setLanguage(key);
   }
  
   function addLetter(key){
    const newKey = <span key={key} style={{color: props.color, fontSize: props.size}} >{key}</span>
    setLetter([...letter,newKey]);
    setAllActivities([...allActivities,letter]);
  }

   function showKeys(arr)
   {
       return arr.map(element =>
           <button key={element} className={style.buttons} onClick={() =>checkKey(element)}> {element} </button>
       );
   }
   
   function checkKey(key){
     switch (key){
        case "english":
            changeLanguageMode(key);
            break;
        case "עברית":
            changeLanguageMode("hebrew");
            break;
        case "😀":
          changeLanguageMode("emojies");
          break;
        case "UPPER-CASE":
            changeLanguageMode("upperCase");
            break;
        case "lower-case":
            changeLanguageMode("english");
            break;
        default:
            addLetter(key);
     }
    }



    return(
        <>
        <div className={style.allKeyboard}>
            <p className={style.numberArr}>{showKeys(numbersArr)}</p>
            <p className={style.lettersArr}>{showKeys(allKeyboard[props.language])}</p>
        </div>
        </>

        

    )
}

export default CreateKeyboard;
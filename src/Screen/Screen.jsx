import { useState } from 'react'
import '../app.css'
import CreateKeyboard from '../Components/CreateKeyboard/CreateKeyboard.jsx'
import SpecialKeys from '../Components/SpecialKeys/SpecialKeys.jsx'
import Color from '../Components/Color/Color.jsx'
import Size from '../Components/Size/Size.jsx'
import style from '../Screen/Screen.module.css'


function Screen(){
    const[language,setLanguage]=useState("english");
    const[letter,setLetter]=useState([]);
    const[color,setColor]=useState("red");
    const[size,setSize]=useState("30px");
    const[allActivities, setAllActivities]=useState([]);
  
    return (
        <>
        <div className={style.welcome}>Welcome to our typing website</div>
          <pre className={style.perStlye}>{letter}</pre>
          <div className={style.keyBoard}>
          <CreateKeyboard allActivities={allActivities} setAllActivities={setAllActivities} color={color} size={size} language={language} setLanguage={setLanguage} letter={letter} setLetter={setLetter}  />
          </div>
          <div>
          <SpecialKeys allActivities={allActivities} setAllActivities={setAllActivities} letter={letter} setLetter={setLetter} color={color} />
          </div>
          <div>
          <Color allActivities={allActivities} color={color} setColor={setColor} setLetter={setLetter} />
          </div>
          <Size allActivities={allActivities} size={size} setSize={setSize}/>
  
      </>
    )
}

export default Screen;
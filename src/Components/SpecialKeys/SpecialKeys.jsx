import React, { useState } from 'react'
import style from '../SpecialKeys/SpecialKeys.module.css'

let constKeys = ['back space', 'space', 'delete', 'enter', 'Ctrl+z', 'upper all', 'lower all'];


const SpecialKeys = (props) => {
    const { letter, setLetter,allActivities,setAllActivities} = props;

    function showConstKeys(arr) {
        return arr.map(element =>
            <button key={element} className={style.constKeys} onClick={() => checkConstKey(element)}> {element} </button>
        );

    }

    function upperOrLowerAll(upper_or_lower) {
        let updated_input = [];
        updated_input = letter.map(span => {
            let s = span.props.children;
            return <span style={span.props.style}>{upper_or_lower === "upper all" ? s.toUpperCase() : s.toLowerCase()}</span>;
        });
        return updated_input;
    }

    function checkConstKey(key) {
        switch (key) {
            case "back space":
                setLetter(letter.slice(0, -1));
                setAllActivities([...allActivities, letter]);
                break;
            case "space":
                const spaceKey = <span> </span>
                setLetter([...letter, spaceKey]);
                setAllActivities([...allActivities, letter]);
                break;
            case "delete":
                setLetter([]);
                setAllActivities([...allActivities, letter]);
                break;
            case "enter":
                const enterKey = <span>{'\n'}</span>
                setLetter([...letter, enterKey]);
                setAllActivities([...allActivities, letter]);
                break;
            case "upper all":
                let a = upperOrLowerAll("upper all");
                setLetter([...a]);
                setAllActivities([...allActivities, letter]);
                break;
            case "lower all":
                let b = upperOrLowerAll("lower all");
                setLetter([...b]);

                setAllActivities([...allActivities, letter]);
                break;
            case "Ctrl+z":
                if (allActivities.length != 0) {
                    setLetter(allActivities[(allActivities.length) - 1])
                    setAllActivities(allActivities.slice(0, -1))

                }
                break;



        }
    }

    return (
        <>
            <div className={style.constKeysArr}>
                {showConstKeys(constKeys)}
            </div>
        </>
    )
}
export default SpecialKeys;
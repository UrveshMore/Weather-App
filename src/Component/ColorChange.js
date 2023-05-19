import React, { useState } from 'react'

function ColorChange() {
    // const green = {
    //     color: 'green'
    // }
    // const red = {
    //     color: 'red'
    // }
    const [changeColor, setChangeColor] = useState('red')
    const changeColors = () => {
        setChangeColor(changeColor === 'red' ? 'blue' : 'red')
    }
    return (
        <div>
            <button onClick={changeColors}>Change Color</button>
            <h1 style={{ color: changeColor }}>My Name is urvesh</h1>
        </div>
    )
}

export default ColorChange
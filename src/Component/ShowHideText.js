import React, { useState } from 'react'

function ShowHideText() {
    const [showText, setShowText] = useState(true);
    const handelShow = () => {
        setShowText(!showText)
    }
    return (
        <div>
            {showText && <div>MY Name Is Urvesh</div>}
            <button onClick={handelShow}>Show/Hide</button>
        </div>
    )
}

export default ShowHideText
import React, { useState } from 'react';

export default function Output(props){
    const [css, setcss] = useState("{\n}");

    return <div className="output">
        <p>{css}</p>
    </div>

}
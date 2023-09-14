import React, { useState } from 'react';
import ColorSwitch from './ColorSwitch';
import TextSwitch from './TextSwitch';

export default function Canvas(){
    const [bgcolor, setbgColor] = useState();
    const [text, setText] = useState("Sample Button");

    return <div className="canvas">
        <button className="previewbtn" style={{backgroundColor:bgcolor}}>{text}</button>
        <TextSwitch label="Button Text" onTextChange={(txt)=>{setText(txt)}}></TextSwitch>
        <ColorSwitch label="Background Color" onColorChange={(clr)=>{setbgColor(clr)}}></ColorSwitch>
    </div>
}

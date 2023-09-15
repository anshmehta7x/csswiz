import React, { useState } from 'react';
import ColorSwitch from './switches/ColorSwitch';
import TextSwitch from './switches/TextSwitch';
import Section from './Section';
import SliderSwitch from './switches/SliderSwitch';

export default function Canvas(props){
    
    const update = props.update;
    
    // State variables
    //need to put default values in useState()
    const [bgcolor, setbgColor] = useState();
    const [text, setText] = useState("Sample Button");
    const [bordercolor, setbordercolor] = useState();
    const [bordersize, setbordersize] = useState();
    const [borderradius, setborderradius] = useState();
    const [textcolor, settextcolor] = useState();
    const [fontsize, setfontsize] = useState();

    return <div className="canvas">
        <button className="previewbtn" style={{
            color:textcolor,
            backgroundColor:bgcolor,
            borderColor:bordercolor,
            fontSize:fontsize,
            borderWidth:bordersize,
            borderRadius:borderradius
            }}>
            {text}
        </button>

        <Section title="Text"></Section>
        <TextSwitch label="Button Text" onTextChange={(txt)=>{setText(txt)}}></TextSwitch>
        <ColorSwitch label="Text Color" onColorChange={(clr)=>{settextcolor(clr)}}></ColorSwitch>
        <SliderSwitch label="Font Size" onSliderChange={(size)=>{setfontsize(size)}} min={8} max={100}>px</SliderSwitch>

        <Section title="Border"></Section>
        <ColorSwitch label="Border Color" onColorChange={(clr)=>{setbordercolor(clr)}}></ColorSwitch>
        <SliderSwitch label="Border Size" onSliderChange={(size)=>{setbordersize(size)}} min={0} max={20}>px</SliderSwitch>
        <SliderSwitch label="Border Radius" onSliderChange={(size)=>{setborderradius(size)}} min={0} max={50}>%</SliderSwitch>

        <Section title="Body"></Section>
        <ColorSwitch label="Background Color" onColorChange={(clr)=>{setbgColor(clr)}}></ColorSwitch>
    </div>
}

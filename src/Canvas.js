import React, { useState, useEffect } from 'react';
import ColorSwitch from './switches/ColorSwitch';
import TextSwitch from './switches/TextSwitch';
import Section from './Section';
import SliderSwitch from './switches/SliderSwitch';

export default function Canvas(props){
    
    // State variables
    //need to put default values in useState()
    const [bgcolor, setbgColor] = useState('#007bff'); // Default background color: Blue
    const [text, setText] = useState('Sample Button');
    const [bordercolor, setbordercolor] = useState('#007bff'); // Default border color: Blue
    const [bordersize, setbordersize] = useState('2px'); // Default border size: 2 pixels
    const [borderradius, setborderradius] = useState('4px'); // Default border radius: 4 pixels
    const [textcolor, settextcolor] = useState('#ffffff'); // Default text color: White
    const [fontsize, setfontsize] = useState('16px'); // Default font size: 16 pixels
    const [buttonid,setbuttonid] = useState('myButton');

    // Update the CSS Output
    const updateCSS = () => {
        let css = [];
        css.push("background-color: " + bgcolor + ";");
        css.push("border-color: " + bordercolor + ";");
        css.push("border-width: " + bordersize + ";");
        css.push("border-radius: " + borderradius + ";");
        css.push("color: " + textcolor + ";");
        css.push("font-size: " + fontsize + ";");
        props.onChange(1,css);
    }

    const updateHTML = () => {
        let html = [];
        html.push(text);
        html.push(buttonid);
        props.onChange(0,html)
        
    }

    //effect to display the css of the default values of the css variables
    useEffect(()=>{
        updateCSS();
        updateHTML();
    },[]);


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
        <TextSwitch label="Button Text" onTextChange={(txt)=>{setText(txt);updateCSS();updateHTML()}}></TextSwitch>
        <ColorSwitch label="Text Color" onColorChange={(clr)=>{settextcolor(clr);updateCSS();updateHTML()}}></ColorSwitch>
        <SliderSwitch label="Font Size" onSliderChange={(size)=>{setfontsize(size);updateCSS();updateHTML()}} min={8} max={100}>px</SliderSwitch>

        <Section title="Border"></Section>
        <ColorSwitch label="Border Color" onColorChange={(clr)=>{setbordercolor(clr);updateCSS();updateHTML()}}></ColorSwitch>
        <SliderSwitch label="Border Size" onSliderChange={(size)=>{setbordersize(size);updateCSS();updateHTML()}} min={0} max={20}>px</SliderSwitch>
        <SliderSwitch label="Border Radius" onSliderChange={(size)=>{setborderradius(size);updateCSS();updateHTML()}} min={0} max={50}>%</SliderSwitch>

        <Section title="Body"></Section>
        <ColorSwitch label="Background Color" onColorChange={(clr)=>{setbgColor(clr);updateCSS();updateHTML()}}></ColorSwitch>

        <Section title="Attributes"></Section>
        <TextSwitch label="Button ID" onTextChange={(txt)=>{setbuttonid(txt);updateCSS();updateHTML()}}></TextSwitch>
    </div>
}

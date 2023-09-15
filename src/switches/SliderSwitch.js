export default function SliderSwitch(props){
    const handleChange = (event) =>{
        props.onSliderChange(parseInt(event.target.value))
    }

    return <div className="sliderSwitch" style={{display:"flex"}}>
        <h2>{props.label}</h2>
        <input type="range" min={props.min} max={props.max} onChange={handleChange}></input>
    </div>
}
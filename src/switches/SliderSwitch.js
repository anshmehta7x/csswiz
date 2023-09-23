export default function SliderSwitch(props){
    const handleChange = (event) =>{
        props.onSliderChange(parseInt(event.target.value))
    }

    return <div className="sliderSwitch" style={{display:"flex"}}>
        <label for={props.label}>{props.label}</label>
        <input id={props.label} type="range" defaultValue={props.min} min={props.min} max={props.max} onChange={handleChange}></input>
    </div>
}
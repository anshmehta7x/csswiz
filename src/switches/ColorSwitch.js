export default function ColorSwitch({label, onColorChange}){
    

    const handleChange = (event) =>{
        onColorChange(event.target.value)
    }

    return <div className="colorSwitch" style={{display:"flex"}}>
        <label for={label}>{label}</label>
        <input id={label} type="color" onChange={handleChange}></input>
    </div>
}

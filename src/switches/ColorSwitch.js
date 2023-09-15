export default function ColorSwitch({label, onColorChange}){
    

    const handleChange = (event) =>{
        onColorChange(event.target.value)
    }

    return <div className="colorSwitch" style={{display:"flex"}}>
        <h2>{label}</h2>
        <input type="color" onChange={handleChange}></input>
    </div>
}
